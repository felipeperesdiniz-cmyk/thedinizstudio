'use client'

import { useEffect, useState } from 'react'

/** The Tsuyu mark: a brush ensō around 露. */
export function Enso({ className, kanji = true, stroke = 2.4 }: { className?: string; kanji?: boolean; stroke?: number }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        className="m-draw"
        pathLength={1}
        d="M58 9 C84 14 96 40 89 63 C82 86 56 96 35 89 C14 82 4 58 10 37 C14 24 23 15 34 11"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      {kanji && (
        <text x="50" y="52" textAnchor="middle" dominantBaseline="central" fontSize="38" fill="currentColor" className="font-display">
          露
        </text>
      )}
    </svg>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

function partsIn(timeZone: string | undefined) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0)
  return { h: get('hour') % 24, m: get('minute'), s: get('second') }
}

/** Live time in a zone. Renders a placeholder on the server so hydration matches. */
export function useClock(timeZone?: string) {
  const [t, setT] = useState<{ h: number; m: number; s: number } | null>(null)
  useEffect(() => {
    const update = () => setT(partsIn(timeZone))
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [timeZone])
  return t
}

export function ClockText({ timeZone, seconds = false }: { timeZone?: string; seconds?: boolean }) {
  const t = useClock(timeZone)
  if (!t) return <span>{seconds ? '--:--:--' : '--:--'}</span>
  return (
    <span className="tabular-nums">
      {pad(t.h)}:{pad(t.m)}
      {seconds && `:${pad(t.s)}`}
    </span>
  )
}

/** A small analogue face, either live or fixed at a time like "05:40". */
export function ClockFace({ time, timeZone, className }: { time?: string; timeZone?: string; className?: string }) {
  const live = useClock(time ? 'UTC' : timeZone)
  let h = 0
  let m = 0
  let s: number | null = null
  if (time) {
    ;[h, m] = time.split(':').map(Number) as [number, number]
  } else if (live) {
    ;({ h, m, s } = live)
  }
  const hourAngle = ((h % 12) + m / 60) * 30
  const minAngle = m * 6
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="20" y1="3.5" x2="20" y2={i % 3 === 0 ? 6.5 : 5} stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 30} 20 20)`} />
      ))}
      <line x1="20" y1="20" x2="20" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${hourAngle} 20 20)`} />
      <line x1="20" y1="20" x2="20" y2="6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" transform={`rotate(${minAngle} 20 20)`} />
      {s !== null && <line x1="20" y1="22" x2="20" y2="5" stroke="var(--matcha)" strokeWidth="0.6" transform={`rotate(${s * 6} 20 20)`} />}
      <circle cx="20" cy="20" r="1.2" fill="currentColor" />
    </svg>
  )
}
