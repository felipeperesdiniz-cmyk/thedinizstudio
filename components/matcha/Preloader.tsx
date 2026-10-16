'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { Enso } from './ui'

/**
 * Counts while fonts and the 3D stage load, then lifts away. The count eases
 * toward 90 on its own and only reaches 100 once loading has actually finished.
 */
export function Preloader({ ready, onDone }: { ready: boolean; onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const progress = useRef({ v: 0 })
  const crawl = useRef<gsap.core.Tween | null>(null)
  const done = useRef(onDone)
  done.current = onDone

  const paint = () => {
    const v = progress.current.v
    if (count.current) count.current.textContent = String(Math.round(v)).padStart(3, '0')
    const path = root.current?.querySelector<SVGPathElement>('.m-draw')
    if (path) {
      path.style.strokeDashoffset = String(1 - v / 100)
      // A zero length dash still paints its round cap.
      path.style.opacity = v > 0.5 ? '1' : '0'
    }
  }

  useEffect(() => {
    paint()
    crawl.current = gsap.to(progress.current, { v: 90, duration: 2.4, ease: 'power2.out', onUpdate: paint })
    return () => {
      crawl.current?.kill()
    }
  }, [])

  useEffect(() => {
    if (!ready || !root.current) return
    crawl.current?.kill()
    const el = root.current
    const tl = gsap.timeline()
    tl.to(progress.current, { v: 100, duration: 0.6, ease: 'power2.inOut', onUpdate: paint })
      .to(el.querySelector('.m-pre-mark'), { scale: 0.86, duration: 0.5, ease: 'power3.in' }, '+=0.15')
      .to(el.querySelectorAll('.m-pre-fade'), { autoAlpha: 0, duration: 0.3 }, '<')
      .to(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, '-=0.1')
      .add(() => done.current(), '-=0.8')
    return () => {
      tl.kill()
    }
  }, [ready])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-forest text-washi"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      aria-hidden="true"
    >
      <div className="m-pre-mark w-[min(34vw,180px)]">
        <Enso className="w-full" stroke={2} />
      </div>
      <div className="m-pre-fade absolute bottom-[var(--gutter-x)] left-[var(--gutter-x)] right-[var(--gutter-x)] flex items-end justify-between">
        <span className="m-label opacity-60">Tsuyu, ceremonial matcha</span>
        <span ref={count} className="font-display text-[clamp(3rem,9vw,8rem)] leading-none tabular-nums">
          000
        </span>
      </div>
    </div>
  )
}
