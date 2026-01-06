"use client"

import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ExternalLink, Car, Users2, Sparkles, TrendingUp, Shield, MapPin, ArrowRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "../styles/portfolio.css"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [isFlytsOpen, setIsFlytsOpen] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const products = [
    {
      name: "FLYTS",
      tagline: "Drive. Earn. Empower.",
      sector: "Mobility Technology",
      status: "Active Development",
      description: "A peer-to-peer car rental marketplace—think Turo for Kenya—where car owners list their vehicles and renters book them seamlessly. FLYTS reduces paperwork, digitizes payments and contracts, and prioritizes safety for both owners and renters.",
      features: [
        { icon: Shield, text: "KYC, Owner/Renter Verification & Insurance" },
        { icon: MapPin, text: "GPS Telematics Tracking" },
        { icon: TrendingUp, text: "Digital Contracts & Secure Payments" }
      ],
      year: "Launching 2025",
      image: "/flyts.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ungana Hub",
      tagline: "Connect. Learn. Create.",
      sector: "Social & Collaboration Platform",
      status: "In Development",
      description: "A platform empowering students, professionals, and innovators across the world to connect, learn, and create together. Ungana bridges the gap between talent and opportunity for hackathons, collaborations, and mentorship.",
      features: [
        { icon: Users2, text: "Team Formation & Networking" },
        { icon: Sparkles, text: "Global Innovation Challenges" },
        { icon: TrendingUp, text: "Professional Mentorship" }
      ],
      year: "Coming Soon",
      image: "/online-education-platform.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "More Coming Soon",
      tagline: "Innovation Never Stops",
      sector: "Multiple Sectors",
      status: "Ideation Phase",
      description: "We're constantly exploring new opportunities to solve African challenges through technology. From fintech to agritech, e-commerce to healthtech - the future is bright.",
      features: [
        { icon: Sparkles, text: "Africa-Focused Solutions" },
        { icon: Users2, text: "Community-Driven Development" },
        { icon: TrendingUp, text: "Sustainable Growth" }
      ],
      year: "2025 & Beyond",
      image: "/ai-technology-interface.jpg",
      color: "from-orange-500 to-red-500"
    },
  ]

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className={`portfolio-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            Our Products
          </div>
          <h2 className="portfolio-title">Building Solutions That Matter</h2>
          <p className="portfolio-description">
            Each product we build is designed to solve real African problems with innovative, scalable, and sustainable technology solutions.
          </p>
        </div>

        <div className="portfolio-grid">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`portfolio-card ${isVisible ? 'fade-in-up' : ''} ${activeProduct === index ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProduct(index)}
            >
              <div className="portfolio-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="portfolio-image" />
                <div className={`portfolio-gradient-overlay ${product.color}`} />
                <div className="portfolio-badge-container">
                  <Badge variant="secondary" className="portfolio-status-badge">
                    {product.status}
                  </Badge>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-header-row">
                  <div>
                    <h3 className="portfolio-company-name">{product.name}</h3>
                    <p className="portfolio-tagline">{product.tagline}</p>
                  </div>
                  {product.name !== "More Coming Soon" && (
                    <div className="portfolio-icon-wrapper">
                      <ExternalLink className="portfolio-icon" />
                    </div>
                  )}
                </div>
                <Badge variant="outline" className="portfolio-sector-badge">
                  {product.sector}
                </Badge>
                <p className="portfolio-company-description">{product.description}</p>
                
                <div className="portfolio-features">
                  {product.features.map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <div key={idx} className="portfolio-feature">
                        <Icon className="feature-icon" size={16} />
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="portfolio-footer">
                  <span className="portfolio-year">{product.year}</span>
                  {product.name !== "More Coming Soon" && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="portfolio-learn-more"
                      onClick={() => product.name === "FLYTS" ? setIsFlytsOpen(true) : null}
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={14} />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {isFlytsOpen && (
          <div className="modal-backdrop" onClick={() => setIsFlytsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" aria-label="Close" onClick={() => setIsFlytsOpen(false)}>
                <X size={18} />
              </button>
              <div className="modal-grid">
                <div className="modal-image-wrap">
                  <img src="/flyts.png" alt="FLYTS preview" className="modal-image" />
                </div>
                <div className="modal-body">
                  <h3 className="modal-title">FLYTS — Peer‑to‑Peer Car Rental</h3>
                  <p className="modal-text">
                    FLYTS is a Kenyan peer‑to‑peer car rental marketplace that digitizes the entire rental experience:
                    listings, booking, contracts, insurance, and secure payments—reducing paperwork while keeping
                    safety and trust at the center for both car owners and renters.
                  </p>
                  <div className="modal-features">
                    <div className="modal-feature"><Shield size={16} /><span>KYC, verification & insurance</span></div>
                    <div className="modal-feature"><MapPin size={16} /><span>GPS telematics tracking</span></div>
                    <div className="modal-feature"><TrendingUp size={16} /><span>Digital contracts & payments</span></div>
                  </div>
                  <div className="modal-actions">
                    <Button size="lg" onClick={() => setIsFlytsOpen(false)}>Got it</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`portfolio-cta ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <Card className="cta-card">
            <div className="cta-content">
              <Sparkles className="cta-icon" />
              <div>
                <h3 className="cta-title">Want to Partner With Us?</h3>
                <p className="cta-description">
                  We're always looking for talented individuals, strategic partners, and investors who share our vision 
                  for Africa's digital future.
                </p>
              </div>
              <Button size="lg" className="cta-button">
                Get in Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
