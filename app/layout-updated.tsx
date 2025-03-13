import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import GallerySection from './components/gallery-section-updated'

export const metadata: Metadata = {
  title: 'Top Secret Tattoo',
  description: 'Top Secret Tattoo Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <GallerySection />
        {children}
      </body>
    </html>
  )
}
