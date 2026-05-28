import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timeless Cuts | Kids, Men & Women Haircuts in Lakewood, CO',
  description: 'Timeless Cuts is a local family salon in Lakewood, CO offering kids haircuts, men\'s cuts, women\'s cuts, and styling services. Fun car chair experience for kids! Book your appointment today.',
  keywords: ['kids haircuts', 'family salon', 'Lakewood CO', 'children haircuts', 'mens haircuts', 'womens haircuts', 'first haircut'],
  openGraph: {
    title: 'Timeless Cuts | Kids, Men & Women Haircuts in Lakewood, CO',
    description: 'Kids\' haircuts made fun, easy, and stress-free in Lakewood. Family-friendly salon with 12 years of experience.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#3b9aa8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
