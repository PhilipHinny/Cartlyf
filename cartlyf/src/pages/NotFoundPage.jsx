import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"

export default function NotFoundPage() {
  return (
    <div className="page-wrapper">
      <SeoHead title="Page not found" description="This page doesn't exist." noindex />
      <PageHero title="Page not found" lead="We couldn't find that page." />
      <section className="section">
        <div className="container btn-row">
          <Link to="/" className="btn btn-primary">Go to the home page</Link>
          <Link to="/insights" className="btn btn-secondary">Read our insights</Link>
        </div>
      </section>
    </div>
  )
}
