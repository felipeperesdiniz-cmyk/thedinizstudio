#!/usr/bin/env python3
"""Render the trilingual site.

Every page on dinizstudio.com is generated from one template plus one
JSON file of strings carrying all three languages. The markup lives in
exactly one place, so a layout fix lands in English, Portuguese and
Spanish at once and the three can never drift.

    python3 i18n/build.py          # write the site
    python3 i18n/build.py --check  # fail if the tree is out of date

Template syntax
    {{>name}}        include i18n/templates/_name.html
    {{key}}          string from the page's JSON, falling back to chrome.json
    {{key|json}}     the same, escaped for use inside a JSON-LD string
    {{@page}}        root-relative path of `page` in the current language
    {{@page#frag}}   the same with a fragment appended
    {{=page}}        absolute URL of `page` in the current language
    {{$token}}       a computed value: lang, oglocale, canonical, hreflang,
                     switcher, dir, jsonld_lang
"""

import html
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from routes import (  # noqa: E402
    CASE_ORDER, HREFLANG, LANGS, ORDER, PAGES, SITE, XDEFAULT,
    path_for, url_for,
)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
TPL = os.path.join(HERE, "templates")
CONTENT = os.path.join(HERE, "content")

TOKEN = re.compile(r"\{\{([^}]+)\}\}")
PARTIAL = re.compile(r"\{\{>([a-z0-9_-]+)\}\}")


def load(name):
    with open(os.path.join(CONTENT, name), encoding="utf-8") as fh:
        return json.load(fh)


CHROME = load("chrome.json")


def read_tpl(name):
    with open(os.path.join(TPL, name), encoding="utf-8") as fh:
        return fh.read()


def hreflang_block(page):
    """<link rel="alternate"> for every language of this page.

    Each page lists the whole set including itself, which is what
    Google requires for the cluster to be treated as reciprocal.
    """
    out = []
    for lang in ORDER:
        href = url_for(page, lang)
        for tag in HREFLANG[lang]:
            out.append('<link rel="alternate" hreflang="%s" href="%s">' % (tag, href))
    out.append('<link rel="alternate" hreflang="x-default" href="%s">'
               % url_for(page, XDEFAULT))
    return "\n".join(out)


SHORT = {"en": "EN", "pt": "PT", "es": "ES"}


def switcher(page, lang):
    """The language switcher.

    The page you are on is still a link, pointing at itself and marked
    aria-current, so the control reads the same to a screen reader as
    it looks: three choices, one of them taken.
    """
    rows = []
    for other in ORDER:
        href = path_for(page, other)
        label = CHROME["lang.switch." + other][lang]
        if other == lang:
            rows.append(
                '<li><a href="%s" hreflang="%s" lang="%s" aria-current="page">%s</a></li>'
                % (href, LANGS[other]["html"], LANGS[other]["html"], SHORT[other])
            )
        else:
            rows.append(
                '<li><a href="%s" hreflang="%s" lang="%s" aria-label="%s" title="%s">%s</a></li>'
                % (href, LANGS[other]["html"], LANGS[other]["html"],
                   label, label, SHORT[other])
            )
    return ('<nav class="lang lbl" aria-label="%s">\n      <ul>%s</ul>\n    </nav>'
            % (CHROME["lang.aria"][lang], "".join(rows)))


LANGNAME = {"en": "English", "pt": "Português", "es": "Español"}


def greetings(lang, strings):
    """The welcome line, once per language.

    The gate asks a question the reader has not answered yet, so all
    three greetings ship on every page and the pointer decides which
    one is showing. The page's own language is the one marked `on`,
    which is also the state the gate rests in with no script.
    """
    return "".join(
        '<span data-g="%s"%s>%s</span>'
        % (other, ' class="on"' if other == lang else "",
           strings["gate.hi." + other])
        for other in ORDER
    )


def gate_picker(page, lang, strings):
    """The three choices on the welcome.

    Each is a plain link to that language's home page, labelled in the
    language it leads to: before a reader has chosen, the name of their
    own language is the only string on the screen they are certain to
    read. Ordinary links, so the gate is a language switcher even with
    the script gone and a crawler sees three hrefs rather than a wall.
    """
    rows = []
    for i, other in enumerate(ORDER):
        rows.append(
            '<li style="--i:%d"><a class="gate-pill" href="%s" data-lang="%s"'
            ' hreflang="%s" lang="%s" aria-label="%s"%s>%s</a></li>'
            % (i, path_for(page, other), other,
               LANGS[other]["html"], LANGS[other]["html"],
               strings["gate.enter." + other],
               ' aria-current="page"' if other == lang else "",
               LANGNAME[other])
        )
    return ('<nav class="gate-pick" aria-label="%s">\n        <ul>%s</ul>\n      </nav>'
            % (CHROME["lang.aria"][lang], "".join(rows)))


def json_escape(s):
    # Strings are authored for HTML, so they carry entities (&amp;, &rsquo;).
    # JSON-LD is not HTML: a crawler reading "Web Design &amp; Development"
    # as a name gets the ampersand wrong. Unescape first, then let
    # json.dumps do the quoting (its quotes are stripped back off here).
    return json.dumps(html.unescape(s), ensure_ascii=False)[1:-1]


def next_case(page):
    i = CASE_ORDER.index(page)
    return CASE_ORDER[(i + 1) % len(CASE_ORDER)]


def render(page, lang, strings, seen=None):
    """Expand one template into finished HTML."""
    text = read_tpl(PAGES[page]["tpl"])

    # partials first, and repeatedly, so a partial may include another
    for _ in range(6):
        new = PARTIAL.sub(lambda m: read_tpl("_%s.html" % m.group(1)), text)
        if new == text:
            break
        text = new

    computed = {
        "lang": LANGS[lang]["html"],
        "langcode": lang,
        "oglocale": LANGS[lang]["og"],
        "canonical": url_for(page, lang),
        "path": path_for(page, lang),
        "hreflang": hreflang_block(page),
        "switcher": switcher(page, lang),
        "site": SITE,
        "jsonld_lang": LANGS[lang]["html"],
        "prefix": "/" + LANGS[lang]["prefix"],
    }
    # The welcome only exists on the home page, so its two computed
    # blocks are built only where its strings are.
    if "gate.hi.en" in strings:
        computed["greetings"] = greetings(lang, strings)
        computed["gate"] = gate_picker(page, lang, strings)

    # The offer catalogue is the service list again, one Offer per name,
    # so the two can never disagree: derive it rather than retype it.
    if "ld.services" in strings:
        computed["offers"] = json.dumps(
            [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name,
                        "provider": {"@id": "https://dinizstudio.com/#studio"},
                        "areaServed": {"@type": "Place", "name": "Miami, Florida"},
                        "availableLanguage": ["en", "pt", "es"],
                    },
                }
                for name in strings["ld.services"][lang]
            ],
            ensure_ascii=False,
        )

    if page in CASE_ORDER:
        nxt = next_case(page)
        computed["nextcase"] = path_for(nxt, lang)
        name = load(PAGES[nxt]["content"])["case.name"]
        computed["nextcase_name"] = name if isinstance(name, str) else name[lang]

    missing = []

    def one(m):
        raw = m.group(1).strip()

        if raw.startswith("$"):
            key = raw[1:]
            if key not in computed:
                missing.append(raw)
                return ""
            return computed[key]

        if raw.startswith("@") or raw.startswith("="):
            body = raw[1:]
            frag = ""
            if "#" in body:
                body, frag = body.split("#", 1)
                frag = "#" + frag
            if body not in PAGES:
                missing.append(raw)
                return ""
            base = path_for(body, lang) if raw[0] == "@" else url_for(body, lang)
            return base + frag

        key, _, filt = raw.partition("|")
        key = key.strip()
        table = strings if key in strings else CHROME
        if key not in table:
            missing.append(key)
            return ""
        entry = table[key]
        # A plain string means the value is identical in all three
        # languages: an image path, a colour name, a brand name.
        if isinstance(entry, str):
            value = entry
        elif lang in entry:
            value = entry[lang]
        else:
            missing.append(key)
            return ""
        filt = filt.strip()
        if filt == "json":
            return json_escape(value)
        if filt == "array":
            # a list of strings straight into JSON-LD
            return json.dumps([html.unescape(v) for v in value], ensure_ascii=False)
        return value

    out = TOKEN.sub(one, text)
    if missing:
        raise SystemExit(
            "%s/%s: unresolved %s" % (lang, page, sorted(set(missing)))
        )
    return out


def sitemap():
    """One <url> per language, each declaring every alternate.

    Listing the alternates inside the sitemap as well as in the head is
    belt and braces: it is the form Google reads fastest for a new
    cluster, and it does not depend on the page being crawled first.
    """
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ]
    for page, meta in PAGES.items():
        for lang in ORDER:
            lines.append("  <url>")
            lines.append("    <loc>%s</loc>" % url_for(page, lang))
            for other in ORDER:
                for tag in HREFLANG[other]:
                    lines.append(
                        '    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>'
                        % (tag, url_for(page, other))
                    )
            lines.append(
                '    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>'
                % url_for(page, XDEFAULT)
            )
            lines.append("    <lastmod>%s</lastmod>" % meta["lastmod"])
            lines.append("    <changefreq>%s</changefreq>" % meta["changefreq"])
            lines.append("    <priority>%s</priority>" % meta["priority"])
            lines.append("  </url>")
    lines.append("</urlset>")
    return "\n".join(lines) + "\n"


def outputs():
    """Every file this build owns, as path -> contents."""
    files = {}
    for page, meta in PAGES.items():
        strings = load(meta["content"])
        for lang in ORDER:
            rel = path_for(page, lang).lstrip("/") + "index.html"
            files[rel] = render(page, lang, strings)
    files["sitemap.xml"] = sitemap()
    return files


def main():
    check = "--check" in sys.argv
    files = outputs()
    stale = []
    for rel, body in sorted(files.items()):
        dest = os.path.join(ROOT, rel)
        old = None
        if os.path.exists(dest):
            with open(dest, encoding="utf-8") as fh:
                old = fh.read()
        if old == body:
            continue
        stale.append(rel)
        if check:
            continue
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "w", encoding="utf-8") as fh:
            fh.write(body)

    if check:
        if stale:
            print("out of date:\n  " + "\n  ".join(stale))
            return 1
        print("%d files up to date" % len(files))
        return 0

    print("wrote %d of %d files" % (len(stale), len(files)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
