'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'
import { projectPath, type Locale } from '@/lib/i18n'

interface ProjectCardProps {
  project: Project
  index: number
  flipped: boolean
  locale: Locale
  t: Dictionary
}

export function ProjectCard({ project, index, flipped, locale, t }: ProjectCardProps) {
  const copy = t.projects[project.slug]!
  const { highlight } = copy

  return (
    <article data-project>
      <Link
        href={projectPath(locale, project.slug)}
        className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-[var(--gutter)]"
      >
        <div
          data-project-cover
          className={`relative overflow-hidden bg-surface md:col-span-7 ${
            flipped ? 'md:order-2 md:col-start-6' : 'md:order-1'
          }`}
        >
          <Image
            src={project.hero.src}
            alt={copy.alt}
            width={project.hero.width}
            height={project.hero.height}
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            sizes="(max-width: 768px) 100vw, 58vw"
            // Tailwind v4 emits the standalone `scale` property, so the transition names it.
            className="block h-auto w-full pointer-fine:brightness-[0.8] transition-[scale,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[scale] group-hover:scale-[1.06] group-hover:brightness-100 group-focus-visible:scale-[1.06] group-focus-visible:brightness-100"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 left-5 flex translate-y-3 items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-white opacity-0 transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            <span className="h-px w-8 bg-white" />
            {t.work.caseStudy}
          </span>
        </div>

        <div
          data-project-body
          className={`flex flex-col gap-5 md:col-span-4 ${
            flipped ? 'md:order-1 md:col-start-1' : 'md:order-2 md:col-start-9'
          }`}
        >
          <span className="label transition-colors duration-500 group-hover:text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="font-display text-3xl leading-[1.05] text-primary">
            <span className="link-underline pb-1">{project.title}</span>
          </h3>

          <p className="label">
            {copy.sector}
            <br />
            {copy.location}
          </p>

          <p className="max-w-[46ch] text-base text-secondary transition-colors duration-500 group-hover:text-primary/80">
            {copy.description}
          </p>

          {highlight && (
            <p className="flex items-center gap-3 text-sm text-primary">
              <span aria-hidden="true" className="h-px w-6 bg-secondary" />
              {highlight}
            </p>
          )}

          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors duration-500 group-hover:text-primary group-focus-visible:text-primary">
            {t.work.viewProject}
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  )
}
