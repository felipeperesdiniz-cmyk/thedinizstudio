'use client'

import { useEffect, useState } from 'react'

const LINES = [7, 16, 25]
const GAP = 2.6

/** Each line broken where the crossing thread passes over it. */
function segments(over: (line: number, cross: number) => boolean, line: number) {
  const cuts = LINES.map((x, cross) => (over(line, cross) ? x : null)).filter((x): x is number => x !== null)
  const out: [number, number][] = []
  let from = 2
  for (const x of cuts) {
    out.push([from, x - GAP])
    from = x + GAP
  }
  out.push([from, 30])
  return out
}

/** The Trama mark: three warp and three weft threads, plain woven. */
export function Mark({ className, stroke = 2.2 }: { className?: string; stroke?: number }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      {LINES.map((y, r) =>
        segments((row, col) => (row + col) % 2 === 1, r).map(([a, b]) => <line key={`h${r}${a}`} x1={a} y1={y} x2={b} y2={y} />),
      )}
      {LINES.map((x, c) =>
        segments((col, row) => (row + col) % 2 === 0, c).map(([a, b]) => <line key={`v${c}${a}`} x1={x} y1={a} x2={x} y2={b} />),
      )}
    </svg>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

function partsIn(timeZone: string | undefined) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date())
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0)
  return { h: get('hour') % 24, m: get('minute') }
}

/** Live time in a zone. Renders a placeholder on the server so hydration matches. */
export function ClockText({ timeZone }: { timeZone?: string }) {
  const [t, setT] = useState<{ h: number; m: number } | null>(null)
  useEffect(() => {
    const update = () => setT(partsIn(timeZone))
    update()
    const id = window.setInterval(update, 10_000)
    return () => window.clearInterval(id)
  }, [timeZone])
  if (!t) return <span>--:--</span>
  return (
    <span className="tabular-nums">
      {pad(t.h)}:{pad(t.m)}
    </span>
  )
}
