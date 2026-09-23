'use client'

import { useEffect, useState } from 'react'

/** Tracks `prefers-reduced-motion`. Starts `true` so nothing animates before hydration. */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(query.matches)

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches)
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return prefersReduced
}
