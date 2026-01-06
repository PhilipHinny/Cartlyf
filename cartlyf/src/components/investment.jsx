"use client"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Target, Lightbulb, Handshake, Rocket, TrendingUp, DollarSign, Globe2, Users2, Zap, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "../styles/investment.css"

export default function Investment() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('why')
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

  const whyInvest = [
    {
      icon: TrendingUp,
      title: "Massive Market Opportunity",
      description:
        "Africa's digital economy is projected to reach $180B by 2025. We're positioned at the intersection of mobile technology, financial inclusion, and the sharing economy - all explosive growth sectors.",
    },
    {
      icon: Zap,
      title: "First-Mover Advantage",
      description:
        "We're entering underserved markets with innovative solutions before competition intensifies. Our products address real pain points that millions of Africans face daily.",
    },
    {
      icon: Users2,
      title: "Proven Team & Execution",
      description:
        "Our founding team combines technical excellence with deep market understanding. We've already built working products and validated our concepts with real users.",
    },
    {
      icon: Award,
      title: "Sustainable Business Models",
      description:
        "Each product has clear revenue streams - from transaction fees to subscription models. We're building profitable businesses, not just user bases.",
    },
  ]

  const principles = [
    {
      icon: Target,
      title: "Africa-First Innovation",
      description:
        "We build solutions specifically designed for African markets, considering unique infrastructure, economic, and cultural contexts. No copy-paste models from the West.",
    },
    {
      icon: Lightbulb,
      title: "Technology That Works",
      description:
        "Mobile-first, low-bandwidth optimized, multilingual support. Our tech stack is built for African realities while maintaining world-class standards.",
    },
    {
      icon: Handshake,
      title: "Community-Centric Approach",
      description:
        "We don't just build products - we build ecosystems. Every stakeholder wins: car owners earn income, students find opportunities, communities thrive.",
    },
    {
      icon: Rocket,
      title: "Scalable Growth Strategy",
      description:
        "Start in Kenya, expand across East Africa, then the continent. Our playbook is replicable, our technology is scalable, our ambition is unlimited.",
    },
  ]

  const marketStats = [
    {
      value: "1.4B",
      label: "People in Africa",
      sublabel: "Young, Mobile-First Population"
    },
    {
      value: "54",
      label: "Countries",
      sublabel: "Massive Expansion Potential"
    },
    {
      value: "3.5%",
      label: "GDP Growth",
      sublabel: "Fastest Growing Continent"
    },
    {
      value: "$180B",
      label: "Digital Economy",
      sublabel: "By 2025"
    }
  ]

  return (
    <section id="investment" className="investment-section" ref={sectionRef}>
      <div className="investment-container">
        <div className={`investment-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot" />
            Investment Opportunity
          </div>
          <h2 className="investment-title">Join Us in Building Africa's Digital Future</h2>
          <p className="investment-description">
            CartLyf Technologies is more than a company - it's a movement to transform how Africans access technology, 
            create opportunities, and participate in the global digital economy. We're seeking strategic partners and 
            investors who share our vision for inclusive, sustainable, and impactful innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`investment-tabs ${isVisible ? 'fade-in-up delay-200' : ''}`}>
          <button 
            className={`tab-button ${activeTab === 'why' ? 'active' : ''}`}
            onClick={() => setActiveTab('why')}
          >
            <DollarSign size={20} />
            Why Invest in CartLyf
          </button>
          <button 
            className={`tab-button ${activeTab === 'philosophy' ? 'active' : ''}`}
            onClick={() => setActiveTab('philosophy')}
          >
            <Lightbulb size={20} />
            Our Philosophy
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'why' && (
          <div className={`tab-content ${isVisible ? 'fade-in-up delay-300' : ''}`}>
            <div className="why-invest-grid">
              {whyInvest.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="why-invest-card">
                    <div className="why-invest-icon-wrapper">
                      <Icon className="why-invest-icon" />
                    </div>
                    <h3 className="why-invest-title">{item.title}</h3>
                    <p className="why-invest-description">{item.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div className={`tab-content ${isVisible ? 'fade-in-up delay-300' : ''}`}>
            <div className="principles-grid">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <Card key={index} className="principle-card">
                    <div className="principle-content">
                      <div className="principle-icon-container">
                        <Icon className="principle-icon" />
                      </div>
                      <div>
                        <h3 className="principle-title">{principle.title}</h3>
                        <p className="principle-description">{principle.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Market Opportunity */}
        <div className={`market-opportunity ${isVisible ? 'fade-in-up delay-400' : ''}`}>
          <h3 className="market-title">The African Opportunity</h3>
          <div className="market-stats-grid">
            {marketStats.map((stat, index) => (
              <Card key={index} className="market-stat-card">
                <div className="market-stat-value">{stat.value}</div>
                <div className="market-stat-label">{stat.label}</div>
                <div className="market-stat-sublabel">{stat.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment CTA */}
        <Card className={`investment-cta-card ${isVisible ? 'fade-in-up delay-600' : ''}`}>
          <div className="investment-cta-content">
            <div className="investment-cta-text">
              <h3 className="investment-cta-title">Ready to Be Part of Something Bigger?</h3>
              <p className="investment-cta-description">
                We're currently seeking strategic investors and partners who can provide not just capital, 
                but also expertise, networks, and shared commitment to our mission. Together, we'll build 
                the next generation of African tech champions.
              </p>
              <div className="investment-highlights">
                <div className="highlight-item">
                  <Globe2 className="highlight-icon" />
                  <span>Pan-African Vision</span>
                </div>
                <div className="highlight-item">
                  <Rocket className="highlight-icon" />
                  <span>Fast Execution</span>
                </div>
                <div className="highlight-item">
                  <Award className="highlight-icon" />
                  <span>Proven Track Record</span>
                </div>
              </div>
            </div>
            <div className="investment-cta-actions">
              <Button size="lg" className="investment-cta-button primary">
                Schedule a Meeting
                <TrendingUp className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="investment-cta-button secondary">
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
