import SeoHead from "../components/SeoHead"
import ModernHero from "../components/modern-hero"
import ModernAbout from "../components/modern-about"
import PortfolioSnapshot from "../components/portfolio-snapshot"
import FocusAreas from "../components/focus-areas"
import ModernNews from "../components/modern-news"
import ModernContact from "../components/modern-contact"
import "../styles/home-b2b.css"

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Cartlyf Technologies | East Africa Tech Company | Kenya"
        description="Cartlyf Technologies is a Kenyan tech company building scalable digital products for East Africa — including FLYTS car rentals and HAPA, the live venue discovery app."
        canonical="https://www.cartlyftechnologies.com/"
        ogTitle="Cartlyf Technologies | East Africa Tech Company | Kenya"
        ogDescription="Kenyan tech startup behind FLYTS (peer-to-peer car rentals) and HAPA (live venue discovery). Building practical technology for African markets."
        ogUrl="https://www.cartlyftechnologies.com/"
      />

      <ModernHero />
      <ModernAbout />
      <PortfolioSnapshot />
      <FocusAreas />

      {/* B2B / Client-Facing Section */}
      <section className="home-b2b-section">
        <div className="home-b2b-container">
          <p className="home-b2b-text">
            Beyond our own products, Cartlyf Technologies works with schools, businesses, and
            institutions across Kenya and Uganda to design and build custom software systems —
            from web platforms and mobile apps to intelligent scheduling systems and data tools.
            We are a{" "}
            <a href="/services" className="home-b2b-link">software development company in Kenya</a>{" "}
            serving clients from Kitale to Nairobi and across East Africa.
          </p>
        </div>
      </section>

      <ModernNews />
      <ModernContact />
    </>
  )
}

