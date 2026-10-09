import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { BookingButton, ArrowLink } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import ProofStrip from "../components/kit/ProofStrip"
import SectionHeader from "../components/kit/SectionHeader"
import ServiceCard from "../components/kit/ServiceCard"
import LinkList from "../components/kit/LinkList"
import Steps from "../components/kit/Steps"
import FeaturedCaseStudy from "../components/kit/FeaturedCaseStudy"
import CaseStudyCard from "../components/kit/CaseStudyCard"
import InsightCard from "../components/kit/InsightCard"
import CtaBand from "../components/kit/CtaBand"
import Picture from "../components/kit/Picture"
import { ORGANIZATION_JSON_LD } from "../config/site"
import { MOBILITY, OTHER_INDUSTRIES } from "../data/industries"
import { getCaseStudy } from "../data/caseStudies"
import { INSIGHTS } from "../lib/insights"
import "../styles/home.css"

const PROOF = [
  { title: "FLYTS", text: "Car rental marketplace, live on web and Android.", to: "/case-studies/flyts" },
  {
    title: "Duman Autos",
    text: "Vehicle document-expiry tracking with automatic daily alerts.",
    to: "/case-studies/duman-autos",
  },
  { title: "UK SaaS build", text: "Multi-tenant HR platform for a UK client.", to: "/case-studies/multi-tenant-hr-saas" },
]

const WHAT_WE_DO = [
  {
    title: "Payments and fintech",
    image: "gen-payments",
    text: "M-Pesa, Flutterwave and Paystack integrations that reconcile cleanly. Customer onboarding and KYC.",
  },
  {
    title: "Data protection",
    image: "gen-data-protection",
    text: "ODPC registration support, impact assessments and the technical controls the Data Protection Act expects.",
  },
  {
    title: "AI automation",
    image: "gen-ai-automation",
    text: "Customer-service agents and back-office workflows that remove repetitive work: reminders, reconciliation, document checks.",
  },
]

const STEPS = [
  { title: "Health check", text: "A free 30-minute call to find the biggest risk or bottleneck." },
  { title: "Fixed-scope offer", text: "A clear price and timeline before work starts." },
  { title: "Build and support", text: "Delivered in weeks, then a monthly care plan if you want one." },
]

export default function HomePage() {
  const featured = getCaseStudy("duman-autos")
  const more = ["flyts", "multi-tenant-hr-saas"].map(getCaseStudy)

  return (
    <>
      <SeoHead
        fullTitle="Cartlyf Technologies | Payment, Data and AI Systems for East African Businesses"
        description="Nairobi-based technology consultancy building M-Pesa and payment integrations, data protection compliance and AI automation for logistics, fintech, health and education businesses in East Africa."
        path="/"
        structuredData={ORGANIZATION_JSON_LD}
      />

      <PageHero
        size="home"
        image="nairobi-skyline"
        eyebrow="Payments · Data protection · AI automation"
        title="We build and secure the payment, data and AI systems East African businesses run on."
        lead="Starting with mobility and logistics. Fixed scope, fixed price, delivered from Nairobi."
      >
        <BookingButton className="btn btn-primary btn-lg" />
        <Link to="/case-studies" className="btn btn-secondary btn-lg">
          See our work
        </Link>
      </PageHero>
      <ProofStrip items={PROOF} />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="What we do" title="Three things, done properly" />
          <div className="grid grid-3">
            {WHAT_WE_DO.map((s) => (
              <ServiceCard key={s.title} to="/services" image={s.image} title={s.title} text={s.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Industries" title="Who we build for" />
          <div className="home-industries">
            <Link to={MOBILITY.to} className="photo-card on-dark">
              <Picture id={MOBILITY.image} alt="" sizes="(min-width: 900px) 640px, 100vw" />
              <div className="photo-card-body">
                <p className="eyebrow">Lead market</p>
                <h3 className="photo-card-title">{MOBILITY.title}</h3>
                <p className="photo-card-text">{MOBILITY.summary}</p>
                <span className="arrow-link photo-card-link">Software for fleets and rental companies</span>
              </div>
            </Link>
            <LinkList
              items={OTHER_INDUSTRIES.map((ind) => ({ to: `/industries#${ind.id}`, title: ind.title, text: ind.short }))}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="How we work" title="Clear steps, no surprises" />
          <Steps items={STEPS} />
          <p className="home-callout">New products go from idea to launch in 90 days: plan, build, launch.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Case studies"
            title="Work we can show you"
            action={<ArrowLink to="/case-studies">All case studies</ArrowLink>}
          />
          <FeaturedCaseStudy study={featured} />
          <div className="grid grid-2 home-case-grid">
            {more.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Insights"
            title="Latest insights"
            action={<ArrowLink to="/insights">All insights</ArrowLink>}
          />
          <div className="grid grid-3">
            {INSIGHTS.slice(0, 3).map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </>
  )
}
