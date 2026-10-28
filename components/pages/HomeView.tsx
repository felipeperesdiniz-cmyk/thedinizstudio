import { HomeHero } from '@/components/home/HomeHero'
import { Terms } from '@/components/home/Terms'
import { WorkGrid } from '@/components/home/WorkGrid'
import { ServicesRow } from '@/components/home/ServicesRow'
import { Founder } from '@/components/home/Founder'
import { Answers } from '@/components/home/Answers'
import { CtaBand } from '@/components/ui/CtaBand'
import { HOME_STORY } from '@/content/copy/home-story'
import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

/**
 * Pictures first, words small. A photograph of the work, what a buyer wants settled first (price, upkeep, time, ownership),
 * the work, what the studio sells, who does it, and the questions before hiring. The films live on the case studies.
 */
export function HomeView({ locale, t }: { locale: Locale; t: Dictionary }) {
  const story = HOME_STORY[locale]

  return (
    <>
      <HomeHero locale={locale} h1={t.home.h1} line={t.home.heroLine} cta={t.cta.label} story={story.hero} />
      <Terms locale={locale} terms={story.terms} />
      <WorkGrid locale={locale} t={t} story={story.work} />
      <ServicesRow locale={locale} t={t} kicker={story.services.kicker} />
      <Founder locale={locale} t={t} capacity={story.studio.capacity} />
      <Answers locale={locale} t={t} />
      <CtaBand locale={locale} t={t} />
    </>
  )
}
