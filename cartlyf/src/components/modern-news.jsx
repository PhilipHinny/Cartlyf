import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import "../styles/modern-news.css"

export default function ModernNews() {
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

  const newsItems = [
    {
      title: "Cartlyf Technologies: Building Practical Technology for Africa",
      date: "2024",
      readTime: "2 min. read",
      tags: ["Kenya", "Technology"],
      image: "/ai-technology-interface.jpg"
    },
    {
      title: "FLYTS – Connecting Car Owners and Renters in Kenya",
      date: "2024",
      readTime: "2 min. read",
      tags: ["FLYTS", "Mobility"],
      image: "/FLYTS.png"
    },
    {
      title: "Education & Scheduling Automation for African Institutions",
      date: "2024",
      readTime: "2 min. read",
      tags: ["Education", "Automation"],
      image: "/online-education-platform.png"
    }
  ]

  return (
    <section id="news" ref={sectionRef} className="modern-news-section">
      <div className="modern-news-container">
        <div className={`modern-news-card ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="modern-news-header">
            <span className="modern-news-badge">• Stay informed about our events</span>
            <div className="modern-news-title-row">
              <h2 className="modern-news-title">News</h2>
              <a href="#" className="modern-news-view-all">
                View all news
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="modern-news-grid">
            {newsItems.map((item, index) => (
              <div 
                key={index} 
                className={`modern-news-item ${isVisible ? `fade-in-up delay-${(index + 1) * 200}` : ''}`}
              >
                <div className="modern-news-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="modern-news-item-content">
                  <div className="modern-news-item-tags">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="modern-news-item-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="modern-news-item-title">{item.title}</h3>
                  <div className="modern-news-item-meta">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <a href="#" className="modern-news-item-link">Read the article</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


