import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Leaf, Package } from "lucide-react"

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products.find((p) => p.id === params.id)
  if (!product) return {}

  return {
    title: `${product.title} | Heritage Jute Fibers`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Heritage Jute Fibers`,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-16">
      <Link href="/products" className="text-primary hover:underline mb-8 inline-block">
        &larr; Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={600}
            height={450}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
          <Separator className="my-6" />
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
          <ul className="space-y-2 mb-8">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-center text-muted-foreground">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                {detail}
              </li>
            ))}
          </ul>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              <span>Eco-friendly and biodegradable</span>
            </div>
            <div className="flex items-center">
              <Package className="mr-2 h-5 w-5 text-blue-600" />
              <span>Custom packaging available</span>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        <p className="text-muted-foreground mb-4">{product.title} is widely used in various industries, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          {product.applications.map((application, index) => (
            <li key={index} className="text-muted-foreground">
              {application}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our {product.title}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

