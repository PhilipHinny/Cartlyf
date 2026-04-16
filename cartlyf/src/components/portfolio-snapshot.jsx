import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import "../styles/portfolio-snapshot.css"

export default function PortfolioSnapshot() {
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

  const portfolioItems = [
    {
      title: "FLYTS – Powering Car Rentals",
      image: "/FLYTS.png",
      description: "A digital platform digitizing the car rental industry by connecting fleets with verified customers through a secure digital booking environment."
    },
    {
      title: "HAPA – Discover the City",
      image: "/HAPA_APP.png",
      description: "A real-time city discovery platform that provides a live feed of a city's vibe through moment-to-moment photos and videos."
    },
    {
      title: "Cartlyf Timetable Automation",
      image: "/online-education-platform.png",
      description: "Intelligent academic scheduling that automates the creation of school and university timetables, eliminating conflicts and manual coordination."
    }
  ]

  return (
    <section id="portfolio-snapshot" ref={sectionRef} className="portfolio-snapshot-section">
      <div className="portfolio-snapshot-container">
        <div className={`portfolio-snapshot-card ${isVisible ? 'fade-in-up' : ''}`}>
          <span className="portfolio-snapshot-badge">• Our Products</span>
          <h2 className="portfolio-snapshot-headline">
            Technology products that improve efficiency, accessibility, and resource utilization.
          </h2>
          <div className="portfolio-snapshot-cta">
            <a
              href="/portfolio"
              className="portfolio-snapshot-button-link"
            >
              View all products
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="portfolio-snapshot-grid">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`portfolio-snapshot-item ${isVisible ? `fade-in-up delay-${(index + 1) * 200}` : ''}`}
              >
                <div className="portfolio-snapshot-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-snapshot-overlay">
                    <h3 className="portfolio-snapshot-item-title">{item.title}</h3>
                    <div className="portfolio-snapshot-hover-content">
                      <p className="portfolio-snapshot-item-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


