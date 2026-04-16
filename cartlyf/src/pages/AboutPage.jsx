import { useEffect, useRef, useState } from "react"
import SeoHead from "../components/SeoHead"
import "../styles/page-header.css"
import "../styles/about-page.css"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cartlyf Technologies Limited",
  "url": "https://www.cartlyftechnologies.com",
  "logo": "https://www.cartlyftechnologies.com/cartlyf-logo.png",
  "description": "Cartlyf Technologies is a Kenyan technology company building scalable digital products for East African markets, including the FLYTS car rental platform and HAPA venue discovery app.",
  "foundingDate": "2024",
  "foundingLocation": { "@type": "Place", "name": "Kitale, Kenya" },
  "areaServed": ["Kenya", "Uganda", "East Africa"],
  "sameAs": [
    "https://www.linkedin.com/company/cartlyf-technologies-limited",
    "https://twitter.com/cartlyf"
  ]
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  return (
    <>
      <SeoHead
        title="Cartlyf Technologies | East Africa Tech Company | Kenya"
        description="Cartlyf Technologies is a Kenyan tech company building scalable digital products for East Africa — including FLYTS car rentals and HAPA, the live venue discovery app."
        canonical="https://www.cartlyftechnologies.com/about"
        ogTitle="Cartlyf Technologies — Building East Africa's Digital Economy"
        ogDescription="Kenyan tech startup behind FLYTS (peer-to-peer car rentals) and HAPA (live venue discovery). Building practical technology for African markets."
        ogUrl="https://www.cartlyftechnologies.com/about"
        structuredData={structuredData}
      />

      <div className="page-wrapper">
        {/* ── Page Header ── */}
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="page-header-title">About Cartlyf Technologies</h1>
            <p className="page-header-description">
              Who we are, what we build, and our vision for practical technology in East Africa
            </p>
          </div>
        </div>

        {/* ── Who We Are ── */}
        <section ref={sectionRef} className="about-overview-section">
          <div className="about-overview-container">
            <div className={`about-overview-content ${isVisible ? "fade-in-up" : ""}`}>
              <h2 className="about-overview-title">Who We Are</h2>
              <p className="about-overview-description">
                Cartlyf Technologies Limited is a registered technology company based in Kitale,
                Kenya. We build digital products that solve practical, everyday problems in African
                markets — creating platforms that are reliable enough for today and scalable enough
                for tomorrow.
              </p>
              <p className="about-overview-description">
                We are a product-driven company. That means every decision we make starts with a
                real user need: a car owner with an idle vehicle, a renter who needs transport
                without bureaucratic friction, a person who wants to know what is actually happening
                in their city tonight. We build the digital infrastructure that connects those needs
                to real solutions.
              </p>
              <p className="about-overview-description">
                Our work spans transportation technology, lifestyle apps, and education systems —
                three areas where the gap between what people need and what currently exists is still
                very wide across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ── Vision ── */}
        <section className="about-overview-section about-overview-section--alt">
          <div className="about-overview-container">
            <div className={`about-overview-content ${isVisible ? "fade-in-up" : ""}`}>
              <h2 className="about-overview-title">Our Vision</h2>
              <p className="about-overview-description">
                To become one of Africa's leading technology companies by building innovative digital
                products that solve everyday challenges and unlock value from underused systems and
                resources.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="about-overview-section">
          <div className="about-overview-container">
            <div className={`about-overview-content ${isVisible ? "fade-in-up" : ""}`}>
              <h2 className="about-overview-title">Our Mission</h2>
              <p className="about-overview-description">
                To create reliable, scalable, and user-centred technology products that improve
                transportation, education, and digital access — while contributing to sustainable
                economic growth across African markets.
              </p>
            </div>
          </div>
        </section>

        {/* ── Products ── */}
        <section className="about-values-section">
          <div className="about-values-container">
            <h2 className="about-values-title">Our Products</h2>
            <p className="about-overview-description" style={{ textAlign: "center", marginBottom: "2rem" }}>
              We currently operate two active platforms and one product in development.{" "}
              <a href="/portfolio" className="about-inline-link">View all our products →</a>
            </p>

            <div className="about-products-grid">
              {/* FLYTS */}
              <div className={`about-product-item ${isVisible ? "fade-in-up" : ""}`}>
                <h3 className="about-product-title">
                  FLYTS — Peer-to-Peer Car Rentals in Kenya and Uganda
                </h3>
                <p className="about-value-description">
                  FLYTS is East Africa's peer-to-peer car rental platform. It connects verified
                  private vehicle owners with renters who need self-drive or chauffeured transport
                  across Kenya and Uganda — with no deposit required and secure digital payments
                  built in.
                </p>
                <p className="about-value-description">
                  For vehicle owners, FLYTS turns an idle asset into consistent income. For renters,
                  it provides affordable, verified transport without the rigid terms of traditional
                  car hire companies.
                </p>
                <p className="about-product-meta">
                  <span className="about-product-badge">Transportation &amp; Mobility Technology</span>
                  <span className="about-product-status about-product-status--active">Active</span>
                </p>
                <a
                  href="https://www.flytsapp.com"
                  className="about-product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit flytsapp.com →
                </a>
              </div>

              {/* HAPA */}
              <div className={`about-product-item ${isVisible ? "fade-in-up" : ""}`} style={{ transitionDelay: "0.1s" }}>
                <h3 className="about-product-title">
                  HAPA — Live Venue &amp; Events Discovery in Kampala
                </h3>
                <p className="about-value-description">
                  HAPA is a real-time venue and events discovery app for Kampala, Uganda. Unlike
                  review platforms that show you what a place looked like in 2022, HAPA shows you
                  what is happening right now — through photos and videos posted directly by venues
                  and event organisers in the moment.
                </p>
                <p className="about-value-description">
                  The result is a live window into the city's real energy: which venues are open,
                  what the crowd looks like, what events are on tonight — before you step out the
                  door. Available on iOS and Android, and free to explore.
                </p>
                <p className="about-product-meta">
                  <span className="about-product-badge">Lifestyle &amp; Entertainment</span>
                  <span className="about-product-status about-product-status--active">Active</span>
                </p>
                <a
                  href="https://www.gethapa.com"
                  className="about-product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit gethapa.com →
                </a>
              </div>

              {/* Timetable */}
              <div className={`about-product-item ${isVisible ? "fade-in-up" : ""}`} style={{ transitionDelay: "0.2s" }}>
                <h3 className="about-product-title">
                  Timetable Scheduling System — Intelligent Academic Scheduling
                </h3>
                <p className="about-value-description">
                  Our third product addresses a problem that costs schools and universities enormous
                  amounts of administrative time: building conflict-free timetables. Our intelligent
                  scheduling platform automates the entire process — taking institutional
                  constraints, teacher availability, and room capacity as inputs and generating
                  optimised, conflict-free timetables as output.
                </p>
                <p className="about-product-meta">
                  <span className="about-product-badge">Education Technology</span>
                  <span className="about-product-status about-product-status--dev">In Development — launching 2025</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where We Build ── */}
        <section className="about-overview-section about-overview-section--alt">
          <div className="about-overview-container">
            <div className={`about-overview-content ${isVisible ? "fade-in-up" : ""}`}>
              <h2 className="about-overview-title">Where We Build</h2>
              <p className="about-overview-description">
                We are based in Kitale, Kenya, and our products currently serve users across Kenya
                and Uganda. We build for African markets first — because the problems here are real,
                the demand is real, and the opportunity to create lasting impact is real. We also
                build with global scalability in mind, because the solutions that work here can work
                anywhere.
              </p>
              <p className="about-overview-description">
                We also partner with organisations across East Africa to develop custom software
                solutions — including school management systems, booking platforms, and business
                automation tools. If you need a{" "}
                <a href="/services" className="about-inline-link">custom software development</a>{" "}
                partner in Kenya, we'd love to talk.
              </p>
            </div>
          </div>
        </section>

        {/* ── Work With Us ── */}
        <section className="about-overview-section">
          <div className="about-overview-container">
            <div className={`about-overview-content ${isVisible ? "fade-in-up" : ""}`}>
              <h2 className="about-overview-title">Work With Us</h2>
              <p className="about-overview-description">
                We are always looking for talented people who want to build products that matter. If
                you are a developer, designer, marketer, or operator interested in what we are
                doing, reach out.
              </p>
              <a href="/contact" className="about-product-link">
                Contact us →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
