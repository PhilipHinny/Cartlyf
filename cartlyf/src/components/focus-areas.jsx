"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Car, Shield, Zap, CreditCard } from "lucide-react"
import "../styles/focus-areas.css"

export default function FocusAreas() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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
    {
      icon: Car,
      title: "Mobility Platforms",
      description: "Digital marketplaces that make it easy and safe to access cars when you need them, and earn from cars when you don’t.",
      color: "#3b82f6"
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "KYC, verification, insurance, and GPS telematics built in—so owners and renters can transact with confidence.",
      color: "#10b981"
    },
    {
      icon: CreditCard,
      title: "Digital Contracts & Payments",
      description: "Seamless, paperless agreements and secure payments that reduce friction and eliminate manual paperwork.",
      color: "#f59e0b"
    },
    {
      icon: Zap,
      title: "Local-First Technology",
      description: "Fast, practical apps designed for African contexts: mobile-first, low-friction onboarding, and scalable infrastructure.",
      color: "#a855f7"
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section id="focus-areas" className="focus-areas-section" ref={sectionRef}>
      <div className="focus-areas-container">
        <div className={`focus-areas-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            What We Do
          </div>
          <h2 className="focus-areas-title">What We Focus On</h2>
          <p className="focus-areas-description">
            We build technology that powers safer mobility and trustworthy digital transactions—starting with FLYTS, a peer‑to‑peer car rental marketplace for Kenya.
          </p>
        </div>

        <div className="focus-areas-content">
          <div className={`focus-areas-accordion ${isVisible ? 'fade-in-up delay-200' : ''}`}>
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              const isActive = activeIndex === index

              return (
                <div key={index} className={`accordion-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion(index)}
                    style={{ borderLeftColor: isActive ? area.color : 'transparent' }}
                  >
                    <div className="accordion-trigger-content">
                      <div 
                        className="accordion-icon-wrapper"
                        style={{ backgroundColor: isActive ? `${area.color}15` : 'transparent' }}
                      >
                        <Icon 
                          className="accordion-icon" 
                          style={{ color: isActive ? area.color : '#64748b' }}
                        />
                      </div>
                      <span className="accordion-title">{area.title}</span>
                    </div>
                    <ChevronDown 
                      className={`accordion-chevron ${isActive ? 'rotate' : ''}`}
                      style={{ color: area.color }}
                    />
                  </button>
                  
                  <div className={`accordion-content ${isActive ? 'open' : ''}`}>
                    <p className="accordion-description">{area.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className={`focus-areas-stats ${isVisible ? 'fade-in-up delay-400' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Launching FLYTS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Kenya</div>
              <div className="stat-label">Home Base</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">KYC</div>
              <div className="stat-label">Safety First</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Digital</div>
              <div className="stat-label">Contracts & Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
