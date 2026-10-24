import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import type { Dictionary } from '@/content/copy/types'
import { faqItemPath, faqPath, type Locale } from '@/lib/i18n'

/** The questions people ask before they hire, open one at a time. */
export function Answers({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section aria-labelledby="answers-title" className="border-t border-line">
      <div className="container-studio py-[var(--section-padding)]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <p className="label">{t.home.answers.kicker}</p>
          <h2 id="answers-title" className="mt-5 text-5xl">
            {t.home.answers.title}
          </h2>
        </Reveal>

        <div className="mx-auto max-w-[48rem] border-t border-line">
          {t.home.answers.items.map((item, i) => (
            <details key={item.slug} name="answers" className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="relative grid size-4 shrink-0 place-items-center">
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current transition-transform duration-500 group-open:rotate-90" />
                </span>
              </summary>
              <div className="pb-7 pr-10">
                <p className="max-w-[60ch] text-secondary">{item.a}</p>
                <Link href={faqItemPath(locale, 'general', i)} className="label mt-4 inline-block border-b border-current pb-1 text-primary">
                  {item.q}
                </Link>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={faqPath(locale)} className="btn btn-ghost">
            {t.home.answers.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
