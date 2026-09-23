// Lenis singleton, driven by the GSAP ticker.
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenis: Lenis | null = null
let rafCallback: ((time: number) => void) | null = null

export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null
  if (lenis) return lenis

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  })

  lenis.on('scroll', ScrollTrigger.update)

  rafCallback = (time: number) => {
    lenis?.raf(time * 1000)
  }

  gsap.ticker.add(rafCallback)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroyLenis(): void {
  if (rafCallback) {
    gsap.ticker.remove(rafCallback)
    rafCallback = null
  }

  lenis?.destroy()
  lenis = null
}

export function getLenis(): Lenis | null {
  return lenis
}
