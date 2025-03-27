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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5H3Q3JTZWR"></script>
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

        {/* ✅ Termly Cookie Consent Banner */}
        <script
          type="text/javascript"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="53e3248a-6e3a-470b-9917-854196da6de7"
        ></script>
      </head>
      <body>
        {children}

        {/* Optional: Consent Preferences Link */}
        <footer className="mt-8 text-center">
          <a href="#" className="termly-display-preferences text-sm text-gray-500 underline">
            Consent Preferences
          </a>
        </footer>
      </body>
    </html>
  )
}
