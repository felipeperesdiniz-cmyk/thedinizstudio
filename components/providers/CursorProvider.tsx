'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Cursor } from '@/components/ui/Cursor'
import { CursorContext, type CursorState } from '@/hooks/useCursor'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const isTouch = useIsTouchDevice()
  const pathname = usePathname()

  // A click that navigates never fires mouseleave, so reset on every route.
  useEffect(() => setCursorState('default'), [pathname])

  const value = useMemo(() => ({ cursorState, setCursorState }), [cursorState])

  return (
    <CursorContext.Provider value={value}>
      {children}
      {!isTouch && <Cursor />}
    </CursorContext.Provider>
  )
}
