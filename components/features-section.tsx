import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Globe2, PackageCheck, ShieldCheck, Truck, Recycle } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "100% biodegradable and sustainable jute products that help protect our environment.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Serving clients worldwide with efficient shipping and logistics solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous quality control and compliance with international standards.",
  },
  {
    icon: PackageCheck,
    title: "Custom Solutions",
    description: "Tailored jute products to meet your specific business needs.",
  },
  {
    icon: Truck,
    title: "Reliable Shipping",
    description: "On-time delivery with careful packaging to ensure product integrity.",
  },
  {
    icon: Recycle,
    title: "Sustainable Practices",
    description: "Committed to environmentally friendly production and business practices.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            We offer premium quality jute products with exceptional service and commitment to sustainability.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

