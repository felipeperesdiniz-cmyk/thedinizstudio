import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICE_MEDIA } from '@/content/service-media'
import type { Dictionary } from '@/content/copy/types'
import { SERVICE_KEYS, servicePath, servicesPath, type Locale } from '@/lib/i18n'

/** Three services side by side, each with one picture of work it produced. */
export function ServicesRow({ locale, t, kicker }: { locale: Locale; t: Dictionary; kicker: string }) {
  return (
    <section aria-labelledby="services-title" className="border-t border-line">
      <div className="container-studio py-[var(--section-padding)]">
        <Reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="label">{kicker}</p>
          <h2 id="services-title" className="mt-5 text-5xl">
            {t.home.services.title}
          </h2>
          <p className="mt-5 max-w-[50ch] text-secondary">{t.home.services.text}</p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-[var(--gutter)] gap-y-14 md:grid-cols-3">
          {SERVICE_KEYS.map((key, i) => {
            const card = t.services.cards[key]
            const thumb = SERVICE_MEDIA[key][0]!
            const light = thumb.tone === 'light'
            return (
              <li key={key}>
                <Reveal delay={i * 0.08}>
                  <Link href={servicePath(locale, key)} className="group block">
                    <div className={`relative aspect-[4/5] overflow-hidden bg-surface ${light ? 'p-[16%]' : ''}`}>
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill={!light}
                        width={light ? thumb.width : undefined}
                        height={light ? thumb.height : undefined}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={`transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.03] ${
                          light ? 'h-full w-full object-contain' : 'object-cover'
                        }`}
                      />
                    </div>
                    <div className="mt-6 flex flex-col items-center px-4 text-center">
                      <h3 className="text-2xl">{card.title}</h3>
                      <p className="mt-4 max-w-[38ch] text-sm text-secondary">{card.text}</p>
                      <span className="label mt-5 border-b border-current pb-1 text-primary transition-opacity group-hover:opacity-60">
                        {t.services.readMore}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 flex justify-center md:mt-20">
          <Link href={servicesPath(locale)} className="btn btn-ghost">
            {t.home.services.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
