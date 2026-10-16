'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const DAYS = 21
const BARS = 16
const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Twenty one days under shade, told as a clock: each turn of the hand is a day,
 * and the cloth closes over the field as they pass. The clock face then opens
 * into the dark of the mill.
 */
export function Shade() {
  const ref = useRef<HTMLElement>(null)
  const day = useRef<HTMLSpanElement>(null)

  useSectionMotion(ref, () => {
    const split = SplitText.create('.m-shade-title', { type: 'lines', mask: 'lines', linesClass: 'm-l' })
    const ticks = gsap.utils.toArray<SVGLineElement>('.m-shade-tick')
    const counter = { d: 1 }
    const paint = () => {
      if (day.current) day.current.textContent = pad(Math.round(counter.d))
    }

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=340%', pin: true, scrub: true, invalidateOnRefresh: true },
    })

    tl.from(split.lines, { yPercent: 105, stagger: 0.08, duration: 0.5, ease: 'power3.out' }, 0)
      .from('.m-shade-copy', { autoAlpha: 0, y: 20, duration: 0.4, ease: 'power3.out' }, 0.3)
      .from('.m-shade-clock', { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: 'power3.out' }, 0.1)
      // Twenty one turns of the hand, one per day.
      .to('.m-shade-hand', { rotation: 360 * DAYS, svgOrigin: '200 200', duration: 6 }, 0.6)
      .to(counter, { d: DAYS, duration: 6, onUpdate: paint }, 0.6)
      .to(ticks, { opacity: 1, stroke: 'var(--matcha)', stagger: 6 / DAYS, duration: 0.05 }, 0.6)
      // The cloth closes from the top, leaving thin slits of light.
      .fromTo('.m-shade-bar', { scaleY: 0 }, { scaleY: 0.94, stagger: { each: 0.18, from: 'start' }, duration: 2.6 }, 0.8)
      .to(ref.current, { color: '#eeebe3', duration: 0.8 }, 3.2)
      .to('.m-shade-clock', { color: '#eeebe3', duration: 0.8 }, 3.2)
      // The face opens into the mill.
      .to('.m-shade-ui', { autoAlpha: 0, duration: 0.5 }, 6.8)
      .to(ref.current, { backgroundColor: '#0f140e', duration: 0.8 }, 6.9)
      .to('.m-shade-face', { scale: () => (Math.hypot(window.innerWidth, window.innerHeight) / (document.querySelector('.m-shade-face')?.getBoundingClientRect().width || 1)) * 1.05, duration: 1.2, ease: 'power2.in' }, 6.9)

    const unregister = registerSection('shade', tl.scrollTrigger!)
    return () => {
      unregister()
      split.revert()
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-celadon text-ink motion:h-svh" aria-label="Twenty one days under shade">
      {/* The shade cloth. */}
      <div className="pointer-events-none absolute inset-0 hidden flex-col motion:flex" aria-hidden="true">
        {Array.from({ length: BARS }, (_, i) => (
          <div key={i} className="relative flex-1">
            <div className="m-shade-bar absolute inset-0 origin-top bg-night" />
          </div>
        ))}
      </div>

      <div className="relative grid h-full grid-cols-1 gap-12 px-[var(--gutter-x)] py-[16vh] md:grid-cols-12 motion:py-0">
        <div className="m-shade-ui flex flex-col justify-between md:col-span-4 motion:py-[14vh]">
          <div>
            <p className="m-label opacity-60">02 Shade</p>
            <h2 className="m-shade-title mt-5 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em]">
              Twenty one days without the sun.
            </h2>
          </div>
          <p className="m-shade-copy mt-8 max-w-sm text-[0.95rem] leading-relaxed opacity-80">
            Weeks before the first harvest, the bushes are veiled under straw and cloth. Starved of light, the leaf holds on to its theanine
            and deepens its chlorophyll. That is where the colour comes from, and the calm.
          </p>
        </div>

        <div className="relative flex items-center justify-center md:col-span-8">
          <div className="m-shade-clock relative aspect-square w-[min(78vw,62vh,560px)]">
            <div className="m-shade-face absolute inset-[12%] rounded-full bg-night" aria-hidden="true" />
            <svg viewBox="0 0 400 400" className="m-shade-ui absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {Array.from({ length: DAYS }, (_, i) => (
                <line
                  key={i}
                  className="m-shade-tick"
                  x1="200"
                  y1="8"
                  x2="200"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.25"
                  transform={`rotate(${(i / DAYS) * 360} 200 200)`}
                />
              ))}
              <g className="m-shade-hand">
                <line x1="200" y1="200" x2="200" y2="46" stroke="var(--matcha)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="200" cy="200" r="5" fill="var(--matcha)" />
              </g>
            </svg>
            <div className="m-shade-ui absolute inset-0 flex flex-col items-center justify-center text-washi">
              <span className="m-label opacity-60">Day</span>
              <span ref={day} className="font-display text-[clamp(4rem,11vw,9rem)] leading-none tabular-nums">
                {DAYS}
              </span>
              <span className="m-label opacity-60">of {DAYS}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
