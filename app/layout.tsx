import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import { SITE } from '@/lib/siteConfig'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Blue Star Linen | Commercial Laundry & Linen Rental South Florida',
    template: '%s | Blue Star Linen',
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: 'Blue Star Linen',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-white text-gray-900 antialiased flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-brand-700 px-3 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
