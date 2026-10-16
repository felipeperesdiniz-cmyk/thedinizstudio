'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Suspense through empty space: one line at a time, long gaps between, while a
 * small clock ticks toward sunrise. Ends on the shade colour of the next scene.
 */
export function Pause() {
  const ref = useRef<HTMLElement>(null)
  const time = useRef<HTMLSpanElement>(null)

  useSectionMotion(ref, () => {
    const lines = gsap.utils.toArray<HTMLElement>('.m-pause-line')
    const splits = lines.map((l) => SplitText.create(l, { type: 'words,chars', mask: 'chars', charsClass: 'm-c' }))

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: '+=420%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // 04:52 to 05:07, a quarter hour before sunrise.
          const minutes = 4 * 60 + 52 + Math.floor(self.progress * 15)
          if (time.current) time.current.textContent = `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`
        },
      },
    })
    gsap.set(lines, { autoAlpha: 1 })

    // Line 1: the place and the hour.
    tl.from(splits[0]!.chars, { yPercent: 110, stagger: 0.02, duration: 0.5 }, 0.6)
      .to(splits[0]!.chars, { yPercent: -110, stagger: 0.01, duration: 0.4, ease: 'power2.in' }, 2.0)
      // Line 2.
      .from(splits[1]!.chars, { yPercent: 110, stagger: 0.012, duration: 0.6 }, 2.9)
      .to(splits[1]!.chars, { yPercent: -110, stagger: 0.006, duration: 0.4, ease: 'power2.in' }, 4.4)
      // Line 3, smaller, closer.
      .from(splits[2]!.chars, { autoAlpha: 0, stagger: 0.03, duration: 0.3 }, 5.3)
      .to(splits[2]!.chars, { autoAlpha: 0, duration: 0.3 }, 6.4)
      // Line 4: the turn.
      .from(splits[3]!.chars, { yPercent: 120, rotate: 6, stagger: 0.03, duration: 0.9, ease: 'expo.out' }, 7.3)
      .fromTo('.m-pause-wait', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 9.6 }, 0)
      .to(ref.current, { backgroundColor: '#d5dcc2', duration: 1, ease: 'none' }, 8.9)
      .to({}, { duration: 0.4 })

    const unregister = registerSection('pause', tl.scrollTrigger!)
    return () => {
      unregister()
      splits.forEach((s) => s.revert())
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-washi text-ink motion:h-svh" aria-label="Before sunrise">
      <div className="flex flex-col items-center gap-16 px-[var(--gutter-x)] py-[20vh] text-center motion:block motion:h-full motion:p-0">
        <p className="m-pause-line m-label motion:invisible motion:absolute motion:left-1/2 motion:top-1/2 motion:-translate-x-1/2 motion:-translate-y-1/2">
          Uji, Kyoto. 04:52
        </p>
        <p className="m-pause-line font-display text-[clamp(1.8rem,4.4vw,4.2rem)] leading-[1.05] motion:invisible motion:absolute motion:inset-x-[var(--gutter-x)] motion:top-1/2 motion:-translate-y-1/2">
          Before the sun clears the hills,
        </p>
        <p className="m-pause-line font-display text-lg italic opacity-70 motion:invisible motion:absolute motion:inset-x-0 motion:top-1/2 motion:-translate-y-1/2">
          before the first bird,
        </p>
        <p className="m-pause-line font-display leading-[0.9] tracking-[-0.03em] text-[clamp(3.4rem,11vw,12rem)] motion:invisible motion:absolute motion:inset-x-[var(--gutter-x)] motion:top-1/2 motion:-translate-y-1/2">
          we cover the sky.
        </p>
      </div>

      <div className="absolute inset-x-[var(--gutter-x)] bottom-6 hidden items-center gap-6 motion:flex">
        <span ref={time} className="m-label tabular-nums">
          04:52
        </span>
        <span className="relative h-px flex-1 bg-ink/15">
          <span className="m-pause-wait absolute inset-0 origin-left bg-ink" />
        </span>
        <span className="m-label">Sunrise</span>
      </div>
    </section>
  )
}
