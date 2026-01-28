import { useEffect, useRef, useState } from "react"
import { Eye, Target } from "lucide-react"
import "../styles/vision-mission.css"

export default function VisionMission() {
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

  return (
    <section id="vision-mission" ref={sectionRef} className="vision-mission-section">
      <div className="vision-mission-container ">
        <div className={`vision-mission-card ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="vision-mission-image">
            <img src="/modern-office-building.png" alt="Buildings" />
          </div>
          <div className="vision-mission-content">
            <h2 className="vision-mission-title">Our Vision & Mission</h2>
            <div className="vision-mission-grid">
              <div className={`vision-mission-item ${isVisible ? 'fade-in-up delay-200' : ''}`}>
                <div className="vision-mission-icon">
                  <Eye size={28} />
                </div>
                <h3 className="vision-mission-heading">Our Vision</h3>
                <p className="vision-mission-text">
                  To become one of Africa's leading technology companies by building innovative digital products that solve everyday challenges and unlock value from underused systems and resources.
                </p>
              </div>
              <div className={`vision-mission-item ${isVisible ? 'fade-in-up delay-400' : ''}`}>
                <div className="vision-mission-icon">
                  <Target size={28} />
                </div>
                <h3 className="vision-mission-heading">Our Mission</h3>
                <p className="vision-mission-text">
                  To create reliable, scalable, and user-centered technology products that improve transportation, education, and digital access while contributing to sustainable growth across African markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


