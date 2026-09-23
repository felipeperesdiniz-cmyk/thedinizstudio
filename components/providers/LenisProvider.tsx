'use client'

import { useEffect, type ReactNode } from 'react'
import { destroyLenis, initLenis } from '@/lib/lenis'
import { ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function LenisProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    const lenis = initLenis()
    if (!lenis) return

    ScrollTrigger.refresh()

    return () => {
      destroyLenis()
    }
  }, [prefersReduced])

  return <>{children}</>
}
