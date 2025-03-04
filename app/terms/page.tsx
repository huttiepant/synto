"use client"

import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "../components/header"
import Footer from "../components/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-dark-navy sm:text-4xl md:text-5xl">Terms and Conditions</h1>
              <p className="text-rich-black/70">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Termly Terms and Conditions Embed */}
            <div name="termly-embed" data-id="74041af0-c204-4710-8afe-3affc887b321"></div>
            <Script id="termly-jssdk" src="https://app.termly.io/embed-policy.min.js" strategy="afterInteractive" />

            <div className="flex justify-center pt-8">
              <Button asChild className="rounded-full">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

