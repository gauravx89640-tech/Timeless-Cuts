import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { WhyParentsLove } from "@/components/why-parents-love"
import { Services } from "@/components/services"
import { FirstHaircut } from "@/components/first-haircut"
import { Gallery } from "@/components/gallery"
import { MeetDeanna } from "@/components/meet-deanna"
import { Reviews } from "@/components/reviews"
import { VisitUs } from "@/components/visit-us"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <WhyParentsLove />
      <Services />
      <FirstHaircut />
      <Gallery />
      <MeetDeanna />
      <Reviews />
      <VisitUs />
      <FinalCTA />
      <Footer />
    </main>
  )
}
