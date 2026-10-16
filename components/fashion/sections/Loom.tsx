'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { LOOM_STATS } from '../content'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const format = (v: number, decimals: number) => v.toLocaleString('en-GB', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

/** Bare warp on the loom; the weave climbs it as the counters run. */
export function Loom() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=300%', pin: true, scrub: true },
    })
    tl.from('.t-loom-in', { autoAlpha: 0, y: 24, stagger: 0.02, duration: 0.08, ease: 'power2.out' }, 0.02)
    const values = gsap.utils.toArray<HTMLElement>('.t-loom-value')
    LOOM_STATS.forEach((s, i) => {
      const counter = { v: 0 }
      const el = values[i]!
      el.textContent = format(0, s.decimals)
      tl.to(counter, { v: s.to, duration: 0.88, onUpdate: () => (el.textContent = format(counter.v, s.decimals)) }, 0.02)
    })
    tl.fromTo('.t-loom-bar', { scaleX: 0 }, { scaleX: 1, duration: 0.88 }, 0.02).to({}, { duration: 0.1 })
    return registerSection('loom', tl.scrollTrigger!)
  })

  return (
    <section ref={ref} className="t-warp relative overflow-hidden bg-loom text-bone motion:h-svh" aria-labelledby="t-loom-title">
      <div className="relative grid h-full grid-cols-1 content-start gap-8 px-[var(--gutter-x)] py-[16vh] md:grid-cols-12 md:content-center md:py-[14vh] motion:pt-[13vh] md:motion:pt-[14vh]">
        <div className="md:col-span-5">
          <p className="t-loom-in t-label opacity-60">02 The loom</p>
          <h2 id="t-loom-title" className="t-loom-in mt-5 font-display text-[clamp(1.9rem,4.4vw,4.4rem)] leading-[1] tracking-[-0.02em]">
            Eighteen picks to the centimetre, on shuttle looms <em className="text-oxide">older than we are.</em>
          </h2>
          <p className="t-loom-in mt-6 hidden max-w-sm text-[0.95rem] leading-relaxed opacity-75 md:block">
            Slow looms leave the cloth a little irregular and much stronger. Each length is woven for the garments already ordered, and no more.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4 md:mt-14 md:gap-6">
            {LOOM_STATS.map((s) => (
              <div key={s.label} className="t-loom-in">
                <dt className="t-label opacity-50">{s.label}</dt>
                <dd className="mt-2 font-display text-[clamp(1.5rem,3.2vw,3.2rem)] leading-none tabular-nums">
                  <span className="t-loom-value">{format(s.to, s.decimals)}</span>
                  {s.unit}
                </dd>
              </div>
            ))}
          </dl>
          <div className="t-loom-in mt-8 h-px w-full bg-bone/15 md:mt-12">
            <div className="t-loom-bar h-full origin-left bg-oxide" />
          </div>
        </div>
      </div>
    </section>
  )
}
