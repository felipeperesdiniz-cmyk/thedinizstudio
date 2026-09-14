#!/usr/bin/env python3
"""Capture section screenshots of the client sites.

These sites reveal content on scroll, so a plain `--screenshot` returns
blank frames. This drives a headless Chrome over the DevTools Protocol
and sends real wheel events, which is the only thing smooth-scroll
libraries actually respond to.

Pure stdlib: a ~70-line WebSocket client rather than a puppeteer install.

    python3 capture.py
"""
import base64
import json
import os
import socket
import struct
import subprocess
import time
import urllib.request

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9222
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")
W, H = 1440, 900

# site -> [(slug, css selector to stop at, or None for the top of the page)]
SHOTS = [
    ("rafa", "https://www.byrafadiniz.com/", [
        ("1", None), ("2", "#films"), ("3", "#work"), ("4", "#about")]),
    ("mari", "https://bordadoscomamorbymari.com/", [
        ("1", None), ("2", "#mariana"), ("3", "#processo"), ("4", "#arquivo")]),
    ("renata", "https://renataestrellapatisserie.com/", [
        ("1", None), ("2", "#criacoes"), ("3", "#sobreDriver"), ("4", 4400)]),
]


# ── minimal websocket client ────────────────────────────────────────
class WS:
    def __init__(self, url):
        _, rest = url.split("://", 1)
        hostport, path = rest.split("/", 1)
        host, port = hostport.split(":")
        self.sock = socket.create_connection((host, int(port)))
        self.sock.settimeout(45)
        key = base64.b64encode(os.urandom(16)).decode()
        self.sock.sendall((
            f"GET /{path} HTTP/1.1\r\nHost: {hostport}\r\n"
            "Upgrade: websocket\r\nConnection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n"
        ).encode())
        buf = b""
        while b"\r\n\r\n" not in buf:
            buf += self.sock.recv(4096)
        self.buf = buf.split(b"\r\n\r\n", 1)[1]

    def send(self, obj):
        data = json.dumps(obj).encode()
        head = bytearray([0x81])
        n = len(data)
        if n < 126:
            head.append(0x80 | n)
        elif n < 1 << 16:
            head.append(0x80 | 126); head += struct.pack(">H", n)
        else:
            head.append(0x80 | 127); head += struct.pack(">Q", n)
        mask = os.urandom(4)
        head += mask
        self.sock.sendall(bytes(head) + bytes(b ^ mask[i % 4] for i, b in enumerate(data)))

    def _read(self, n):
        while len(self.buf) < n:
            chunk = self.sock.recv(65536)
            if not chunk:
                raise IOError("socket closed")
            self.buf += chunk
        out, self.buf = self.buf[:n], self.buf[n:]
        return out

    def recv(self):
        while True:
            b0, b1 = self._read(2)
            ln = b1 & 0x7F
            if ln == 126:
                ln = struct.unpack(">H", self._read(2))[0]
            elif ln == 127:
                ln = struct.unpack(">Q", self._read(8))[0]
            payload = self._read(ln)
            if b0 & 0x0F == 1:                       # text frame
                return json.loads(payload)


class Tab:
    def __init__(self, ws):
        self.ws, self.i = ws, 0

    def call(self, method, **params):
        self.i += 1
        self.ws.send({"id": self.i, "method": method, "params": params})
        while True:
            msg = self.ws.recv()
            if msg.get("id") == self.i:
                if "error" in msg:
                    raise RuntimeError(f"{method}: {msg['error']}")
                return msg.get("result", {})

    def js(self, expr, await_promise=False):
        r = self.call("Runtime.evaluate", expression=expr, returnByValue=True,
                      awaitPromise=await_promise)
        return r.get("result", {}).get("value")

    def wheel(self, dy):
        # fire-and-forget: waiting for the ack deadlocks whenever the
        # renderer is busy decoding a screenful of images
        self.i += 1
        self.ws.send({"id": self.i, "method": "Input.dispatchMouseEvent",
                      "params": {"type": "mouseWheel", "x": W // 2, "y": H // 2,
                                 "deltaX": 0, "deltaY": dy, "pointerType": "mouse"}})


def scroll_to(tab, target):
    """Wheel down until we reach target, letting smooth-scroll catch up."""
    for _ in range(220):
        y = tab.js("window.scrollY") or 0
        gap = target - y
        if abs(gap) <= 12:
            break
        # step proportional to what's left, so we close in instead of
        # blowing past the target (wheeling only goes one way per burst)
        step = max(40, min(320, int(abs(gap) / 3)))
        n = 6 if abs(gap) > 1600 else 1
        for _ in range(n):
            tab.wheel(step if gap > 0 else -step)
            time.sleep(0.02)
        time.sleep(0.1)
    time.sleep(2.5)          # let reveals finish and video paint


def main():
    os.makedirs(OUT, exist_ok=True)
    proc = subprocess.Popen(
        [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
         "--force-device-scale-factor=2", f"--window-size={W},{H}",
         f"--remote-debugging-port={PORT}", "--no-first-run",
         "--user-data-dir=/tmp/diniz-capture"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    # /json/new needs a PUT on current Chrome, so just take the page
    # target the browser already opened.
    ws_url = None
    for _ in range(60):
        try:
            with urllib.request.urlopen(
                    f"http://127.0.0.1:{PORT}/json/list", timeout=2) as r:
                for t in json.load(r):
                    if t.get("type") == "page" and t.get("webSocketDebuggerUrl"):
                        ws_url = t["webSocketDebuggerUrl"]
                        break
            if ws_url:
                break
        except Exception:
            pass
        time.sleep(0.5)
    if not ws_url:
        proc.terminate()
        raise SystemExit("could not reach Chrome DevTools")

    def connect():
        t = Tab(WS(ws_url))
        t.call("Page.enable")
        t.call("Runtime.enable")
        return t

    tab = connect()

    try:
        for slug, url, shots in SHOTS:
            for name, sel in shots:
              out_path = os.path.join(OUT, f"shot_{slug}_{name}.png")
              if os.path.exists(out_path) and os.path.getsize(out_path) > 120_000:
                  print(f"skip {slug}_{name} (already captured)")
                  continue
              try:
                tab.call("Page.navigate", url=url)
                for _ in range(80):
                    if tab.js("document.readyState") == "complete":
                        break
                    time.sleep(0.25)
                time.sleep(3.0)                       # fonts, video, hero anim

                if isinstance(sel, int):
                    scroll_to(tab, sel)
                elif sel:
                    # document-absolute, not offsetTop: these sites nest
                    # sections inside positioned/pinned wrappers
                    top = tab.js(
                        "(function(e){return e?Math.round("
                        "e.getBoundingClientRect().top+window.scrollY):0})"
                        f"(document.querySelector('{sel}'))")
                    if top:
                        scroll_to(tab, top + 260)

                png = tab.call("Page.captureScreenshot", format="png",
                               captureBeyondViewport=False)["data"]
                with open(out_path, "wb") as f:
                    f.write(base64.b64decode(png))
                print(f"{os.path.basename(out_path)}  {os.path.getsize(out_path)//1024}K")
              except Exception as e:
                # a stalled renderer shouldn't cost us the whole run
                print(f"!! {slug}_{name}: {type(e).__name__} — reconnecting")
                try:
                    tab = connect()
                except Exception:
                    print("   reconnect failed, stopping")
                    return
    finally:
        proc.terminate()


if __name__ == "__main__":
    main()
