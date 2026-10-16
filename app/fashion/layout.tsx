import type { Metadata, Viewport } from 'next'
import '@/styles/fashion.css'
import { fontVariables } from '@/components/fashion/fonts'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { SITE } from '@/lib/site'

// A separate root layout: the concept has its own type, colour and chrome,
// apart from the studio site in app/[[...slug]].
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Trama | Woven, dyed and cut to order, a concept by The Diniz Studio',
  description:
    'Trama is a fictional clothing house: a scroll told story of thread, loom, dye and cut, designed and built by The Diniz Studio.',
  alternates: { canonical: '/fashion' },
  // A concept piece for a fictional brand; keep it out of search results.
  robots: { index: false, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#12110f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function FashionLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <div className="t-grain" aria-hidden="true" />
      </body>
    </html>
  )
}
