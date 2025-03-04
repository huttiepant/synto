import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  // You would typically fetch this URL from your backend or CMS
  const uploadedImageUrl = "/path/to/your/uploaded/image.jpg"

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Become an Active Reader
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                Your reading assistant to help you improve your understanding of The Great Books.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={uploadedImageUrl}
              alt="Hero"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

