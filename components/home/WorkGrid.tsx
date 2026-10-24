import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { LoopVideo } from '@/components/ui/LoopVideo'
import { PROJECTS } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'
import type { HomeStory } from '@/content/copy/home-story'
import { projectPath, workPath, type Locale } from '@/lib/i18n'

/** A recording of each finished site, scrolling, played in place of its still. */
const MOTION: Record<string, { src: string; poster: string }> = {
  'bordados-com-amor-by-mari': { src: '/films/bordados-site.mp4', poster: '/films/bordados-site-poster.webp' },
  'blend-hair-boutique': { src: '/films/blend-site.mp4', poster: '/films/blend-site-poster.webp' },
  'rafa-diniz': { src: '/films/rafa-site.mp4', poster: '/films/rafa-site-poster.webp' },
  'renata-estrella-patisserie': { src: '/films/renata-site.mp4', poster: '/films/renata-site-poster.webp' },
}

/** The work as a shop window: two to a row, edge to edge, each with a short caption centred underneath. */
export function WorkGrid({ locale, t, story }: { locale: Locale; t: Dictionary; story: HomeStory['work'] }) {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-[var(--nav-height)] py-[var(--section-padding)]">
      <Reveal className="container-studio mb-12 flex flex-col items-center text-center md:mb-16">
        <p className="label">{story.kicker}</p>
        <h2 id="work-heading" className="mt-5 text-5xl">
          {t.home.work.title}
        </h2>
      </Reveal>

      <ul className="grid grid-cols-1 gap-x-[var(--gutter)] gap-y-14 px-[var(--gutter)] md:grid-cols-2 md:gap-y-20">
        {PROJECTS.map((project, i) => {
          const copy = t.projects[project.slug]!
          return (
            <li key={project.slug}>
              <Reveal delay={(i % 2) * 0.08}>
                <Link href={projectPath(locale, project.slug)} className="group block">
                  <div className="relative aspect-video overflow-hidden bg-surface">
                    {MOTION[project.slug] ? (
                      <LoopVideo
                        src={MOTION[project.slug]!.src}
                        poster={MOTION[project.slug]!.poster}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.03]"
                      />
                    ) : (
                      <Image
                        src={project.hero.src}
                        alt={copy.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL={project.blurDataURL}
                        className="object-cover object-left-top transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="mt-6 flex flex-col items-center px-4 text-center">
                    <h3 className="text-2xl">{project.title}</h3>
                    <p className="label mt-3">
                      {copy.sector} · {copy.location}
                    </p>
                    <p className="mt-4 max-w-[46ch] text-sm text-secondary">{copy.highlight}</p>
                    <span className="label mt-5 border-b border-current pb-1 text-primary transition-opacity group-hover:opacity-60">
                      {story.view}
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>

      <div className="mt-16 flex justify-center md:mt-20">
        <Link href={workPath(locale)} className="btn btn-ghost">
          {t.home.work.link}
        </Link>
      </div>
    </section>
  )
}
