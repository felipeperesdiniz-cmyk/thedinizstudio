'use client'

import { useEffect } from 'react'
import { recordLanding } from '@/lib/attribution'

/** Notes the page a visit started on, so the contact form can send it with the inquiry. */
export function LandingRecorder() {
  useEffect(() => {
    recordLanding()
  }, [])

  return null
}
