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
          <Link to="/" className="modern-footer-logo" onClick={scrollToTop}>
            <div className="modern-footer-logo-wrapper">
            <div className="modern-footer-logo-text">
              <div className="modern-footer-logo-name">Cartlyf</div>
              <div className="modern-footer-logo-tagline">TECHNOLOGIES LIMITED</div>
            </div>
            <div className="modern-footer-social">
              <a href="#" className="modern-footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="modern-footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            </div>
          </Link>
          <div className="modern-footer-links-grid">
            <div className="modern-footer-links-column">
              <h4 className="modern-footer-links-title">Navigation</h4>
              <ul className="modern-footer-links">
                <li>
                  <a onClick={() => scrollToSection('about')} className="modern-footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('portfolio-snapshot')} className="modern-footer-link">
                    Our Products
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('focus-areas')} className="modern-footer-link">
                    Focus Areas
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('news')} className="modern-footer-link">
                    News
                  </a>
                </li>
                <li>
                  <Link to="/team" className="modern-footer-link">
                    Team
                  </Link>
                </li>
                <li>
                  <a onClick={() => scrollToSection('contact')} className="modern-footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('contact')} className="modern-footer-link">
                    Partnerships
                  </a>
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
                  <span className="modern-footer-contact-label">Email:</span>
                  <a href="mailto:info@cartlyf.com" className="modern-footer-link">info@cartlyf.com</a>
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
            <span className="modern-footer-company-name">Cartlyf Technologies Limited</span>
            <span className="modern-footer-copyright">©2025 All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
