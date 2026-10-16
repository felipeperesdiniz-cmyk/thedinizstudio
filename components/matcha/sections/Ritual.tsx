'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { RITUAL } from '../content'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { Enso } from '../ui'

const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

function Draw({ d }: { d: string }) {
  return <path className="m-draw" pathLength={1} d={d} {...line} />
}

function SiftArt() {
  return (
    <>
      <Draw d="M40 62 A60 14 0 1 0 160 62 A60 14 0 1 0 40 62" />
      <Draw d="M40 62 L52 92 A48 10 0 0 0 148 92 L160 62" />
      <Draw d="M60 58 L140 66 M56 66 L144 58 M70 54 L130 72 M70 72 L130 54" />
      <Draw d="M160 62 L192 50" />
      {Array.from({ length: 14 }, (_, i) => (
        <circle key={i} className="m-dot" cx={72 + ((i * 37) % 56)} cy={108 + ((i * 23) % 40)} r={1.6} fill="currentColor" />
      ))}
      <Draw d="M50 160 Q56 188 100 190 Q144 188 150 160 Z" />
    </>
  )
}

function PourArt() {
  return (
    <>
      <Draw d="M20 40 Q60 26 84 44 L108 62 Q114 66 110 70" />
      <Draw d="M20 40 L20 20 M20 40 Q16 60 30 64 L70 64" />
      <Draw d="M110 72 Q108 110 104 150" />
      <Draw d="M50 158 Q56 190 104 192 Q152 190 158 158 Z" />
      <Draw d="M160 30 L160 110 M154 30 A6 6 0 0 1 166 30 M154 30 L154 110 M166 30 L166 110 M160 122 A10 10 0 1 0 160.1 122" />
      <text className="m-dot font-mono" x="176" y="70" fontSize="11" fill="currentColor">
        80°
      </text>
    </>
  )
}

function WhiskArt() {
  return (
    <>
      <Draw d="M92 14 L108 14 L108 70 L92 70 Z" />
      {Array.from({ length: 9 }, (_, i) => {
        const x = 92 + i * 2
        const spread = (i - 4) * 9
        return <Draw key={i} d={`M${x} 70 Q${100 + spread * 1.6} 110 ${100 + spread} 136`} />
      })}
      <Draw d="M64 136 Q100 150 136 136" />
      <Draw d="M36 164 L64 188 L100 164 L136 188 L164 164" />
    </>
  )
}

function DrinkArt() {
  return (
    <>
      <Draw d="M30 96 Q34 168 100 172 Q166 168 170 96" />
      <Draw d="M30 96 Q100 110 170 96" />
      <Draw d="M40 104 Q52 98 64 104 Q76 110 88 104 Q100 98 112 104 Q124 110 136 104 Q148 98 160 104" />
      <Draw d="M74 172 L78 186 L122 186 L126 172" />
      <Draw d="M84 76 Q76 62 86 50 Q96 38 88 24" />
      <Draw d="M112 76 Q104 62 114 50 Q124 38 116 24" />
    </>
  )
}

const ART = [SiftArt, PourArt, WhiskArt, DrinkArt]

/** Four chapters with hard cuts between them, closed by the ensō opening onto the collection. */
export function Ritual() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const steps = gsap.utils.toArray<HTMLElement>('.m-step')
    const pips = gsap.utils.toArray<HTMLElement>('.m-pip')
    const splits = steps.map((s) => SplitText.create(s.querySelector('.m-step-title'), { type: 'chars', mask: 'chars', charsClass: 'm-c' }))
    gsap.set(steps.slice(1), { autoAlpha: 0 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=460%', pin: true, scrub: true, invalidateOnRefresh: true },
    })

    steps.forEach((step, i) => {
      if (i > 0) tl.set(steps[i - 1]!, { autoAlpha: 0 }, i).set(step, { autoAlpha: 1 }, i)
      tl.set(pips, { opacity: 0.3 }, i).set(pips[i]!, { opacity: 1 }, i)
      tl.from(step.querySelector('.m-step-no'), { yPercent: 100, duration: 0.4, ease: 'expo.out' }, i + 0.02)
        .from(splits[i]!.chars, { yPercent: 110, stagger: 0.03, duration: 0.35 }, i + 0.06)
        .from(step.querySelector('.m-step-kanji'), { autoAlpha: 0, scale: 0.8, duration: 0.3 }, i + 0.12)
        .fromTo(step.querySelectorAll('.m-draw'), { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, stagger: { amount: 0.25 }, duration: 0.4, ease: 'power2.inOut' }, i + 0.08)
      const dots = step.querySelectorAll('.m-dot')
      if (dots.length) tl.from(dots, { autoAlpha: 0, y: -14, stagger: 0.02, duration: 0.2 }, i + 0.4)
      tl.from(step.querySelector('.m-step-body'), { autoAlpha: 0, y: 14, duration: 0.3 }, i + 0.2)
    })

    // The ensō draws over the last chapter, then its centre opens to paper.
    const n = steps.length
    tl.fromTo('.m-ritual-enso .m-draw', { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: 'power2.inOut' }, n + 0.05)
      .fromTo(
        '.m-ritual-disc',
        { scale: 0 },
        {
          scale: () => (Math.hypot(window.innerWidth, window.innerHeight) / (document.querySelector('.m-ritual-disc')?.clientWidth || 1)) * 1.1,
          duration: 0.6,
          ease: 'power2.in',
        },
        n + 0.5,
      )
      .to({}, { duration: 0.1 })

    const unregister = registerSection('ritual', tl.scrollTrigger!)
    return () => {
      unregister()
      splits.forEach((s) => s.revert())
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden motion:h-svh" aria-label="The ritual">
      {RITUAL.map((step, i) => {
        const Art = ART[i]!
        return (
          <article
            key={step.no}
            className="m-step grid grid-cols-1 content-center gap-6 px-[var(--gutter-x)] py-[14vh] md:grid-cols-12 md:gap-8 motion:absolute motion:inset-0 motion:py-0"
            style={{ backgroundColor: step.bg, color: step.fg }}
          >
            <div className="md:col-span-5">
              <p className="m-label opacity-60">04 Ritual</p>
              <div className="overflow-hidden">
                <p className="m-step-no font-display leading-[0.8] tracking-[-0.05em] text-[clamp(7rem,30vw,26rem)] tabular-nums">{step.no}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7 md:gap-8">
              <svg viewBox="0 0 200 200" className="h-[min(40vh,64vw)] w-[min(40vh,64vw)]" aria-hidden="true">
                <Art />
              </svg>
              <div className="flex items-end gap-5">
                <h3 className="m-step-title font-display leading-[0.85] tracking-[-0.03em] text-[clamp(3.4rem,9vw,9rem)]">{step.title}</h3>
                <span className="m-step-kanji font-display text-[clamp(1.8rem,3.4vw,3.4rem)] leading-none opacity-70">{step.kanji}</span>
              </div>
              <p className="m-step-body max-w-sm text-[1rem] leading-relaxed opacity-80">{step.body}</p>
            </div>
          </article>
        )
      })}

      <div className="pointer-events-none absolute bottom-6 right-[var(--gutter-x)] hidden gap-4 mix-blend-difference text-washi motion:flex">
        {RITUAL.map((s) => (
          <span key={s.no} className="m-pip m-label opacity-30">
            {s.no}
          </span>
        ))}
      </div>

      <div className="m-ritual-enso pointer-events-none absolute inset-0 hidden items-center justify-center text-forest motion:flex" aria-hidden="true">
        <div className="m-ritual-disc absolute aspect-square w-[44vmin] rounded-full bg-washi" />
        <Enso className="relative w-[56vmin]" kanji={false} stroke={1.6} />
      </div>
    </section>
  )
}
