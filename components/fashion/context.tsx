'use client'

import { createContext, useContext, useEffect, type RefObject } from 'react'
import { gsap } from '@/lib/gsap'
import type { ClothStage } from './stage/ClothStage'

type FashionState = {
  /** Fonts and the 3D stage are loaded; sections may build their timelines. */
  ready: boolean
  /** The preloader has left and the hero intro is playing. */
  entered: boolean
  /** Scroll animation is on (no reduced motion preference). */
  motion: boolean
  /** Null when WebGL is unavailable; the page still reads without the cloth. */
  stage: ClothStage | null
}

export const FashionContext = createContext<FashionState>({ ready: false, entered: false, motion: false, stage: null })

export const useFashion = () => useContext(FashionContext)

/**
 * Builds a section's scroll animation once the page is ready, scoped to the
 * section so selectors stay local and everything reverts on unmount.
 * Skipped entirely under reduced motion, where sections show their static layout.
 */
export function useSectionMotion(ref: RefObject<HTMLElement | null>, setup: (stage: ClothStage | null) => void | (() => void)) {
  const { ready, motion, stage } = useFashion()

  useEffect(() => {
    const el = ref.current
    if (!ready || !motion || !el) return
    let cleanup: void | (() => void)
    const ctx = gsap.context(() => {
      cleanup = setup(stage)
    }, el)
    return () => {
      cleanup?.()
      ctx.revert()
    }
    // setup is defined inline by each section and only needs to run when readiness changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, motion, stage])
}
