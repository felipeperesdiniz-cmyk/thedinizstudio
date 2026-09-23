import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { contactPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

export function CtaBand({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <div className="container-studio grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <h2 id="cta-title" className="font-display text-4xl leading-[1.05] text-primary">
            {t.cta.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-8 md:col-span-5 md:col-start-8">
          <p className="max-w-[42ch] font-light text-secondary">{t.cta.text}</p>
          <Link
            href={contactPath(locale)}
            className="group inline-flex items-center gap-3 self-start font-mono text-xs uppercase tracking-[0.08em] text-primary"
          >
            <span className="link-underline pb-1">{t.cta.label}</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
