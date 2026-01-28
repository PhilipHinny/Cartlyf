import { useEffect, useRef, useState } from "react"
import VisionMission from "../components/vision-mission"
import { Button } from "../components/ui/button"
import { ArrowLeft, Target, Users, Lightbulb, Award } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "../styles/page-header.css"
import "../styles/about-page.css"

export default function AboutPage() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
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

  const focusAreas = [
    { icon: Award, title: "Transportation & Mobility Technology", description: "Platforms and tools that improve how people and goods move, including our FLYTS car rental platform." },
    { icon: Target, title: "Education & Scheduling Automation", description: "Systems that automate timetables and institutional planning, saving time and reducing conflicts." },
    { icon: Lightbulb, title: "Artificial Intelligence & Smart Digital Systems", description: "Modern software and AI-powered tools that unlock value from underused resources." },
    { icon: Users, title: "Scalable Web and Mobile Platforms", description: "Digital products built for African markets with the flexibility to scale globally." }
  ]

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">About Cartlyf Technologies</h1>
          <p className="page-header-description">
            Who we are, what we do, and our vision for practical technology in Africa
          </p>
        </div>
      </div>
      
      <section ref={sectionRef} className="about-overview-section">
        <div className="about-overview-container">
          <div className={`about-overview-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h2 className="about-overview-title">Who We Are</h2>
            <p className="about-overview-description">
              Cartlyf Technologies Limited is a registered technology company based in Kitale, Kenya. We focus on creating impactful digital products that address practical problems in African markets while remaining scalable for global adoption. Our approach is product-driven, user-focused, and built around long-term innovation rather than short-term trends.
            </p>
          </div>
        </div>
      </section>

      <VisionMission />

      <section className="about-values-section">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Focus Areas</h2>
          <div className="about-values-grid">
            {focusAreas.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className={`about-value-item ${isVisible ? 'fade-in-up' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="about-value-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

