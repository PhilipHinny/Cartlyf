import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { ArrowLink } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import CtaBand from "../components/kit/CtaBand"
import Picture from "../components/kit/Picture"
import { MOBILITY, OTHER_INDUSTRIES } from "../data/industries"
import "../styles/industries.css"

export default function IndustriesPage() {
  const rows = [MOBILITY, ...OTHER_INDUSTRIES]

  return (
    <div className="page-wrapper">
      <SeoHead
        title="Industries We Serve"
        description="Logistics software in Kenya, plus payment, KYC and data protection systems for SACCOs, lenders, clinics, pharmacies, schools and universities across East Africa."
        path="/industries"
      />

      <PageHero
        image="nairobi-skyline"
        eyebrow="Industries"
        title="Built for the way your sector works"
        lead="We lead with mobility and logistics, and bring the same payment, data and automation work to financial services, health and education."
      />

      {rows.map((ind, i) => (
        <section key={ind.id} id={ind.id} className={`section industry-row${i % 2 ? " section-alt" : ""}`}>
          <div className={`container industry-row-inner${i % 2 ? " is-reversed" : ""}`}>
            <div className="industry-row-media">
              <Picture id={ind.image} sizes="(min-width: 900px) 560px, 100vw" />
            </div>
            <div className="industry-row-body">
              {ind === MOBILITY && <p className="eyebrow">Lead market</p>}
              <h2 className="section-title">{ind.title}</h2>
              <p className="section-lead">{ind.audience}</p>
              {ind === MOBILITY ? (
                <>
                  <p className="section-lead">{ind.summary}</p>
                  <div className="btn-row industry-actions">
                    <Link to={ind.to} className="btn btn-primary">See how we help fleets</Link>
                  </div>
                </>
              ) : (
                <>
                  <ul className="check-list industry-points">
                    {ind.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="industry-talk">
                    Working in this sector?{" "}
                    <ArrowLink to={`/contact?subject=project&sector=${ind.id}`}>Talk to us</ArrowLink>
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure where to start?"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </div>
  )
}
