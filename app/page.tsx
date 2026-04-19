import { TopBar } from "@/components/landing/top-bar"
import { HeroSection } from "@/components/landing/hero-section"
import { Marquee } from "@/components/landing/marquee"
import { Countdown } from "@/components/landing/countdown"
import { Testimonials } from "@/components/landing/testimonials"
import { SocialProof } from "@/components/landing/social-proof"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <HeroSection />
      <Marquee />
      <Countdown />
      <Testimonials />
      <Footer />
      <SocialProof />
    </main>
  )
}
