'use client'

import { useEffect, useRef } from 'react'

interface LoopVideoProps {
  src: string
  poster: string
  className?: string
}

/**
 * A silent loop that downloads nothing until it is near the screen, plays while visible
 * and stops when it leaves. People who ask for less motion see the poster.
 */
export function LoopVideo({ src, poster, className = '' }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (video.preload !== 'auto') video.preload = 'auto'
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
