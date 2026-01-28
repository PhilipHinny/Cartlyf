import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/modern-about.css"

export default function ModernAbout() {
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

  return (
    <section id="about" ref={sectionRef} className="modern-about-section">
      <div className="modern-about-container">
        <div className={`modern-about-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="modern-about-layout">
            <div className="modern-about-left">
              <div className="modern-about-badge">Who We Are</div>
              <h2 className="modern-about-title">What We Do</h2>
              <p className="modern-about-values">Transportation & mobility • Education & scheduling • AI & smart digital systems • Scalable web and mobile platforms</p>
            </div>
            <div className="modern-about-right">
              <h3 className="modern-about-headline">
                Research, design, develop, and launch technology products that improve efficiency, accessibility, and resource utilization
              </h3>
              <p className="modern-about-description">
                Cartlyf Technologies Limited is a registered technology company based in Kitale, Kenya. We focus on creating impactful digital products that address practical problems in African markets while remaining scalable for global adoption. Our approach is product-driven, user-focused, and built around long-term innovation rather than short-term trends.
              </p>
              <a onClick={() => navigate('/about')} className="modern-about-button" style={{ cursor: 'pointer' }}>
                Learn more about us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


