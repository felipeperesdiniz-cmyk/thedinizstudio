'use client'

import { useEffect } from 'react'

/** Keeps <html lang> in step with the page's language. */
export function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
