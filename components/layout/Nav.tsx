'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'
import { SITE } from '@/lib/site'
import {
  LOCALES,
  LOCALE_LABEL,
  aboutPath,
  contactPath,
  faqPath,
  homePath,
  industriesPath,
  servicesPath,
  workPath,
  type Locale,
} from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Character } from '@/components/ui/Character'

const HIDE_AFTER = 160

interface NavProps {
  locale: Locale
  /** The current page in every language, for the switcher. */
  alternates: Record<Locale, string>
  t: Dictionary
}

export function Nav({ locale, alternates, t }: NavProps) {
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()

  const links = [
    { href: workPath(locale), label: t.nav.work },
    { href: servicesPath(locale), label: t.nav.services },
    { href: industriesPath(locale), label: t.footer.sections.industries },
    { href: aboutPath(locale), label: t.nav.about },
    { href: faqPath(locale), label: t.faq.kicker },
    { href: contactPath(locale), label: t.nav.contact },
  ]

  // A route change closes the menu.
  useEffect(() => setOpen(false), [pathname])

  // Once away from the top, the bar gets a backdrop so it never sits on top of text.
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      nav.dataset.solid = String(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Retract on scroll down, return on scroll up.
  useEffect(() => {
    const nav = navRef.current
    if (!nav || prefersReduced) return

    let lastScroll = 0
    let hidden = false
    const update = (scroll: number) => {
      const goingDown = scroll > lastScroll
      lastScroll = scroll
      if (goingDown && scroll > HIDE_AFTER && !hidden) {
        hidden = true
        gsap.to(nav, { yPercent: -110, duration: 0.6, ease: 'power3.out', overwrite: true })
      } else if (!goingDown && hidden) {
        hidden = false
        gsap.to(nav, { yPercent: 0, duration: 0.6, ease: 'power3.out', overwrite: true })
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
  }, [prefersReduced])

  // The menu drops in as a panel; its links rise one after another.
  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    const lenis = getLenis()
    const items = menu.querySelectorAll('[data-menu-item]')

    if (open) {
      lenis?.stop()
      document.documentElement.style.overflow = 'hidden'
      if (prefersReduced) {
        gsap.set(menu, { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)' })
        return
      }
      gsap
        .timeline()
        .set(menu, { autoAlpha: 1 })
        .fromTo(
          menu,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'expo.inOut' },
        )
        .fromTo(
          items,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, stagger: 0.05, ease: 'expo.out' },
          '-=0.35',
        )
    } else {
      lenis?.start()
      document.documentElement.style.overflow = ''
      if (prefersReduced) {
        gsap.set(menu, { autoAlpha: 0 })
        return
      }
      gsap.to(menu, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.6,
        ease: 'expo.inOut',
        onComplete: () => gsap.set(menu, { autoAlpha: 0 }),
      })
    }
  }, [open, prefersReduced])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const primary = links.filter((link) => link.href !== industriesPath(locale) && link.href !== faqPath(locale))

  return (
    <>
      <header
        ref={navRef}
        data-solid="false"
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background transition-[border-color] duration-500 data-[solid=true]:border-line"
      >
        <div className="container-studio grid h-[var(--nav-height)] grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center justify-self-start">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? t.player.close : 'Menu'}
              className="relative -ml-2 grid size-11 place-items-center lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-out)] ${
                  open ? 'rotate-45' : '-translate-y-[3px]'
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-out)] ${
                  open ? '-rotate-45' : 'translate-y-[3px]'
                }`}
              />
            </button>
            <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
              {primary.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="label py-3 text-primary transition-opacity hover:opacity-55"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href={homePath(locale)} aria-label={SITE.name} className="group/logo flex items-center gap-2.5 py-2 text-primary">
            <Character className="h-[22px] w-[21px] shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover/logo:-rotate-12" />
            <Image src="/brand/diniz-word.png" alt="" width={362} height={46} priority className="h-[13px] w-auto md:h-[14px]" />
          </Link>

          <div className="flex items-center gap-5 justify-self-end">
            <nav aria-label={t.nav.language} className="hidden items-center gap-3 sm:flex">
              {LOCALES.map((code) => (
                <Link
                  key={code}
                  href={alternates[code]}
                  hrefLang={code}
                  aria-current={code === locale ? 'true' : undefined}
                  className={`label py-3 transition-colors ${code === locale ? 'text-primary' : 'hover:text-primary'}`}
                >
                  {LOCALE_LABEL[code]}
                </Link>
              ))}
            </nav>
            <Link href={contactPath(locale)} className="label hidden py-3 text-primary transition-opacity hover:opacity-55 lg:inline">
              {t.cta.label}
            </Link>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="invisible fixed inset-x-0 bottom-0 top-[var(--nav-height)] z-40 overflow-y-auto border-t border-line bg-background opacity-0"
        data-lenis-prevent
      >
        <div className="container-studio flex min-h-full flex-col justify-between pb-8 pt-4">
          <ol className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="overflow-hidden border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  data-menu-item
                  className="flex items-center justify-between py-5 font-serif text-3xl"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-base text-secondary">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-6 text-sm">
            <nav aria-label={t.nav.language} className="flex gap-4">
              {LOCALES.map((code) => (
                <Link key={code} href={alternates[code]} hrefLang={code} className={`label ${code === locale ? 'text-primary' : ''}`}>
                  {LOCALE_LABEL[code]}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-1 text-secondary">
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="whitespace-nowrap hover:text-primary">
                WhatsApp {SITE.phone}
              </a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
                Instagram {SITE.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
