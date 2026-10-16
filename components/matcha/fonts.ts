import { Geist, Geist_Mono, Shippori_Mincho } from 'next/font/google'

// Shippori Mincho carries both the Latin display type and the kanji.
export const display = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--m-display',
})

export const sans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--m-sans',
})

export const mono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--m-mono',
})

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`
