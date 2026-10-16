'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { DYES, VARIANTS } from '../content'
import { useFashion, useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

/**
 * The pieces as an index: big names in a list, the garment on its hanger
 * beside it changing to whichever piece is under the pointer, or in the
 * middle of the screen on touch.
 */
export function Collection() {
  const ref = useRef<HTMLElement>(null)
  const { stage, ready } = useFashion()
  const [active, setActive] = useState(0)
  const hovering = useRef(false)

  useEffect(() => {
    stage?.setVariant(active)
  }, [active, stage])

  // Anchor for the cloth's path; needed with or without scroll animation.
  useEffect(() => {
    if (!ready || !ref.current) return
    const st = ScrollTrigger.create({ trigger: ref.current, start: 'top bottom', end: 'bottom top' })
    const unregister = registerSection('collection', st)
    // On touch, the piece nearest the middle of the screen is the active one.
    // Measured on every update so a fast scroll that skips a row still lands right.
    const rows = gsap.utils.toArray<HTMLElement>('.t-row', ref.current)
    const centre = ScrollTrigger.create({
      trigger: rows[0]!.parentElement,
      start: 'top 55%',
      end: 'bottom 55%',
      onUpdate: () => {
        if (hovering.current) return
        const line = window.innerHeight * 0.55
        let best = 0
        let dist = Infinity
        rows.forEach((row, i) => {
          const r = row.getBoundingClientRect()
          const d = line < r.top ? r.top - line : line > r.bottom ? line - r.bottom : 0
          if (d < dist) {
            dist = d
            best = i
          }
        })
        setActive(best)
      },
    })
    return () => {
      unregister()
      st.kill()
      centre.kill()
    }
  }, [ready])

  useSectionMotion(ref, () => {
    gsap.from('.t-col-head > *', {
      yPercent: 40,
      autoAlpha: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.t-col-head', start: 'top 80%' },
    })
    ScrollTrigger.batch('.t-row', {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.from(batch, { yPercent: 30, autoAlpha: 0, stagger: 0.08, duration: 1.2, ease: 'expo.out' }),
    })
  })

  return (
    <section ref={ref} id="collection" className="relative bg-bone px-[var(--gutter-x)] pb-[22vh] pt-[24vh] text-ink" aria-labelledby="t-col-title">
      <div className="t-col-head grid grid-cols-1 gap-6 md:w-[58%] md:grid-cols-7">
        <p className="t-label opacity-60 md:col-span-2">05 The collection</p>
        <h2 id="t-col-title" className="max-w-[68%] font-display text-[clamp(2.4rem,5.2vw,5.4rem)] leading-[0.95] tracking-[-0.02em] md:col-span-5 md:max-w-none">
          Four pieces. Each one <em className="text-oxide">made once,</em> for one person.
        </h2>
      </div>

      <ul className="t-rows mt-[12vh] border-t border-ink/15 md:w-[58%]">
        {VARIANTS.map((v, i) => {
          const dye = DYES[v.dye]!
          return (
            <li
              key={v.id}
              className="t-row group border-b border-ink/15"
              data-active={active === i}
              data-cursor="View"
              onPointerEnter={() => {
                hovering.current = true
                setActive(i)
              }}
              onPointerLeave={() => {
                hovering.current = false
              }}
            >
              <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-3 py-6 md:grid-cols-[3rem_1fr_auto_auto] md:py-8">
                <span className="t-label opacity-60">{v.no}</span>
                <h3 className="t-row-name font-display leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,6.4vw,6.6rem)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                  {v.name}
                </h3>
                <div className="flex items-center gap-2 md:justify-self-end">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: dye.cloth }} aria-hidden="true" />
                  <span className="t-label">{dye.name}</span>
                </div>
                <p className="t-label hidden text-right md:block">€{v.price}</p>
                <p className="col-start-2 col-end-4 text-[0.9rem] opacity-70 md:col-end-5">
                  {v.cloth}, {v.weight}. Ready in {v.days} days. <span className="md:hidden">€{v.price}.</span>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="t-label mt-8 opacity-50">Concept pricing. Trama is a fictional brand.</p>
    </section>
  )
}
