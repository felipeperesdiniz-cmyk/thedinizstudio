import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/lib/site'
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
          <p className="max-w-[42ch] text-secondary">{t.cta.text}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={contactPath(locale)}
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 font-mono text-xs uppercase tracking-[0.08em] text-background transition-colors hover:bg-white"
            >
              {t.cta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>
            <a
              href={SITE.meeting}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center border border-line px-6 font-mono text-xs uppercase tracking-[0.08em] text-primary transition-colors hover:border-primary"
            >
              {t.cta.bookCall}
            </a>
          </div>

          <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
            <a href={`mailto:${SITE.email}`} className="group inline-flex py-1 hover:text-primary">
              <span className="link-underline">{SITE.email}</span>
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex py-1 hover:text-primary"
            >
              <span className="link-underline">
                {t.contact.direct.whatsapp} {SITE.phone}
              </span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
