"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "../styles/navigation.css"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
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
            <div className="nav-logo-icon">
              <img src="/cartlyf-logo.png" className="logo-image"/>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo">Cartlyf</span>
              <span className="nav-logo-tagline">TECHNOLOGIES LIMITED</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <a onClick={() => scrollToSection('portfolio-snapshot')} className="nav-link">
              Our Products
            </a>
            <a onClick={() => scrollToSection('focus-areas')} className="nav-link">
              Focus Areas
            </a>
            <a onClick={() => scrollToSection('news')} className="nav-link">
              News
            </a>
            <Link to="/team" className="nav-link">
              Team
            </Link>
            <a onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </a>
            <a onClick={() => scrollToSection('contact')} className="nav-link nav-link-partner">
              Partnerships
            </a>
          </div>
          
          <div className="nav-actions">
            <div className="nav-language-selector">
              <button 
                className={`lang-button ${selectedLanguage === 'EN' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('EN')}
              >
                EN
              </button>
              <button 
                className={`lang-button ${selectedLanguage === 'RU' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('RU')}
              >
                RU
              </button>
            </div>
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
            <Link to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <a onClick={() => scrollToSection('portfolio-snapshot')} className="mobile-link">
              Our Products
            </a>
            <a onClick={() => scrollToSection('focus-areas')} className="mobile-link">
              Focus Areas
            </a>
            <a onClick={() => scrollToSection('news')} className="mobile-link">
              News
            </a>
            <Link to="/team" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Team
            </Link>
            <a onClick={() => scrollToSection('contact')} className="mobile-link">
              Contact
            </a>
            <a onClick={() => scrollToSection('contact')} className="mobile-link">
              Partnerships
            </a>
            <div className="mobile-language-selector">
              <button 
                className={`lang-button ${selectedLanguage === 'EN' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('EN')}
              >
                EN
              </button>
              <button 
                className={`lang-button ${selectedLanguage === 'RU' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('RU')}
              >
                RU
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
