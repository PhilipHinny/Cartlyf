import React from "react"
import ModernContact from "../components/modern-contact"
import SeoHead from "../components/SeoHead"

export default function ContactPage() {
  return (
    <>
      <SeoHead 
        title="Contact Us | Cartlyf Technologies — Partnerships & Inquiries"
        description="Get in touch with Cartlyf Technologies for partnerships, collaboration, or pilot programs. We build practical digital solutions for East Africa."
        canonical="https://www.cartlyftechnologies.com/contact"
        ogTitle="Connect with Cartlyf Technologies"
        ogDescription="Reach out to our team in Kitale, Kenya for strategic partnerships and technology collaboration across Africa."
        ogUrl="https://www.cartlyftechnologies.com/contact"
      />
      <ModernContact />
    </>
  )
}
