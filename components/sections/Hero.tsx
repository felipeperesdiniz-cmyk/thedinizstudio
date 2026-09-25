'use client'

/* eslint-disable @next/next/no-img-element */

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

// Every frame shares one coordinate space: the plate, 1671 x 941.
const STAGE_W = 1671
const STAGE_H = 941

type Affine = { sx: number; sy: number; tx: number; ty: number }
type Box = { x0: number; y0: number; x1: number; y1: number }

// Where each frame sits inside the plate space. Measured by matching the
// letterforms of neighbouring frames, so crossfades land on the same letters.
const MID: Affine = { sx: 1.3, sy: 1.46, tx: -232, ty: -281.76 }
const PLATE: Affine = { sx: 1, sy: 1, tx: 0, ty: 0 }

// "THE DINIZ STUDIO" letter block in plate space.
const WORD: Box = { x0: 165, y0: 380, x1: 1548, y1: 535 }
// Bottom of the O, used to start the drop just above the viewport.
const O_BOTTOM = 535

const invert = (m: Affine, b: Box): Box => ({
  x0: (b.x0 - m.tx) / m.sx,
  y0: (b.y0 - m.ty) / m.sy,
  x1: (b.x1 - m.tx) / m.sx,
  y1: (b.y1 - m.ty) / m.sy,
})

const grow = (b: Box, f: number): Box => {
  const cx = (b.x0 + b.x1) / 2
  const cy = (b.y0 + b.y1) / 2
  const hw = ((b.x1 - b.x0) / 2) * f
  const hh = ((b.y1 - b.y0) / 2) * f
  return { x0: cx - hw, y0: cy - hh, x1: cx + hw, y1: cy + hh }
}

// Camera stops: mid shot, close shot, then a slow push-in while the O drops.
const STOPS: Box[] = [invert(MID, WORD), WORD, grow(WORD, 1.035)]

// Portrait screens get a tighter framing: the dolly starts partway in, and the
// finished word spans nearly the full width.
const PORTRAIT_START = 0.4
const PORTRAIT_WORD_WIDTH = 0.97
const LANDSCAPE_WORD_WIDTH = 0.92

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

function cameraAt(u: number): Affine {
  const i = Math.min(STOPS.length - 2, Math.max(0, Math.floor(u)))
  const t = clamp01(u - i)
  const a = STOPS[i]!
  const b = STOPS[i + 1]!

  // Width and height interpolate geometrically so the dolly speed feels constant.
  const w = Math.exp(lerp(Math.log(a.x1 - a.x0), Math.log(b.x1 - b.x0), t))
  const h = Math.exp(lerp(Math.log(a.y1 - a.y0), Math.log(b.y1 - b.y0), t))
  const cx = lerp((a.x0 + a.x1) / 2, (b.x0 + b.x1) / 2, t)
  const cy = lerp((a.y0 + a.y1) / 2, (b.y0 + b.y1) / 2, t)

  const sx = w / (WORD.x1 - WORD.x0)
  const sy = h / (WORD.y1 - WORD.y0)
  return { sx, sy, tx: cx - w / 2 - WORD.x0 * sx, ty: cy - h / 2 - WORD.y0 * sy }
}

// Set once the visitor has scrolled through the whole sequence in this tab, so
// coming back to the home page shows the finished frame instead of replaying it.
const PLAYED_KEY = 'hero-played'

const readPlayed = () => {
  try {
    return sessionStorage.getItem(PLAYED_KEY) === '1'
  } catch {
    return false
  }
}

const markPlayed = () => {
  try {
    sessionStorage.setItem(PLAYED_KEY, '1')
  } catch {}
}

const toMatrix = (cam: Affine, m: Affine) =>
  `matrix(${cam.sx * m.sx}, 0, 0, ${cam.sy * m.sy}, ${cam.sx * m.tx + cam.tx}, ${cam.sy * m.ty + cam.ty})`

export function Hero({ title }: { title: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [reduced, setReduced] = useState(false)
  const [played, setPlayed] = useState(false)

  // Layout effect so a returning visitor never sees a frame of the tall intro.
  useLayoutEffect(() => {
    if (readPlayed()) setPlayed(true)
  }, [])

  // Clicking Home while already on the home page keeps this component mounted
  // and only scrolls to the top. Once the sequence has played, collapse it there
  // instead of making the visitor scroll through it again.
  useEffect(() => {
    if (played || reduced) return
    const onScroll = () => {
      if (window.scrollY <= 1 && readPlayed()) setPlayed(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [played, reduced])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduced) return

    const q = <T extends HTMLElement>(sel: string) => section.querySelector<T>(sel)!
    const intro = q('[data-hero-intro]')
    const stage = q('[data-hero-stage]')
    const mid = q('[data-layer="mid"]')
    const plate = q('[data-layer="plate"]')
    const drop = q('[data-hero-drop]')
    const streak = q('[data-hero-streak]')
    const floor = q('[data-hero-floor]')
    const glow = q('[data-hero-glow]')

    let scale = 1
    let portrait = false

    const dropStart = () => STAGE_H / 2 - window.innerHeight / (2 * scale) - O_BOTTOM - 160

    const fit = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      portrait = vh > vw
      const cover = Math.max(vw / STAGE_W, vh / STAGE_H)
      // On narrow screens, keep the whole finished word on screen instead of covering.
      const wordWidth = portrait ? PORTRAIT_WORD_WIDTH : LANDSCAPE_WORD_WIDTH
      const fitWord = (vw * wordWidth) / ((WORD.x1 - WORD.x0) * 1.035)
      scale = Math.min(cover, fitWord)
      stage.style.transform = `translate(-50%, -50%) scale(${scale})`
    }

    // Scroll-driven state. Everything visual is derived from it in render().
    const cam = { u: 0, fall: 0, settle: 0 }

    // The first leg is compressed on portrait so the shot opens closer in.
    const shot = () =>
      portrait
        ? PORTRAIT_START + (1 - PORTRAIT_START) * Math.min(cam.u, 1) + Math.max(0, cam.u - 1)
        : cam.u

    const render = () => {
      const u = shot()
      const c = cameraAt(u)
      mid.style.transform = toMatrix(c, MID)
      plate.style.transform = toMatrix(c, PLATE)

      mid.style.opacity = String(1 - clamp01((u - 0.95) / 0.08))
      plate.style.opacity = String(clamp01((u - 0.4) / 0.55))

      // The O falls from above the viewport, then settles with a small bounce.
      const y = dropStart() * (1 - cam.fall) - 10 * Math.sin(Math.PI * cam.settle)
      drop.style.transform = `translate3d(0, ${y}px, 0)`
      drop.style.visibility = cam.fall > 0 ? 'visible' : 'hidden'

      // The reflection mirrors the falling letter and gains strength near the floor.
      floor.style.transform = `translate3d(0, ${-y}px, 0)`
      floor.style.opacity = String(Math.pow(clamp01(1 + y / 320), 2))
    }

    fit()

    if (played) {
      // Jump straight to the landed frame, with no scroll sequence.
      Object.assign(cam, { u: 2, fall: 1, settle: 1 })
      render()
      intro.style.opacity = '1'
      // The section just lost several screens of height; re-measure every trigger below it.
      const frame = requestAnimationFrame(() => ScrollTrigger.refresh())
      const onResize = () => {
        fit()
        render()
      }
      window.addEventListener('resize', onResize)
      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('resize', onResize)
      }
    }

    render()

    const ctx = gsap.context(() => {
      gsap.fromTo(intro, { opacity: 0 }, { opacity: 1, duration: 1.8, ease: 'power2.out' })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
          onLeave: markPlayed,
        },
        onUpdate: render,
      })

      // 1. Dolly in, from the mid shot to the close shot.
      tl.to(cam, { u: 1, duration: 4, ease: 'sine.inOut' }, 0)

        // 2. A beat of stillness, then a slow push while the O drops in.
        .to(cam, { u: 2, duration: 5.6 }, 4.4)
        .to(cam, { fall: 1, duration: 2.5, ease: 'power2.in' }, 4.9)
        .fromTo(
          streak,
          { opacity: 0, scaleY: 0.2 },
          { opacity: 0.9, scaleY: 1, duration: 1.8, ease: 'power1.in' },
          4.9,
        )
        .to(streak, { opacity: 0, scaleY: 0.4, duration: 0.45, ease: 'power2.out' }, 7.25)

        // 3. Landing: a small settle and a soft flash on the floor.
        .to(cam, { settle: 1, duration: 0.55 }, 7.4)
        .fromTo(
          glow,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' },
          7.35,
        )
        .to(glow, { opacity: 0, scale: 1.3, duration: 1, ease: 'power2.out' }, 7.6)
        .to({}, { duration: 0.1 }, 9.9)
    }, section)

    const onResize = () => {
      fit()
      render()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [reduced, played])

  if (reduced) {
    return (
      <section aria-label="Introduction" className="relative h-svh overflow-hidden bg-black">
        <h1 className="sr-only">{title}</h1>
        <img
          src="/hero/final.webp"
          alt=""
          width={STAGE_W}
          height={STAGE_H}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className={`relative bg-black ${played ? 'h-svh' : 'h-[480svh] portrait:h-[240svh]'}`}
    >
      <h1 className="sr-only">{title}</h1>

      <div className="sticky top-0 h-svh overflow-hidden">
        <div data-hero-intro className="absolute inset-0 opacity-0">
          <div
            data-hero-stage
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ width: STAGE_W, height: STAGE_H }}
          >
            <div data-layer="mid" className="hero-layer">
              <img
                src="/hero/mid.webp"
                alt=""
                width={STAGE_W}
                height={STAGE_H}
                fetchPriority="high"
                className="hero-frame"
              />
            </div>
            <div data-layer="plate" className="hero-layer opacity-0">
              <img src="/hero/plate.webp" alt="" width={STAGE_W} height={STAGE_H} className="hero-frame" />

              <img
                data-hero-floor
                src="/hero/o-floor.webp"
                alt=""
                width={165}
                height={322}
                className="absolute opacity-0"
                style={{ left: 1410, top: 538 }}
              />

              <div
                data-hero-glow
                className="hero-glow absolute opacity-0"
                style={{ left: 1349, top: 505, width: 280, height: 64 }}
              />

              <div
                data-hero-drop
                className="invisible absolute"
                style={{ left: 1418, top: 360, width: 144, height: 178 }}
              >
                <div data-hero-streak className="hero-streak absolute opacity-0" />
                <img src="/hero/o.webp" alt="" width={144} height={178} className="relative block" />
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="hero-vignette pointer-events-none absolute inset-0" />
      </div>
    </section>
  )
}
