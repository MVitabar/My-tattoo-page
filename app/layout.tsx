import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'TOP SECRET TATTOO',
  description: 'TOP SECRET TATTOO - Estúdio de tatuagem profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
