import { Libre_Caslon_Text, Mulish } from 'next/font/google'

// A bookish serif for headlines, a plain sans for everything you read or press.
export const serif = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--ff-serif',
})

export const sans = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  variable: '--ff-sans',
})

export const fontVariables = `${serif.variable} ${sans.variable}`
