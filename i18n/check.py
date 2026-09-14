#!/usr/bin/env python3
"""Check the built site.

Run after i18n/build.py. Verifies the things a trilingual site gets
wrong silently: a link that only exists in one language, an hreflang
cluster that is not reciprocal (Google drops the whole cluster, not
just the broken edge), a canonical pointing at the wrong language, a
sitemap that has drifted from the tree, or a translation that was
never filled in.

    python3 i18n/check.py
"""

import json
import os
import re
import sys
import xml.dom.minidom

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from routes import (  # noqa: E402
    HREFLANG, LANGS, ORDER, PAGES, XDEFAULT, path_for, url_for,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# English words that must never survive into a translated page. Short
# and specific on purpose: these are the ones that leaked during the
# build and would leak again if a template grew a hard-coded string.
LEAKS = [
    "Skip to content", "Start a project", "Read the case study",
    "Next case study", "Send the brief", "Choose one",
]


def strip_query(u):
    return u.split("?")[0].split("#")[0]


def main():
    os.chdir(ROOT)
    prob = []
    pages = {}

    for p in PAGES:
        for lang in ORDER:
            rel = path_for(p, lang).lstrip("/") + "index.html"
            if not os.path.exists(rel):
                prob.append("missing file: " + rel)
                continue
            with open(rel, encoding="utf-8") as fh:
                pages[(p, lang)] = fh.read()

    if prob:
        print("\n".join(prob))
        return 1

    for (p, lang), s in pages.items():
        tag = "%s/%s" % (p, lang)

        # links and assets resolve on disk
        for href in set(re.findall(r'(?:href|src)="(/[^"]*)"', s)):
            href = strip_query(href)
            if not href or href == "/":
                continue
            target = href.lstrip("/")
            if not (os.path.exists(target)
                    or os.path.exists(os.path.join(target, "index.html"))):
                prob.append("%s: dead link %s" % (tag, href))

        # canonical, lang, og:locale
        can = re.search(r'<link rel="canonical" href="([^"]+)"', s).group(1)
        if can != url_for(p, lang):
            prob.append("%s: canonical is %s" % (tag, can))

        got = re.search(r'<html lang="([^"]+)"', s).group(1)
        if got != LANGS[lang]["html"]:
            prob.append("%s: html lang is %s" % (tag, got))

        og = re.search(r'og:locale" content="([^"]+)"', s).group(1)
        if og != LANGS[lang]["og"]:
            prob.append("%s: og:locale is %s" % (tag, og))

        # hreflang: the exact expected set, and reciprocal
        alts = dict(re.findall(
            r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', s))
        expect = {}
        for other in ORDER:
            for code in HREFLANG[other]:
                expect[code] = url_for(p, other)
        expect["x-default"] = url_for(p, XDEFAULT)
        if alts != expect:
            prob.append("%s: hreflang set does not match the route table" % tag)
        for other in ORDER:
            if url_for(p, lang) not in pages[(p, other)]:
                prob.append("%s: %s does not point back at it" % (tag, other))

        # JSON-LD parses, and carries no HTML entities
        for block in re.findall(
                r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
            try:
                json.loads(block)
            except ValueError as e:
                prob.append("%s: JSON-LD does not parse: %s" % (tag, e))
            if "&amp;" in block or "&rsquo;" in block:
                prob.append("%s: HTML entity left in JSON-LD" % tag)

        # nothing untranslated, and no unresolved template token
        if "{{" in s:
            prob.append("%s: unresolved token %s"
                        % (tag, re.findall(r"\{\{[^}]*\}\}", s)[:3]))
        if lang != "en":
            body = s.split("<body>", 1)[-1]
            for word in LEAKS:
                if word in body:
                    prob.append("%s: untranslated English: %r" % (tag, word))

    # sitemap agrees with the route table and is well-formed XML
    with open("sitemap.xml", encoding="utf-8") as fh:
        sm = fh.read()
    xml.dom.minidom.parseString(sm)
    locs = sorted(re.findall(r"<loc>([^<]+)</loc>", sm))
    want = sorted(url_for(p, l) for p in PAGES for l in ORDER)
    if locs != want:
        prob.append("sitemap: %d URLs, expected %d" % (len(locs), len(want)))

    if prob:
        print("\n".join(prob))
        print("\n%d problems" % len(prob))
        return 1
    print("%d pages, %d sitemap URLs, all checks pass"
          % (len(pages), len(locs)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
