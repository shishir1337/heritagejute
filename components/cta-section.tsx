import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <div className="rounded-lg px-6 py-12 text-center text-primary-foreground md:py-24 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-primary-foreground/90 md:text-xl">
            Contact us today to discuss your jute product requirements and get a customized quote.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

