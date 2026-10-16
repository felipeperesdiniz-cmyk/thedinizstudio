'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const pad = (n: number) => String(n).padStart(2, '0')

// Eight harps of furrows, the pattern cut into a matcha millstone.
const HARPS = 8
const FURROWS = 5

function Millstone() {
  const lines: string[] = []
  for (let h = 0; h < HARPS; h++) {
    const a = (h / HARPS) * Math.PI * 2
    const dir = { x: Math.cos(a), y: Math.sin(a) }
    const normal = { x: -dir.y, y: dir.x }
    for (let f = 0; f < FURROWS; f++) {
      const off = f * 11
      const x1 = 200 + dir.x * 40 + normal.x * off
      const y1 = 200 + dir.y * 40 + normal.y * off
      const len = Math.sqrt(Math.max(0, 186 * 186 - off * off)) - 4
      const x2 = 200 + dir.x * len + normal.x * off
      const y2 = 200 + dir.y * len + normal.y * off
      lines.push(`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`)
    }
  }
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="m-stone" cx="45%" cy="40%" r="70%">
          <stop offset="0" stopColor="#3a3d35" />
          <stop offset="1" stopColor="#1b1d18" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="196" fill="url(#m-stone)" />
      <circle cx="200" cy="200" r="196" fill="none" stroke="#eeebe3" strokeOpacity="0.25" />
      <path d={lines.join('')} stroke="#eeebe3" strokeOpacity="0.18" strokeWidth="1.2" fill="none" />
      <circle cx="200" cy="200" r="30" fill="#0f140e" stroke="#eeebe3" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="10" fill="#9db43f" fillOpacity="0.6" />
    </svg>
  )
}

/** The open tin fills under the stone while the grams and minutes count up. */
export function Mill() {
  const ref = useRef<HTMLElement>(null)
  const grams = useRef<HTMLSpanElement>(null)
  const minutes = useRef<HTMLSpanElement>(null)

  useSectionMotion(ref, () => {
    const split = SplitText.create('.m-mill-title', { type: 'lines', mask: 'lines', linesClass: 'm-l' })
    const count = { p: 0 }
    const paint = () => {
      if (grams.current) grams.current.textContent = (count.p * 30).toFixed(1)
      const total = Math.round(count.p * 45 * 60)
      if (minutes.current) minutes.current.textContent = `${pad(Math.floor(total / 60))}:${pad(total % 60)}`
    }

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=260%', pin: true, scrub: true },
    })
    // Same window as the pour in the choreography, so the numbers follow the powder.
    tl.to('.m-mill-stone', { rotation: 540, duration: 1 }, 0)
      .from('.m-mill-stone-wrap', { yPercent: -60, duration: 0.14, ease: 'power3.out' }, 0)
      .from(split.lines, { yPercent: 105, stagger: 0.02, duration: 0.1, ease: 'power3.out' }, 0.04)
      .from('.m-mill-fade', { autoAlpha: 0, y: 16, stagger: 0.02, duration: 0.08, ease: 'power3.out' }, 0.1)
      .to(count, { p: 1, duration: 0.68, onUpdate: paint }, 0.14)
      .fromTo('.m-mill-bar', { scaleX: 0 }, { scaleX: 1, duration: 0.68 }, 0.14)
      .to('.m-mill-ui', { autoAlpha: 0, duration: 0.06 }, 0.94)

    const unregister = registerSection('mill', tl.scrollTrigger!)
    return () => {
      unregister()
      split.revert()
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-night text-washi motion:h-svh" aria-label="The stone mill">
      <div className="m-mill-stone-wrap pointer-events-none absolute left-1/2 top-[20vh] aspect-square w-[min(92vw,70vh)] -translate-x-1/2 -translate-y-full">
        <div className="m-mill-stone h-full w-full">
          <Millstone />
        </div>
      </div>

      <div className="m-mill-ui relative grid h-full grid-cols-1 content-between gap-10 px-[var(--gutter-x)] pb-16 pt-[24vh] md:grid-cols-12 md:content-center md:pb-8 md:pt-0">
        <div className="max-w-[11.5rem] md:col-span-4 md:max-w-none">
          <p className="m-mill-fade m-label opacity-60">03 Stone</p>
          <h2 className="m-mill-title mt-4 font-display text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[0.95] tracking-[-0.02em]">Ground on granite.</h2>
          <p className="m-mill-fade mt-6 max-w-xs text-[0.95rem] leading-relaxed opacity-75">
            A stone mill turns slowly so the leaf never warms. About forty grams an hour. Your tin took forty five minutes of stone.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:col-span-3 md:col-start-10 md:items-end md:gap-10 md:text-right">
          <div className="m-mill-fade">
            <p className="m-label opacity-60">Milled</p>
            <p className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-none tabular-nums">
              <span ref={grams}>30.0</span>
              <span className="ml-1 text-[0.4em]">g</span>
            </p>
          </div>
          <div className="m-mill-fade">
            <p className="m-label opacity-60">At the stone</p>
            <p className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-none tabular-nums">
              <span ref={minutes}>45:00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="m-mill-ui absolute inset-x-[var(--gutter-x)] bottom-6 hidden items-center gap-4 motion:flex">
        <span className="m-label opacity-60">0 g</span>
        <span className="relative h-px flex-1 bg-washi/15">
          <span className="m-mill-bar absolute inset-0 origin-left bg-matcha" />
        </span>
        <span className="m-label opacity-60">30 g</span>
      </div>
    </section>
  )
}
