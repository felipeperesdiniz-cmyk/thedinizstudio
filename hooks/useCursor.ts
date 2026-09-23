'use client'

import { createContext, useContext } from 'react'

export type CursorState = 'default' | 'hover' | 'view' | 'drag' | 'hidden'

export interface CursorContextValue {
  cursorState: CursorState
  setCursorState: (state: CursorState) => void
}

export const CursorContext = createContext<CursorContextValue>({
  cursorState: 'default',
  setCursorState: () => {},
})

export function useCursor(): CursorContextValue {
  return useContext(CursorContext)
}
