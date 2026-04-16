import { Link, useNavigate, useLocation } from "react-router-dom"
import { Linkedin, Twitter, ArrowUp } from "lucide-react"
import "../styles/footer.css"

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="modern-footer-container">
      <div className="modern-footer-content">
        <div className="modern-footer-upper">
          <div className="modern-footer-logo-section">
            <Link to="/" className="modern-footer-logo" onClick={scrollToTop}>
              <div className="modern-footer-logo-wrapper">
                <div className="modern-footer-logo-text">
                  <div className="modern-footer-logo-name">Cartlyf</div>
                  <div className="modern-footer-logo-tagline">TECHNOLOGIES LIMITED</div>
                </div>
              </div>
            </Link>
            <div className="modern-footer-social">
              <button className="modern-footer-social-link" aria-label="Twitter" onClick={() => window.open('https://x.com/cartlyf2685', '_blank')}>
                <Twitter size={20} />
              </button>
              <button className="modern-footer-social-link" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/company/cartlyf-technologies-limited', '_blank')}>
                <Linkedin size={20} />
              </button>
            </div>
          </div>
          <div className="modern-footer-links-grid">
            <div className="modern-footer-links-column">
              <h4 className="modern-footer-links-title">Navigation</h4>
              <ul className="modern-footer-links">
                <li>
                  <Link to="/about" className="modern-footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="modern-footer-link">
                    Services
                  </Link>
                </li>
                <li>
                  <a href="/#portfolio-snapshot" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio-snapshot'); }} className="modern-footer-link">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="/#focus-areas" onClick={(e) => { e.preventDefault(); scrollToSection('focus-areas'); }} className="modern-footer-link">
                    Focus Areas
                  </a>
                </li>
                <li>
                  <a href="/#news" onClick={(e) => { e.preventDefault(); scrollToSection('news'); }} className="modern-footer-link">
                    News
                  </a>
                </li>
                <li>
                  <Link to="/team" className="modern-footer-link">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="modern-footer-link">
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="modern-footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="modern-footer-link">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>
            <div className="modern-footer-links-column">
              <h4 className="modern-footer-links-title">Our Products</h4>
              <ul className="modern-footer-links">
                <li>
                  <a href="https://www.flytsapp.com" target="_blank" rel="noopener noreferrer" className="modern-footer-link">
                    FLYTS Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.gethapa.com" target="_blank" rel="noopener noreferrer" className="modern-footer-link">
                    HAPA City Discovery
                  </a>
                </li>
                <li>
                  <Link to="/portfolio" className="modern-footer-link">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="modern-footer-links-column">
              <h4 className="modern-footer-links-title">Contact</h4>
              <ul className="modern-footer-links">
                <li>
                  <span className="modern-footer-contact-label">Address:</span>
                  <span className="modern-footer-link">Cartlyf Technologies Limited, Kitale, Kenya</span>
                </li>
                <li>
                  <span className="modern-footer-contact-label">Phone:</span>
                  <a href="tel:+254714968636" className="modern-footer-link" aria-label="Call Cartlyf (+254 714 968 636)">+254 714 968 636</a>
                  <a href="tel:+254716857147" className="modern-footer-link" aria-label="Call Cartlyf (+254 716 857 147)">+254 716 857 147</a>
                </li>
                <li>
                  <span className="modern-footer-contact-label">Email:</span>
                  <a href="mailto:info@cartlyftechnologies.com" className="modern-footer-link" aria-label="Email Cartlyf">info@cartlyftechnologies.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="modern-footer-back-to-top">
            <button onClick={scrollToTop} className="modern-footer-back-btn">
              Back to top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        <div className="modern-footer-lower">
          <div className="modern-footer-lower-content">
            <a href="#" className="modern-footer-legal-link">Privacy Policy</a>
            <p className="modern-footer-product-by">
              A <a href="https://www.cartlyftechnologies.com">Cartlyf Technologies</a> product.
            </p>
            <span className="modern-footer-company-name">Cartlyf Technologies Limited</span>
            <span className="modern-footer-copyright">©{new Date().getFullYear()} All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
