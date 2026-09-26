import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { ReelPlayer } from '@/components/ui/ReelPlayer'
import { CtaBand } from '@/components/ui/CtaBand'
import { PROJECTS, type Picture, type Project } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'
import { projectPath, workPath, type Locale } from '@/lib/i18n'

const STORY_LAYOUT = [
  'md:col-span-7 md:col-start-1',
  'md:col-span-4 md:col-start-9 md:mt-28',
  'md:col-span-5 md:col-start-2',
  'md:col-span-6 md:col-start-7 md:mt-32',
  'md:col-span-8 md:col-start-3',
]

function Story({ images, captions }: { images: readonly Picture[]; captions?: readonly string[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-[var(--gutter)] gap-y-16 md:grid-cols-12 md:gap-y-24">
      {images.map((image, i) => (
        <figure key={image.src} className={STORY_LAYOUT[i % STORY_LAYOUT.length]}>
          <Reveal as="image" className="overflow-hidden bg-surface">
            <Image
              src={image.src}
              alt={captions?.[i] ?? ''}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="block h-auto w-full"
            />
          </Reveal>
          {captions?.[i] && <figcaption className="label mt-5">{captions[i]}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

function Gallery({
  images,
  captions,
}: {
  images: readonly Picture[]
  captions?: readonly string[]
}) {
  const portrait = images[0] && images[0].height > images[0].width

  return (
    <div
      className={`grid gap-[var(--gutter)] ${
        portrait ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'
      }`}
    >
      {images.map((image, i) => (
        <Reveal
          key={image.src}
          as="image"
          delay={i * 0.08}
          className={`overflow-hidden bg-surface ${
            !portrait && images.length % 2 === 1 && i === images.length - 1 ? 'md:col-span-2' : ''
          }`}
        >
          <Image
            src={image.src}
            alt={captions?.[i] ?? ''}
            width={image.width}
            height={image.height}
            sizes={portrait ? '(max-width: 768px) 50vw, 25vw' : '(max-width: 768px) 100vw, 55vw'}
            className="block h-auto w-full"
          />
        </Reveal>
      ))}
    </div>
  )
}

export function WorkIndexView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <header className="container-studio pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-24 md:pt-[calc(var(--nav-height)+8rem)]">
        <Reveal>
          <p className="label">{t.work.kicker}</p>
          <h1 className="mt-6 max-w-[16ch] font-display text-6xl leading-[0.95] text-primary">
            {t.work.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[46ch] text-2xl leading-snug text-primary/90">{t.work.lede}</p>
        </Reveal>
      </header>

      <div className="container-studio pb-[var(--section-padding)]">
        <ul className="border-t border-line">
          {PROJECTS.map((project, i) => {
            const copy = t.projects[project.slug]!

            return (
              <li key={project.slug}>
                <Reveal delay={i * 0.06}>
                  <Link
                    href={projectPath(locale, project.slug)}
                    className="group grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:items-center md:gap-8"
                  >
                    <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>

                    <div className="overflow-hidden bg-surface md:col-span-4 md:self-center">
                      <Image
                        src={project.hero.src}
                        alt={copy.alt}
                        width={project.hero.width}
                        height={project.hero.height}
                        placeholder="blur"
                        blurDataURL={project.blurDataURL}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="block h-auto w-full transition-[scale] duration-700 will-change-[scale] group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="md:col-span-4">
                      <h2 className="font-display text-3xl leading-[1.05] text-primary">
                        <span className="link-underline pb-1">{project.title}</span>
                      </h2>
                      <p className="label mt-3">
                        {copy.sector} · {copy.location}
                      </p>
                    </div>

                    <p className="max-w-[28ch] text-secondary md:col-span-2">{copy.highlight}</p>

                    <span
                      aria-hidden="true"
                      className="font-display text-2xl text-secondary transition-[translate,color] duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-1 md:justify-self-end"
                    >
                      →
                    </span>
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

export function CaseStudyView({
  locale,
  project,
  t,
}: {
  locale: Locale
  project: Project
  t: Dictionary
}) {
  const copy = t.projects[project.slug]!
  const index = PROJECTS.findIndex((p) => p.slug === project.slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]!
  const number = String(index + 1).padStart(2, '0')
  const host = new URL(project.url).hostname.replace(/^www\./, '')
  const { identity } = copy

  return (
    <article className="bg-background">
      <header className="container-studio pb-20 pt-[calc(var(--nav-height)+5rem)] md:pb-28 md:pt-[calc(var(--nav-height)+8rem)]">
        <Reveal>
          <Link
            href={workPath(locale)}
            className="label -my-3 inline-flex items-center gap-2 py-3 transition-colors hover:text-primary"
          >
            <span aria-hidden="true">←</span> {t.work.allWork}
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-16 md:mt-24">
          <p className="label">
            {number} / {copy.sector}
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-primary">
            {project.title}
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-[var(--gutter)]">
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="max-w-[36ch] text-2xl leading-snug text-primary/90">{copy.lede}</p>
          </Reveal>

          <Reveal delay={0.25} className="md:col-span-4 md:col-start-9">
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-1">
              <div className="row-span-2 md:row-span-1">
                <dt className="label">{t.caseStudy.scope}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-secondary">
                  {copy.services.map((service) => (
                    <span key={service} className="block">
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="label">{t.caseStudy.where}</dt>
                <dd className="mt-3 text-sm text-secondary">{copy.location}</dd>
              </div>
              <div>
                <dt className="label">{t.caseStudy.live}</dt>
                <dd className="mt-3 text-sm">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex max-w-full items-center gap-2 text-primary"
                  >
                    <span className="link-underline min-w-0 break-all">{host}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="container-studio">
        <Reveal as="image" className="overflow-hidden bg-surface">
          <Image
            src={project.hero.src}
            alt={copy.alt}
            width={project.hero.width}
            height={project.hero.height}
            priority
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="block h-auto w-full"
          />
        </Reveal>
      </div>

      <section aria-labelledby="identity" className="container-studio py-[var(--section-padding)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-[var(--gutter)]">
          <Reveal className="md:col-span-5">
            <p className="label">{t.caseStudy.identity}</p>
            <h2 id="identity" className="mt-6 font-display text-4xl text-primary">
              {identity.title}
            </h2>
            <p className="mt-8 max-w-[44ch] text-secondary">{identity.text}</p>
          </Reveal>

          <Reveal as="image" className="overflow-hidden md:col-span-6 md:col-start-7">
            {project.mark ? (
              <div className="flex aspect-[4/3] items-center justify-center bg-[#e8e7e4] p-[12%]">
                <Image
                  src={project.mark.src}
                  alt={`${project.title} logo`}
                  width={project.mark.width}
                  height={project.mark.height}
                  sizes="(max-width: 768px) 80vw, 35vw"
                  className="h-auto max-h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-surface">
                <span className="font-display text-3xl text-primary">
                  {identity.wordmark?.name}
                </span>
                <span className="label tracking-[0.4em]">{identity.wordmark?.sub}</span>
              </div>
            )}
          </Reveal>
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal className="md:w-1/2">
            <p className="label">{t.caseStudy.type}</p>
            <ul className="mt-6 border-t border-line">
              {identity.type.map((face) => (
                <li
                  key={face.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-5"
                >
                  <span className="text-primary">{face.name}</span>
                  <span className="label">{face.role}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label={copy.sector} className="border-y border-line">
        <div className="container-studio grid grid-cols-1 md:grid-cols-3">
          {copy.figures.map((figure, i) => (
            <Reveal
              key={figure.label}
              delay={i * 0.1}
              className={`py-14 md:py-20 ${
                i > 0 ? 'border-t border-line md:border-l md:border-t-0 md:pl-10' : ''
              }`}
            >
              <p className="font-display text-[clamp(3rem,5.5vw,5rem)] leading-none text-primary">
                {figure.value}
              </p>
              <p className="mt-6 text-sm text-primary">{figure.label}</p>
              <p className="mt-2 max-w-[28ch] text-sm text-secondary">{figure.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {copy.chapters.map((chapter, i) => {
        const media = project.chapters[i] ?? {}
        const hasMedia = Boolean(media.images || media.video)

        return (
          <section
            key={chapter.title}
            aria-label={chapter.title}
            className={
              hasMedia
                ? 'container-studio py-[var(--section-padding)]'
                : 'container-studio border-t border-line py-20 md:py-24'
            }
          >
            <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-[var(--gutter)]">
              <div className="md:col-span-5">
                <p className="label">{chapter.kicker}</p>
                <h2
                  className={`mt-6 font-display text-primary ${hasMedia ? 'text-4xl' : 'text-3xl'}`}
                >
                  {chapter.title}
                </h2>
              </div>
              <p className="max-w-[46ch] text-secondary md:col-span-5 md:col-start-8 md:self-center">
                {chapter.text}
              </p>
            </Reveal>

            {media.images && (
              <div className="mt-16 md:mt-24">
                {media.story ? (
                  <Story images={media.images} captions={chapter.captions} />
                ) : (
                  <Gallery images={media.images} captions={chapter.captions} />
                )}
              </div>
            )}

            {media.video && (
              <div className="mt-16 grid grid-cols-1 md:mt-24 md:grid-cols-12">
                <div
                  className={
                    media.video.height > media.video.width
                      ? 'md:col-span-4 md:col-start-7'
                      : 'md:col-span-10 md:col-start-2'
                  }
                >
                  <Reveal as="image" className="overflow-hidden bg-surface">
                    <ReelPlayer {...media.video} labels={t.player} />
                  </Reveal>
                  {chapter.videoCaption && <p className="label mt-5">{chapter.videoCaption}</p>}
                </div>
              </div>
            )}
          </section>
        )
      })}

      <section aria-labelledby="site" className="container-studio pb-[var(--section-padding)]">
        <Reveal>
          <p id="site" className="label">
            {t.caseStudy.theSite}
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-12 md:grid-cols-2">
          {project.screens.map((screen, i) => (
            <figure key={screen.src} className={i % 2 === 1 ? 'md:mt-24' : ''}>
              <Reveal as="image" className="overflow-hidden bg-surface">
                <Image
                  src={screen.src}
                  alt={`${project.title}, ${copy.screens[i] ?? ''}`}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="block h-auto w-full"
                />
              </Reveal>
              <figcaption className="label mt-4">
                {String(i + 1).padStart(2, '0')} · {copy.screens[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        aria-label={copy.quote.name}
        className="container-studio pb-[var(--section-padding)]"
      >
        <Reveal>
          <blockquote className="max-w-[34ch] font-display text-2xl leading-[1.3] text-primary md:text-3xl md:leading-[1.25]">
            “{copy.quote.text}”
          </blockquote>
          <p className="label mt-10">
            {copy.quote.name} · {copy.quote.role}
          </p>
        </Reveal>
      </section>

      <Link href={projectPath(locale, next.slug)} className="group block border-t border-line">
        <div className="container-studio flex flex-col gap-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div>
            <p className="label">{t.work.nextProject}</p>
            <p className="mt-6 font-display text-6xl leading-[0.95] text-secondary transition-colors duration-700 group-hover:text-primary">
              {next.title}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="font-display text-5xl text-secondary transition-[translate,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:text-primary"
          >
            →
          </span>
        </div>
      </Link>

      <CtaBand locale={locale} t={t} />
    </article>
  )
}
