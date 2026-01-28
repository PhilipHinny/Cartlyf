"use client"

import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ExternalLink, Users2, Sparkles, TrendingUp, Shield, MapPin, ArrowRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/portfolio.css"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [isFlytsOpen, setIsFlytsOpen] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()

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
      tagline: "Car Rental Platform",
      sector: "Transportation & Mobility",
      status: "Active Development",
      description: "A modern car rental platform designed to make better use of underused vehicles by connecting car owners with renters through a secure and easy-to-use digital system. Focuses on flexibility, accessibility, and efficient vehicle utilization in growing urban and regional markets.",
      features: [
        { icon: Shield, text: "Secure bookings and owner/renter verification" },
        { icon: MapPin, text: "Efficient vehicle utilization and accessibility" },
        { icon: TrendingUp, text: "Digital contracts and payments" }
      ],
      year: "Launching soon",
      image: "/FLYTS.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Timetable Scheduling System",
      tagline: "Education & Institutional Automation",
      sector: "Education Technology",
      status: "Live",
      description: "Our timetable scheduling system automates the creation of school and university timetables, eliminating conflicts and reducing the time spent on manual scheduling. Built to support institutions of different sizes while improving academic planning and operational efficiency.",
      features: [
        { icon: Users2, text: "Conflict-free timetables" },
        { icon: Sparkles, text: "Supports institutions of all sizes" },
        { icon: TrendingUp, text: "Improved academic planning" }
      ],
      year: "Available",
      image: "/online-education-platform.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "NYTS App",
      tagline: "Coming Soon",
      sector: "Digital Products",
      status: "In Development",
      description: "NYTS is an upcoming digital product currently under development. More details will be shared as the product approaches launch.",
      features: [
        { icon: Sparkles, text: "Under development" },
        { icon: Users2, text: "Details coming soon" },
        { icon: TrendingUp, text: "Stay tuned" }
      ],
      year: "Coming Soon",
      image: "/ai-technology-interface.jpg",
      color: "from-orange-500 to-red-500"
    },
  ]

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
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
                  {product.name !== "NYTS App" && (
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
                  {product.name === "FLYTS" && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="portfolio-learn-more"
                      onClick={() => setIsFlytsOpen(true)}
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
                  <h3 className="modal-title">FLYTS – Car Rental Platform</h3>
                  <p className="modal-text">
                    FLYTS is a modern car rental platform designed to make better use of underused vehicles by connecting car owners with renters through a secure and easy-to-use digital system. The platform focuses on flexibility, accessibility, and efficient vehicle utilization in growing urban and regional markets.
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
                <h3 className="cta-title">Partnerships & Opportunities</h3>
                <p className="cta-description">
                  We welcome partnerships with institutions, organizations, developers, and investors who share our vision of building practical and impactful technology solutions. Get in touch for collaboration, pilot programs, or strategic discussions.
                </p>
              </div>
              <Button size="lg" className="cta-button" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>
                Get in Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
