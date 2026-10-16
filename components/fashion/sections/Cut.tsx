'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { CUT_STEPS } from '../content'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

// The overshirt pattern, drafted half scale. Each piece carries a grainline.
const PIECES = [
  { d: 'M24 70 Q48 82 70 60 L112 70 L106 112 Q102 132 114 144 L116 300 L24 300 Z', label: 'Front ×2', lx: 64, ly: 240, grain: [64, 120, 200] },
  { d: 'M138 56 L236 56 L244 72 L238 112 Q234 132 246 144 L248 300 L138 300 Z', label: 'Back, on fold', lx: 192, ly: 240, grain: [192, 110, 200] },
  { d: 'M266 110 Q322 52 378 110 L362 300 L282 300 Z', label: 'Sleeve ×2', lx: 322, ly: 240, grain: [322, 130, 210] },
  { d: 'M266 22 Q322 4 378 22 L378 46 Q322 30 266 46 Z', label: 'Collar ×2', lx: 322, ly: 70, grain: null },
] as const

/** Laid flat on the cutting table: the pattern is drafted, the cloth is cut to it, then sewn. */
export function Cut() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const steps = gsap.utils.toArray<HTMLElement>('.t-cut-step')
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=300%', pin: true, scrub: true },
    })
    tl.to({}, { duration: 1 }, 0)
    tl.from('.t-cut-in', { autoAlpha: 0, y: 20, stagger: 0.015, duration: 0.06, ease: 'power2.out' }, 0)
      .fromTo('.t-cut-piece', { strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.03, duration: 0.14, ease: 'power1.inOut' }, 0.03)
      .from('.t-cut-mark', { autoAlpha: 0, stagger: 0.01, duration: 0.04 }, 0.15)
    // One step lit at a time, in step with the cloth: drafted, then cut, then sewn.
    const at = [0, 0.2, 0.66]
    steps.forEach((s, i) => {
      tl.set(steps, { opacity: 0.3 }, at[i]!).set(s, { opacity: 1 }, at[i]!)
    })
    tl.fromTo('.t-cut-bar', { scaleX: 0 }, { scaleX: 1, duration: 0.9 }, 0)
    return registerSection('cut', tl.scrollTrigger!)
  })

  return (
    <section ref={ref} className="t-paper relative overflow-hidden bg-paper text-ink motion:h-svh" aria-labelledby="t-cut-title">
      <div className="grid h-full grid-cols-1 content-start gap-8 px-[var(--gutter-x)] py-[16vh] md:grid-cols-12 md:content-between md:py-[13vh] motion:pt-[13vh]">
        <div className="md:col-span-5">
          <p className="t-cut-in t-label opacity-60">04 The cut</p>
          <h2 id="t-cut-title" className="t-cut-in mt-5 font-display text-[clamp(1.9rem,4.2vw,4.2rem)] leading-[1] tracking-[-0.02em]">
            One pattern, drafted <em className="text-indigo">to your measurements.</em>
          </h2>
        </div>

        <svg viewBox="0 0 400 320" className="hidden max-h-[34vh] w-full max-w-[34rem] md:col-span-5 md:col-start-1 md:block" aria-hidden="true">
          {PIECES.map((p) => (
            <g key={p.label}>
              <path className="t-cut-piece" pathLength={1} d={p.d} fill="none" stroke="currentColor" strokeWidth={1.2} strokeDasharray="1" />
              <text className="t-cut-mark font-mono" x={p.lx} y={p.ly} fontSize="9" letterSpacing="1.2" textAnchor="middle" fill="currentColor">
                {p.label.toUpperCase()}
              </text>
              {p.grain && (
                <g className="t-cut-mark" stroke="currentColor" strokeWidth={0.8} fill="none">
                  <line x1={p.grain[0]} y1={p.grain[1]} x2={p.grain[0]} y2={p.grain[2]} />
                  <path d={`M${p.grain[0] - 4} ${p.grain[1] + 7} L${p.grain[0]} ${p.grain[1]} L${p.grain[0] + 4} ${p.grain[1] + 7}`} />
                  <path d={`M${p.grain[0] - 4} ${p.grain[2] - 7} L${p.grain[0]} ${p.grain[2]} L${p.grain[0] + 4} ${p.grain[2] - 7}`} />
                </g>
              )}
            </g>
          ))}
        </svg>

        <div className="md:col-span-5 md:col-start-1">
          <div className="t-cut-in mb-5 h-px w-full bg-ink/15">
            <div className="t-cut-bar h-full origin-left bg-indigo" />
          </div>
          <ol className="t-cut-in grid grid-cols-3 gap-4 md:gap-6">
            {CUT_STEPS.map((s) => (
              <li key={s.no} className="t-cut-step transition-opacity duration-300">
                <p className="t-label opacity-60">{s.no}</p>
                <p className="mt-2 font-display text-[clamp(1.4rem,2.4vw,2.2rem)] leading-none">{s.title}</p>
                <p className="mt-2 hidden text-[0.85rem] leading-snug opacity-75 sm:block">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
