'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'
import { ClockText, Mark } from '../ui'

const WORD = 'TRAMA'

// Each letter is woven in from alternate sides, as weft crosses the warp.
const FROM = [-1, 1, -1, 1, -1]

/** The name is woven back together, a new length of linen falls under it, and the story closes. */
export function Finale() {
  const ref = useRef<HTMLElement>(null)
  const footer = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const chars = gsap.utils.toArray<HTMLElement>('.t-fin-char')
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=170%', pin: true, scrub: true, invalidateOnRefresh: true },
    })
    chars.forEach((ch, i) => {
      tl.from(ch, { x: () => FROM[i]! * window.innerWidth * 0.9, skewX: FROM[i]! * -18, duration: 0.45, ease: 'expo.out' }, 0.02 + i * 0.05)
    })
    tl.from('.t-fin-fade', { autoAlpha: 0, y: 18, stagger: 0.05, duration: 0.2 }, 0.62).to({}, { duration: 0.2 })
    const leave = ScrollTrigger.create({ trigger: footer.current, start: 'top bottom', end: 'top top' })
    const unregister = [registerSection('finale', tl.scrollTrigger!), registerSection('footer', leave)]
    return () => {
      unregister.forEach((u) => u())
      leave.kill()
    }
  })

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-ink text-bone motion:h-svh" aria-labelledby="t-fin-title">
        <h2 id="t-fin-title" className="sr-only">
          Trama
        </h2>
        <div
          aria-hidden="true"
          className="flex justify-center pt-[11vh] font-display font-medium leading-[0.8] tracking-[-0.04em] text-[clamp(5.5rem,26vw,29rem)]"
        >
          {[...WORD].map((ch, i) => (
            <span key={i} className={`t-fin-char inline-block ${i === 2 ? 'italic text-oxide' : ''}`}>
              {ch}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 px-[var(--gutter-x)] pb-8 pt-[12vh] md:grid-cols-12 md:items-end md:gap-8 md:pb-10 motion:absolute motion:inset-x-0 motion:bottom-0 motion:pt-0">
          <div className="t-fin-fade md:col-span-4">
            <p className="font-display text-3xl italic leading-none">The next chapter</p>
            <p className="mt-3 max-w-[19rem] text-[0.9rem] leading-relaxed opacity-75 md:text-[0.95rem]">
              Every piece starts as raw linen on the loom. Yours begins with a fitting in Porto, or by video from anywhere.
            </p>
          </div>
          <div className="t-fin-fade md:col-span-4 md:text-center">
            <p className="t-label opacity-60">Collection 05</p>
            <p className="mt-2 font-display text-2xl">On the loom in March</p>
          </div>
          <div className="t-fin-fade md:col-span-4 md:text-right">
            <Link
              href="/contact"
              data-cursor="Talk"
              className="inline-flex items-center gap-3 rounded-full bg-bone px-6 py-4 text-ink transition-colors duration-500 hover:bg-oxide hover:text-bone"
            >
              <span className="t-label">Commission a site like this</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer ref={footer} className="relative bg-night px-[var(--gutter-x)] pb-8 pt-[16vh] text-bone">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Mark className="h-20 w-20 text-oxide" stroke={1.6} />
            <p className="mt-8 max-w-sm font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.05]">
              Fewer clothes, <em>longer stories.</em>
            </p>
          </div>
          <div className="flex gap-10 md:col-span-4 md:col-start-7">
            <div>
              <p className="t-label opacity-50">In Porto now</p>
              <p className="mt-3 font-display text-3xl">
                <ClockText timeZone="Europe/Lisbon" />
              </p>
            </div>
            <div>
              <p className="t-label opacity-50">Where you are</p>
              <p className="mt-3 font-display text-3xl">
                <ClockText />
              </p>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-11 md:text-right">
            <p className="t-label opacity-50">Concept</p>
            <Link href="/" className="t-label mt-3 block underline-offset-4 hover:underline" data-cursor="Studio">
              The Diniz Studio
            </Link>
          </div>
        </div>
        <div className="mt-[14vh] flex flex-col justify-between gap-3 border-t border-bone/15 pt-6 md:flex-row">
          <p className="t-label opacity-50">Trama is a fictional brand, designed and built as a concept by The Diniz Studio.</p>
          <p className="t-label opacity-50">Cloth rendered live in WebGL. No stock photography.</p>
        </div>
      </footer>
    </>
  )
}
