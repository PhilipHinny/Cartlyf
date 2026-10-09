import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { WithPlaceholders } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import CtaBand from "../components/kit/CtaBand"
import { SERVICES } from "../data/services"
import { SITE_URL } from "../config/site"
import "../styles/services-page.css"

// The six offers as structured data, so search engines can list them as services.
const OFFER_CATALOG = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Cartlyf Technologies services",
  url: `${SITE_URL}/services`,
  itemListElement: SERVICES.map((s) => ({
    "@type": "Offer",
    url: `${SITE_URL}/services#${s.id}`,
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.whatYouGet,
      areaServed: ["Kenya", "East Africa"],
      provider: { "@type": "Organization", name: "Cartlyf Technologies Limited", url: SITE_URL },
    },
  })),
}

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Services: M-Pesa Integration and ODPC Compliance"
        description="Fixed-scope, fixed-price offers from Cartlyf: M-Pesa, Paystack and Flutterwave integration in Kenya, ODPC compliance packs, technical audits, 90-day MVP builds, AI automation and care plans."
        path="/services"
        structuredData={OFFER_CATALOG}
      />

      <PageHero
        image="nairobi-skyline"
        eyebrow="Services"
        title="Fixed-scope offers"
        lead="Six fixed-scope offers. You know the price and the timeline before we start."
      />

      <section className="section">
        <div className="container services-layout">
          <nav className="services-jump" aria-label="Jump to an offer">
            <p className="services-jump-title">The offers</p>
            <ol>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="services-list">
            {SERVICES.map((s, i) => (
              <article key={s.id} id={s.id} className="service-offer" aria-labelledby={`${s.id}-title`}>
                <div className="service-offer-head">
                  <span className="service-offer-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="eyebrow">{s.category}</p>
                    <h2 id={`${s.id}-title`} className="service-offer-title">{s.title}</h2>
                    <p className="service-offer-summary">{s.summary}</p>
                  </div>
                </div>
                <dl className="facts service-offer-facts">
                  <div className="service-offer-what">
                    <dt>What you get</dt>
                    <dd>{s.whatYouGet}</dd>
                  </div>
                  <div>
                    <dt>Typical timeline</dt>
                    <dd><WithPlaceholders text={s.timeline} /></dd>
                  </div>
                  <div>
                    <dt>Pricing</dt>
                    <dd>{s.pricing}</dd>
                  </div>
                </dl>
                <div className="btn-row service-offer-actions">
                  <Link to={`/contact?subject=project&offer=${s.id}`} className="btn btn-primary">
                    Enquire about this offer
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Start here" text="Not sure which offer fits? Book the free health check." />
    </div>
  )
}
