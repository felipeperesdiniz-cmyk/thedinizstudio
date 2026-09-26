import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { ReelPlayer } from '@/components/ui/ReelPlayer'
import { CtaBand } from '@/components/ui/CtaBand'
import {
  SERVICE_KEYS,
  faqItemPath,
  faqPath,
  projectPath,
  servicePath,
  type Locale,
  type ServiceKey,
} from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'
import { SERVICE_PAGE_MEDIA, type Thumb } from '@/content/service-media'
import { projectBySlug } from '@/content/projects'

export function PageHead({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="container-studio pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-24 md:pt-[calc(var(--nav-height)+8rem)]">
      <Reveal>
        <p className="label">{kicker}</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-6xl leading-[0.95] text-primary">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-10 max-w-[44ch] text-2xl leading-snug text-primary/90">{lede}</p>
      </Reveal>
    </header>
  )
}

function MediaTile({ thumb, sizes }: { thumb: Thumb; sizes: string }) {
  if (thumb.tone === 'light') {
    return (
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e8e7e4] p-[8%]">
        <Image
          src={thumb.src}
          alt={thumb.alt}
          width={thumb.width}
          height={thumb.height}
          sizes={sizes}
          className="h-auto max-h-full w-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className="overflow-hidden bg-surface">
      <Image
        src={thumb.src}
        alt={thumb.alt}
        width={thumb.width}
        height={thumb.height}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  )
}

export function ServicesIndexView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <PageHead kicker={t.services.kicker} title={t.services.title} lede={t.services.lede} />

      <div className="container-studio pb-[var(--section-padding)]">
        <ul className="border-t border-line">
          {SERVICE_KEYS.map((key, i) => (
            <li key={key}>
              <Reveal delay={i * 0.08}>
                <Link
                  href={servicePath(locale, key)}
                  className="group grid grid-cols-1 gap-4 border-b border-line py-12 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="font-display text-3xl text-primary md:col-span-5">
                    <span className="link-underline pb-1">{t.services.cards[key].title}</span>
                  </h2>
                  <p className="max-w-[44ch] text-secondary md:col-span-5">
                    {t.services.cards[key].text}
                  </p>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl text-secondary transition-[translate,color] duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-1 md:justify-self-end"
                  >
                    →
                  </span>
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

export function ServiceView({
  locale,
  service,
  t,
}: {
  locale: Locale
  service: ServiceKey
  t: Dictionary
}) {
  const page = t.servicePages[service]
  const media = SERVICE_PAGE_MEDIA[service]
  const others = SERVICE_KEYS.filter((key) => key !== service)

  return (
    <article>
      <PageHead kicker={page.kicker} title={page.title} lede={page.lede} />

      <div className="container-studio">
        <Reveal as="image">
          <MediaTile thumb={media.hero} sizes="(max-width: 1440px) 100vw, 1440px" />
        </Reveal>
      </div>

      <section className="container-studio py-[var(--section-padding)]">
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6">
            {page.body.map((paragraph) => (
              <p key={paragraph} className="max-w-[56ch] text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 items-start gap-[var(--gutter)] md:mt-24 md:grid-cols-4">
          {media.gallery.map((thumb, i) => (
            <Reveal key={thumb.src} as="image" delay={i * 0.07}>
              <MediaTile thumb={thumb} sizes="(max-width: 768px) 50vw, 24vw" />
            </Reveal>
          ))}
        </div>

        {media.reels && media.reels.length > 0 && (
          <div className="mt-20 md:mt-24">
            <Reveal>
              <p className="label">{t.services.reels}</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-12 md:grid-cols-2">
              {media.reels.map(({ clip, slug }, i) => {
                const project = projectBySlug(slug)
                if (!project) return null

                return (
                  <div key={clip.mp4}>
                    <Reveal as="image" delay={i * 0.08} className="overflow-hidden bg-surface">
                      <ReelPlayer {...clip} labels={t.player} />
                    </Reveal>
                    <p className="label mt-5">{project.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </section>

      <section aria-labelledby="included" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <h2 id="included" className="font-display text-4xl text-primary">
              {page.included.title}
            </h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-12 md:grid-cols-2">
            {page.included.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 0.06}>
                  <h3 className="border-t border-line pt-5 text-lg text-primary">{item.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-secondary">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="process" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <h2 id="process" className="font-display text-4xl text-primary">
              {page.process.title}
            </h2>
          </Reveal>

          <ol className="mt-14 border-t border-line">
            {page.process.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.05}>
                  <div className="grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                    <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg text-primary md:col-span-4">{step.title}</h3>
                    <p className="max-w-[52ch] text-secondary md:col-span-7">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <Link href={faqPath(locale)} className="group inline-block">
              <h2 id="faq" className="font-display text-4xl text-primary">
                <span className="link-underline pb-1">{page.faq.title}</span>
              </h2>
            </Link>
          </Reveal>

          <dl className="mt-14 border-t border-line">
            {page.faq.items.map((item, i) => (
              <Reveal
                key={item.slug}
                delay={i * 0.04}
                className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
              >
                <dt className="font-display text-2xl leading-snug text-primary md:col-span-5">
                  <Link href={faqItemPath(locale, service, i)} className="group inline">
                    <span className="link-underline pb-1">{item.q}</span>
                  </Link>
                </dt>
                <dd className="max-w-[56ch] text-secondary md:col-span-6 md:col-start-7">
                  {item.a}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label={t.services.related} className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <p className="label">{t.services.related}</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-12 md:grid-cols-3">
            {media.related.map((slug, i) => {
              const project = projectBySlug(slug)
              const copy = t.projects[slug]
              if (!project || !copy) return null

              return (
                <Reveal key={slug} delay={i * 0.08}>
                  <Link href={projectPath(locale, slug)} className="group block">
                    <div className="overflow-hidden bg-surface">
                      <Image
                        src={project.hero.src}
                        alt={copy.alt}
                        width={project.hero.width}
                        height={project.hero.height}
                        sizes="(max-width: 768px) 100vw, 32vw"
                        className="block h-auto w-full transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-primary">
                      <span className="link-underline pb-1">{project.title}</span>
                    </h3>
                    <p className="label mt-3">{copy.highlight}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-label={t.services.title} className="border-t border-line">
        <div className="container-studio py-16">
          <p className="label">{t.services.kicker}</p>
          <div className="mt-5 flex flex-col gap-2 md:flex-row md:gap-12">
            {others.map((key) => (
              <Link
                key={key}
                href={servicePath(locale, key)}
                className="group inline-flex items-center gap-3 py-1 font-display text-2xl text-secondary transition-colors hover:text-primary"
              >
                {t.services.cards[key].title}
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}

export function AboutView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <PageHead kicker={t.about.kicker} title={t.about.title} lede={t.about.lede} />

      <section className="container-studio pb-[var(--section-padding)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-[var(--gutter)]">
          <Reveal className="flex flex-col gap-6 md:col-span-6">
            {t.about.body.map((paragraph) => (
              <p key={paragraph} className="max-w-[52ch] text-secondary">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-line">
              {t.about.facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-5">
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-2 text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}
