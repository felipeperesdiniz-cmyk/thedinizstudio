import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/lib/site'
import { contactPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

/** The last thing on every page: what to send, when the reply comes, and one primary way to send it. */
export function CtaBand({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <Reveal className="container-studio flex flex-col items-center py-[var(--section-padding)] text-center">
        <p className="label">{t.cta.kicker}</p>
        <h2 id="cta-title" className="mt-5 text-6xl">
          {t.cta.title}
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg text-secondary">{t.cta.text}</p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href={contactPath(locale)} className="btn btn-solid">
            {t.cta.label}
          </Link>
          <a href={SITE.meeting} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
            {t.cta.bookCall}
          </a>
        </div>

        <p className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-secondary">
          <a href={`mailto:${SITE.email}`} className="hover:text-primary">
            {SITE.email}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
            {t.contact.direct.whatsapp} {SITE.phone}
          </a>
        </p>
      </Reveal>
    </section>
  )
}
