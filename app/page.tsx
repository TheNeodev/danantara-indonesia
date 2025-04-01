import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { InvestmentSection } from "@/components/investment-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InvestmentSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}

