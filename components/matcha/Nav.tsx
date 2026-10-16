'use client'

import { getLenis } from '@/lib/lenis'
import { ClockText, Enso } from './ui'

function jump(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(target, { duration: 2.2 })
  else target.scrollIntoView()
}

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-washi mix-blend-difference">
      <nav className="flex items-center justify-between px-[var(--gutter-x)] py-5" aria-label="Tsuyu">
        <button
          type="button"
          onClick={() => jump('top')}
          className="pointer-events-auto flex items-center gap-3"
          data-cursor="Top"
          aria-label="Back to top"
        >
          <Enso className="h-9 w-9" />
          <span className="font-display text-lg tracking-[0.2em]">TSUYU</span>
        </button>
        <span className="m-label hidden md:block">Ceremonial matcha, Uji, Kyoto</span>
        <div className="pointer-events-auto flex items-center gap-6">
          <span className="m-label hidden sm:block">
            Uji <ClockText timeZone="Asia/Tokyo" />
          </span>
          <button type="button" onClick={() => jump('collection')} className="m-label border-b border-current pb-0.5" data-cursor="Go">
            Collection
          </button>
        </div>
      </nav>
    </header>
  )
}
