import Portfolio from "../components/portfolio"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "../styles/page-header.css"

export default function PortfolioPage() {
  const navigate = useNavigate()

  return (
    <div className="page-wrapper">
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

