import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/jute-field.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <Badge className="w-fit">Premium Jute Products</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Sustainable Jute Solutions for Global Markets
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Leading exporter of high-quality jute products from Bangladesh. Eco-friendly, sustainable, and
              customizable solutions for your business.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://heritagejute.com/wp-content/uploads/2017/11/Jute_Ropes.jpg"
              alt="Jute Products Showcase"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

