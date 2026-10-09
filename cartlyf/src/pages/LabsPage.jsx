import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"

export default function LabsPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Cartlyf Labs"
        description="Cartlyf Labs is where we experiment, including 3D virtual conferences with VR support. Some experiments become products; all of them sharpen how we build."
        path="/labs"
      />

      <PageHero
        eyebrow="Cartlyf Labs"
        title="Where we experiment"
        lead="Some of these become products; all of them sharpen how we build."
      />

      <section className="section">
        <div className="container">
          <article className="card labs-item">
            <span className="tag">In development</span>
            <h2 className="section-title">3D virtual conferences</h2>
            <p className="section-lead">A virtual venue where people attend conferences from any country, with VR support.</p>
            <p className="card-text">
              Attendees join from a browser or a VR headset, move between rooms and talks, and meet other attendees
              without travelling. We'll share a demo here once it's ready.
            </p>
          </article>

          <p className="labs-note">
            Interested in piloting one of these? <Link to="/contact?subject=partnerships">Talk to us.</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
