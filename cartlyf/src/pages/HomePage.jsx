import ModernHero from "../components/modern-hero"
import ModernAbout from "../components/modern-about"
import PortfolioSnapshot from "../components/portfolio-snapshot"
import FocusAreas from "../components/focus-areas"
import ModernNews from "../components/modern-news"
import ModernContact from "../components/modern-contact"

export default function HomePage() {
  return (
    <>
      <ModernHero />
      <ModernAbout />
      <PortfolioSnapshot />
      <FocusAreas />
      <ModernNews />
      <ModernContact />
    </>
  )
}

