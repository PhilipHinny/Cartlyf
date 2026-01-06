import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import HomePage from "./pages/HomePage"
import TeamPage from "./pages/TeamPage"
import PortfolioPage from "./pages/PortfolioPage"

import "./styles/App.css"

function App() {
  return (
    <Router>
      <main className="main-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
