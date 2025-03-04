import Image from "next/image"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    title: "Meet your personal advisor",
    description: "Connect with your dedicated advisor who will guide you through your journey with Synto.",
    image: "/placeholder.svg",
  },
  {
    number: "2",
    title: "Get started quickly",
    description: "Our streamlined onboarding process ensures you're up and running in no time.",
    image: "/placeholder.svg",
  },
  {
    number: "3",
    title: "Access insights",
    description: "Get valuable insights and analytics to help you make informed decisions.",
    image: "/placeholder.svg",
  },
  {
    number: "4",
    title: "Achieve results",
    description: "See real results as you implement our proven strategies and solutions.",
    image: "/placeholder.svg",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A seamless process designed to help you succeed
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative w-full aspect-video">
                <Image src={step.image} alt={step.title} fill className="object-cover rounded-lg" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Step {step.number}</h3>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg">Get Started Now</Button>
        </div>
      </div>
    </section>
  )
}

