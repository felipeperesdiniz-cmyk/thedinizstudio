import { Bodoni_Moda, IBM_Plex_Mono, Inter_Tight } from 'next/font/google'

// A high contrast Didone for the fashion house voice.
export const display = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--f-display',
})

export const sans = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--f-sans',
})

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--f-mono',
})

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`
