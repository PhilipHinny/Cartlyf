"use client"

import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "../styles/blog.css"

export default function Blog() {
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

  const blogPosts = [
    {
      title: "The Future of Mobility in Africa",
      excerpt: "How FLYTS is revolutionizing car rental and sharing economy across Kenya and beyond.",
      image: "/logistics-warehouse-technology.jpg",
      category: "Mobility",
      date: "2 hours ago",
      readTime: "5 min read",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Building Tech for African Markets",
      excerpt: "Key insights on developing solutions that address unique African challenges and opportunities.",
      image: "/ai-technology-interface.jpg",
      category: "Technology",
      date: "1 day ago",
      readTime: "7 min read",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "The Rise of Digital Collaboration",
      excerpt: "Why platforms like Ungana Hub are essential for connecting talent across the continent.",
      image: "/online-education-platform.png",
      category: "Innovation",
      date: "3 days ago",
      readTime: "6 min read",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="blog" className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        <div className={`blog-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            <TrendingUp className="badge-icon" size={14} />
            Latest Updates
          </div>
          <h2 className="blog-title">News & Insights</h2>
          <p className="blog-description">
            Stay updated with our latest developments, industry insights, and thought leadership 
            on building technology for Africa's digital future.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`blog-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="blog-image-container">
                <img src={post.image || "/placeholder.jpg"} alt={post.title} className="blog-image" />
                <div className={`blog-gradient-overlay ${post.color}`} />
                <div className="blog-badge-container">
                  <Badge variant="secondary" className="blog-category-badge">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-meta-divider" />
                  <div className="blog-meta-item">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="blog-read-more">
                  Read Article
                  <ArrowRight className="ml-2" size={14} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className={`blog-view-all ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <Button size="lg" variant="outline" className="blog-view-all-button">
            View All Articles
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
