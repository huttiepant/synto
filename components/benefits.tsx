import Image from "next/image"
import { MonitorSmartphone, Palette, Users, BarChart, Shield, Zap } from "lucide-react"

const benefitSections = [
  {
    title: "Benefits you get when using Synto",
    subtitle:
      "Active Readers understand the books they read at a deeper level and know how to apply what they read to their everyday life.",
    benefits: [
      {
        icon: <MonitorSmartphone className="h-8 w-8" />,
        title: "Approach The Great Books with increased understanding",
        description:
          "Our carefully designed activities make reading the toughest books more enjoyable and more relatable.",
      },
      {
        icon: <Palette className="h-8 w-8" />,
        title: "Learn to apply your new understanding to your real life",
        description:
          "The activities are designed to not only help you understand what you’re reading, but how to apply this understanding in your everyday life.",
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: "Learn how to think critically and think independently",
        description:
          "The lessons you learn here don’t stop once you finish using the app. They are now yours to use however you want, whenever you want.",
      },
    ],
    image: "/placeholder.svg",
  },
  {
    benefits: [
      {
        icon: <BarChart className="h-8 w-8" />,
        title: "Link The Big Ideas across The Great Books",
        description:
          "Every book on Synto has been carefully chosen as they contain the most important ideas to humankind. We help you discover the main themes and connect the lessons you take from reading.",
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Discuss your thoughts with our community",
        description: "Find others who are reading the same book or thinking about the same Big Idea in our community.",
      },
      {
        icon: <Zap className="h-8 w-8" />,
        title: "Become one of the top 2%",
        description:
          "A study in 2014 showed that only 2% of people read at the highest level. We help you get to that level.",
      },
    ],
    image: "/placeholder.svg",
  },
]

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="space-y-24">
          {benefitSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`grid gap-6 lg:grid-cols-2 lg:gap-12 ${sectionIndex % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`space-y-8 ${sectionIndex % 2 === 1 ? "lg:col-start-2" : ""}`}>
                {sectionIndex === 0 && (
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold tracking-tighter text-center sm:text-4xl lg:text-left text-primary">
                      {section.title}
                    </h2>
                    <p className="text-xl text-center lg:text-left text-muted-foreground">{section.subtitle}</p>
                  </div>
                )}
                <div className="space-y-12">
                  {section.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-foreground">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex items-center justify-center ${sectionIndex % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={`${section.title} Preview`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

