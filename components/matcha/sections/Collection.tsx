'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { VARIANTS } from '../content'
import { useMatcha, useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { ClockFace } from '../ui'

/**
 * The range as an index: big names in a list, the tin beside it changing to
 * whichever tea is under the pointer, or in the middle of the screen on touch.
 */
export function Collection() {
  const ref = useRef<HTMLElement>(null)
  const { stage, ready } = useMatcha()
  const [active, setActive] = useState(0)
  const hovering = useRef(false)

  useEffect(() => {
    stage?.setVariant(active)
  }, [active, stage])

  // Anchor for the tin's path; needed with or without scroll animation.
  useEffect(() => {
    if (!ready || !ref.current) return
    const st = ScrollTrigger.create({ trigger: ref.current, start: 'top bottom', end: 'bottom top' })
    const unregister = registerSection('collection', st)
    const rows = gsap.utils.toArray<HTMLElement>('.m-row', ref.current)
    const centre = rows.map((row, i) =>
      ScrollTrigger.create({
        trigger: row,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => {
          if (self.isActive && !hovering.current) setActive(i)
        },
      }),
    )
    return () => {
      unregister()
      st.kill()
      centre.forEach((s) => s.kill())
    }
  }, [ready])

  useSectionMotion(ref, () => {
    gsap.from('.m-col-head > *', {
      yPercent: 40,
      autoAlpha: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.m-col-head', start: 'top 80%' },
    })
    ScrollTrigger.batch('.m-row', {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.from(batch, { yPercent: 30, autoAlpha: 0, stagger: 0.08, duration: 1.2, ease: 'expo.out' }),
    })
  })

  return (
    <section ref={ref} id="collection" className="relative bg-washi px-[var(--gutter-x)] pb-[22vh] pt-[24vh] text-ink" aria-labelledby="m-col-title">
      <div className="m-col-head grid grid-cols-1 gap-6 md:w-[60%] md:grid-cols-7">
        <p className="m-label opacity-60 md:col-span-2">05 The collection</p>
        <h2 id="m-col-title" className="font-display text-[clamp(2.4rem,5.4vw,5.6rem)] leading-[0.95] tracking-[-0.02em] md:col-span-5">
          Four teas for four hours of the day.
        </h2>
      </div>

      <ul className="m-rows mt-[12vh] border-t border-ink/15 md:w-[60%]">
        {VARIANTS.map((v, i) => (
          <li
            key={v.id}
            className="m-row group border-b border-ink/15"
            data-active={active === i}
            data-cursor={v.name}
            onPointerEnter={() => {
              hovering.current = true
              setActive(i)
            }}
            onPointerLeave={() => {
              hovering.current = false
            }}
          >
            <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-3 py-6 md:grid-cols-[3rem_1fr_auto_auto] md:py-8">
              <span className="m-label opacity-60">{v.no}</span>
              <h3 className="m-row-name flex items-baseline gap-4 font-display leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,7.4vw,7.4rem)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                {v.name}
                <span className="text-[0.38em] opacity-50">{v.kanji}</span>
              </h3>
              <div className="flex items-center gap-2 md:justify-self-end">
                <ClockFace time={v.time} className="h-6 w-6" />
                <span className="m-label tabular-nums">{v.time}</span>
              </div>
              <p className="m-label hidden text-right md:block">€{v.price}</p>
              <p className="col-start-2 col-end-4 text-[0.9rem] opacity-70 md:col-end-5">
                {v.grade}. {v.notes}. <span className="md:hidden">€{v.price}, 30 g.</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="m-label mt-8 opacity-50">Concept pricing. Tsuyu is a fictional brand.</p>
    </section>
  )
}
