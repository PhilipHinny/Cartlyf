"use client"

import { Card } from "../components/ui/card"
import { Target, Zap, Users, Heart, Globe2, Rocket } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "../styles/about.css"

export default function About() {
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

  const stats = [
    { label: "Active Products", value: "1+", icon: Rocket },
    { label: "Team & Contributors", value: "Growing", icon: Users },
    { label: "Home Base", value: "Kenya", icon: Globe2 },
  ]

  const values = [
    {
      icon: Target,
      title: "Africa-First Innovation",
      description: "We build technology solutions designed specifically for African contexts, addressing real challenges in mobility, connectivity, and collaboration."
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "From ideation to deployment, we move fast while maintaining quality, leveraging modern tech stacks and agile methodologies."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Every product we build empowers communities - whether it's connecting students, enabling car owners, or supporting local businesses."
    }
  ]

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            About CartLyf Technologies Limited
          </div>
          <h2 className="about-main-title">Building Technology That Improves Everyday Life</h2>
          <p className="about-subtitle">
            We are a Kenyan technology company creating solutions for real, everyday African challenges—designed to be practical, safe, and accessible.
          </p>
        </div>

        <div className={`about-grid ${isVisible ? 'fade-in-up delay-200' : ''}`}>
          <div className="about-content">
            <h3 className="about-title">Our Mission</h3>
            <p className="about-text">
              CartLyf Technologies exists to build simple, useful technology that makes daily life better in Africa. 
              We believe innovation should be grounded in the realities of our communities—whether it's helping car owners earn safely or enabling renters to access mobility without paperwork headaches.
            </p>
            <p className="about-text">
              Founded in September 2025, we are a new company with bold ambitions. Our approach combines safety-first design, digital trust, and using what's already in people’s hands—like their phones and their cars—to create real value.
            </p>
            
            <h3 className="about-title" style={{marginTop: '2rem'}}>Why Africa?</h3>
            <p className="about-text">
              Africa is young, dynamic, and mobile-first. We build with this in mind—focusing on solutions that work in local contexts, respect constraints, and scale sustainably across the continent.
            </p>
          </div>
          <div className="about-image-container">
            <div className="image-wrapper">
              <img src="/modern-office-building.png" alt="CartLyf Technologies" className="about-image" />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <Globe2 className="overlay-icon" />
                  <div>
                    <div className="overlay-title">Nairobi, Kenya</div>
                    <div className="overlay-subtitle">Building the Future</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`stats-grid ${isVisible ? 'fade-in-up delay-400' : ''}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <Icon className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        <div className={`values-section ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="value-card">
                  <div className="value-icon-container">
                    <Icon className="value-icon" />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
