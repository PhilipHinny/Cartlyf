"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Menu, X, Rocket } from "lucide-react"
import "../styles/navigation.css"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    
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

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`nav-container ${isScrolled ? "nav-scrolled" : "nav-transparent"}`}>
      <div className="nav-content">
        <div className="nav-inner">
          <Link to="/" className="nav-logo-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Rocket className="nav-logo-icon" />
            <span className="nav-logo">CartLyf</span>
            <span className="nav-logo-tagline">Technologies Ltd</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </Link>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/team" className="nav-link">
              Team
            </Link>
            <a onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </a>
          </div>
          
          <div className="nav-actions">
            <Button size="sm" className="nav-button" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </Button>
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-link" onClick={() => handleNavClick('/')}>
              Home
            </Link>
            <Link to="/portfolio" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/team" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Team
            </Link>
            <a onClick={() => scrollToSection('contact')} className="mobile-link">
              Contact
            </a>
            <Button 
              size="lg" 
              className="mobile-cta-button" 
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
