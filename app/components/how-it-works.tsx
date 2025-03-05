"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect, useCallback } from "react"

interface Step {
  number: string
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    number: "1",
    title: "Choose one of The Great Books to read",
    description: "We have activities developed for 15 of the most important books ever written.",
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/step_1+how+it+works.jpg",
  },
  {
    number: "2",
    title: "Before you read",
    description:
      "Spend 15 minutes on our pre-reading activities that will leave you in the best shape to understand the book at a deeper level from the first chapter.",
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/step_2+how+it+works.jpg",
  },
  {
    number: "3",
    title: "While you read",
    description:
      "Check in after every reading session - store important notes from what you read and see our experts tips to get more from the book. You can also join our community to discuss with others' who are reading the same book.",
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/step_3+how+it+works.jpg",
  },
  {
    number: "4",
    title: "After reading",
    description: "Take our post-reading activities to apply what you learned and enhance your understanding.",
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/step_4+how+it+works.jpg",
  },
]

export default function HowItWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  useEffect(() => {
    // Ensure scroll position starts at 0 to show Step 1 first
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0
    }
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => {
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  useEffect(() => {
    const handleScroll = () => {
      checkScroll()
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll)
    }

    checkScroll()
    window.addEventListener("resize", checkScroll)

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll)
      }
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full pt-16 pb-12 bg-warm-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-dark-navy sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] font-normal text-rich-black/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              All activities are carefully designed with to be highly relevant to the book you're reading and the ideas
              it's discussing - all while being interesting and relevant to the modern world. Here's how it works:
            </p>
          </div>
        </div>
        <div className="relative mt-16">
          {canScrollLeft && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full bg-background/80 backdrop-blur-sm border-primary-blue text-primary-blue hover:text-white hover:bg-primary-blue"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full bg-background/80 backdrop-blur-sm border-primary-blue text-primary-blue hover:text-white hover:bg-primary-blue"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory hide-scrollbar justify-start md:justify-center pl-4 md:pl-0"
            onScroll={checkScroll}
          >
            {steps.map((step, index) => (
              <div key={index} className="flex-none w-[280px] sm:w-[250px] snap-center space-y-4">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-dark-navy">Step {step.number}</h3>
                  <h4 className="font-semibold text-rich-black">{step.title}</h4>
                  <p className="text-sm font-normal text-rich-black/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" className="rounded-full bg-primary-blue hover:bg-primary-blue/90">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}

