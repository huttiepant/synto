// components/TermlyConsentBanner.tsx
'use client'

import { useEffect } from 'react'

export default function TermlyConsentBanner() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.termly.io/embed.min.js'
    script.type = 'text/javascript'
    script.setAttribute('data-website-uuid', '53e3248a-6e3a-470b-9917-854196da6de7')
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
