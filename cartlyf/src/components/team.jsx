"use client"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "../styles/team.css"

export default function Team() {
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

  const teamMembers = [
    {
      name: "Agaba Jonan",
      role: "Co-founder",
      image: "/placeholder-user.jpg",
      bio: "Entrepreneur focused on building practical technology that improves daily life across Africa.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "agaba@cartlyf.tech"
      }
    },
    {
      name: "Philip Hinny",
      role: "Co-founder",
      image: "/placeholder-user.jpg",
      bio: "Product-minded builder passionate about safe, trust-first digital platforms for African users.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "philip@cartlyf.tech"
      }
    }
  ]

  return (
    <section id="team" className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            Our Team
          </div>
          <h2 className="team-title">Founders</h2>
          <p className="team-description">
            CartLyf Technologies was founded in September 2025 by Agaba Jonan and Philip Hinny—building African technology that puts safety, trust, and everyday usefulness first.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`team-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-wrapper">
                <img 
                  src={member.image || "/placeholder-user.jpg"} 
                  alt={member.name} 
                  className="team-image" 
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href={member.social.linkedin} className="team-social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="team-social-link">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="team-social-link">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className={`team-cta ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <div className="team-cta-content">
            <h3 className="team-cta-title">Want to Join Our Team?</h3>
            <p className="team-cta-description">
              We're always looking for talented, passionate individuals who want to make a difference in Africa's tech ecosystem.
            </p>
            <Button size="lg" className="team-cta-button">
              View Open Positions
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
