'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

/** A small dot that grows into a labelled disc over anything with data-cursor. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = dot.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 })
    const x = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' })
    let current: string | null = null

    const move = (e: PointerEvent) => {
      x(e.clientX)
      y(e.clientY)
      gsap.to(el, { autoAlpha: 1, duration: 0.3, overwrite: 'auto' })
      const target = (e.target as Element | null)?.closest<HTMLElement>('[data-cursor]')
      const text = target?.dataset.cursor ?? null
      if (text === current) return
      current = text
      if (label.current) label.current.textContent = text ?? ''
      gsap.to(el, { width: text ? 84 : 10, height: text ? 84 : 10, duration: 0.5, ease: 'expo.out' })
      gsap.to(label.current, { autoAlpha: text ? 1 : 0, duration: 0.25 })
    }
    const leave = () => gsap.to(el, { autoAlpha: 0, duration: 0.3 })

    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <div
      ref={dot}
      className="pointer-events-none fixed left-0 top-0 z-[75] hidden h-2.5 w-2.5 items-center justify-center rounded-full bg-bone mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:flex"
      aria-hidden="true"
    >
      <span ref={label} className="t-label text-ink opacity-0" />
    </div>
  )
}
