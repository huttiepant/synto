import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black text-white">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold text-xl text-white">Synto</span>
            </Link>
            <p className="text-sm text-gray-400">Master the art of understanding through Active Reading.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: hey@synto-app.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button asChild variant="outline" className="bg-white text-black hover:bg-gray-200 rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Synto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

