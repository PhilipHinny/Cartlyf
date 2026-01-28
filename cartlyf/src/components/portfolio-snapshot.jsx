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
      title: "FLYTS – Car Rental Platform",
      image: "/FLYTS.png",
      description: "A modern car rental platform that connects car owners with renters through a secure, easy-to-use digital system. Focuses on flexibility, accessibility, and efficient vehicle utilization in growing urban and regional markets."
    },
    {
      title: "Timetable Scheduling Automation",
      image: "/online-education-platform.png",
      description: "Automates the creation of school and university timetables, eliminating conflicts and reducing manual scheduling time. Built to support institutions of different sizes while improving academic planning and operational efficiency."
    },
    {
      title: "NYTS App (Coming Soon)",
      image: "/ai-technology-interface.jpg",
      description: "An upcoming digital product currently under development. More details will be shared as the product approaches launch."
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
            <Button 
              size="lg" 
              className="portfolio-snapshot-button"
              onClick={() => navigate('/portfolio')}
            >
              View all products
              <ArrowUpRight size={18} />
            </Button>
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


