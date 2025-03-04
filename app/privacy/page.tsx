"use client"

import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "../components/header"
import Footer from "../components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-dark-navy sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-rich-black/70">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Termly Privacy Policy Embed */}
            <div name="termly-embed" data-id="4a5e22f5-1f36-49dd-8bbe-44ebe3444b0d"></div>
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

