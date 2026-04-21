import { TopBar } from "@/components/landing/top-bar"
import { HeroSection } from "@/components/landing/hero-section"
import { Marquee } from "@/components/landing/marquee"
import { Countdown } from "@/components/landing/countdown"
import { Testimonials } from "@/components/landing/testimonials"
import { SocialProof } from "@/components/landing/social-proof"
import { Footer } from "@/components/landing/footer"
import { MobileHeader } from "@/components/MobileHeader"
import { FooterMeta } from "@/components/FooterMeta"
import { FloatingCTA } from "@/components/FloatingCTA"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black pt-[52px] md:pt-0 pb-20 md:pb-0">
      <MobileHeader />
      <FooterMeta />
      <FloatingCTA />
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
