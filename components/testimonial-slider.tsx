"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    company: "EcoPackaging Co.",
    quote:
      "Heritage Jute Fibers has been an excellent partner for our sustainable packaging needs. Their jute products are of the highest quality and their customer service is outstanding.",
    image: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    company: "Green Living Ltd.",
    quote:
      "We've been working with Heritage Jute Fibers for over 3 years now, and their commitment to quality and sustainability aligns perfectly with our company values. Highly recommended!",
    image: "/jane-smith.jpg",
  },
  {
    name: "Mike Johnson",
    company: "Organic Textiles Inc.",
    quote:
      "The jute yarn we receive from Heritage Jute Fibers is consistently high-quality. It's a pleasure doing business with a company that truly cares about its products and customers.",
    image: "/mike-johnson.jpg",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <p className="mt-4 text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
              <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 transform"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 transform"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

