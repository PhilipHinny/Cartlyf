import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { ArrowLink } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import SectionHeader from "../components/kit/SectionHeader"
import CtaBand from "../components/kit/CtaBand"
import Picture from "../components/kit/Picture"
import { ORGANIZATION_JSON_LD, FLYTS_URL, CONTACT } from "../config/site"
import "../styles/about-page.css"

const PRINCIPLES = [
  { title: "Fixed scope", text: "You know the price and the timeline before work starts." },
  { title: "Plain language", text: "We explain what we're building and why, without jargon." },
  { title: "Local payment rails", text: "M-Pesa, Flutterwave and Paystack, built in from the start." },
  { title: "Data protection built in", text: "Systems designed around Kenya's Data Protection Act, not patched later." },
]

// Team section is hidden for now (see the commented-out section below).
const TEAM = [
  {
    name: "Jamal Jonan Agaba",
    initials: "JJA",
    role: "Co-founder and Director, technical lead",
    bio: "Jamal's bio, 2 to 3 sentences",
  },
  {
    name: "Philip Hinny",
    initials: "PH",
    role: "Co-founder and Director",
    bio: "Philip's bio, 2 to 3 sentences",
  },
]

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="About Us"
        description="Cartlyf Technologies Limited is a registered Kenyan technology company in Nairobi and Kitale, building payment, data protection and AI systems for East African businesses."
        path="/about"
        structuredData={ORGANIZATION_JSON_LD}
      />

      <PageHero
        image="nairobi-skyline"
        eyebrow="About"
        title="About Cartlyf Technologies"
        lead="The team that builds and secures payment, data and AI systems for East African businesses."
      />

      <section className="section">
        <div className="container about-story">
          <div>
            <SectionHeader title="Our story" />
            <p className="section-lead">
              Cartlyf Technologies Limited is a registered Kenyan technology company serving Kenya and East Africa.
              We started by building our own products, including FLYTS, a car rental marketplace, and learned what it
              takes to ship software that handles real money and real customer data in East Africa. Now we build those
              systems for other businesses.
            </p>
          </div>
          <div className="about-story-media">
            <Picture id="gen-about-workspace" sizes="(min-width: 900px) 560px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader title="How we work" />
          <div className="grid grid-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="card card-sm">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section hidden for now; restore when photos and bios are ready.
      <section className="section">
        <div className="container">
          <SectionHeader title="Team" />
          <div className="grid grid-2">
            {TEAM.map((person) => (
              <div key={person.name} className="card about-person">
                <div className="about-photo" role="img" aria-label={`Photo placeholder for ${person.name}`}>
                  <span aria-hidden="true">{person.initials}</span>
                </div>
                <div>
                  <h3 className="card-title">{person.name}</h3>
                  <p className="about-role">{person.role}</p>
                  <p className="card-text">
                    <Placeholder>{person.bio}</Placeholder>
                  </p>
                  <p className="card-text">
                    <Placeholder>team photo for {person.name}</Placeholder>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="section">
        <div className="container">
          <SectionHeader title="Built by Cartlyf" lead="Our own products, and the proof behind our client work." />
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">FLYTS</h3>
              <p className="card-text">
                A car rental marketplace for Kenya, live on web and Android, with escrow payments, renter KYC
                and data protection built in.
              </p>
              <div className="card-footer btn-row">
                <a href={FLYTS_URL} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Visit flytsapp.com
                </a>
                <ArrowLink to="/case-studies/flyts">Case study</ArrowLink>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">Cartlyf Timetable Automation</h3>
              <p className="card-text">
                Intelligent school and university timetabling that removes clashes and manual coordination.
              </p>
              <div className="card-footer">
                <ArrowLink to="/industries#education">Education</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container container-narrow">
          <SectionHeader title="Company details" />
          <dl className="facts">
            <div>
              <dt>Company</dt>
              <dd>Cartlyf Technologies Limited, registered in Kenya</dd>
            </div>
            <div>
              <dt>Offices</dt>
              <dd>{CONTACT.offices.map((o) => o.city).join(" and ")}</dd>
            </div>
          </dl>
          <p className="about-links">
            <Link to="/careers">Careers at Cartlyf</Link>
            <Link to="/labs">Cartlyf Labs</Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Talk to the people who build it"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </div>
  )
}
