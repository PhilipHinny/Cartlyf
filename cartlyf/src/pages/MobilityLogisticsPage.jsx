import { FileClock, Receipt, UserCheck, MapPinned } from "lucide-react"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"
import SectionHeader from "../components/kit/SectionHeader"
import CaseStudyCard from "../components/kit/CaseStudyCard"
import CtaBand from "../components/kit/CtaBand"
import { getCaseStudy } from "../data/caseStudies"
import { MOBILITY } from "../data/industries"

const PROBLEMS = [
  {
    icon: <FileClock size={22} aria-hidden="true" />,
    title: "Expiring documents",
    text: "Insurance, inspection certificates, licences and permits tracked automatically, with alerts before they lapse.",
  },
  {
    icon: <Receipt size={22} aria-hidden="true" />,
    title: "Payments that don't match",
    text: "M-Pesa and bank payments matched to the right invoice or booking, with exceptions flagged.",
  },
  {
    icon: <UserCheck size={22} aria-hidden="true" />,
    title: "Renter and driver checks",
    text: "KYC and onboarding flows that verify identity before a vehicle leaves the yard.",
  },
  {
    icon: <MapPinned size={22} aria-hidden="true" />,
    title: "Fleet data and compliance",
    text: "GPS and customer data handled the way the Data Protection Act requires.",
  },
]

export default function MobilityLogisticsPage() {
  const proof = ["duman-autos", "flyts"].map(getCaseStudy)

  return (
    <div className="page-wrapper">
      <SeoHead
        title="Logistics Software Kenya and Fleet Document Tracking"
        description="Logistics software for Kenyan fleets, car rental companies and freight firms: fleet document tracking, M-Pesa reconciliation, renter and driver KYC, and ODPC-compliant fleet data."
        path="/industries/mobility-logistics"
        breadcrumb={[
          { name: "Industries", path: "/industries" },
          { name: "Mobility and logistics", path: "/industries/mobility-logistics" },
        ]}
      />

      <PageHero
        image={MOBILITY.image}
        breadcrumb={[{ label: "Industries", to: "/industries" }, { label: "Mobility and logistics" }]}
        eyebrow="Mobility and logistics"
        title="Software for fleets, rental companies and freight firms."
        lead="We built FLYTS, a car rental marketplace, and run document-expiry tracking for Duman Autos. We know the problems because we've solved them."
      />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Problems we solve" title="The work that slows a fleet down" />
          <div className="grid grid-2">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card">
                <span className="card-icon">{p.icon}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Proof" title="What we've built for mobility" />
          <div className="grid grid-2">
            {proof.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find the one thing worth fixing first"
        text="A free 30-minute health check for your fleet, rental or freight business."
      />
    </div>
  )
}
