import Header from "./components/header"
import Hero from "./components/hero"
import Benefits from "./components/benefits"
import HowItWorks from "./components/how-it-works"
import FAQ from "./components/faq"
import Footer from "./components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

