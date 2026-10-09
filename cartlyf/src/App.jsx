import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import ScrollManager from "./components/ScrollManager"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import IndustriesPage from "./pages/IndustriesPage"
import MobilityLogisticsPage from "./pages/MobilityLogisticsPage"
import CaseStudiesPage from "./pages/CaseStudiesPage"
import CaseStudyPage from "./pages/CaseStudyPage"
import InsightsPage from "./pages/InsightsPage"
import InsightArticlePage from "./pages/InsightArticlePage"
import LabsPage from "./pages/LabsPage"
import AboutPage from "./pages/AboutPage"
import Careers from "./pages/Careers"
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"
import CreditsPage from "./pages/CreditsPage"
import NotFoundPage from "./pages/NotFoundPage"
import "./styles/App.css"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollManager />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="main-container">
          <Navigation />
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/mobility-logistics" element={<MobilityLogisticsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightArticlePage />} />
              <Route path="/labs" element={<LabsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/credits" element={<CreditsPage />} />
              {/* Old routes from the previous site */}
              <Route path="/portfolio" element={<Navigate to="/case-studies" replace />} />
              <Route path="/team" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
