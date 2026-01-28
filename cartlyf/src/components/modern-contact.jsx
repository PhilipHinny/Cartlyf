import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import "../styles/modern-contact.css"

export default function ModernContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    subject: '',
    fullName: '',
    phone: '',
    email: '',
    comments: ''
  })
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="modern-contact-section">
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
            <h3 className="modern-contact-form-title">Please fill out the form.</h3>
            <form onSubmit={handleSubmit} className="modern-contact-form">
              <div className="modern-contact-form-group">
                <div className="modern-contact-select-wrapper">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                </div>
              </div>
              <div className="modern-contact-form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="modern-contact-input"
                  required
                />
              </div>
              <div className="modern-contact-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="modern-contact-input"
                  required
                />
              </div>
              <div className="modern-contact-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="modern-contact-input"
                  required
                />
              </div>
              <div className="modern-contact-form-group">
                <textarea
                  name="comments"
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="modern-contact-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="modern-contact-submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


