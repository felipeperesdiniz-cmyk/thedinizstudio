# Route table for the trilingual site.
#
# One entry per page. `tpl` is the template under i18n/templates/,
# `slug` is the path below the language prefix in each language, and
# `content` names the JSON file under i18n/content/ holding its strings.
#
# Slugs are localised on purpose. A Spanish search for "diseño web
# Miami" should land on a URL that says diseno-web, not web-design:
# the path is one of the few parts of a page Google reads as language
# evidence before it reads a word of the copy.

SITE = "https://dinizstudio.com"

# Language prefix below the origin. English is the root, which keeps
# every existing link and every indexed URL exactly where it was.
LANGS = {
    "en": {"prefix": "",     "html": "en",    "og": "en_US", "name": "English"},
    "pt": {"prefix": "pt/",  "html": "pt-BR", "og": "pt_BR", "name": "Português"},
    "es": {"prefix": "es/",  "html": "es",    "og": "es_ES", "name": "Español"},
}

ORDER = ["en", "pt", "es"]

# hreflang codes emitted for each language. Listing the generic tag
# alongside the regional ones is valid and deliberate: `pt` catches
# Portugal, `pt-BR` tells Google this copy is written for Brazil, and
# `es-US` claims the Spanish-speaking half of South Florida, which is
# the market the studio actually sells into.
HREFLANG = {
    "en": ["en", "en-US"],
    "pt": ["pt", "pt-BR", "pt-PT"],
    "es": ["es", "es-US", "es-419"],
}

XDEFAULT = "en"

PAGES = {
    "home": {
        "tpl": "home.html",
        "content": "home.json",
        "slug": {"en": "", "pt": "", "es": ""},
        "changefreq": "monthly",
        "priority": "1.0",
        "lastmod": "2026-09-14",
    },
    "svc-web": {
        "tpl": "svc-web-design.html",
        "content": "svc-web-design.json",
        "slug": {
            "en": "services/web-design/",
            "pt": "servicos/criacao-de-sites/",
            "es": "servicios/diseno-web/",
        },
        "changefreq": "monthly",
        "priority": "0.9",
        "lastmod": "2026-09-14",
    },
    "svc-brand": {
        "tpl": "svc-brand-identity.html",
        "content": "svc-brand-identity.json",
        "slug": {
            "en": "services/brand-identity/",
            "pt": "servicos/identidade-visual/",
            "es": "servicios/identidad-de-marca/",
        },
        "changefreq": "monthly",
        "priority": "0.9",
        "lastmod": "2026-09-14",
    },
    "svc-seo": {
        "tpl": "svc-local-seo.html",
        "content": "svc-local-seo.json",
        "slug": {
            "en": "services/local-seo/",
            "pt": "servicos/seo-local/",
            "es": "servicios/seo-local/",
        },
        "changefreq": "monthly",
        "priority": "0.9",
        "lastmod": "2026-09-14",
    },
    "work-rafa": {
        "tpl": "work-rafa-diniz.html",
        "content": "work-rafa-diniz.json",
        "slug": {
            "en": "work/rafa-diniz/",
            "pt": "projetos/rafa-diniz/",
            "es": "proyectos/rafa-diniz/",
        },
        "changefreq": "yearly",
        "priority": "0.8",
        "lastmod": "2026-09-09",
    },
    "work-mari": {
        "tpl": "work-bordados-com-amor.html",
        "content": "work-bordados-com-amor.json",
        "slug": {
            "en": "work/bordados-com-amor/",
            "pt": "projetos/bordados-com-amor/",
            "es": "proyectos/bordados-com-amor/",
        },
        "changefreq": "yearly",
        "priority": "0.8",
        "lastmod": "2026-09-09",
    },
    "work-renata": {
        "tpl": "work-renata-estrella.html",
        "content": "work-renata-estrella.json",
        "slug": {
            "en": "work/renata-estrella/",
            "pt": "projetos/renata-estrella/",
            "es": "proyectos/renata-estrella/",
        },
        "changefreq": "yearly",
        "priority": "0.8",
        "lastmod": "2026-09-09",
    },
    "work-blend": {
        "tpl": "work-blend-hair-boutique.html",
        "content": "work-blend-hair-boutique.json",
        "slug": {
            "en": "work/blend-hair-boutique/",
            "pt": "projetos/blend-hair-boutique/",
            "es": "proyectos/blend-hair-boutique/",
        },
        "changefreq": "yearly",
        "priority": "0.8",
        "lastmod": "2026-09-13",
    },
}

# Order the case studies appear in, used for the "next case study" link.
CASE_ORDER = ["work-rafa", "work-mari", "work-renata", "work-blend"]


def path_for(page, lang):
    """Root-relative path, always with a trailing slash."""
    return "/" + LANGS[lang]["prefix"] + PAGES[page]["slug"][lang]


def url_for(page, lang):
    return SITE + path_for(page, lang)
