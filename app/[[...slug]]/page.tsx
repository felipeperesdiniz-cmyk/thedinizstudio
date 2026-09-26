import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { HomeView } from '@/components/pages/HomeView'
import { WorkIndexView, CaseStudyView } from '@/components/pages/WorkViews'
import { ServicesIndexView, ServiceView, AboutView } from '@/components/pages/ServiceViews'
import { ContactView } from '@/components/pages/ContactView'
import { FaqIndexView, FaqItemView } from '@/components/pages/FaqViews'
import { LangSync } from '@/components/ui/LangSync'
import { dictionary, faqGroupLabel, faqItemsFor } from '@/content/copy'
import { PROJECT_SLUGS, projectBySlug } from '@/content/projects'
import { SITE } from '@/lib/site'
import {
  HTML_LANG,
  LOCALES,
  allRoutes,
  alternatesFor,
  matchRoute,
  segmentsFor,
  type Route,
} from '@/lib/i18n'
import { structuredData } from '@/lib/structured-data'

type Params = { slug?: string[] }

export function generateStaticParams(): Params[] {
  return allRoutes(PROJECT_SLUGS).map((route) => ({ slug: segmentsFor(route) }))
}

function resolve(slug: string[] | undefined): Route | null {
  return matchRoute(slug ?? [], PROJECT_SLUGS)
}

/** Shortens text at a word boundary, for meta descriptions. */
function clip(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:—-]+$/, '')}…`
}

function metaFor(route: Route) {
  const t = dictionary(route.locale)

  switch (route.kind) {
    case 'home':
      return t.home.meta
    case 'work':
      return t.work.meta
    case 'project':
      return t.projects[route.slug]!.meta
    case 'services':
      return t.services.meta
    case 'service':
      return t.servicePages[route.service].meta
    case 'about':
      return t.about.meta
    case 'contact':
      return t.contact.meta
    case 'faq':
      return t.faq.meta
    case 'faqItem': {
      const item = faqItemsFor(t, route.group)[route.index]!
      const context = route.group === 'general' ? '' : ` — ${faqGroupLabel(t, route.group)}`
      // Search results cut titles near 60 characters and descriptions near 160,
      // so the studio name is dropped first when space runs out; the context keeps titles unique.
      const title = `${item.q}${context}`
      const branded = `${title} | ${SITE.name}`
      return {
        title: branded.length <= 60 ? branded : title,
        description: clip(item.a, 158),
      }
    }
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const route = resolve(slug)
  if (!route) return {}

  const meta = metaFor(route)
  const paths = alternatesFor(route)

  const languages: Record<string, string> = { 'x-default': paths.en }
  for (const locale of LOCALES) languages[HTML_LANG[locale]] = paths[locale]

  return {
    // The titles already carry the studio name, so skip the layout template.
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: paths[route.locale], languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE.url}${paths[route.locale]}`,
      siteName: SITE.name,
      locale: HTML_LANG[route.locale].replace('-', '_'),
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
    // One answer is too thin to rank alone; the FAQ page carries them all.
    ...(route.kind === 'faqItem' && { robots: { index: false, follow: true } }),
  }
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const route = resolve(slug)
  if (!route) notFound()

  const { locale } = route
  const t = dictionary(locale)
  const alternates = alternatesFor(route)

  const view = () => {
    switch (route.kind) {
      case 'home':
        return <HomeView locale={locale} t={t} />
      case 'work':
        return <WorkIndexView locale={locale} t={t} />
      case 'project': {
        const project = projectBySlug(route.slug)
        if (!project) notFound()
        return <CaseStudyView locale={locale} project={project} t={t} />
      }
      case 'services':
        return <ServicesIndexView locale={locale} t={t} />
      case 'service':
        return <ServiceView locale={locale} service={route.service} t={t} />
      case 'about':
        return <AboutView locale={locale} t={t} />
      case 'contact':
        return <ContactView t={t} />
      case 'faq':
        return <FaqIndexView locale={locale} t={t} />
      case 'faqItem':
        return <FaqItemView locale={locale} t={t} group={route.group} index={route.index} />
    }
  }

  return (
    <div lang={HTML_LANG[locale]}>
      <LangSync lang={HTML_LANG[locale]} />
      <script
        type="application/ld+json"
        // Author-controlled: built from this repo's own content.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(route, t)) }}
      />
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <Nav
        locale={locale}
        alternates={alternates}
        ctaLabel={t.cta.label}
        ctaLabelShort={t.nav.contact}
      />
      <main id="main">{view()}</main>
      <Footer locale={locale} t={t} />
    </div>
  )
}
