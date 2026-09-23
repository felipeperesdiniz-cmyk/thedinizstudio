import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { PROJECT_SLUGS } from '@/content/projects'
import { HTML_LANG, LOCALES, allRoutes, alternatesFor, pathFor } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return allRoutes(PROJECT_SLUGS).map((route) => {
    const paths = alternatesFor(route)
    const languages: Record<string, string> = {}
    for (const locale of LOCALES) languages[HTML_LANG[locale]] = `${SITE.url}${paths[locale]}`

    return {
      url: `${SITE.url}${pathFor(route)}`,
      lastModified: now,
      changeFrequency: route.kind === 'home' ? ('monthly' as const) : ('yearly' as const),
      priority: route.kind === 'home' ? 1 : route.kind === 'project' ? 0.8 : 0.7,
      alternates: { languages },
    }
  })
}
