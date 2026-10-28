import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '@/components/ui/CtaBand'
import { PageHead } from '@/components/pages/ServiceViews'
import { GUIDE_KEYS, guidePath, guidesPath, servicePath, type GuideKey, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

const arrow = (
  <span aria-hidden="true" className="text-xl transition-transform duration-500 group-hover:translate-x-1.5">
    →
  </span>
)

/** The hub: every buying question ruled off one under another, each linking to its full answer. */
export function GuidesIndexView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <PageHead kicker={t.guides.kicker} title={t.guides.title} lede={t.guides.lede} />

      <div className="container-studio pb-[var(--section-padding)]">
        <ul className="border-t border-line">
          {GUIDE_KEYS.map((key, i) => (
            <li key={key} className="border-b border-line">
              <Reveal delay={i * 0.04}>
                <Link
                  href={guidePath(locale, key)}
                  className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
                >
                  <h2 className="font-display text-3xl text-primary md:col-span-5">
                    <span className="link-underline pb-1">{t.guides.cards[key].title}</span>
                  </h2>
                  <p className="max-w-[52ch] text-secondary md:col-span-6">{t.guides.cards[key].text}</p>
                  <span className="hidden justify-end text-primary md:col-span-1 md:flex">{arrow}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}

/** One buying question answered in full: the sections, its own questions, and the way on to the rest. */
export function GuideView({ locale, guide, t }: { locale: Locale; guide: GuideKey; t: Dictionary }) {
  const page = t.guidePages[guide]
  const others = GUIDE_KEYS.filter((key) => key !== guide)

  return (
    <article>
      {/* PageHead's layout, with the breadcrumb standing in for the kicker so the trail is not said twice. */}
      <header className="container-studio pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-24 md:pt-[calc(var(--nav-height)+8rem)]">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={guidesPath(locale)} className="label text-primary hover:opacity-60">
                  {t.guides.kicker}
                </Link>
              </li>
              <li aria-hidden="true" className="label">
                /
              </li>
              <li aria-current="page" className="label">
                {page.kicker}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-[18ch] font-display text-6xl leading-[1.15] text-primary">{page.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[44ch] text-2xl leading-snug text-primary/90">{page.lede}</p>
        </Reveal>
      </header>

      {page.sections.map((section, i) => (
        <section key={section.heading} aria-labelledby={`guide-${i}`} className="border-t border-line">
          <Reveal className="container-studio grid grid-cols-1 gap-6 py-16 md:grid-cols-12 md:gap-[var(--gutter)] md:py-20">
            <h2 id={`guide-${i}`} className="font-display text-3xl leading-snug text-primary md:col-span-4">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-5 md:col-span-7 md:col-start-6">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] text-lg text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </section>
      ))}

      <section aria-labelledby="guide-faq" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <h2 id="guide-faq" className="font-display text-4xl text-primary">
              {page.faq.title}
            </h2>
          </Reveal>

          <dl className="mt-12 border-t border-line">
            {page.faq.items.map((item, i) => (
              <Reveal
                key={item.q}
                delay={i * 0.04}
                className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
              >
                <dt className="font-display text-2xl leading-snug text-primary md:col-span-5">{item.q}</dt>
                <dd className="max-w-[56ch] text-secondary md:col-span-6 md:col-start-7">{item.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label={t.guides.others} className="border-t border-line">
        <div className="container-studio py-16">
          <p className="label">{t.guides.others}</p>
          <div className="mt-5 flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-x-12">
            {others.map((key) => (
              <Link
                key={key}
                href={guidePath(locale, key)}
                className="group inline-flex items-center gap-3 py-1 font-display text-2xl text-secondary transition-colors hover:text-primary"
              >
                {t.guides.cards[key].title}
                {arrow}
              </Link>
            ))}
            <Link
              href={servicePath(locale, 'web-design')}
              className="group inline-flex items-center gap-3 py-1 font-display text-2xl text-secondary transition-colors hover:text-primary"
            >
              {t.services.cards['web-design'].title}
              {arrow}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}
