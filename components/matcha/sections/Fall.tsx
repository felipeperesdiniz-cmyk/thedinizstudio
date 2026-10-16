'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const LINES = [
  { text: 'Some things', from: 38, to: -22, italic: false },
  { text: 'cannot be', from: -42, to: 18, italic: true },
  { text: 'rushed.', from: 30, to: -6, italic: false },
]

/** The tin leaves the hero, then tumbles back down through three drifting lines and lands. */
export function Fall() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=220%', pin: true, scrub: true },
    })
    const st = tl.scrollTrigger!
    gsap.utils.toArray<HTMLElement>('.m-fall-line').forEach((line, i) => {
      const l = LINES[i]!
      tl.fromTo(line, { xPercent: l.from }, { xPercent: l.to, ease: 'none', duration: 1 }, 0)
    })
    tl.fromTo('.m-fall-note', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.72)
    return registerSection('fall', st)
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-washi text-ink motion:h-svh" aria-label="Some things cannot be rushed">
      <div className="flex h-full flex-col justify-center gap-[2vh] py-[18vh] motion:py-0">
        {LINES.map((l) => (
          <p
            key={l.text}
            className={`m-fall-line whitespace-nowrap text-center font-display leading-[0.9] tracking-[-0.035em] text-[clamp(3.5rem,15vw,15rem)] ${l.italic ? 'italic text-forest/80' : ''}`}
          >
            {l.text}
          </p>
        ))}
      </div>
      <div className="m-fall-note absolute bottom-6 left-[var(--gutter-x)] right-[var(--gutter-x)] flex justify-between">
        <span className="m-label">Fig. 01</span>
        <span className="m-label">One harvest a year</span>
      </div>
    </section>
  )
}
