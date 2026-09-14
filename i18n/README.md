# The trilingual build

The site ships in English, Portuguese and Spanish. All 24 pages are
generated from 8 templates and 8 JSON files, so the markup exists once
and the three languages cannot drift apart.

```bash
python3 i18n/build.py     # write the 24 pages + sitemap.xml
python3 i18n/check.py     # verify links, hreflang, canonicals, sitemap
```

**Edit the templates and the JSON, never the generated HTML.** Anything
you change in `index.html`, `work/…` or `services/…` directly is
overwritten on the next build.

## Layout

```
i18n/
  routes.py     languages, URL slugs, hreflang codes, lastmod dates
  build.py      the renderer
  check.py      the post-build checks
  templates/    one per page, plus _partials shared by all of them
  content/      one JSON per page, plus chrome.json for header/footer
```

## URLs

English stays at the root, so every URL Google has already indexed is
untouched. The other two sit under a language prefix, with the path
itself translated — a Spanish search for "diseño web Miami" should land
on a URL that says `diseno-web`, because the path is one of the few
things a crawler reads as language evidence before it reads a word of
the copy.

| Page | English | Portuguese | Spanish |
|---|---|---|---|
| Home | `/` | `/pt/` | `/es/` |
| Web design | `/services/web-design/` | `/pt/servicos/criacao-de-sites/` | `/es/servicios/diseno-web/` |
| Brand identity | `/services/brand-identity/` | `/pt/servicos/identidade-visual/` | `/es/servicios/identidad-de-marca/` |
| Local SEO | `/services/local-seo/` | `/pt/servicos/seo-local/` | `/es/servicios/seo-local/` |
| Case studies | `/work/<slug>/` | `/pt/projetos/<slug>/` | `/es/proyectos/<slug>/` |

To rename a path, change it in `routes.py` and rebuild; every link,
canonical, hreflang tag and sitemap entry follows automatically.

## Template syntax

| Token | Does |
|---|---|
| `{{>name}}` | include `templates/_name.html` |
| `{{key}}` | string from the page's JSON, falling back to `chrome.json` |
| `{{key\|json}}` | the same, unescaped from HTML and quoted for JSON-LD |
| `{{key\|array}}` | a JSON array, for `serviceType` and friends |
| `{{@page}}` | root-relative path of `page` **in the current language** |
| `{{@page#work}}` | the same with a fragment |
| `{{=page}}` | absolute URL, for JSON-LD and Open Graph |
| `{{$lang}}` `{{$canonical}}` `{{$hreflang}}` `{{$switcher}}` … | computed |

A missing key fails the build rather than rendering an empty string, so
an untranslated string cannot reach a page quietly.

In `content/*.json` a value is either `{"en":…, "pt":…, "es":…}` or a
plain string when it is genuinely the same in all three — an image path,
a hex code, a brand name.

## What makes the three languages findable

- **hreflang.** Every page lists all three plus `x-default`, in the head
  *and* in the sitemap. The set is reciprocal: if one page in the cluster
  fails to point back, Google discards the whole cluster, not just the
  broken edge, which is what `check.py` verifies.
- **Regional tags.** `pt` and `pt-BR` both point at the Portuguese page,
  so it answers searches from Brazil and Portugal; `es`, `es-US` and
  `es-419` do the same for Spain, US Hispanic and Latin American search.
- **Localised slugs**, as above.
- **Localised structured data.** `Service` names, descriptions, keywords
  and `inLanguage` are translated, and the studio declares
  `availableLanguage` in all three.
- **A crawlable switcher.** Three plain links on every page, in the
  header and the footer, so the other two languages are reachable from
  anywhere without JavaScript.
- **No auto-redirect.** Google asks you not to bounce a visitor by IP or
  `Accept-Language`, because Googlebot crawls from the US and would only
  ever see one language. The switcher is the mechanism instead.

## The one string table outside this directory

`assets/site.js` holds the brief's validation messages in its own `T`
table, keyed off `<html lang>`. They live there rather than here because
the script is cached separately from the pages; keeping them in both
places would be two sources of truth for the same six sentences.
