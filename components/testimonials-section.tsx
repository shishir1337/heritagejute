import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    quote:
      "Heritage Jute Fibers has been an excellent partner for our sustainable packaging needs. Their jute products are of the highest quality and their customer service is outstanding.",
    author: "John Doe",
    company: "EcoPackaging Co.",
    image: "/john-doe.jpg",
  },
  {
    quote:
      "We've been working with Heritage Jute Fibers for over 3 years now, and their commitment to quality and sustainability aligns perfectly with our company values. Highly recommended!",
    author: "Jane Smith",
    company: "Green Living Ltd.",
    image: "/john-doe.jpg",
  },
  {
    quote:
      "The jute yarn we receive from Heritage Jute Fibers is consistently high-quality. It's a pleasure doing business with a company that truly cares about its products and customers.",
    author: "Mike Johnson",
    company: "Organic Textiles Inc.",
    image: "/john-doe.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <QuoteIcon className="w-8 h-8 text-primary mb-4" />
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

