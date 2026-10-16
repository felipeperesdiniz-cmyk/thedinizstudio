'use client'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'
import { FashionContext } from './context'
import { Cursor } from './Cursor'
import { Nav } from './Nav'
import { Preloader } from './Preloader'
import { Collection } from './sections/Collection'
import { Cut } from './sections/Cut'
import { Dye } from './sections/Dye'
import { Finale } from './sections/Finale'
import { Hero } from './sections/Hero'
import { Loom } from './sections/Loom'
import { Plot } from './sections/Plot'
import { Thread } from './sections/Thread'
import { createChoreography } from './stage/choreography'
import { ClothStage, REST_POSE } from './stage/ClothStage'

// Sections run their own effects before this component's, so by the time the
// choreography starts every section has registered its ScrollTrigger.
export function FashionExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stage, setStage] = useState<ClothStage | null>(null)
  const [ready, setReady] = useState(false)
  const [entered, setEntered] = useState(false)
  const [motion, setMotion] = useState(false)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMotion(!reduced)
    document.documentElement.dataset.motion = reduced ? 'off' : 'on'
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      delete document.documentElement.dataset.motion
      document.documentElement.style.overflow = ''
    }
  }, [])

  // Load fonts first: the woven label is drawn with them.
  useEffect(() => {
    let cancelled = false
    let created: ClothStage | null = null
    ;(async () => {
      await document.fonts.ready
      const css = getComputedStyle(document.documentElement)
      const fonts = {
        display: css.getPropertyValue('--f-display').trim() || 'serif',
        mono: css.getPropertyValue('--f-mono').trim() || 'monospace',
      }
      await Promise.all([document.fonts.load(`500 104px ${fonts.display}`, 'TRAMA'), document.fonts.load(`400 24px ${fonts.mono}`, 'PORTO')]).catch(
        () => undefined,
      )
      if (cancelled || !canvasRef.current) return
      try {
        created = new ClothStage(canvasRef.current)
        await created.init(fonts)
      } catch (error) {
        // Without WebGL the story still reads; only the cloth is missing.
        console.warn('Trama: 3D stage unavailable', error)
        created?.dispose()
        created = null
      }
      if (cancelled) {
        created?.dispose()
        return
      }
      setStage(created)
      setReady(true)
    })()
    return () => {
      cancelled = true
      created?.dispose()
    }
  }, [])

  // Drive the cloth from the scroll position every frame.
  useEffect(() => {
    if (!ready) return
    const choreo = createChoreography()
    ScrollTrigger.refresh()

    const onResize = () => {
      stage?.resize()
      choreo.layout()
    }
    const onPointer = (e: PointerEvent) => {
      stage?.setPointer((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1))
    }
    const tick = (_time: number, deltaMs: number) => {
      if (!stage) return
      if (motion) {
        stage.setTarget(choreo.at(window.scrollY))
        if (choreo.crossedHidden) stage.snap()
      } else {
        // Reduced motion: the cloth hangs still in the hero and nowhere else.
        stage.setTarget({ ...REST_POSE, y: -0.02, wind: 0.25, s: window.scrollY < window.innerHeight * 0.6 ? 0.58 : 0, idle: 0 })
        stage.intro = 0
        stage.snap()
      }
      stage.update(Math.min(deltaMs / 1000, 0.05))
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointer)
    gsap.ticker.add(tick)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointer)
      gsap.ticker.remove(tick)
    }
  }, [ready, stage, motion])

  // Hold the page still until the preloader has gone.
  useEffect(() => {
    const lenis = getLenis()
    if (!entered) {
      lenis?.stop()
      return
    }
    document.documentElement.style.overflow = ''
    lenis?.start()
    if (stage && motion) gsap.to(stage, { intro: 0, duration: 2.4, ease: 'expo.out' })
    ScrollTrigger.refresh()
  }, [entered, stage, motion, ready])

  const onDone = useCallback(() => setEntered(true), [])
  const value = useMemo(() => ({ ready, entered, motion, stage }), [ready, entered, motion, stage])

  return (
    <FashionContext.Provider value={value}>
      <Preloader ready={ready} onDone={onDone} />
      <Nav />
      <main className="relative">
        <Hero />
        <Plot />
        <Thread />
        <Loom />
        <Dye />
        <Cut />
        <Collection />
        <Finale />
      </main>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-30 h-full w-full" aria-hidden="true" />
      <Cursor />
    </FashionContext.Provider>
  )
}
