import Hero from "../components/hero"
import FocusAreas from "../components/focus-areas"
import About from "../components/about"
import PortfolioPreview from "../components/portfolio-preview"
import Blog from "../components/blog"
import Investment from "../components/investment"
import Contact from "../components/contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <About />
      <PortfolioPreview />
      <Blog />
      <Investment />
      <Contact />
    </>
  )
}

