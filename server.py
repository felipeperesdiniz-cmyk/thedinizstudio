"""Static dev server for the Diniz Studio site.

    python3 server.py   ->  http://localhost:5173

No-cache headers so an edit shows up on reload instead of being served
from the browser's memory cache.
"""
import functools
import http.server
import os
import socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 5173
os.chdir(ROOT)


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


class Threaded(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    handler = functools.partial(Handler, directory=ROOT)
    with Threaded(("127.0.0.1", PORT), handler) as srv:
        print(f"serving {ROOT} on http://localhost:{PORT}")
        srv.serve_forever()
