import Image from "next/image"
import { MonitorSmartphone, Palette, Users, BarChart, Shield, Zap } from "lucide-react"

const benefitSections = [
  {
    title: "Synto gives you these benefits",
    benefits: [
      {
        icon: <MonitorSmartphone className="h-8 w-8 text-primary-blue" />,
        title: "Approach the classics with increased understanding",
        description:
          "Our carefully designed activities make reading the toughest books more enjoyable and more relatable.",
      },
      {
        icon: <Palette className="h-8 w-8 text-primary-blue" />,
        title: "Learn to apply your new understanding to your real life",
        description:
          "The activities are designed to not only help you understand what you're reading, but how to apply this understanding in your everyday life.",
      },
      {
        icon: <Users className="h-8 w-8 text-primary-blue" />,
        title: "Learn how to think critically and think independently",
        description:
          "The lessons you learn here don't stop once you finish using the app. They are now yours to use however you want, whenever you want.",
      },
    ],
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/benefits_1.jpg",
  },
  {
    benefits: [
      {
        icon: <BarChart className="h-8 w-8 text-primary-blue" />,
        title: "Link he big ideas across the classics",
        description:
          "Every book on Synto has been carefully chosen as they contain the most important ideas to humankind. We help you discover the main themes and connect the lessons you take from reading.",
      },
      {
        icon: <Shield className="h-8 w-8 text-primary-blue" />,
        title: "Discuss your thoughts with our community",
        description: "Find others who are reading the same book or thinking about the same Big Idea in our community.",
      },
      {
        icon: <Zap className="h-8 w-8 text-primary-blue" />,
        title: "Become one of the top 2%",
        description:
          "A study in 2014 showed that only 2% of people read at the highest level. We help you get to that level.",
      },
    ],
    image: "https://synto-images.s3.eu-north-1.amazonaws.com/benefits_2.jpg",
  },
]

export default function Benefits() {
  return (
    <section className="w-full pt-16 pb-12 bg-soft-gray">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dark-navy mb-16 text-center">
            {benefitSections[0].title}
          </h2>
          {benefitSections.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className={`grid gap-6 lg:grid-cols-2 lg:gap-12 ${sectionIndex % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`space-y-8 ${sectionIndex % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-12">
                  {section.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-dark-navy">{benefit.title}</h3>
                        <p className="font-normal text-rich-black/80">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex items-center justify-center ${sectionIndex % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={`Benefits Preview ${sectionIndex + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

