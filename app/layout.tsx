import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'TOP SECRET TATTOO',
  description: 'Estúdio de tatuagem especializado em realismo e blackwork',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
      </head>
      <body className={inter.className}>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
