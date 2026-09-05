import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Rohan | Performance Marketer',
  description:
    'Rohan is a Performance Marketer helping brands grow through Meta Ads, Google Ads, Lead Generation, E-commerce Growth, and Data-Driven Marketing Strategies.',
  keywords: [
    'Performance Marketer',
    'Meta Ads Specialist',
    'Digital Marketing',
    'Lead Generation',
    'E-commerce Growth',
    'Google Ads',
    'Performance Marketing',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
