'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/** Photographs from client shoots and the sites built around them, ordered so neighbouring panels rarely show the same client. */
const FRAMES = [
  '/images/hero/blend-duo.webp',
  '/images/hero/rafa-noronha.webp',
  '/images/hero/renata-cake.webp',
  '/images/hero/bordados-site.webp',
  '/images/hero/blend-scissors.webp',
  '/images/hero/rafa-graduates.webp',
  '/images/hero/blend-site.webp',
  '/images/hero/rafa-graduate.webp',
  '/images/hero/blend-stylist.webp',
  '/images/hero/rafa-site.webp',
]

/** One panel on phones, three on tablets, four on wider screens. Panels past the first are hidden by CSS until there is room. */
const PANEL_CLASSES = ['block', 'hidden md:block', 'hidden md:block', 'hidden lg:block']
const STEP_MS = 3200

/** Site screenshots carry their own buttons and type, so they only go in the outer panels, never under the headline. */
const isSite = (frame: number) => FRAMES[frame]!.endsWith('-site.webp')
const allowed = (frame: number, panel: number, count: number) =>
  !isSite(frame) || (count > 1 && (panel === 0 || panel === count - 1))

function visiblePanels() {
  if (window.matchMedia('(min-width: 1024px)').matches) return 4
  if (window.matchMedia('(min-width: 768px)').matches) return 3
  return 1
}

/**
 * Portrait panels side by side, each cross-fading to the next piece of work in turn,
 * so only one picture changes at a time and the row never repeats a frame that is already showing.
 */
export function HeroReel() {
  const [shown, setShown] = useState([0, 1, 2, 3])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let tick = 0
    let next = 4
    const id = window.setInterval(() => {
      const count = visiblePanels()
      const panel = tick % count
      tick += 1
      setShown((current) => {
        const onScreen = current.slice(0, count)
        let candidate = next % FRAMES.length
        while (onScreen.includes(candidate) || !allowed(candidate, panel, count)) candidate = (candidate + 1) % FRAMES.length
        next = candidate + 1
        const updated = [...current]
        updated[panel] = candidate
        return updated
      })
    }, STEP_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-0 flex gap-[2px] bg-ink">
      {PANEL_CLASSES.map((visibility, panel) => (
        <div key={panel} className={`relative h-full flex-1 overflow-hidden ${visibility}`}>
          {FRAMES.map((src, i) => {
            const active = shown[panel] === i
            return (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                priority={i === panel}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 34vw, 25vw"
                quality={80}
                className={`object-cover object-[50%_30%] transition-[opacity,transform] ease-out ${
                  active ? 'scale-100 opacity-100 duration-[1600ms,9000ms]' : 'scale-[1.06] opacity-0 duration-[1600ms,0ms] delay-[0ms,1600ms]'
                }`}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
