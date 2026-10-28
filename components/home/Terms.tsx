import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import type { HomeStory } from '@/content/copy/home-story'
import { guidePath, guidesPath, type Locale } from '@/lib/i18n'

/**
 * Price, running costs, editing, time and ownership, set like the terms page of a printed estimate:
 * a short heading on the left, the terms ruled off one under the other on the right.
 * Each term links to the page that answers it in full.
 */
export function Terms({ locale, terms }: { locale: Locale; terms: HomeStory['terms'] }) {
  return (
    <section aria-labelledby="terms-title" className="border-b border-line">
      <div className="container-studio grid grid-cols-1 gap-10 py-[clamp(4.5rem,8vw,8rem)] md:grid-cols-12 md:gap-[var(--gutter)]">
        <Reveal className="flex flex-col items-start md:col-span-4">
          <p className="label">{terms.kicker}</p>
          <h2 id="terms-title" className="mt-5 text-4xl md:max-w-[16ch]">
            {terms.title}
          </h2>
          <Link
            href={guidesPath(locale)}
            className="label mt-8 hidden border-b border-current pb-1 text-primary transition-opacity hover:opacity-60 md:inline-block"
          >
            {terms.more}
          </Link>
        </Reveal>

        <dl className="border-b border-line md:col-span-7 md:col-start-6">
          {terms.items.map((item, i) => (
            <Reveal
              key={item.term}
              delay={i * 0.06}
              className="grid grid-cols-1 gap-2 border-t border-line py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-baseline sm:gap-8 md:py-7"
            >
              <dt className="font-serif text-2xl">
                <Link href={guidePath(locale, item.guide)} className="group inline-flex items-baseline gap-2">
                  <span className="link-underline pb-0.5">{item.term}</span>
                  <span aria-hidden="true" className="text-lg text-secondary transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </dt>
              <dd className="max-w-[44ch] text-secondary">{item.text}</dd>
            </Reveal>
          ))}
        </dl>

        <Link
          href={guidesPath(locale)}
          className="label self-start justify-self-start border-b border-current pb-1 text-primary md:hidden"
        >
          {terms.more}
        </Link>
      </div>
    </section>
  )
}
