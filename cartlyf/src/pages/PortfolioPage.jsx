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
          <Button 
            variant="ghost" 
            size="sm" 
            className="back-button"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={18} />
            Back to Home
          </Button>
          <h1 className="page-header-title">Our Portfolio</h1>
          <p className="page-header-description">
            Explore our complete portfolio of innovative products and solutions
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  )
}

