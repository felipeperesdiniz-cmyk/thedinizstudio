// Lenis singleton, driven by the GSAP ticker.
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenis: Lenis | null = null
let rafCallback: ((time: number) => void) | null = null

export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null
  if (lenis) return lenis

  lenis = new Lenis({
    // A steady follow rather than a fixed-length glide: it never overshoots and never feels floaty.
    lerp: 0.085,
    wheelMultiplier: 0.9,
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
