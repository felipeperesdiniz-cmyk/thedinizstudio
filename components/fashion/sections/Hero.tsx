'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useFashion, useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { Mark } from '../ui'

const WORD = 'TRAMA'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { entered, motion } = useFashion()

  useSectionMotion(ref, () => {
    const st = ScrollTrigger.create({ trigger: ref.current, start: 'top top', end: 'bottom top' })
    const unregister = registerSection('hero', st)

    // The letters fall away at different speeds as the cloth is lifted off them.
    const chars = gsap.utils.toArray<HTMLElement>('.t-hero-char')
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    chars.forEach((ch, i) => {
      tl.to(ch, { yPercent: 30 + ((i * 37) % 5) * 18, rotation: (i - 2) * 4, ease: 'none' }, 0)
    })
    tl.to('.t-hero-meta', { yPercent: -120, autoAlpha: 0, ease: 'none' }, 0)

    return unregister
  })

  // Intro, once the preloader opens.
  useEffect(() => {
    if (!entered || !ref.current) return
    const ctx = gsap.context(() => {
      if (!motion) return
      gsap.from('.t-hero-char-inner', { yPercent: 110, duration: 1.7, ease: 'expo.out', stagger: 0.08, delay: 0.2 })
      gsap.from('.t-hero-meta', { autoAlpha: 0, y: 16, duration: 1.2, ease: 'power3.out', stagger: 0.08, delay: 0.8 })
    }, ref)
    return () => ctx.revert()
  }, [entered, motion])

  return (
    <section ref={ref} id="top" className="relative h-svh min-h-[560px] overflow-hidden bg-ink text-bone">
      <h1 className="sr-only">Trama, garments woven, dyed and cut to order in Porto</h1>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[50%] flex -translate-y-1/2 justify-center font-display font-medium leading-[0.78] tracking-[-0.04em] text-[clamp(5.5rem,25vw,28rem)]"
      >
        {[...WORD].map((ch, i) => (
          <span key={i} className="t-hero-char inline-block overflow-hidden pb-[0.04em]">
            <span className={`t-hero-char-inner inline-block ${i === 2 ? 'italic text-oxide' : ''}`}>{ch}</span>
          </span>
        ))}
      </div>

      <div className="t-hero-meta absolute left-[var(--gutter-x)] top-[17vh] max-w-[17rem] md:top-[15vh]">
        <p className="t-label opacity-60">Autumn Winter 2026</p>
        <p className="mt-3 text-[0.95rem] leading-snug opacity-90">Woven in the north of Portugal. Dyed by hand. Cut to your measurements in Porto.</p>
      </div>

      <dl className="t-hero-meta absolute right-[var(--gutter-x)] top-[15vh] hidden max-w-[15rem] text-right md:block">
        <dt className="font-display text-4xl italic leading-none">trama</dt>
        <dd className="t-label mt-3 opacity-60">n., Portuguese</dd>
        <dd className="mt-2 text-[0.85rem] leading-snug opacity-80">1. The weft: the thread woven across the warp.</dd>
        <dd className="mt-1 text-[0.85rem] leading-snug opacity-80">2. The plot of a story.</dd>
      </dl>

      <div className="absolute inset-x-[var(--gutter-x)] bottom-6 flex items-end justify-between">
        <p className="t-hero-meta t-label">
          Collection
          <br />
          No. 04
        </p>
        <div className="t-hero-meta flex flex-col items-center gap-2">
          <Mark className="t-spin h-6 w-6" stroke={1.6} />
          <span className="t-label">Scroll to unfold</span>
        </div>
        <p className="t-hero-meta t-label text-right">
          Porto
          <br />
          Portugal
        </p>
      </div>
    </section>
  )
}
