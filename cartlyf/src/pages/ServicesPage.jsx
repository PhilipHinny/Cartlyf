import React, { useEffect, useRef, useState } from "react"
import SeoHead from "../components/SeoHead"
import { Code, Smartphone, Globe, Layers, ShieldCheck, GraduationCap, Laptop, Database } from "lucide-react"
import "../styles/page-header.css"
import "../styles/services-page.css"

export default function ServicesPage() {
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

  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      keyword: "web application development Kenya",
      description: "We design and build high-performance web applications tailored for African markets. From e-commerce platforms to complex internal business tools, we ensure scalability and speed."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      keyword: "mobile app development Kenya",
      description: "Our mobile development team creates intuitive iOS and Android applications. We focus on lightweight, efficient apps that work across all devices and network conditions in East Africa."
    },
    {
      icon: Code,
      title: "Custom Software Solutions",
      keyword: "custom software development Nairobi",
      description: "Unique problems require unique solutions. We partner with businesses in Nairobi and across Kenya to build bespoke software that automates workflows and solves specific operational challenges."
    },
    {
      icon: Laptop,
      title: "MVP Development for Startups",
      keyword: "MVP development Kenya startup",
      description: "Speed to market is everything. We help Kenyan startups build and launch Minimum Viable Products quickly, allowing founders to test their ideas and iterate based on real user feedback."
    },
    {
      icon: GraduationCap,
      title: "EdTech & Scheduling Systems",
      keyword: "school management system Kenya",
      description: "Leveraging our expertise in timetable scheduling software, we build comprehensive EdTech solutions including school management systems and academic scheduling platforms."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Software",
      keyword: "enterprise software Kenya",
      description: "We develop robust enterprise grade software for larger organizations, focusing on security, data integrity, and seamless integration with existing IT infrastructure."
    },
    {
      icon: Layers,
      title: "API Development & Integration",
      keyword: "API development Kenya",
      description: "Modern systems need to talk to each other. We design and build secure, scalable APIs that connect your platforms to the wider digital ecosystem."
    },
    {
      icon: Database,
      title: "SaaS Development",
      keyword: "SaaS development Africa",
      description: "We help entrepreneurs build Software as a Service (SaaS) products from the ground up, optimized for the unique demands and opportunities of the African digital economy."
    }
  ]

  return (
    <div className="page-wrapper">
      <SeoHead
        title="Custom Software Development Company Kenya | Cartlyf Services"
        description="Cartlyf Technologies is a leading software development company in Kenya offering web application development, mobile app development, and custom systems in Nairobi."
        canonical="https://www.cartlyftechnologies.com/services"
        ogTitle="Custom Software & System Development Kenya — Cartlyf Technologies"
        ogDescription="Partner with a top-tier tech company in Western Kenya for custom software, mobile apps, and EdTech solutions. We build scalable technology for East Africa."
        ogUrl="https://www.cartlyftechnologies.com/services"
      />

      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Our Services</h1>
          <p className="page-header-description">
            Custom software development and digital solutions built for the East African market
          </p>
        </div>
      </div>

      <section ref={sectionRef} className="services-overview-section">
        <div className="services-container">
          <div className={`services-intro ${isVisible ? 'fade-in-up' : ''}`}>
            <h2 className="services-intro-title">Expert Software Development in Kenya</h2>
            <p className="services-intro-text">
              Cartlyf Technologies is more than just a product company. We are a premier <strong>software development company in Kenya</strong>, 
              working with businesses from <strong>Kitale</strong> to <strong>Nairobi</strong> and across <strong>East Africa</strong>. 
              Our team specializes in building <strong>custom software development</strong> solutions that drive efficiency and growth.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className={`service-card ${isVisible ? 'fade-in-up' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="service-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-tag">{service.keyword}</div>
                </div>
              )
            })}
          </div>

          <div className={`services-location-footer ${isVisible ? 'fade-in-up' : ''}`}>
            <p>
              Whether you are looking for a <strong>tech company in Western Kenya</strong> or a partner for 
              <strong> system development in Kenya</strong>, Cartlyf Technologies is here to help you scale. 
              We are a dedicated <strong>IT company in Kitale, Kenya</strong> with the reach and expertise to handle 
              projects of any size.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
