import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-8 sm:pt-28 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16 bg-warm-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_450px] items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-dark-navy sm:text-4xl md:text-5xl xl:text-6xl/none">
                Become an Active Reader
              </h1>
              <p className="text-lg font-normal text-rich-black/80 md:text-xl max-w-[500px] mx-auto lg:mx-0">
                Your reading assistant to help you improve your understanding of The Great Books.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" className="bg-primary-blue text-white hover:bg-primary-blue/90 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/3]">
              <Image src="https://synto-images.s3.eu-north-1.amazonaws.com/hero1.jpg" alt="Hero" fill className="object-cover rounded-lg shadow-lg" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}