import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm, ValidationError } from '@formspree/react'
import SeoHead from "./SeoHead"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import "../styles/modern-contact.css"

export default function ModernContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [state, handleSubmit] = useForm("xkoqzakw")
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

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

  return (
    <section id="contact" ref={sectionRef} className="modern-contact-section">
      <SeoHead 
        title="Contact Us | Cartlyf Technologies — Partnerships & Inquiries"
        description="Get in touch with Cartlyf Technologies for partnerships, collaboration, or pilot programs. We build practical digital solutions for East Africa."
        canonical="https://www.cartlyftechnologies.com/contact"
        ogTitle="Connect with Cartlyf Technologies"
        ogDescription="Reach out to our team in Kitale, Kenya for strategic partnerships and technology collaboration across Africa."
        ogUrl="https://www.cartlyftechnologies.com/contact"
      />
      <div className="modern-contact-container">
        <div className={`modern-contact-card ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="modern-contact-left">
            <span className="modern-contact-badge">• Contact Us</span>
            <h2 className="modern-contact-title">Partnerships & Opportunities</h2>
            <div className="modern-contact-info">
              <p>Cartlyf Technologies Limited</p>
              <p>Kitale, Kenya</p>
              <p>
                We welcome partnerships with institutions, organizations, developers, and investors who share our vision of building practical and impactful technology solutions. Interested in collaboration, pilot programs, or strategic discussions? We would be glad to connect.
              </p>
            </div>
          </div>
          <div className="modern-contact-right">
            <h3 className="modern-contact-form-title">
              {state.succeeded ? "Message Sent!" : "Please fill out the form."}
            </h3>
            {state.succeeded ? (
              <p style={{ color: '#22c55e', marginTop: '1rem', textAlign: 'center' }}>
                Thanks for your submission! We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="modern-contact-form-group">
                  <div className="modern-contact-select-wrapper">
                    <select
                      name="subject"
                      className="modern-contact-select"
                      required
                    >
                      <option value="">Choose subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership & Collaboration</option>
                      <option value="pilot">Pilot Programs</option>
                      <option value="careers">Careers</option>
                    </select>
                    <ChevronDown size={20} className="modern-contact-select-icon" />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>
                </div>
                <div className="modern-contact-form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    className="modern-contact-input"
                    required
                  />
                  <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
                </div>
                <div className="modern-contact-form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="modern-contact-input"
                    required
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div className="modern-contact-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="modern-contact-input"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="modern-contact-form-group">
                  <textarea
                    name="comments"
                    placeholder="Comments"
                    className="modern-contact-textarea"
                    rows="4"
                    required
                  ></textarea>
                  <ValidationError prefix="Comments" field="comments" errors={state.errors} />
                </div>
                <Button type="submit" size="lg" className="modern-contact-submit" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send'}
                </Button>
                <ValidationError errors={state.errors} />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


