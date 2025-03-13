import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'TOP SECRET TATTOO',
  description: 'Estúdio de tatuagem profissional',
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
        <style>
          {`
            link[rel="icon"] {
              border-radius: 50%;
              -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
            }
          `}
        </style>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
