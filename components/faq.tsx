"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of jute products do you offer?",
    answer:
      "We offer a wide range of jute products including jute cloth, bags, yarn, twine, and more. Our products cater to various industries such as packaging, textiles, and agriculture.",
  },
  {
    question: "Do you offer custom jute product solutions?",
    answer:
      "Yes, we provide custom jute product solutions tailored to our clients' specific needs. Please contact us with your requirements, and our team will be happy to assist you.",
  },
  {
    question: "What are your minimum order quantities?",
    answer:
      "Our minimum order quantities vary depending on the product. Please get in touch with our sales team for specific information about the products you're interested in.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship our products internationally. We have experience exporting to various countries and can handle all necessary documentation for smooth international shipping.",
  },
  {
    question: "How can I request a quote for your products?",
    answer:
      "You can request a quote by filling out our contact form on this page, or by directly emailing us at info@heritagejute.com. Please provide as much detail as possible about your requirements.",
  },
]

export function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value) ? prevItems.filter((item) => item !== value) : [...prevItems, value],
    )
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="multiple" value={openItems} className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

