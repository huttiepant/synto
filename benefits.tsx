import Image from "next/image"
import { MonitorSmartphone, Palette, Users } from "lucide-react"

const benefits = [
  {
    icon: <MonitorSmartphone className="h-8 w-8" />,
    title: "Easy-to-use and intuitive user interface",
    description:
      "A seamless experience for all users, so you can focus on what matters most, rather than struggling with complicated software.",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Quality design",
    description: "Suitable for professional & academic use cases. We aim to support diverse needs and requirements.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Extensive customization options",
    description: "Available with Synto, and the options continue to expand to meet your growing needs.",
  },
]

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits you get when using Synto</h2>
            </div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">{benefit.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefits_synto-kv2V2nVljvFGSgivBHiSGCi0iKqPao.png`}
              alt="Benefits Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

