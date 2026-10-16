'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const LINES = [
  { text: 'Every garment', from: 34, to: -26, accent: false },
  { text: 'has a', from: -46, to: 22, accent: true },
  { text: 'plot.', from: 40, to: -4, accent: false },
]

/** The cloth is caught by the wind and flies between three drifting lines. */
export function Plot() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=220%', pin: true, scrub: true },
    })
    gsap.utils.toArray<HTMLElement>('.t-plot-line').forEach((line, i) => {
      const l = LINES[i]!
      tl.fromTo(line, { xPercent: l.from }, { xPercent: l.to, ease: 'none', duration: 1 }, 0)
    })
    tl.fromTo('.t-plot-note', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.72)
    return registerSection('plot', tl.scrollTrigger!)
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-bone motion:h-svh" aria-label="Every garment has a plot">
      <div className="flex h-full flex-col justify-center gap-[1vh] py-[18vh] motion:py-0">
        {LINES.map((l) => (
          <p
            key={l.text}
            className={`t-plot-line whitespace-nowrap text-center font-display leading-[0.92] tracking-[-0.035em] text-[clamp(3.4rem,14vw,14rem)] ${l.accent ? 'italic text-oxide' : ''}`}
          >
            {l.text}
          </p>
        ))}
      </div>
      <div className="t-plot-note absolute bottom-6 left-[var(--gutter-x)] right-[var(--gutter-x)] flex justify-between">
        <span className="t-label opacity-70">Ours is told in five chapters</span>
        <span className="t-label opacity-70">Thread, loom, dye, cut, you</span>
      </div>
    </section>
  )
}
