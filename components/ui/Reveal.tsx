'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface RevealProps {
  children: ReactNode
  /** `text` lifts and fades in; `image` wipes up and settles from a slight zoom. */
  as?: 'text' | 'image'
  delay?: number
  className?: string
}

export function Reveal({ children, as = 'text', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, clipPath: 'none' })
      return
    }

    const ctx = gsap.context(() => {
      const trigger = { trigger: el, start: 'top 88%' }

      if (as === 'image') {
        const inner = el.firstElementChild
        gsap.fromTo(
          el,
          { opacity: 1, clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.3, delay, ease: 'expo.out', scrollTrigger: trigger },
        )
        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.12 },
            { scale: 1, duration: 1.8, delay, ease: 'expo.out', scrollTrigger: trigger },
          )
        }
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.1, delay, ease: 'power3.out', scrollTrigger: trigger },
        )
      }
    }, el)

    return () => ctx.revert()
  }, [as, delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
