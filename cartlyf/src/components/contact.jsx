"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card } from "../components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, MessageCircle } from "lucide-react"
import "../styles/contact.css"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    alert("Thank you for reaching out! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@cartlyf.tech", "investors@cartlyf.tech"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 (0) 700 000 000", "Mon-Fri, 9am-6pm EAT"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Nairobi, Kenya", "East Africa Hub"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            Let's Connect
          </div>
          <h2 className="contact-title">Ready to Build the Future Together?</h2>
          <p className="contact-description">
            Whether you're an investor, potential partner, talented developer, or just curious about what we're building - 
            we'd love to hear from you. Let's create something amazing for Africa.
          </p>
        </div>

        <div className="contact-grid">
          <div className={`contact-form-section ${isVisible ? 'fade-in-up delay-200' : ''}`}>
            <Card className="contact-form-card">
              <div className="form-header">
                <MessageCircle className="form-header-icon" />
                <div>
                  <h3 className="form-title">Send us a message</h3>
                  <p className="form-subtitle">We typically respond within 24 hours</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company (Optional)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry, partnership opportunity, or investment interest..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="submit-button" size="lg">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className={`contact-info-section ${isVisible ? 'fade-in-up delay-400' : ''}`}>
            <Card className="contact-info-unified-card">
              <div className="contact-info-header">
                <h3 className="contact-info-main-title">Get in Touch</h3>
                <p className="contact-info-subtitle">
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="contact-info-item">
                      <div className="contact-item-icon-wrapper">
                        <Icon className="contact-item-icon" />
                      </div>
                      <h4 className="contact-item-title">{info.title}</h4>
                      <div className="contact-item-details">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="contact-item-detail">{detail}</p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="contact-info-divider" />

              <div className="contact-social-section">
                <h4 className="social-section-title">Follow Our Journey</h4>
                <p className="social-section-description">
                  Stay updated on our latest products and insights
                </p>
                <div className="social-links">
                  <a href="#" className="social-link linkedin">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-link twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-link github">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
