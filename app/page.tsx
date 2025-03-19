import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Premium Jute Products | Sustainable Solutions for Global Markets",
  description:
    "Discover Heritage Jute Fibers' premium jute products. Sustainable, eco-friendly jute solutions for packaging, textiles, and more. Get a quote today!",
  openGraph: {
    title: "Premium Jute Products | Sustainable Solutions for Global Markets",
    description:
      "Discover Heritage Jute Fibers' premium jute products. Sustainable, eco-friendly jute solutions for packaging, textiles, and more. Get a quote today!",
    images: [{ url: "https://www.heritagejute.com/home-og-image.jpg" }],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

