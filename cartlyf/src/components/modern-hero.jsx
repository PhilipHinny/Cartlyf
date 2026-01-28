import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import "../styles/modern-hero.css"

export default function ModernHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.25 }
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

  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="modern-hero-section">
      <div className="modern-hero-overlay" />

      <div className={`modern-hero-content ${isVisible ? "fade-in-up" : ""}`}>
        <h1 className="modern-hero-title">
          Building Practical
          <span>Technology for Africa</span>
        </h1>

        <p className="modern-hero-description">
          A Kenya-based technology company creating digital products that solve
          real-world challenges across transportation, education, and emerging
          AI-powered systems.
        </p>

        <Button size="lg" className="modern-hero-cta" onClick={() => scrollToSection("contact")}>
          Get in touch
        </Button>
      </div>
    </section>
  )
}
