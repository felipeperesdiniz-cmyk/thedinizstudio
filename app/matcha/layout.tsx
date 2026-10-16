import type { Metadata, Viewport } from 'next'
import '@/styles/matcha.css'
import { fontVariables } from '@/components/matcha/fonts'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { SITE } from '@/lib/site'

// A second root layout: the concept has its own type, colour and chrome,
// separate from the studio site in app/[[...slug]].
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Tsuyu | Ceremonial Matcha, a concept by The Diniz Studio',
  description:
    'Tsuyu is a fictional matcha brand: a scroll told story of shade, stone and ritual, designed and built by The Diniz Studio.',
  alternates: { canonical: '/matcha' },
  // A concept piece for a fictional brand; keep it out of search results.
  robots: { index: false, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#eeebe3',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function MatchaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <div className="m-grain" aria-hidden="true" />
      </body>
    </html>
  )
}
