import Team from "../components/team"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "../styles/page-header.css"

export default function TeamPage() {
  const navigate = useNavigate()

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Our Team</h1>
          <p className="page-header-description">
            The people building practical technology for Africa from Kitale, Kenya
          </p>
        </div>
      </div>
      <Team />
    </div>
  )
}

