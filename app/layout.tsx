// app/layout.tsx
import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import TermlyConsentBanner from '@/components/TermlyConsentBanner'

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
              gtag('config', 'AW-17026253560');
            `,
          }}
        ></script>

        <!-- Meta Pixel Code -->
        <script>
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '976505637694554');
            fbq('track', 'PageView');
        </script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style="display:none"
            src="https://www.facebook.com/tr?id=976505637694554&ev=PageView&noscript=1"
          />
        </noscript>
        <!-- End Meta Pixel Code -->
      </head>
      <body>
        {children}
        <TermlyConsentBanner />
      </body>
    </html>
  )
}
