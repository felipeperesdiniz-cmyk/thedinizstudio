import { SITE } from '@/lib/site'
import { FAQ_GROUPS, HTML_LANG, alternatesFor, type Route } from '@/lib/i18n'
import { faqGroupLabel, faqItemsFor } from '@/content/copy'
import type { Dictionary } from '@/content/copy/types'

const organisation = (t: Dictionary) => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#studio`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  logo: `${SITE.url}/apple-icon.png`,
  image: `${SITE.url}/og-image.jpg`,
  description: t.meta.tagline,
  areaServed: [
    { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Boston', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    'United States',
    'Brazil',
  ],
  availableLanguage: ['English', 'Portuguese', 'Spanish'],
  serviceType: [
    'Web Design',
    'Web Development',
    'Brand Identity',
    'Logo Design',
    'Local SEO',
    'Social Media Marketing',
  ],
  founder: { '@type': 'Person', name: 'Felipe Diniz' },
  sameAs: [SITE.instagram],
})

/**
 * One JSON-LD graph per page. Search engines use it for rich results, and
 * assistants use it to answer questions about what the studio does.
 */
export function structuredData(route: Route, t: Dictionary) {
  const paths = alternatesFor(route)
  const url = `${SITE.url}${paths[route.locale]}`
  const graph: Record<string, unknown>[] = [organisation(t)]

  const webPage = (name: string, description: string) => ({
    '@type': 'WebPage',
    '@id': url,
    url,
    name,
    description,
    inLanguage: HTML_LANG[route.locale],
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    publisher: { '@id': `${SITE.url}/#studio` },
  })

  const faq = (items: readonly { q: string; a: string }[]) => ({
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  })

  switch (route.kind) {
    case 'home':
      graph.push(webPage(t.home.meta.title, t.home.meta.description))
      graph.push(faq(t.home.answers.items))
      break

    case 'work':
      graph.push(webPage(t.work.meta.title, t.work.meta.description))
      break

    case 'project': {
      const copy = t.projects[route.slug]!
      graph.push(webPage(copy.meta.title, copy.meta.description))
      graph.push({
        '@type': 'CreativeWork',
        name: copy.meta.title,
        about: copy.sector,
        description: copy.lede,
        inLanguage: HTML_LANG[route.locale],
        creator: { '@id': `${SITE.url}/#studio` },
      })
      break
    }

    case 'services':
      graph.push(webPage(t.services.meta.title, t.services.meta.description))
      break

    case 'service': {
      const page = t.servicePages[route.service]
      graph.push(webPage(page.meta.title, page.meta.description))
      graph.push({
        '@type': 'Service',
        name: page.title,
        description: page.meta.description,
        serviceType: page.title,
        provider: { '@id': `${SITE.url}/#studio` },
        areaServed: ['United States', 'Brazil'],
        availableLanguage: ['English', 'Portuguese', 'Spanish'],
      })
      graph.push(faq(page.faq.items))
      break
    }

    case 'about':
      graph.push(webPage(t.about.meta.title, t.about.meta.description))
      break

    case 'faq':
      graph.push(webPage(t.faq.meta.title, t.faq.meta.description))
      graph.push(faq(FAQ_GROUPS.flatMap((group) => faqItemsFor(t, group))))
      break

    case 'faqItem': {
      const item = faqItemsFor(t, route.group)[route.index]!
      const context = route.group === 'general' ? '' : ` — ${faqGroupLabel(t, route.group)}`
      graph.push(webPage(`${item.q}${context} | ${SITE.name}`, item.a))
      graph.push(faq([item]))
      break
    }

    case 'contact':
      graph.push({
        '@type': 'ContactPage',
        '@id': url,
        url,
        name: t.contact.meta.title,
        description: t.contact.meta.description,
        inLanguage: HTML_LANG[route.locale],
        publisher: { '@id': `${SITE.url}/#studio` },
      })
      break
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
