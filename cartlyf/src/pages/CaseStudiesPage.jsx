import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"
import CaseStudyCard from "../components/kit/CaseStudyCard"
import CtaBand from "../components/kit/CtaBand"
import { CASE_STUDIES } from "../data/caseStudies"

export default function CaseStudiesPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Case Studies"
        description="Cartlyf case studies: fleet document tracking for Duman Autos, the FLYTS car rental marketplace with M-Pesa and Paystack payments, and a multi-tenant HR SaaS for a UK client."
        path="/case-studies"
      />

      <PageHero
        image="mombasa-port-containers"
        eyebrow="Case studies"
        title="Work we can show you"
        lead="What the problem was, what we built, and what it runs on."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {CASE_STUDIES.map((c) => (
              <CaseStudyCard key={c.slug} study={c} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want results like these?"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </div>
  )
}
