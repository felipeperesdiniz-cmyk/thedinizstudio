import { HomeHero } from '@/components/home/HomeHero'
import { Facts } from '@/components/home/Facts'
import { WorkGrid } from '@/components/home/WorkGrid'
import { Films, type FilmEntry } from '@/components/home/Films'
import { ServicesRow } from '@/components/home/ServicesRow'
import { Founder } from '@/components/home/Founder'
import { Answers } from '@/components/home/Answers'
import { CtaBand } from '@/components/ui/CtaBand'
import { HOME_STORY } from '@/content/copy/home-story'
import { projectPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

/**
 * Pictures first, words small. A photograph of the work, what a client wants settled first (price, time, languages, ownership),
 * the work, the films made for it, what the studio sells, who does it, and the questions before hiring.
 */
export function HomeView({ locale, t }: { locale: Locale; t: Dictionary }) {
  const story = HOME_STORY[locale]

  const films: FilmEntry[] = [
    {
      project: 'Bordados com Amor',
      href: projectPath(locale, 'bordados-com-amor-by-mari'),
      caption: story.films.mari,
      length: '0:17',
      preview: '/films/mari-preview.mp4',
      poster: '/films/mari-preview-poster.webp',
      full: '/films/mari-film.mp4',
    },
    {
      project: 'Blend Hair Boutique',
      href: projectPath(locale, 'blend-hair-boutique'),
      caption: t.projects['blend-hair-boutique']!.chapters[0]!.videoCaption ?? '',
      length: '0:27',
      preview: '/films/blend-preview.mp4',
      poster: '/films/blend-preview-poster.webp',
      full: '/films/blend-film.mp4',
    },
    {
      project: 'Rafa Diniz',
      href: projectPath(locale, 'rafa-diniz'),
      caption: story.films.rafa,
      length: '0:53',
      preview: '/films/rafa-preview.mp4',
      poster: '/films/rafa-preview-poster.webp',
      full: '/films/rafa-reel.mp4',
    },
  ]

  return (
    <>
      <HomeHero locale={locale} h1={t.home.h1} line={t.home.heroLine} cta={t.cta.label} story={story.hero} />
      <Facts facts={story.facts} />
      <WorkGrid locale={locale} t={t} story={story.work} />
      <Films
        kicker={story.films.kicker}
        title={story.films.title}
        watch={t.player.watch}
        close={t.player.close}
        caseLabel={story.work.view}
        films={films}
      />
      <ServicesRow locale={locale} t={t} kicker={story.services.kicker} />
      <Founder locale={locale} t={t} capacity={story.studio.capacity} />
      <Answers locale={locale} t={t} />
      <CtaBand locale={locale} t={t} />
    </>
  )
}
