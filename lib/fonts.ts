import { Gloock, Hanken_Grotesk, Spline_Sans_Mono } from 'next/font/google'

export const serif = Gloock({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--ff-serif',
})

export const sans = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--ff-sans',
})

export const mono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--ff-mono',
})

export const fontVariables = `${serif.variable} ${sans.variable} ${mono.variable}`
