'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { ClockFace, ClockText, Enso } from '../ui'

const WORD = 'TSUYU'

// Where each letter starts before falling into the name, as viewport fractions.
const SCATTER = [
  { x: -0.18, y: -0.5, r: -24 },
  { x: 0.08, y: 0.55, r: 18 },
  { x: -0.04, y: -0.7, r: 32 },
  { x: 0.12, y: 0.42, r: -14 },
  { x: 0.2, y: -0.46, r: 22 },
]

/** The name assembles, the tin lands under it, and the story closes on the hour in Uji. */
export function Finale() {
  const ref = useRef<HTMLElement>(null)
  const footer = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const chars = gsap.utils.toArray<HTMLElement>('.m-fin-char')
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=170%', pin: true, scrub: true, invalidateOnRefresh: true },
    })
    chars.forEach((ch, i) => {
      const s = SCATTER[i]!
      tl.from(
        ch,
        { x: () => s.x * window.innerWidth, y: () => s.y * window.innerHeight, rotation: s.r, autoAlpha: 0, duration: 0.45, ease: 'expo.out' },
        0.02 + i * 0.05,
      )
    })
    tl.from('.m-fin-fade', { autoAlpha: 0, y: 18, stagger: 0.05, duration: 0.2 }, 0.62).to({}, { duration: 0.2 })
    const leave = ScrollTrigger.create({ trigger: footer.current, start: 'top bottom', end: 'top top' })
    const unregister = [registerSection('finale', tl.scrollTrigger!), registerSection('footer', leave)]
    return () => {
      unregister.forEach((u) => u())
      leave.kill()
    }
  })

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-washi text-ink motion:h-svh" aria-labelledby="m-fin-title">
        <h2 id="m-fin-title" className="sr-only">
          Tsuyu
        </h2>
        <div
          aria-hidden="true"
          className="flex justify-center pt-[11vh] font-display leading-[0.8] tracking-[-0.05em] text-[clamp(6rem,29vw,32rem)]"
        >
          {[...WORD].map((ch, i) => (
            <span key={i} className="m-fin-char inline-block">
              {ch}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 px-[var(--gutter-x)] pb-8 pt-[12vh] md:grid-cols-12 md:items-end md:gap-8 md:pb-10 motion:absolute motion:inset-x-0 motion:bottom-0 motion:pt-0">
          <div className="m-fin-fade md:col-span-4">
            <p className="font-display text-3xl leading-none">露</p>
            <p className="mt-3 max-w-[18rem] text-[0.9rem] leading-relaxed opacity-75 md:text-[0.95rem]">
              Tsuyu: the dew that settles before dawn, and gone by the time the field is picked.
            </p>
          </div>
          <div className="m-fin-fade md:col-span-4 md:text-center">
            <p className="m-label opacity-60">Next first flush</p>
            <p className="mt-2 font-display text-2xl">Picked in May</p>
          </div>
          <div className="m-fin-fade md:col-span-4 md:text-right">
            <Link
              href="/contact"
              data-cursor="Talk"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-washi transition-colors duration-500 hover:bg-forest"
            >
              <span className="m-label">Commission a site like this</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer ref={footer} className="relative bg-night px-[var(--gutter-x)] pb-8 pt-[16vh] text-washi">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Enso className="h-24 w-24 text-matcha" />
            <p className="mt-8 max-w-sm font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.05]">Slow tea, for people who are not.</p>
          </div>
          <div className="flex gap-10 md:col-span-4 md:col-start-7">
            <div>
              <p className="m-label opacity-50">In Uji now</p>
              <div className="mt-3 flex items-center gap-3">
                <ClockFace timeZone="Asia/Tokyo" className="h-10 w-10" />
                <span className="font-display text-3xl">
                  <ClockText timeZone="Asia/Tokyo" />
                </span>
              </div>
            </div>
            <div>
              <p className="m-label opacity-50">Where you are</p>
              <div className="mt-3 flex items-center gap-3">
                <ClockFace className="h-10 w-10" />
                <span className="font-display text-3xl">
                  <ClockText />
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-11 md:text-right">
            <p className="m-label opacity-50">Concept</p>
            <Link href="/" className="m-label mt-3 block underline-offset-4 hover:underline" data-cursor="Studio">
              The Diniz Studio
            </Link>
          </div>
        </div>
        <div className="mt-[14vh] flex flex-col justify-between gap-3 border-t border-washi/15 pt-6 md:flex-row">
          <p className="m-label opacity-50">Tsuyu is a fictional brand, designed and built as a concept by The Diniz Studio.</p>
          <p className="m-label opacity-50">Rendered live in WebGL. No stock photography.</p>
        </div>
      </footer>
    </>
  )
}
