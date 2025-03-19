import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Users, Award, Truck, Leaf, Recycle, Factory } from "lucide-react"

export const metadata: Metadata = {
  title: "About Heritage Jute Fibers | Leading Jute Exporter from Bangladesh",
  description:
    "Discover Heritage Jute Fibers, a premier exporter of high-quality jute and cotton products from Bangladesh. Learn about our history, certifications, and commitment to sustainable practices.",
  openGraph: {
    title: "About Heritage Jute Fibers | Leading Jute Exporter from Bangladesh",
    description:
      "Discover Heritage Jute Fibers, a premier exporter of high-quality jute and cotton products from Bangladesh. Learn about our history, certifications, and commitment to sustainable practices.",
    images: [{ url: "/Jute_Bangladesh-300x214.jpg" }],
  },
}

export default function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">About Heritage Jute Fibers</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Founded in 2014, Heritage Jute Fibers has rapidly become a leading name in the jute industry. As a
              government-registered private export company based in Bangladesh, we take pride in offering a wide range
              of premium jute and cotton products to clients worldwide.
            </p>
            <p className="text-lg mb-4">
              Our journey began with a vision to showcase the finest Bangladeshi jute to the world. Today, we've grown
              into a trusted partner for businesses across various industries, from packaging to textiles.
            </p>
            <p className="text-lg">
              With a commitment to quality, sustainability, and customer satisfaction, we've built strong relationships
              with clients from over 20 countries, including Australia, South Africa, UAE, Romania, Spain, Korea,
              Thailand, Vietnam, Japan, and many more.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/Jute_Bangladesh-300x214.jpg"
              alt="Jute field in Bangladesh"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Management Philosophy</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">At Heritage Jute Fibers, our management approach is built on three core principles:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Quality Excellence:</strong> We maintain rigorous quality control measures at every stage of
                  production, ensuring that only the finest jute products reach our clients.
                </div>
              </li>
              <li className="flex items-start">
                <Users className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Expert Team:</strong> Our workforce comprises skilled technicians and industry experts who
                  bring years of experience in jute processing and manufacturing.
                </div>
              </li>
              <li className="flex items-start">
                <Globe className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Global Standards:</strong> We adhere to international quality standards and continuously
                  update our processes to meet evolving global requirements.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Certifications</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "BJGEA", desc: "Bangladesh Jute Goods Exporters Association" },
            { name: "ERC", desc: "Export Registration Certificate" },
            { name: "Export License", desc: "Authorized by Jute Ministry" },
            { name: "Trade License", desc: "Government-approved business operation" },
          ].map((cert, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{cert.name}</CardTitle>
                <Award className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{cert.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Bangladeshi Jute?</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              Bangladesh has been at the forefront of jute production for centuries. Here's why our jute stands out:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Leaf, title: "Premium Quality", desc: "Known for producing the world's finest jute fibers" },
                {
                  icon: Users,
                  title: "Skilled Workforce",
                  desc: "Generations of expertise in jute cultivation and processing",
                },
                {
                  icon: Factory,
                  title: "Modern Processing",
                  desc: "State-of-the-art facilities ensuring top-notch products",
                },
                {
                  icon: Recycle,
                  title: "Sustainability",
                  desc: "Eco-friendly production supporting global green initiatives",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>{item.title}:</strong> {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Commitments</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Quality Assurance", icon: CheckCircle, desc: "Rigorous quality control at every stage" },
            { title: "Competitive Pricing", icon: Globe, desc: "Best value for premium jute products" },
            { title: "Timely Delivery", icon: Truck, desc: "Efficient logistics ensuring on-time shipments" },
          ].map((commitment, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col items-center pb-2">
                <commitment.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg font-medium text-center">{commitment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">{commitment.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Global Reach</h2>
        <p className="text-lg mb-4">
          Heritage Jute Fibers proudly serves clients across the globe. Our products have found homes in diverse
          industries and markets, including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Australia",
            "South Africa",
            "UAE",
            "Romania",
            "Spain",
            "Korea",
            "Thailand",
            "Vietnam",
            "Japan",
            "New Zealand",
            "Poland",
            "Russia",
          ].map((country, index) => (
            <Badge key={index} variant="secondary" className="text-center py-2">
              {country}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}

