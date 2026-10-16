'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useMatcha, useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { ClockFace } from '../ui'

const WORD = 'TSUYU'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { entered, motion } = useMatcha()

  useSectionMotion(ref, () => {
    const st = ScrollTrigger.create({ trigger: ref.current, start: 'top top', end: 'bottom top' })
    const unregister = registerSection('hero', st)

    // The letters part around the tin as it lifts away.
    const chars = gsap.utils.toArray<HTMLElement>('.m-hero-char')
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    chars.forEach((ch, i) => {
      const side = i - (chars.length - 1) / 2
      tl.to(ch, { xPercent: side * 38, yPercent: -18 - Math.abs(side) * 10, ease: 'none' }, 0)
    })
    tl.to('.m-hero-meta', { yPercent: -120, autoAlpha: 0, ease: 'none' }, 0)

    return unregister
  })

  // Intro, once the preloader lifts.
  useEffect(() => {
    if (!entered || !ref.current) return
    const ctx = gsap.context(() => {
      if (!motion) return
      gsap.from('.m-hero-char-inner', { yPercent: 105, duration: 1.6, ease: 'expo.out', stagger: 0.07, delay: 0.15 })
      gsap.from('.m-hero-meta', { autoAlpha: 0, y: 16, duration: 1.2, ease: 'power3.out', stagger: 0.08, delay: 0.7 })
    }, ref)
    return () => ctx.revert()
  }, [entered, motion])

  return (
    <section ref={ref} id="top" className="relative h-svh min-h-[560px] overflow-hidden bg-washi text-ink">
      <h1 className="sr-only">Tsuyu, ceremonial matcha shaded, stone milled and picked once a year in Uji, Kyoto</h1>

      <div aria-hidden="true" className="absolute inset-x-0 top-[47%] flex -translate-y-1/2 justify-center font-display leading-[0.8] tracking-[-0.045em] text-[clamp(6rem,27vw,30rem)]">
        {[...WORD].map((ch, i) => (
          <span key={i} className="m-hero-char inline-block overflow-hidden pb-[0.06em]">
            <span className="m-hero-char-inner inline-block">{ch}</span>
          </span>
        ))}
      </div>

      <div className="m-hero-meta absolute left-[var(--gutter-x)] top-[18vh] max-w-[16rem] md:top-[16vh]">
        <p className="m-label opacity-60">Ceremonial matcha</p>
        <p className="mt-3 text-[0.95rem] leading-snug">Shaded twenty one days. Milled on granite. Picked once a year, in May.</p>
      </div>

      <div className="m-hero-meta absolute right-[var(--gutter-x)] top-[16vh] hidden flex-col items-end text-right md:flex">
        <span className="font-display text-5xl leading-none">露</span>
        <span className="m-label mt-3 opacity-60">tsuyu, n.</span>
        <span className="m-label opacity-60">dew before dawn</span>
      </div>

      <div className="absolute inset-x-[var(--gutter-x)] bottom-6 flex items-end justify-between">
        <p className="m-hero-meta m-label">
          First flush
          <br />
          2026
        </p>
        <div className="m-hero-meta flex flex-col items-center gap-2">
          <ClockFace timeZone="Asia/Tokyo" className="h-7 w-7" />
          <span className="m-label">Scroll, slowly</span>
        </div>
        <p className="m-hero-meta m-label text-right">
          Uji
          <br />
          Kyoto
        </p>
      </div>
    </section>
  )
}
