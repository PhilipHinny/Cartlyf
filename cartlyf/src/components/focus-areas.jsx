import { useEffect, useRef, useState } from "react"
import { Car, GraduationCap, Cpu, Smartphone } from "lucide-react"
import "../styles/focus-areas.css"

export default function FocusAreas() {
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

  const areas = [
    { icon: Car, title: "Transportation & Mobility Technology", description: "Digital infrastructure and platforms that modernize mobility, including our FLYTS car rental technology layer." },
    { icon: GraduationCap, title: "Education & Scheduling Automation", description: "Intelligent systems that automate complex academic scheduling for schools and universities, eliminating conflicts." },
    { icon: Cpu, title: "Artificial Intelligence & Smart Digital Systems", description: "Modern software and AI-powered tools that unlock value from underused resources." },
    { icon: Smartphone, title: "Scalable Web and Mobile Platforms", description: "Digital products built for African markets with the flexibility to scale globally." }
  ]

  return (
    <section id="focus-areas" ref={sectionRef} className="focus-areas-section">
      <div className="focus-areas-container">
        <div className={`focus-areas-card ${isVisible ? 'fade-in-up' : ''}`}>
          <span className="focus-areas-badge">• Our Focus Areas</span>
          <h2 className="focus-areas-title">Where We Build</h2>
          <p className="focus-areas-description">
            We currently build and explore solutions in the following areas:
          </p>
          <div className="focus-areas-grid">
            {areas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className={`focus-area-item ${isVisible ? `fade-in-up delay-${(index + 1) * 100}` : ''}`}
                >
                  <div className="focus-area-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="focus-area-title">{area.title}</h3>
                  <p className="focus-area-description">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
