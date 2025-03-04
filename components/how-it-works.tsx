"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    number: "1",
    title: "Choose one of The Great Books to read",
    description: "We have activities developed for 15 of the most important books ever written.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile_scroll_right.jpg-J1uNMjgJ0QT43VNWZiwOQmw0imQ6Hp.jpeg",
  },
  {
    number: "2",
    title: "Before you read",
    description:
      "Spend 15 minutes on our pre-reading activities that will leave you in the best shape to understand the book at a deeper level from the first chapter.",
    image: "/placeholder.svg",
  },
  {
    number: "3",
    title: "While you read",
    description:
      "Check in after every reading session - store important notes from what you read and see our experts tips to get more from the book. You can also join our community to discuss with others’ who are reading the same book.",
    image: "/placeholder.svg",
  },
  {
    number: "4",
    title: "After reading",
    description: "Take our post-reading activities to apply what you learned and enhance your understanding.",
    image: "/placeholder.svg",
  },
]

export default function HowItWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold tracking-tighter text-primary sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              All activities are carefully designed with to be highly relevant to the book you’re reading and the ideas
              it’s discussing - all while being interesting and relevant to the modern world. Here’s how it works:
            </p>
          </div>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary text-primary hover:text-primary-foreground hover:bg-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary text-primary hover:text-primary-foreground hover:bg-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-8 pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex-none w-[300px] snap-center space-y-4">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={step.image} alt={step.title} fill className="object-cover rounded-lg" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-serif font-bold text-foreground">Step {step.number}</h3>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" className="rounded-full">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}

