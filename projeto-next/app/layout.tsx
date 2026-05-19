import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const titleFont = localFont({
  src: '../public/fonts/AmberyGardenRegular.ttf',
  variable: '--font-title-local',
  display: 'swap',
})

const textFont = Inter({
  subsets: ['latin'],
  variable: '--font-text-local',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-project-mono-local',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Desenvolvedor Full Stack',
  description: 'Portfolio de desenvolvedor full stack especializado em criar experiências digitais únicas e inovadoras.',
}

export const viewport: Viewport = {
  themeColor: '#1a3a2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${titleFont.variable} ${textFont.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
