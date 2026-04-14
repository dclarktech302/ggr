import HeroSection from "@/components/hero-section"
import Features from "@/components/features-7"
import Stats from "@/components/stats-2"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Stats />

      {/* Event listings — custom component, built next */}
      {/* <EventsSection /> */}

      {/* Artist profiles — custom component */}
      {/* <ArtistsSection /> */}

      <CallToAction />
      <Footer />
    </>
  )
}