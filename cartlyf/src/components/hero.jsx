import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import "../styles/hero.css"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text-content animate-fade-in-up">
            <h1 className="hero-main-title">
              Technology for Everyday Life in <span className="hero-accent-text">Africa</span>
            </h1>
            <p className="hero-tagline">
              CartLyf Technologies Limited is a Kenyan company building practical digital products that make daily life easier—starting with mobility—while prioritizing safety and trust.
            </p>
            <Button size="lg" className="hero-cta-button" onClick={() => scrollToSection('portfolio-preview')}>
              Explore FLYTS
              <ArrowRight className="hero-button-icon" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
