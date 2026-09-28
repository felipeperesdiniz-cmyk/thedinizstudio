import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '@/components/ui/CtaBand'
import { PageHead } from '@/components/pages/ServiceViews'
import {
  INDUSTRY_KEYS,
  industryPath,
  projectPath,
  servicePath,
  type IndustryKey,
  type Locale,
} from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'
import { INDUSTRIES } from '@/content/industries'
import { projectBySlug } from '@/content/projects'

export function IndustriesIndexView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <PageHead kicker={t.industries.kicker} title={t.industries.title} lede={t.industries.lede} />

      <div className="container-studio pb-[var(--section-padding)]">
        <ul className="grid grid-cols-1 gap-x-[var(--gutter)] gap-y-16 md:grid-cols-2">
          {INDUSTRY_KEYS.map((key, i) => {
            const project = projectBySlug(INDUSTRIES[key].project)
            const copy = t.projects[INDUSTRIES[key].project]
            if (!project || !copy) return null

            return (
              <li key={key}>
                <Reveal delay={(i % 2) * 0.08}>
                  <Link href={industryPath(locale, key)} className="group block">
                    <div className="overflow-hidden bg-surface">
                      <Image
                        src={project.hero.src}
                        alt={copy.alt}
                        width={project.hero.width}
                        height={project.hero.height}
                        sizes="(max-width: 768px) 100vw, 48vw"
                        className="block h-auto w-full transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                    <h2 className="mt-6 font-display text-3xl text-primary">
                      <span className="link-underline pb-1">{t.industries.cards[key].title}</span>
                    </h2>
                    <p className="mt-3 max-w-[48ch] text-secondary">{t.industries.cards[key].text}</p>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}

export function IndustryView({
  locale,
  industry,
  t,
}: {
  locale: Locale
  industry: IndustryKey
  t: Dictionary
}) {
  const page = t.industryPages[industry]
  const slug = INDUSTRIES[industry].project
  const project = projectBySlug(slug)
  const projectCopy = t.projects[slug]
  const others = INDUSTRY_KEYS.filter((key) => key !== industry)

  return (
    <article>
      <PageHead kicker={page.kicker} title={page.title} lede={page.lede} />

      {project && projectCopy && (
        <div className="container-studio">
          <Reveal as="image" className="overflow-hidden bg-surface">
            <Image
              src={project.hero.src}
              alt={projectCopy.alt}
              width={project.hero.width}
              height={project.hero.height}
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
              className="block h-auto w-full"
            />
          </Reveal>
        </div>
      )}

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
      </section>

      <section aria-labelledby="needs" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <h2 id="needs" className="font-display text-4xl text-primary">
              {page.needs.title}
            </h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-12 md:grid-cols-2">
            {page.needs.items.map((item, i) => (
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

      {project && projectCopy && (
        <section aria-labelledby="proof" className="border-t border-line">
          <div className="container-studio grid grid-cols-1 gap-12 py-[var(--section-padding)] md:grid-cols-12 md:gap-[var(--gutter)]">
            <Reveal as="image" className="md:col-span-7">
              <Link href={projectPath(locale, slug)} className="group block overflow-hidden bg-surface">
                <Image
                  src={project.screens[0]!.src}
                  alt={`${project.title}, ${projectCopy.screens[0] ?? ''}`}
                  width={project.screens[0]!.width}
                  height={project.screens[0]!.height}
                  sizes="(max-width: 768px) 100vw, 56vw"
                  className="block h-auto w-full transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col justify-center gap-6 md:col-span-5">
              <p className="label">{t.industries.caseStudy}</p>
              <h2 id="proof" className="font-display text-4xl leading-[1.05] text-primary">
                {page.proof.title}
              </h2>
              <p className="max-w-[46ch] text-secondary">{page.proof.text}</p>
              <Link
                href={projectPath(locale, slug)}
                className="group inline-flex items-center gap-3 self-start py-2 font-mono text-xs uppercase tracking-[0.08em] text-primary"
              >
                <span className="link-underline pb-1">{t.industries.readCase}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section aria-labelledby="industry-faq" className="border-t border-line">
        <div className="container-studio py-[var(--section-padding)]">
          <Reveal>
            <h2 id="industry-faq" className="font-display text-4xl text-primary">
              {page.faq.title}
            </h2>
          </Reveal>

          <dl className="mt-14 border-t border-line">
            {page.faq.items.map((item, i) => (
              <Reveal
                key={item.q}
                delay={i * 0.04}
                className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
              >
                <dt className="font-display text-2xl leading-snug text-primary md:col-span-5">
                  {item.q}
                </dt>
                <dd className="max-w-[56ch] text-secondary md:col-span-6 md:col-start-7">
                  {item.a}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label={t.industries.others} className="border-t border-line">
        <div className="container-studio py-16">
          <p className="label">{t.industries.others}</p>
          <div className="mt-5 flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-x-12">
            {others.map((key) => (
              <Link
                key={key}
                href={industryPath(locale, key)}
                className="group inline-flex items-center gap-3 py-1 font-display text-2xl text-secondary transition-colors hover:text-primary"
              >
                {t.industries.cards[key].title}
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-500 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            ))}
            <Link
              href={servicePath(locale, 'web-design')}
              className="group inline-flex items-center gap-3 py-1 font-display text-2xl text-secondary transition-colors hover:text-primary"
            >
              {t.services.cards['web-design'].title}
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-500 group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}
