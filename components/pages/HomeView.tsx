import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Intro } from '@/components/sections/Intro'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '@/components/ui/CtaBand'
import { SERVICE_KEYS, faqItemPath, faqPath, servicePath, servicesPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'
import { SERVICE_MEDIA } from '@/content/service-media'

export function HomeView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <>
      <Hero title={t.home.h1} line={t.home.heroLine} />

      <Intro t={t} />

      <Work locale={locale} t={t} />

      {/* Services */}
      <section aria-labelledby="services-title" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label">{t.home.services.kicker}</p>
              <h2 id="services-title" className="mt-6 max-w-[16ch] font-display text-4xl text-primary">
                {t.home.services.title}
              </h2>
            </div>
            <p className="max-w-[44ch] text-secondary md:col-span-5 md:col-start-8 md:self-end">
              {t.home.services.text}
            </p>
          </Reveal>

          <ul className="mt-16 grid grid-cols-1 gap-px border-t border-line md:mt-20">
            {SERVICE_KEYS.map((key, i) => (
              <li key={key}>
                <Reveal delay={i * 0.08}>
                  <Link
                    href={servicePath(locale, key)}
                    className="group grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8"
                  >
                    <span className="label md:col-span-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="md:col-span-4">
                      <h3 className="font-display text-3xl text-primary">
                        <span className="link-underline pb-1">{t.services.cards[key].title}</span>
                      </h3>
                      <p className="mt-5 max-w-[38ch] text-secondary">
                        {t.services.cards[key].text}
                      </p>

                      {t.services.cards[key].proof && (
                        <dl className="mt-8 grid grid-cols-3 gap-x-5 gap-y-6">
                          {t.services.cards[key].proof.map((item) => (
                            <div key={item.label}>
                              <dt className="font-display text-2xl leading-none text-primary">
                                {item.value}
                              </dt>
                              <dd className="label mt-2 break-words leading-snug">{item.label}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>

                    <div className="grid grid-cols-3 items-center gap-[var(--gutter)] md:col-span-6 md:col-start-6 md:items-start">
                      {SERVICE_MEDIA[key].map((thumb) => (
                        <div
                          key={thumb.src}
                          // The tile takes the image's own shape, so nothing is cropped.
                          style={
                            thumb.tone === 'light'
                              ? undefined
                              : { aspectRatio: `${thumb.width} / ${thumb.height}` }
                          }
                          className={`flex items-center justify-center self-center overflow-hidden md:self-start ${
                            thumb.tone === 'light'
                              ? 'aspect-[4/3] bg-[#e8e7e4] p-[10%]'
                              : 'bg-surface'
                          }`}
                        >
                          <Image
                            src={thumb.src}
                            alt={thumb.alt}
                            width={thumb.width}
                            height={thumb.height}
                            sizes="(max-width: 768px) 30vw, 16vw"
                            className={
                              thumb.tone === 'light'
                                ? 'h-auto max-h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                                : thumb.tone === 'artwork'
                                  ? 'h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                                  : 'h-full w-full object-cover transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                            }
                          />
                        </div>
                      ))}
                    </div>

                    <span
                      aria-hidden="true"
                      className="hidden font-display text-2xl text-secondary transition-[translate,color] duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-1 md:block md:justify-self-end md:self-center"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <Link
              href={servicesPath(locale)}
              className="group mt-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors hover:text-primary"
            >
              <span className="link-underline pb-1">{t.home.services.link}</span>
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

      {/* The questions people ask before they hire, answered on the page */}
      <section aria-labelledby="answers-title" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <p className="label">{t.home.answers.kicker}</p>
            <h2 id="answers-title" className="mt-6 max-w-[20ch] font-display text-4xl text-primary">
              {t.home.answers.title}
            </h2>
          </Reveal>

          <dl className="mt-16 border-t border-line md:mt-20">
            {t.home.answers.items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8">
                  <dt className="font-display text-2xl leading-snug text-primary md:col-span-5">
                    <Link href={faqItemPath(locale, 'general', i)} className="group inline">
                      <span className="link-underline pb-1">{item.q}</span>
                    </Link>
                  </dt>
                  <dd className="max-w-[52ch] text-secondary md:col-span-6 md:col-start-7">
                    {item.a}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.1}>
            <Link
              href={faqPath(locale)}
              className="group mt-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors hover:text-primary"
            >
              <span className="link-underline pb-1">{t.home.answers.link}</span>
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

      <CtaBand locale={locale} t={t} />
    </>
  )
}
