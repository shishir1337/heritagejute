export interface Product {
  id: string
  title: string
  description: string
  image: string
  category: string
  details: string[]
  applications: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    id: "jute-cloth",
    title: "Jute Cloth",
    description: "High-quality jute fabric for various applications",
    image: "/Jute_Cloth_Bangladesh-300x214.jpg",
    category: "Textile",
    details: [
      "Width: 28” – 56”",
      "Weight: 215 – 475 GSM",
      "Quality: Sacking, Hessian",
      "Packing: 1000/2000 yards per bale"
    ],
    applications: [
      "Packaging materials",
      "Home decor and furnishings",
      "Geotextiles for erosion control",
      "Agricultural applications",
    ],
    benefits: [
      "Durable and long-lasting",
      "Biodegradable and eco-friendly",
      "Versatile for various uses",
      "Cost-effective solution",
    ],
  },
  {
    id: "jute-yarn-twine",
    title: "Jute Yarn/Twine",
    description: "Premium quality yarn for textile manufacturing",
    image: "/Twine-300x214.jpg",
    category: "Textile",
    details: [
      "Count Range: 8.0 to 96 lbs (275 to 3310/Tex)",
      "Quality: Sacking, Hessian, CB, CRM, CTR and CRX",
      "Count Ply: 1 to 8 ply",
    ],
    applications: [
      "Carpet and rug manufacturing",
      "Handicrafts and decorative items",
      "Packaging and bundling",
      "Agricultural uses",
    ],
    benefits: [
      "High tensile strength",
      "Natural and sustainable material",
      "Versatile for various applications",
      "Available in different qualities and plies",
    ],
  },
  {
    id: "jute-bags",
    title: "Jute Bags",
    description: "Eco-friendly bags for shopping and packaging",
    image: "/Jute_Bags-300x214.jpg",
    category: "Packaging",
    details: [
      "Quality: Hessian/Burlap, Sacking/Gunny",
      "Types: Btwill Binola, Light Cees, Heavy Cees, Hessian/Burlap bag, Sand bag",
    ],
    applications: ["Retail shopping bags", "Food packaging", "Industrial packaging", "Promotional and gift bags"],
    benefits: [
      "Environmentally friendly alternative to plastic",
      "Durable and reusable",
      "Biodegradable and compostable",
      "Customizable designs and sizes",
    ],
  },
  {
    id: "raw-jute",
    title: "Raw Jute",
    description: "High-quality raw jute fibers",
    image: "/Jute_Bangladesh-300x214.jpg",
    category: "Raw Material",
    details: ["Quality: BTD, BTC, BTR, BWD, BWC and others"],
    applications: ["Textile manufacturing", "Paper production", "Composite materials", "Geotextiles"],
    benefits: [
      "Versatile natural fiber",
      "Renewable and sustainable resource",
      "Biodegradable and eco-friendly",
      "Strong and durable",
    ],
  },
  {
    id: "cbc-cloth",
    title: "CBC Cloth",
    description: "Carpet backing cloth for various applications",
    image: "/Carpet_backing_Cloth-300x214.jpg",
    category: "Textile",
    details: [
      "Width: 150” – 163”",
      "Weight: 5oz – 7oz",
      "Packing: 800-900 yards per roll"
    ],
    applications: ["Carpet manufacturing", "Rug production", "Flooring underlayment", "Upholstery backing"],
    benefits: [
      "Provides stability and structure to carpets",
      "Natural and eco-friendly material",
      "Durable and long-lasting",
      "Available in various weights and widths",
    ],
  },
  {
    id: "jute-ropes",
    title: "Jute Ropes",
    description: "Strong and durable jute ropes",
    image: "/Jute_Ropes-300x214.jpg",
    category: "Cordage",
    details: ["3 strand Hard Twist", "Diameter: 4 mm to 50 mm", "Length: 50 Mtr to 200 meters per coil"],
    applications: [
      "Marine and shipping industry",
      "Agriculture and gardening",
      "Construction and scaffolding",
      "Decorative and craft purposes",
    ],
    benefits: [
      "High tensile strength",
      "Resistant to stretching and abrasion",
      "Biodegradable and environmentally friendly",
      "Available in various diameters and lengths",
    ],
  },
]

