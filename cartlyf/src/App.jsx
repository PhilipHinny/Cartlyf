import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import HomePage from "./pages/HomePage"
import TeamPage from "./pages/TeamPage"
import PortfolioPage from "./pages/PortfolioPage"
import AboutPage from "./pages/AboutPage"
import ModernContact from "./components/modern-contact"
import "./styles/App.css"

function App() {
  return (
    <Router>
      <main className="main-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ModernContact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
