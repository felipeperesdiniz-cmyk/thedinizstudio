'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const FACTS = [
  { k: 'Flax', v: 'Grown in Normandy' },
  { k: 'Yarn', v: 'Wet spun in Guimarães' },
  { k: 'Length', v: '2,340 m in one overshirt' },
]

/** The cloth unravels to nothing, and one thread is drawn across the dark. */
export function Thread() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const split = SplitText.create('.t-thread-title', { type: 'chars,lines', mask: 'lines', charsClass: 't-c' })
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=200%', pin: true, scrub: true },
    })
    tl.fromTo('.t-thread-path', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.5, ease: 'power1.inOut' }, 0.3)
      .from(split.chars, { yPercent: 110, stagger: 0.012, duration: 0.2, ease: 'power3.out' }, 0.36)
      .from('.t-thread-fact', { autoAlpha: 0, y: 20, stagger: 0.06, duration: 0.14, ease: 'power2.out' }, 0.68)
      .fromTo('.t-thread-chapter', { autoAlpha: 0 }, { autoAlpha: 0.6, duration: 0.1 }, 0.3)
      .to({}, { duration: 0.1 })
    const unregister = registerSection('thread', tl.scrollTrigger!)
    return () => {
      unregister()
      split.revert()
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-night text-bone motion:h-svh" aria-labelledby="t-thread-title">
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-[40vh] w-full -translate-y-1/2 motion:block"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="t-thread-path"
          pathLength={1}
          d="M-20 230 C 140 90, 260 330, 410 210 S 640 70, 760 220 S 900 320, 1020 170"
          fill="none"
          stroke="var(--oxide)"
          strokeWidth={1.5}
          strokeDasharray="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative flex h-full flex-col justify-between px-[var(--gutter-x)] py-[16vh] motion:py-[14vh]">
        <p className="t-thread-chapter t-label">01 The thread</p>
        <h2 id="t-thread-title" className="t-thread-title max-w-[14ch] font-display text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.03em]">
          It begins with <em className="text-oxide">one</em> thread.
        </h2>
        <dl className="grid grid-cols-1 gap-6 border-t border-bone/15 pt-6 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.k} className="t-thread-fact">
              <dt className="t-label opacity-50">{f.k}</dt>
              <dd className="mt-2 font-display text-[clamp(1.3rem,2.2vw,2rem)] leading-tight">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
