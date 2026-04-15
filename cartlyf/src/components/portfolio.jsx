"use client"

import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  ExternalLink,
  Users2,
  Sparkles,
  TrendingUp,
  Shield,
  MapPin,
  ArrowRight,
  X
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/portfolio.css"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [isFlytsOpen, setIsFlytsOpen] = useState(false)
  const [isHapaOpen, setIsHapaOpen] = useState(false)
  const [isTIMETABLEOPEN, setIsTIMETABLEOPEN] = useState(false)
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
      tagline: "Powering Car Rentals",
      sector: "Transportation & Mobility",
      status: "Active",
      link: "https://www.flytsapp.com",
      description:
        "A digital platform digitizing the car rental industry by connecting fleets with verified customers through a secure digital booking environment.",
      features: [
        { icon: Shield, text: "Secure Digital Booking & Verification" },
        { icon: MapPin, text: "Centralized Vehicle Listings" },
        { icon: TrendingUp, text: "Data & Market Insights" }
      ],
      year: "2025",
      image: "/FLYTS.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "HAPA",
      tagline: "Discover the City",
      sector: "Lifestyle & Entertainment",
      status: "Active",
      link: "https://www.gethapa.com",
      description:
        "HAPA provides a live window into a city's real energy through photos and videos posted directly by venues and organizers in the moment.",
      features: [
        { icon: Sparkles, text: "Real-time City Discovery" },
        { icon: MapPin, text: "Location-aware Experience Feed" },
        { icon: Users2, text: "Direct Venue Engagement" }
      ],
      year: "2026",
      image: "/HAPA_APP.png",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Timetable Scheduling System",
      tagline: "Intelligent Academic Scheduling",
      sector: "Education Technology",
      status: "Available",
      link: "https://cartlyf-timetable-scheduling-system.web.app",
      description:
        "An intelligent academic scheduling platform designed to automate the complex process of creating school and university timetables without conflicts.",
      features: [
        { icon: Users2, text: "Automated Schedule Generation" },
        { icon: Sparkles, text: "Conflict Detection & Prevention" },
        { icon: TrendingUp, text: "Institutional Efficiency" }
      ],
      year: "2025",
      image: "/online-education-platform.png",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="portfolio-grid">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`portfolio-card ${isVisible ? "fade-in-up" : ""} ${activeProduct === index ? "active" : ""
                }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProduct(index)}
            >
              <div className="portfolio-image-container">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="portfolio-image"
                />
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

                  {product.link && (
                    <button
                      className="portfolio-icon-wrapper"
                      onClick={() => window.open(product.link, "_blank")}
                      aria-label={`Visit ${product.name}`}
                    >
                      <ExternalLink className="portfolio-icon" />
                    </button>
                  )}
                </div>

                <Badge variant="outline" className="portfolio-sector-badge">
                  {product.sector}
                </Badge>

                <p className="portfolio-company-description">
                  {product.description}
                </p>

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
                  {product.name === "HAPA" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="portfolio-learn-more"
                      onClick={() => setIsHapaOpen(true)}
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={14} />
                    </Button>
                  )}
                  {product.name === "Timetable Scheduling System" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="portfolio-learn-more"
                      onClick={() => setIsTIMETABLEOPEN(true)}
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
              <button
                className="modal-close"
                aria-label="Close"
                onClick={() => setIsFlytsOpen(false)}
              >
                <X size={18} />
              </button>

              <div className="modal-grid">
                <div className="modal-image-wrap">
                  <img
                    src="/FLYTSAPP.png"
                    alt="FLYTS preview"
                    className="modal-image"
                  />
                </div>

                <div className="modal-body">
                  <h3 className="modal-title">
                    FLYTS – Powering Car Rentals
                  </h3>

                  <p className="modal-text">
                    FLYTS is a digital platform designed to digitize the car rental industry by connecting rental fleets with verified customers through a secure and structured booking environment.
                  </p>

                  <div className="modal-features">
                    <div className="modal-feature">
                      <Shield size={16} />
                      <span>Security & Digital Verification Layer</span>
                    </div>
                    <div className="modal-feature">
                      <MapPin size={16} />
                      <span>Centralized Fleet & Booking Management</span>
                    </div>
                    <div className="modal-feature">
                      <TrendingUp size={16} />
                      <span>Utilization & Revenue Analytics</span>
                    </div>
                  </div>

                  <div className="modal-sections">
                    <div className="modal-section">
                      <h4>Demand Aggregation</h4>
                      <p>Connects rental companies with high-intent customers, increasing visibility and revenue opportunities for fleet owners.</p>
                    </div>
                    <div className="modal-section">
                      <h4>Structured Listings</h4>
                      <p>Standardized information including pricing, availability, and insurance, reducing negotiation friction.</p>
                    </div>
                    <div className="modal-section">
                      <h4>Trust & Safety</h4>
                      <p>Integrated customer verification and secure booking frameworks that protect both renters and operators.</p>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <Button size="lg" onClick={() => setIsFlytsOpen(false)}>
                      Got it
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isHapaOpen && (
          <div className="modal-backdrop" onClick={() => setIsHapaOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                aria-label="Close"
                onClick={() => setIsHapaOpen(false)}
              >
                <X size={18} />
              </button>

              <div className="modal-grid">
                <div className="modal-image-wrap">
                  <img
                    src="/HAPA_APP.png"
                    alt="HAPA preview"
                    className="modal-image"
                  />
                </div>

                <div className="modal-body">
                  <h3 className="modal-title">
                    HAPA – Discover the City
                  </h3>

                  <p className="modal-text">
                    A real-time city discovery platform that provides a live feed of a city's vibe through moment-to-moment photos and videos.
                  </p>

                  <div className="modal-features">
                    <div className="modal-feature">
                      <Sparkles size={16} />
                      <span>Live Vibe & Energy Check</span>
                    </div>
                    <div className="modal-feature">
                      <MapPin size={16} />
                      <span>Location-aware Experience Feed</span>
                    </div>
                    <div className="modal-feature">
                      <Users2 size={16} />
                      <span>Authentic Venue Engagement</span>
                    </div>
                  </div>

                  <div className="modal-sections">
                    <div className="modal-section">
                      <h4>Spontaneous Discovery</h4>
                      <p>See real photos and videos from venues as events unfold, allowing you to make instant decisions based on the actual vibe.</p>
                    </div>
                    <div className="modal-section">
                      <h4>Experiences</h4>
                      <p>Discover nightlife, dining, concerts, arts, culture, and community events happening today, tonight, or this weekend.</p>
                    </div>
                    <div className="modal-section">
                      <h4>For Venues</h4>
                      <p>Reach nearby users instantly by simply posting what is happening right now—authentic, immediate, and effective.</p>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <Button size="lg" onClick={() => setIsHapaOpen(false)}>
                      Got it
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isTIMETABLEOPEN && (
          <div className="modal-backdrop" onClick={() => setIsTIMETABLEOPEN(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                aria-label="Close"
                onClick={() => setIsTIMETABLEOPEN(false)}
              >
                <X size={18} />
              </button>

              <div className="modal-grid">
                <div className="modal-image-wrap">
                  <img
                    src="/online-education-platform.png"
                    alt="Timetable System preview"
                    className="modal-image"
                  />
                </div>

                <div className="modal-body">
                  <h3 className="modal-title">
                    Intelligent Timetable Automation
                  </h3>

                  <p className="modal-text">
                    An intelligent academic scheduling platform designed to automate the complex process of creating conflict-free schedules for schools and universities.
                  </p>

                  <div className="modal-features">
                    <div className="modal-feature">
                      <Users2 size={16} />
                      <span>Automated Generation & Optimization</span>
                    </div>
                    <div className="modal-feature">
                      <Sparkles size={16} />
                      <span>Constraint-based Logic (Rooms/Staff)</span>
                    </div>
                    <div className="modal-feature">
                      <TrendingUp size={16} />
                      <span>Massive Administrative Efficiency</span>
                    </div>
                  </div>

                  <div className="modal-sections">
                    <div className="modal-section">
                      <h4>Key Capabilities</h4>
                      <p>Automated generation, conflict detection, and flexible scheduling rules for course durations and lecturer availability.</p>
                    </div>
                    <div className="modal-section">
                      <h4>Who It's For</h4>
                      <p>Designed for Universities, Colleges, Secondary Schools, and Training Institutions of all sizes.</p>
                    </div>
                    <div className="modal-section">
                      <h4>Impact</h4>
                      <p>Reduces scheduling time from weeks to minutes, allowing institutions to focus on delivering quality education.</p>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <Button size="lg" onClick={() => setIsTIMETABLEOPEN(false)}>
                      Got it
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`portfolio-cta ${isVisible ? "fade-in-up delay-600" : ""}`}>
          <Card className="cta-card">
            <div className="cta-content">
              <Sparkles className="cta-icon" />
              <div>
                <h3 className="cta-title">Partnerships & Opportunities</h3>
                <p className="cta-description">
                  We welcome partnerships with institutions, organizations,
                  developers, and investors who share our vision.
                </p>
              </div>
              <Button
                size="lg"
                className="cta-button"
                onClick={() => {
                  navigate("/")
                  setTimeout(
                    () =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    100
                  )
                }}
              >
                Get in Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
