import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synto: Philosophy Reading Games',
  description: 'Helping you understand The Great Books at a deeper level',
  generator: 'Synto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GA4 Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5H3Q3JTZWR', {
                send_page_view: true,
                allow_ad_personalization_signals: false
              });
            `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
