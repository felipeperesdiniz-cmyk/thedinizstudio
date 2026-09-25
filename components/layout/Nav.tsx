'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'
import { SITE } from '@/lib/site'
import { LOCALES, LOCALE_LABEL, contactPath, homePath, type Locale } from '@/lib/i18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const HIDE_AFTER = 120

interface NavProps {
  locale: Locale
  /** The current page in every language, for the switcher. */
  alternates: Record<Locale, string>
  /** Label for the persistent contact CTA, e.g. "Start a project". */
  ctaLabel: string
  /** Shorter form of the same CTA, shown on narrow screens so the header never wraps. */
  ctaLabelShort: string
}

export function Nav({ locale, alternates, ctaLabel, ctaLabelShort }: NavProps) {
  const navRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  // Retract on scroll down, return on scroll up.
  useEffect(() => {
    const nav = navRef.current
    if (!nav || prefersReduced) return

    const ctx = gsap.context(() => {
      let lastScroll = 0
      let hidden = false

      const update = (scroll: number) => {
        const goingDown = scroll > lastScroll
        lastScroll = scroll

        if (goingDown && scroll > HIDE_AFTER && !hidden) {
          hidden = true
          gsap.to(nav, { yPercent: -100, duration: 0.5, ease: 'power3.out', overwrite: true })
        } else if (!goingDown && hidden) {
          hidden = false
          gsap.to(nav, { yPercent: 0, duration: 0.5, ease: 'power3.out', overwrite: true })
        }
      }

      const lenis = getLenis()

      if (lenis) {
        const onScroll = ({ scroll }: { scroll: number }) => update(scroll)
        lenis.on('scroll', onScroll)
        return () => lenis.off('scroll', onScroll)
      }

      const onNativeScroll = () => update(window.scrollY)
      window.addEventListener('scroll', onNativeScroll, { passive: true })
      return () => window.removeEventListener('scroll', onNativeScroll)
    })

    return () => ctx.revert()
  }, [prefersReduced])


  return (
    <header ref={navRef} className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-studio flex h-[var(--nav-height)] items-center justify-between">
        <Link
          href={homePath(locale)}
          className="pointer-events-auto -my-3.5 py-3.5 font-mono text-xs uppercase tracking-[0.08em] text-primary transition-opacity hover:opacity-70"
        >
          {SITE.wordmark}
        </Link>

        <div className="pointer-events-auto flex items-center gap-2 sm:gap-4 md:gap-6">
          <nav aria-label="Language" className="flex items-center sm:gap-1.5">
            {LOCALES.map((code) => (
              <Link
                key={code}
                href={alternates[code]}
                hrefLang={code}
                aria-current={code === locale ? 'true' : undefined}
                // Padding widens the tap area to a finger's width without moving the labels.
                className={`-my-3.5 px-1.5 py-3.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                  code === locale ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {LOCALE_LABEL[code]}
              </Link>
            ))}
          </nav>

          <Link
            href={contactPath(locale)}
            className="relative inline-flex items-center whitespace-nowrap border border-line px-2.5 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-primary transition-colors after:absolute after:inset-x-0 after:-inset-y-1.5 after:content-[''] hover:border-primary sm:px-3 md:px-4 md:text-xs"
          >
            <span className="md:hidden">{ctaLabelShort}</span>
            <span className="hidden md:inline">{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
