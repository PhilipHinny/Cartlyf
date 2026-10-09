import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { BookingButton } from "./site-ui"
import { NAV_LINKS } from "../config/site"
import "../styles/navigation.css"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.search])

  const solid = isScrolled || isMobileMenuOpen

  return (
    <nav className={`nav-container ${solid ? "nav-scrolled" : "nav-transparent"}`} aria-label="Main">
      <div className="nav-content">
        <div className="nav-inner">
          <Link to="/" className="nav-logo-wrapper" aria-label="Cartlyf Technologies home">
            <div className="nav-logo-icon">
              <img src="/cartlyf-logo.png" className="logo-image" alt="" width="40" height="40" />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo">Cartlyf</span>
              <span className="nav-logo-tagline">TECHNOLOGIES LIMITED</span>
            </div>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="nav-link">
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <BookingButton className="btn btn-primary btn-sm nav-cta" />
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu" id="mobile-menu">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="mobile-link">
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-menu-cta">
              <BookingButton className="btn btn-primary" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
