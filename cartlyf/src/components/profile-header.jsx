import { useState } from "react"
import { Heart, Bookmark, Calendar, Mail, Phone, Globe, MessageCircle, Share2, Info, X } from "lucide-react"
import { Button } from "./ui/button"
import "../styles/profile-header.css"

export default function ProfileHeader() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="profile-header-container">
      <div className="profile-header-content">
        <div className="profile-header-left">
          <div className="profile-avatar">
            <img src="/placeholder-user.jpg" alt="Profile" className="profile-avatar-img" />
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              <h2 className="profile-name">CartLyf Technologies</h2>
              <span className="profile-status">Available for work</span>
              <button className="profile-follow-btn">Follow</button>
            </div>
            <div className="profile-contact">
              <a href="mailto:info@cartlyf.com" className="profile-contact-item">
                <Mail size={16} />
                <span>info@cartlyf.com</span>
              </a>
              <a href="tel:+254700000000" className="profile-contact-item">
                <Phone size={16} />
                <span>+254 700 000 000</span>
              </a>
              <a href="https://cartlyf.com" className="profile-contact-item" target="_blank" rel="noopener noreferrer">
                <Globe size={16} />
                <span>cartlyf.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-header-right">
          <button className="profile-action-btn" aria-label="Like">
            <Heart size={20} />
          </button>
          <button className="profile-action-btn" aria-label="Bookmark">
            <Bookmark size={20} />
          </button>
          <button className="profile-action-btn" aria-label="Calendar">
            <Calendar size={20} />
          </button>
          <Button className="profile-work-btn">Work with us</Button>
        </div>
      </div>
      <div className="profile-sidebar">
        <button className="profile-sidebar-btn" aria-label="Messages">
          <MessageCircle size={20} />
          <span className="profile-sidebar-badge">43</span>
        </button>
        <button className="profile-sidebar-btn" aria-label="Share">
          <Share2 size={20} />
        </button>
        <button className="profile-sidebar-btn" aria-label="Info">
          <Info size={20} />
        </button>
        <button className="profile-close-btn" onClick={() => setIsVisible(false)} aria-label="Close">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

