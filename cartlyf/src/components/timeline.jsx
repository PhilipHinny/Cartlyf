import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/timeline.css"

export default function Timeline() {
  const [currentYear, setCurrentYear] = useState(2024)
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

  const timelineData = {
    2024: {
      title: "The second round of investment.",
      investments: 2
    },
    2025: {
      title: "Expansion and growth phase.",
      investments: 4
    },
    2026: {
      title: "Strategic partnerships established.",
      investments: 6
    },
    2027: {
      title: "Market leadership position.",
      investments: 8
    }
  }

  const years = [2024, 2025, 2026, 2027]
  const currentData = timelineData[currentYear] || timelineData[2024]

  const handlePrevious = () => {
    const currentIndex = years.indexOf(currentYear)
    if (currentIndex > 0) {
      setCurrentYear(years[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = years.indexOf(currentYear)
    if (currentIndex < years.length - 1) {
      setCurrentYear(years[currentIndex + 1])
    }
  }

  return (
    <section ref={sectionRef} className="timeline-section">
      <div className="timeline-container">
        <div className={`timeline-card ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="timeline-title">CartLyf Timeline</h2>
          <div className="timeline-main">
            <div className="timeline-year-display">
              <h3 className="timeline-year">{currentYear}</h3>
              <div className="timeline-controls">
                <button 
                  className="timeline-nav-btn"
                  onClick={handlePrevious}
                  disabled={years.indexOf(currentYear) === 0}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="timeline-nav-btn"
                  onClick={handleNext}
                  disabled={years.indexOf(currentYear) === years.length - 1}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="timeline-line">
              {years.map((year, index) => (
                <div key={year} className="timeline-point-wrapper">
                  <div 
                    className={`timeline-point ${year === currentYear ? 'active' : ''}`}
                    onClick={() => setCurrentYear(year)}
                  />
                  <span className="timeline-year-label">{year}</span>
                </div>
              ))}
            </div>
            <div className="timeline-info">
              <p className="timeline-description">{currentData.title}</p>
              <p className="timeline-investments">Investments: {currentData.investments}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


