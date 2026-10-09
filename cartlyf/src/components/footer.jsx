import { Link } from "react-router-dom"
import { Linkedin, Twitter, ArrowUp } from "lucide-react"
import { Placeholder } from "./site-ui"
import { CONTACT, FLYTS_URL, NAV_LINKS } from "../config/site"
import "../styles/footer.css"

const MORE_LINKS = [
  { to: "/labs", label: "Cartlyf Labs" },
  { to: "/careers", label: "Careers" },
  { to: "/privacy", label: "Privacy Policy" },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="modern-footer-container">
      <div className="modern-footer-content">
        <div className="modern-footer-upper">
          <div className="modern-footer-logo-section">
            <Link to="/" className="modern-footer-logo" aria-label="Cartlyf Technologies home">
              <div className="modern-footer-logo-wrapper">
                <div className="modern-footer-logo-text">
                  <div className="modern-footer-logo-name">Cartlyf</div>
                  <div className="modern-footer-logo-tagline">TECHNOLOGIES LIMITED</div>
                </div>
              </div>
            </Link>
            <p className="modern-footer-positioning">
              We build and secure the payment, data and AI systems East African businesses run on.
            </p>
            <div className="modern-footer-social">
              <a className="modern-footer-social-link" href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" aria-label="Cartlyf on X (Twitter)">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a className="modern-footer-social-link" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Cartlyf on LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="modern-footer-links-grid">
            <nav className="modern-footer-links-column" aria-label="Footer">
              <h2 className="modern-footer-links-title">Company</h2>
              <ul className="modern-footer-links">
                {[...NAV_LINKS, ...MORE_LINKS].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="modern-footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="modern-footer-links-column">
              <h2 className="modern-footer-links-title">Built by Cartlyf</h2>
              <ul className="modern-footer-links">
                <li>
                  <a href={FLYTS_URL} target="_blank" rel="noopener noreferrer" className="modern-footer-link">
                    FLYTS car rental
                  </a>
                </li>
                <li>
                  <Link to="/industries#education" className="modern-footer-link">
                    Cartlyf Timetable Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="modern-footer-links-column">
              <h2 className="modern-footer-links-title">Contact</h2>
              <ul className="modern-footer-links">
                {CONTACT.offices.map((office) => (
                  <li key={office.city}>
                    <span className="modern-footer-contact-label">{office.city}:</span>
                    <span className="modern-footer-text">
                      {office.address || <Placeholder>{office.city} office address</Placeholder>}
                    </span>
                  </li>
                ))}
                <li>
                  <span className="modern-footer-contact-label">Phone:</span>
                  {CONTACT.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="modern-footer-link">
                      {p.display}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="modern-footer-contact-label">Email:</span>
                  <a href={`mailto:${CONTACT.email}`} className="modern-footer-link">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="modern-footer-back-to-top">
            <button type="button" onClick={scrollToTop} className="modern-footer-back-btn">
              Back to top
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="modern-footer-lower">
          <div className="modern-footer-lower-content">
            <span className="modern-footer-legal">
              <Link to="/privacy" className="modern-footer-legal-link">Privacy Policy</Link>
              <Link to="/credits" className="modern-footer-legal-link">Image credits</Link>
            </span>
            <span className="modern-footer-company-name">Cartlyf Technologies Limited, registered in Kenya</span>
            <span className="modern-footer-copyright">©{new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
