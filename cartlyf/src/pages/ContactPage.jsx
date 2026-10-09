import ModernContact from "../components/modern-contact"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Contact Us"
        description="Book a free 30-minute health check or ask about M-Pesa integration, ODPC compliance or AI automation. Cartlyf Technologies, Nairobi and Kitale, Kenya."
        path="/contact"
      />
      <PageHero
        image="nairobi-skyline"
        eyebrow="Contact"
        title="Talk to us"
        lead="Book a free health check, ask about a project, or start a partnership."
      />
      <ModernContact />
    </div>
  )
}
