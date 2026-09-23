'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Short cover-and-clear panel on route changes. */
export function PageTransition({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const overlay = overlayRef.current
    if (!overlay || prefersReduced) return

    const lenis = getLenis()

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onStart: () => lenis?.stop(),
          onComplete: () => {
            lenis?.start()
            lenis?.scrollTo(0, { immediate: true })
          },
        })
        .set(overlay, { autoAlpha: 1, yPercent: 100 })
        .to(overlay, { yPercent: 0, duration: 0.4, ease: 'power3.inOut' })
        .to(overlay, { yPercent: -100, duration: 0.3, ease: 'power3.inOut' })
        .set(overlay, { autoAlpha: 0 })
    })

    return () => ctx.kill()
  }, [pathname, prefersReduced])

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed inset-0 z-[65] bg-background opacity-0"
      />
      {children}
    </>
  )
}
