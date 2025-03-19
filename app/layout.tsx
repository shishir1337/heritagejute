import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { SchemaOrg } from "@/components/schema-org"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heritagejute.com"),
  title: {
    default: "Heritage Jute Fibers | Premium Jute Products from Bangladesh",
    template: "%s | Heritage Jute Fibers",
  },
  description:
    "Leading exporter of high-quality jute and cotton products from Bangladesh. Offering sustainable jute cloth, bags, yarn, twine, and more with worldwide shipping.",
  keywords: [
    "jute products",
    "bangladesh jute",
    "jute export",
    "jute bags",
    "jute cloth",
    "jute yarn",
    "organic jute",
    "sustainable packaging",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.heritagejute.com",
    siteName: "Heritage Jute Fibers",
    images: [
      {
        url: "https://www.heritagejute.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heritage Jute Fibers - Premium Jute Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@heritagejute",
    creator: "@heritagejute",
  },
  alternates: {
    canonical: "https://www.heritagejute.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaOrg />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

