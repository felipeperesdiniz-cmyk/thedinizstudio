'use client'

import { getLenis } from '@/lib/lenis'
import { ClockText, Mark } from './ui'

function jump(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(target, { duration: 2.4 })
  else target.scrollIntoView()
}

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-bone mix-blend-difference">
      <nav className="flex items-center justify-between px-[var(--gutter-x)] py-5" aria-label="Trama">
        <button type="button" onClick={() => jump('top')} className="pointer-events-auto flex items-center gap-3" data-cursor="Top" aria-label="Back to top">
          <Mark className="h-7 w-7" />
          <span className="font-display text-lg tracking-[0.3em]">TRAMA</span>
        </button>
        <span className="t-label hidden md:block">Autumn Winter 2026, Collection 04</span>
        <div className="pointer-events-auto flex items-center gap-6">
          <span className="t-label hidden sm:block">
            Porto <ClockText timeZone="Europe/Lisbon" />
          </span>
          <button type="button" onClick={() => jump('collection')} className="t-label border-b border-current pb-0.5" data-cursor="Shop">
            Collection
          </button>
        </div>
      </nav>
    </header>
  )
}
