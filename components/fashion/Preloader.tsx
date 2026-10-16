'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { Mark } from './ui'

/**
 * A thread is drawn across the screen while fonts and the 3D stage load, then
 * the screen opens along it like a seam. The count eases toward 90 on its own
 * and only reaches 100 once loading has actually finished.
 */
export function Preloader({ ready, onDone }: { ready: boolean; onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const thread = useRef<HTMLDivElement>(null)
  const progress = useRef({ v: 0 })
  const crawl = useRef<gsap.core.Tween | null>(null)
  const done = useRef(onDone)
  done.current = onDone

  const paint = () => {
    const v = progress.current.v
    if (count.current) count.current.textContent = String(Math.round(v)).padStart(3, '0')
    if (thread.current) thread.current.style.transform = `scaleX(${v / 100})`
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
      .to(el.querySelectorAll('.t-pre-fade'), { autoAlpha: 0, duration: 0.3 }, '+=0.15')
      .to(thread.current, { scaleY: 0, duration: 0.3, ease: 'power2.in' }, '<')
      .to(el.querySelector('.t-pre-top'), { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, '-=0.05')
      .to(el.querySelector('.t-pre-bottom'), { yPercent: 100, duration: 1.2, ease: 'expo.inOut' }, '<')
      .add(() => done.current(), '-=0.85')
      .set(el, { display: 'none' })
    return () => {
      tl.kill()
    }
  }, [ready])

  return (
    <div ref={root} className="fixed inset-0 z-[80] text-bone" aria-hidden="true">
      <div className="t-pre-top absolute inset-x-0 top-0 h-1/2 bg-ink" />
      <div className="t-pre-bottom absolute inset-x-0 bottom-0 h-1/2 bg-ink" />
      <div ref={thread} className="absolute inset-x-0 top-1/2 h-px origin-left bg-bone" style={{ transform: 'scaleX(0)' }} />
      <div className="t-pre-fade absolute left-[var(--gutter-x)] top-[calc(50%-4.5rem)] flex items-center gap-3">
        <Mark className="h-8 w-8" />
        <span className="font-display text-xl tracking-[0.3em]">TRAMA</span>
      </div>
      <div className="t-pre-fade absolute bottom-[var(--gutter-x)] left-[var(--gutter-x)] right-[var(--gutter-x)] flex items-end justify-between">
        <span className="t-label opacity-60">Warping the loom</span>
        <span ref={count} className="font-display text-[clamp(3rem,9vw,8rem)] italic leading-none tabular-nums">
          000
        </span>
      </div>
    </div>
  )
}
