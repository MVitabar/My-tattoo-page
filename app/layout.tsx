import type { Metadata, Viewport } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/seo/JsonLd';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import WhatsAppButton from '@/components/common/WhatsAppButton';

// Configuración del viewport para mejor SEO móvil
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

// Configuración de la fuente Poppins
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  preload: true,
})

// URLs canónicas para cada página
export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  const canonicalUrl = 'https://my-tattoo-page-one.vercel.app' + (params?.slug ? `/${params.slug}` : '');
  
  return {
    metadataBase: new URL('https://my-tattoo-page-one.vercel.app'),
    title: {
      default: 'TOP SECRET TATTOO | Estúdio de Tatuagem em Siderópolis',
      template: '%s | TOP SECRET TATTOO',
      absolute: 'TOP SECRET TATTOO | Tatuagens Personalizadas em Siderópolis/SC',
    },
    description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas. Ambiente profissional e seguro em Siderópolis, SC. Agende sua sessão!',
    keywords: [
      'tatuagem', 'tattoo', 'estúdio de tatuagem', 'tatuagem realista', 
      'tatuagem colorida', 'tatuador profissional', 'Siderópolis', 'Santa Catarina',
      'tatuagem personalizada', 'melhor tatuador', 'tatuagem SC', 'tatuagem em Siderópolis'
    ],
    authors: [
      { name: 'Martin Vitabar' },
      { name: 'TOP SECRET TATTOO', url: 'https://my-tattoo-page-one.vercel.app' }
    ],
    creator: 'Martin Vitabar',
    publisher: 'TOP SECRET TATTOO',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: 'https://my-tattoo-page-one.vercel.app',
      title: 'TOP SECRET TATTOO | Estúdio de Tatuagem em Siderópolis',
      description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas. Agende sua sessão!',
      siteName: 'TOP SECRET TATTOO',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TOP SECRET TATTOO Studio - Tatuagens Personalizadas em Siderópolis/SC'
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TOP SECRET TATTOO | Tatuagens em Siderópolis/SC',
      description: 'Estúdio de tatuagem especializado em realismo, preto e cinza e colorido em Siderópolis, SC',
      images: ['/og-image.jpg'],
      site: '@topsecrettattoo',
      creator: '@topsecrettattoo',
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
        'noimageindex': false,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Reemplazar con el código de Google Search Console
      yandex: 'yandex-verification-code', // Opcional: para verificación en Yandex
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
      shortcut: '/favicon-32x32.png',
    },
    manifest: '/site.webmanifest',
    other: {
      'msapplication-TileColor': '#000000',
      'theme-color': '#000000',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://my-tattoo-page-one.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TOP SECRET TATTOO" />
        <meta name="application-name" content="TOP SECRET TATTOO" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect a dominios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* JSON-LD para datos estructurados */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          "@id": "https://my-tattoo-page-one.vercel.app/#tattoo-parlor",
          "name": "TOP SECRET TATTOO",
          "image": "https://my-tattoo-page-one.vercel.app/og-image.jpg",
          "description": "Estúdio de tatuagem especializado em realismo, preto e cinza e colorido em Siderópolis, SC",
          "url": "https://my-tattoo-page-one.vercel.app",
          "telephone": "+5553999202033",
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
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "14:00",
            "closes": "22:00"
          }],
          "priceRange": "$$",
          "sameAs": [
            "https://www.instagram.com/topsecrettattoo/"
          ]
        }} />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Meta etiquetas para SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@topsecrettattoo" />
        <meta name="twitter:creator" content="@topsecrettattoo" />
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}
