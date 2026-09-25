import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'
import { fontVariables } from '@/lib/fonts'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { PageTransition } from '@/components/layout/PageTransition'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'The Diniz Studio | Web Design, Branding and Marketing',
    template: '%s | The Diniz Studio®',
  },
  description:
    'Web design studio building custom websites, brand identities and the marketing around them, in English, Portuguese and Spanish.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: { images: [{ url: '/og-image.jpg', width: 1600, height: 551 }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <LenisProvider>
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
        <div className="grain" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
