import Link from "next/link"

export default function Footer() {
  const emailAddress = "hey@synto-app.com"

  return (
    <footer className="w-full border-t border-soft-gray bg-dark-navy text-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="text-center md:text-left space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="font-bold text-xl text-white">Synto</span>
            </Link>
            <p className="text-sm font-normal text-white/70 max-w-xs">
              Master the art of understanding through Active Reading.
            </p>
          </div>
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-lg font-bold text-white">Get in touch</h3>
            <p className="text-sm font-normal text-white/70">
              Email:{" "}
              <a href={`mailto:${emailAddress}`} className="text-white/70 hover:text-accent-gold transition-colors">
                {emailAddress}
              </a>
            </p>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
          <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm font-normal text-white/50">
          <p>© {new Date().getFullYear()} Synto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

