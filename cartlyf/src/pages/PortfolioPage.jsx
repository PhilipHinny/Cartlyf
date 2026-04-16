import Portfolio from "../components/portfolio"
import { useNavigate } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import "../styles/page-header.css"

export default function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Our Products | Cartlyf Technologies — FLYTS & HAPA"
        description="Explore Cartlyf Technologies' product lineup: FLYTS peer-to-peer car rentals in Kenya and Uganda, HAPA live venue discovery in Kampala, and our timetable scheduling system."
        canonical="https://www.cartlyftechnologies.com/portfolio"
        ogTitle="Cartlyf Products — FLYTS, HAPA & Timetable Scheduling"
        ogDescription="Discover the digital products built by Cartlyf Technologies — Africa's peer-to-peer car rental platform, live venue discovery app, and intelligent academic scheduling system."
        ogUrl="https://www.cartlyftechnologies.com/portfolio"
      />
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Our Products</h1>
          <p className="page-header-description">
            Technology products that improve efficiency, accessibility, and resource utilization
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  )
}


