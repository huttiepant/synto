import Header from "./components/header"
import Hero from "./components/hero"
import Benefits from "./components/benefits"
import HowItWorks from "./components/how-it-works"
import FAQ from "./components/faq"
import Footer from "./components/footer"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Benefits />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

