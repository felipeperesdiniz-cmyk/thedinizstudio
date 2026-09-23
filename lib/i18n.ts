export const LOCALES = ['en', 'pt', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const HTML_LANG: Record<Locale, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es',
}

export const LOCALE_LABEL: Record<Locale, string> = { en: 'EN', pt: 'PT', es: 'ES' }

export const SERVICE_KEYS = ['web-design', 'brand-identity', 'marketing-seo'] as const
export type ServiceKey = (typeof SERVICE_KEYS)[number]

/** The first segment of every localised path. English has none. */
const PREFIX: Record<Locale, string> = { en: '', pt: 'pt', es: 'es' }

/** Section folder names, translated so each market searches in its own words. */
const SEGMENT: Record<
  Locale,
  { work: string; services: string; about: string; contact: string; faq: string }
> = {
  en: { work: 'work', services: 'services', about: 'about', contact: 'contact', faq: 'faq' },
  pt: {
    work: 'projetos',
    services: 'servicos',
    about: 'estudio',
    contact: 'contato',
    faq: 'perguntas',
  },
  es: {
    work: 'proyectos',
    services: 'servicios',
    about: 'estudio',
    contact: 'contacto',
    faq: 'preguntas',
  },
}

/** Every place the site keeps a list of FAQ items: the home page, plus each service page. */
export const FAQ_GROUPS = ['general', ...SERVICE_KEYS] as const
export type FaqGroup = (typeof FAQ_GROUPS)[number]

/**
 * Slug for each FAQ question, per language and per group, in the same order
 * as the matching `items` array in the copy (`home.answers.items` for
 * `general`, `servicePages[key].faq.items` for a service). Kept here rather
 * than in the copy files so routing has one source of truth independent of
 * the display text, and so two questions with the same wording in different
 * groups (e.g. "How long does it take?") can still get distinct URLs.
 */
const FAQ_SLUG: Record<Locale, Record<FaqGroup, readonly string[]>> = {
  en: {
    general: [
      'how-do-i-get-a-price',
      'how-long-does-it-take',
      'do-you-build-in-more-than-one-language',
      'do-you-only-do-websites',
      'what-do-you-build-with',
    ],
    'web-design': [
      'new-website-where-do-we-start',
      'how-is-a-website-project-priced',
      'can-you-redesign-my-existing-website',
      'do-i-need-wordpress-wix-or-squarespace',
      'will-i-be-able-to-update-the-site-myself',
      'will-my-website-show-up-on-google',
    ],
    'brand-identity': [
      'is-a-logo-quoted-on-its-own',
      'can-you-keep-my-existing-logo',
      'how-long-does-a-logo-take',
      'do-i-own-the-logo',
    ],
    'marketing-seo': [
      'how-long-until-i-see-seo-results',
      'can-you-get-me-into-chatgpt-and-ai-answers',
      'do-i-have-to-sign-up-for-months',
      'which-language-should-i-publish-in',
    ],
  },
  pt: {
    general: [
      'como-eu-recebo-um-orcamento',
      'quanto-tempo-leva',
      'voce-faz-em-mais-de-um-idioma',
      'voce-so-faz-sites',
      'com-o-que-voce-constroi',
    ],
    'web-design': [
      'preciso-de-um-site-novo-por-onde-comecar',
      'como-o-projeto-e-orcado',
      'da-para-reformar-o-site-que-eu-ja-tenho',
      'preciso-de-wordpress-wix-ou-squarespace',
      'vou-conseguir-atualizar-o-site-sozinho',
      'como-sei-que-vai-aparecer-no-google',
    ],
    'brand-identity': [
      'a-logo-e-orcada-separada',
      'ja-tenho-uma-logo-da-para-manter',
      'quanto-tempo-leva-uma-logo',
      'a-logo-e-minha',
    ],
    'marketing-seo': [
      'em-quanto-tempo-vejo-resultado-de-seo',
      'da-para-aparecer-no-chatgpt-e-em-outras-respostas-de-ia',
      'preciso-assinar-por-varios-meses',
      'em-qual-idioma-eu-devo-publicar',
    ],
  },
  es: {
    general: [
      'como-consigo-un-presupuesto',
      'cuanto-tarda',
      'trabajas-en-mas-de-un-idioma',
      'solo-haces-paginas-web',
      'con-que-lo-construyes',
    ],
    'web-design': [
      'necesito-una-web-nueva-por-donde-empezamos',
      'como-se-presupuesta-el-proyecto',
      'puedes-rehacer-la-web-que-ya-tengo',
      'necesito-wordpress-wix-o-squarespace',
      'podre-actualizarla-yo-mismo',
      'como-se-que-aparecera-en-google',
    ],
    'brand-identity': [
      'el-logo-se-presupuesta-por-separado',
      'ya-tengo-logo-puedes-conservarlo',
      'cuanto-tarda-un-logo',
      'el-logo-es-mio',
    ],
    'marketing-seo': [
      'en-cuanto-tiempo-veo-resultados-de-seo',
      'puedes-hacer-que-aparezca-en-chatgpt-y-en-otras-respuestas-de-ia',
      'tengo-que-comprometerme-por-meses',
      'en-que-idioma-deberia-publicar',
    ],
  },
}

/** Service page slugs, per language. */
const SERVICE_SLUG: Record<Locale, Record<ServiceKey, string>> = {
  en: {
    'web-design': 'web-design',
    'brand-identity': 'brand-identity',
    'marketing-seo': 'marketing-and-seo',
  },
  pt: {
    'web-design': 'criacao-de-sites',
    'brand-identity': 'identidade-visual',
    'marketing-seo': 'marketing-e-seo',
  },
  es: {
    'web-design': 'diseno-web',
    'brand-identity': 'identidad-de-marca',
    'marketing-seo': 'marketing-y-seo',
  },
}

const join = (...parts: (string | undefined)[]) => {
  const path = parts.filter((part) => part && part.length > 0).join('/')
  return `/${path}`.replace(/\/{2,}/g, '/')
}

export const homePath = (locale: Locale) => join(PREFIX[locale])
export const workPath = (locale: Locale) => join(PREFIX[locale], SEGMENT[locale].work)
export const projectPath = (locale: Locale, slug: string) =>
  join(PREFIX[locale], SEGMENT[locale].work, slug)
export const servicesPath = (locale: Locale) => join(PREFIX[locale], SEGMENT[locale].services)
export const servicePath = (locale: Locale, key: ServiceKey) =>
  join(PREFIX[locale], SEGMENT[locale].services, SERVICE_SLUG[locale][key])
export const aboutPath = (locale: Locale) => join(PREFIX[locale], SEGMENT[locale].about)
export const contactPath = (locale: Locale) => join(PREFIX[locale], SEGMENT[locale].contact)
export const faqPath = (locale: Locale) => join(PREFIX[locale], SEGMENT[locale].faq)
export const faqItemPath = (locale: Locale, group: FaqGroup, index: number) =>
  join(PREFIX[locale], SEGMENT[locale].faq, FAQ_SLUG[locale][group][index])

export type Route =
  | { kind: 'home'; locale: Locale }
  | { kind: 'work'; locale: Locale }
  | { kind: 'project'; locale: Locale; slug: string }
  | { kind: 'services'; locale: Locale }
  | { kind: 'service'; locale: Locale; service: ServiceKey }
  | { kind: 'about'; locale: Locale }
  | { kind: 'contact'; locale: Locale }
  | { kind: 'faq'; locale: Locale }
  | { kind: 'faqItem'; locale: Locale; group: FaqGroup; index: number }

/** Resolve an incoming URL path into a route, or null for a 404. */
export function matchRoute(segments: string[], projectSlugs: readonly string[]): Route | null {
  const parts = segments.filter(Boolean)

  const locale: Locale =
    parts[0] === 'pt' ? 'pt' : parts[0] === 'es' ? 'es' : DEFAULT_LOCALE
  const rest = locale === DEFAULT_LOCALE ? parts : parts.slice(1)
  const seg = SEGMENT[locale]

  if (rest.length === 0) return { kind: 'home', locale }

  if (rest[0] === seg.work) {
    if (rest.length === 1) return { kind: 'work', locale }
    if (rest.length === 2 && projectSlugs.includes(rest[1]!)) {
      return { kind: 'project', locale, slug: rest[1]! }
    }
    return null
  }

  if (rest[0] === seg.services) {
    if (rest.length === 1) return { kind: 'services', locale }
    if (rest.length === 2) {
      const entry = Object.entries(SERVICE_SLUG[locale]).find(([, slug]) => slug === rest[1])
      if (entry) return { kind: 'service', locale, service: entry[0] as ServiceKey }
    }
    return null
  }

  if (rest.length === 1 && rest[0] === seg.about) return { kind: 'about', locale }
  if (rest.length === 1 && rest[0] === seg.contact) return { kind: 'contact', locale }

  if (rest[0] === seg.faq) {
    if (rest.length === 1) return { kind: 'faq', locale }
    if (rest.length === 2) {
      for (const group of FAQ_GROUPS) {
        const index = FAQ_SLUG[locale][group].indexOf(rest[1]!)
        if (index !== -1) return { kind: 'faqItem', locale, group, index }
      }
    }
    return null
  }

  return null
}

/** The same page in every language, for hreflang and the language switcher. */
export function alternatesFor(route: Route): Record<Locale, string> {
  const build = (locale: Locale): string => {
    switch (route.kind) {
      case 'home':
        return homePath(locale)
      case 'work':
        return workPath(locale)
      case 'project':
        return projectPath(locale, route.slug)
      case 'services':
        return servicesPath(locale)
      case 'service':
        return servicePath(locale, route.service)
      case 'about':
        return aboutPath(locale)
      case 'contact':
        return contactPath(locale)
      case 'faq':
        return faqPath(locale)
      case 'faqItem':
        return faqItemPath(locale, route.group, route.index)
    }
  }

  return { en: build('en'), pt: build('pt'), es: build('es') }
}

/** Every URL on the site, for the sitemap and for static generation. */
export function allRoutes(projectSlugs: readonly string[]): Route[] {
  const routes: Route[] = []

  for (const locale of LOCALES) {
    routes.push({ kind: 'home', locale })
    routes.push({ kind: 'work', locale })
    routes.push({ kind: 'services', locale })
    routes.push({ kind: 'about', locale })
    routes.push({ kind: 'contact', locale })
    routes.push({ kind: 'faq', locale })
    for (const group of FAQ_GROUPS) {
      for (const index of FAQ_SLUG[locale][group].keys()) {
        routes.push({ kind: 'faqItem', locale, group, index })
      }
    }
    for (const service of SERVICE_KEYS) routes.push({ kind: 'service', locale, service })
    for (const slug of projectSlugs) routes.push({ kind: 'project', locale, slug })
  }

  return routes
}

export function pathFor(route: Route): string {
  return alternatesFor(route)[route.locale]
}

/** URL path split into the segments the catch-all route receives. */
export function segmentsFor(route: Route): string[] {
  return pathFor(route).split('/').filter(Boolean)
}
