import { Link, useNavigate, useLocation } from "react-router-dom"
import { Linkedin, Twitter, Github, Mail, Rocket, Heart } from "lucide-react"
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
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrapper" onClick={scrollToTop}>
              <Rocket className="footer-logo-icon" />
              <div className="footer-logo">CartLyf Technologies Ltd</div>
            </div>
            <p className="footer-tagline">
              Kenyan technology company building practical, safe, and accessible digital solutions for everyday life in Africa.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <Github className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Email">
                <Mail className="footer-social-icon" />
              </a>
            </div>
          </div>
          
              <div>
                <h4 className="footer-section-title">Sitemap</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/" className="footer-link" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="footer-link">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="footer-link">
                      Team
                    </Link>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('contact')} className="footer-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-section-title">Products</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      FLYTS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Ungana Hub
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('focus-areas')} className="footer-link">
                      Focus Areas
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('blog')} className="footer-link">
                      News & Blog
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-section-title">Subscribe our newsletter</h4>
                <p className="footer-newsletter-text">
                  Get the latest updates and insights directly to your inbox.
                </p>
                <div className="footer-newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email here" 
                    className="footer-newsletter-input"
                  />
                  <button className="footer-newsletter-button">
                    Subscribe
                  </button>
                </div>
              </div>
        </div>
        
        <div className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 CartLyf Technologies Limited. All rights reserved. 
              <span className="footer-made-with">
                Made with <Heart className="heart-icon" size={14} /> in Kenya
              </span>
            </p>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-legal-link">
                Terms of Service
              </a>
              <a href="#" className="footer-legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
