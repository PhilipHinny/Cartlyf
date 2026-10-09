import { Link } from "react-router-dom"
import Picture from "./Picture"

/** A wide split card for the lead case study: photo on one side, summary and two facts on the other. */
export default function FeaturedCaseStudy({ study }) {
  return (
    <Link to={`/case-studies/${study.slug}`} className="featured-case">
      <div className="featured-case-media">
        <Picture id={study.image} alt="" sizes="(min-width: 860px) 600px, 100vw" />
      </div>
      <div className="featured-case-body">
        <span className="tag">{study.tag} · Featured</span>
        <h3 className="featured-case-title">{study.title}</h3>
        <p className="card-text">{study.summary}</p>
        <dl className="featured-case-facts">
          <div>
            <dt>Challenge</dt>
            <dd>{study.challengeShort}</dd>
          </div>
          <div>
            <dt>What we built</dt>
            <dd>{study.builtShort}</dd>
          </div>
        </dl>
        <span className="card-footer arrow-link">Read the case study</span>
      </div>
    </Link>
  )
}
