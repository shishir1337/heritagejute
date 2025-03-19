import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapSection } from "@/components/map-section"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "Contact Heritage Jute Fibers | Get in Touch",
  description:
    "Reach out to Heritage Jute Fibers for inquiries about our premium jute products. Get quotes, product information, or answers to your questions.",
  openGraph: {
    title: "Contact Heritage Jute Fibers | Get in Touch",
    description:
      "Reach out to Heritage Jute Fibers for inquiries about our premium jute products. Get quotes, product information, or answers to your questions.",
    images: [{ url: "/logo.png" }],
  },
}

export default function ContactPage() {
  return (
    <div className="container py-16 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>

      <MapSection />

      <Faq />
    </div>
  )
}

