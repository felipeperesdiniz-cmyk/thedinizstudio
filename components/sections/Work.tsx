'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'
import { workPath, type Locale } from '@/lib/i18n'
import Link from 'next/link'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Work({ locale, t }: { locale: Locale; t: Dictionary }) {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const rows = section.querySelectorAll<HTMLElement>('[data-project]')

    if (prefersReduced) {
      rows.forEach((row) => {
        const cover = row.querySelector('[data-project-cover]')
        const body = row.querySelector('[data-project-body]')
        if (cover) gsap.set(cover, { clipPath: 'inset(0% 0 0 0)' })
        if (body) gsap.set(body, { opacity: 1, y: 0 })
      })
      return
    }

    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        const cover = row.querySelector('[data-project-cover]')
        const body = row.querySelector('[data-project-body]')
        if (!cover || !body) return

        gsap
          .timeline({
            scrollTrigger: { trigger: row, start: 'top 80%' },
          })
          .fromTo(
            cover,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' },
          )
          .fromTo(
            body,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            0.15,
          )
      })
    }, section)

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    return () => {
      window.removeEventListener('load', onLoad)
      ctx.revert()
    }
  }, [prefersReduced])

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-heading"
      className="bg-background py-[var(--section-padding)]"
    >
      <div className="container-studio">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">{t.home.work.kicker}</p>
            <h2 id="work-heading" className="mt-6 max-w-[18ch] font-display text-4xl text-primary">
              {t.home.work.title}
            </h2>
          </div>
          <p className="max-w-[42ch] font-light text-secondary">{t.home.work.text}</p>
        </div>

        <div className="work-list mt-20 flex flex-col gap-[clamp(5rem,10vw,10rem)]">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              flipped={index % 2 === 1}
              locale={locale}
              t={t}
            />
          ))}
        </div>

        <Link
          href={workPath(locale)}
          className="group mt-20 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors hover:text-primary"
        >
          <span className="link-underline pb-1">{t.home.work.link}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
