'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useCursor, type CursorState } from '@/hooks/useCursor'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const RING: Record<CursorState, { scale: number; borderColor: string }> = {
  default: { scale: 1, borderColor: '#8B8B8B' },
  hover: { scale: 1, borderColor: '#ECECEC' },
  view: { scale: 1.6, borderColor: '#FFFFFF' },
  drag: { scale: 1, borderColor: '#ECECEC' },
  hidden: { scale: 0, borderColor: 'rgba(0,0,0,0)' },
}

/** Pointer dot plus a trailing ring. Fine-pointer devices only. */
export function Cursor() {
  const { cursorState } = useCursor()
  const prefersReduced = useReducedMotion()

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const pointerSeenRef = useRef(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const ctx = gsap.context(() => {
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

      const ringDuration = prefersReduced ? 0 : 0.6
      const dotDuration = prefersReduced ? 0 : 0.12

      const dotX = gsap.quickTo(dot, 'x', { duration: dotDuration, ease: 'power3.out' })
      const dotY = gsap.quickTo(dot, 'y', { duration: dotDuration, ease: 'power3.out' })
      const ringX = gsap.quickTo(ring, 'x', { duration: ringDuration, ease: 'power3.out' })
      const ringY = gsap.quickTo(ring, 'y', { duration: ringDuration, ease: 'power3.out' })

      const onMove = (event: PointerEvent) => {
        if (!pointerSeenRef.current) {
          pointerSeenRef.current = true
          gsap.set([dot, ring], { x: event.clientX, y: event.clientY })
          gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: 'auto' })
        }
        dotX(event.clientX)
        dotY(event.clientY)
        ringX(event.clientX)
        ringY(event.clientY)
      }

      const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2, overwrite: 'auto' })
      const onEnter = () => {
        if (!pointerSeenRef.current) return
        gsap.to([dot, ring], { opacity: 1, duration: 0.2, overwrite: 'auto' })
      }

      window.addEventListener('pointermove', onMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
      document.documentElement.addEventListener('pointerenter', onEnter)

      return () => {
        window.removeEventListener('pointermove', onMove)
        document.documentElement.removeEventListener('pointerleave', onLeave)
        document.documentElement.removeEventListener('pointerenter', onEnter)
      }
    })

    return () => ctx.revert()
  }, [prefersReduced])

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return

    const target = RING[cursorState]

    const ctx = gsap.context(() => {
      gsap.to(ring, {
        scale: target.scale,
        borderColor: target.borderColor,
        duration: prefersReduced ? 0 : 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    })

    return () => ctx.kill()
  }, [cursorState, prefersReduced])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-10 w-10 rounded-full border border-secondary opacity-0 will-change-transform"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1 w-1 rounded-full bg-primary opacity-0 will-change-transform"
      />
    </div>
  )
}
