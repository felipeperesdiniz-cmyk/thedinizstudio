import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'
import { fontVariables } from '@/lib/fonts'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { PageTransition } from '@/components/layout/PageTransition'
import { SITE } from '@/lib/site'
import { HTML_LANG } from '@/lib/i18n'

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
  openGraph: { images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
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

// The root layout lives inside the catch-all so <html lang> is right in the served HTML,
// not only after JavaScript runs.
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const first = slug?.[0]
  const lang = first === 'pt' ? HTML_LANG.pt : first === 'es' ? HTML_LANG.es : HTML_LANG.en

  return (
    <html lang={lang} className={fontVariables}>
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
