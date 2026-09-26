import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { PROJECT_SLUGS } from '@/content/projects'
import { HTML_LANG, LOCALES, allRoutes, alternatesFor, pathFor } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.updated)

  return (
    allRoutes(PROJECT_SLUGS)
      // Single FAQ answers are too short to rank on their own and are noindexed;
      // the same answers are indexed on the FAQ and service pages.
      .filter((route) => route.kind !== 'faqItem')
      .map((route) => {
        const paths = alternatesFor(route)
        const languages: Record<string, string> = { 'x-default': `${SITE.url}${paths.en}` }
        for (const locale of LOCALES) languages[HTML_LANG[locale]] = `${SITE.url}${paths[locale]}`

        return { url: `${SITE.url}${pathFor(route)}`, lastModified, alternates: { languages } }
      })
  )
}
