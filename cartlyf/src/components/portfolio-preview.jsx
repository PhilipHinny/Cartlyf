"use client"

import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/portfolio.css"

export default function PortfolioPreview() {
  const [isVisible, setIsVisible] = useState(false)
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

  const featuredProjects = [
    {
      name: "FLYTS",
      tagline: "Drive. Earn. Empower.",
      sector: "Mobility Technology",
      status: "Active Development",
      description: "A Turo-like peer-to-peer car rental marketplace in Kenya that reduces paperwork and enhances safety for both owners and renters.",
      year: "Launching 2025",
      image: "/flyts.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ungana Hub",
      tagline: "Connect. Learn. Create.",
      sector: "Social & Collaboration Platform",
      status: "In Development",
      description: "A platform empowering students, professionals, and innovators across the world to connect, learn, and create together.",
      year: "Coming Soon",
      image: "/online-education-platform.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "More Coming Soon",
      tagline: "Innovation Never Stops",
      sector: "Multiple Sectors",
      status: "Ideation Phase",
      description: "We're constantly exploring new opportunities to solve African challenges through technology. The future is bright.",
      year: "2025 & Beyond",
      image: "/ai-technology-interface.jpg",
      color: "from-orange-500 to-red-500"
    },
  ]

  return (
    <section id="portfolio-preview" className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className={`portfolio-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            Our Portfolio
          </div>
          <h2 className="portfolio-title">Featured Projects</h2>
          <p className="portfolio-description">
            Explore our flagship products that are transforming industries across Africa. 
            Each solution is designed with innovation and impact in mind.
          </p>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`portfolio-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="portfolio-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.name} className="portfolio-image" />
                <div className={`portfolio-gradient-overlay ${project.color}`} />
                <div className="portfolio-badge-container">
                  <Badge variant="secondary" className="portfolio-status-badge">
                    {project.status}
                  </Badge>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-header-row">
                  <div>
                    <h3 className="portfolio-company-name">{project.name}</h3>
                    <p className="portfolio-tagline">{project.tagline}</p>
                  </div>
                  {project.name !== "More Coming Soon" && (
                    <div className="portfolio-icon-wrapper">
                      <ExternalLink className="portfolio-icon" />
                    </div>
                  )}
                </div>
                <Badge variant="outline" className="portfolio-sector-badge">
                  {project.sector}
                </Badge>
                <p className="portfolio-company-description">{project.description}</p>
                
                <div className="portfolio-footer">
                  <span className="portfolio-year">{project.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`portfolio-view-all ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <Button 
            size="lg" 
            variant="outline" 
            className="portfolio-view-all-button"
            onClick={() => navigate('/portfolio')}
          >
            View All Projects
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
