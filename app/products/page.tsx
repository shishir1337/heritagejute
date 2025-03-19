import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { products } from "@/lib/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Premium Jute Products | Heritage Jute Fibers",
  description:
    "Explore our wide range of high-quality jute products including jute cloth, bags, yarn, and more. Sustainable and eco-friendly solutions for various industries.",
  openGraph: {
    title: "Premium Jute Products | Heritage Jute Fibers",
    description:
      "Explore our wide range of high-quality jute products including jute cloth, bags, yarn, and more. Sustainable and eco-friendly solutions for various industries.",
    images: [{ url: "/Jute_Cloth_Bangladesh-300x214.jpg" }],
  },
}

export default function ProductsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Our Premium Jute Products</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Discover our range of high-quality, sustainable jute products for various applications.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {product.title}
                <Badge variant="secondary">{product.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {product.details.slice(0, 3).map((detail, index) => (
                  <li key={index} className="text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Other Jute and Cotton Products</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-muted-foreground">Jute Geo Textile: Soil Savor, Jute Felt, Jute Caddies/Waste</li>
          <li className="text-muted-foreground">Jute Nursery product: Jute Tape, Jute Sheet, Jute Roll</li>
          <li className="text-muted-foreground">Jute Sliver roll: Sacking and Hessian quality</li>
          <li className="text-muted-foreground">Jute Webbing: 2.5 Cm to 3.5 Cm with strip and without strip</li>
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Packing Information</h2>
        <p className="text-muted-foreground">
          Yarn and Rope may be packed in stretch wrapped pallet or gunny bags and paper made cartons. Cloth and Bags may
          be packed in hydraulic pressed bales wrapped with Hessian pack sheets.
        </p>
      </section>
    </div>
  )
}

