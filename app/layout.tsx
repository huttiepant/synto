import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synto: Master Active Reading',
  description: 'Helping you understand The Great Books at a deeper level',
  generator: 'Synto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
