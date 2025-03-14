import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://my-tattoo-page-one.vercel.app'),
  title: {
    default: 'TOP SECRET TATTOO | Estúdio de Tatuagem em Siderópolis',
    template: '%s | TOP SECRET TATTOO'
  },
  description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas. Ambiente profissional e seguro em Siderópolis, SC.',
  keywords: ['tatuagem', 'tattoo', 'estúdio de tatuagem', 'tatuagem realista', 'tatuagem colorida', 'tatuador profissional', 'Siderópolis', 'Santa Catarina'],
  authors: [{ name: 'Martin Vitabar' }],
  creator: 'Martin Vitabar',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://my-tattoo-page-one.vercel.app',
    title: 'TOP SECRET TATTOO | Estúdio de Tatuagem em Siderópolis',
    description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas.',
    siteName: 'TOP SECRET TATTOO',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'TOP SECRET TATTOO Studio'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOP SECRET TATTOO',
    description: 'Estúdio de tatuagem em Siderópolis, SC',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll get this from Google Search Console
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="stylesheet" 
          href="/_next/static/css/app/layout.css" 
          as="style"
          precedence="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "TOP SECRET TATTOO",
              "image": "https://my-tattoo-page-one.vercel.app/assets/logo.jpg",
              "description": "Estúdio de tatuagem especializado em realismo e trabalhos personalizados",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Melvin Jones, 50",
                "addressLocality": "Siderópolis",
                "addressRegion": "SC",
                "postalCode": "88860-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -28.59606201187244,
                "longitude": -49.42681252770116
              },
              "url": "https://my-tattoo-page-one.vercel.app",
              "telephone": "+5553999202033",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
