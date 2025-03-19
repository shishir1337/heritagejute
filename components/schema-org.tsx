import type { Organization, WithContext } from "schema-dts"

export function SchemaOrg() {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Heritage Jute Fibers",
    url: "https://www.heritagejute.com",
    logo: "https://www.heritagejute.com/logo.png",
    sameAs: [
      "https://www.facebook.com/heritagejute",
      "https://www.linkedin.com/company/heritage-jute-fibers",
      "https://twitter.com/heritagejute",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-1234-567890",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Bengali"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "House: 34, Road: 10, Nikunja-2",
      addressLocality: "Dhaka",
      postalCode: "1229",
      addressCountry: "Bangladesh",
    },
    description:
      "Leading exporter of high-quality jute and cotton products from Bangladesh. Offering sustainable jute cloth, bags, yarn, twine, and more with worldwide shipping.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

