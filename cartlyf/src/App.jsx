import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import HomePage from "./pages/HomePage"
import TeamPage from "./pages/TeamPage"
import PortfolioPage from "./pages/PortfolioPage"
import AboutPage from "./pages/AboutPage"
import Careers from "./pages/Careers"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import "./styles/App.css"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <main className="main-container">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </HelmetProvider>
  )
}

export default App
