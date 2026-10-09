import { Link } from "react-router-dom"
import Picture from "./Picture"

export default function CaseStudyCard({ study, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  return (
    <Link to={`/case-studies/${study.slug}`} className="card case-card">
      <div className="card-media">
        <Picture id={study.image} alt="" sizes="(min-width: 1024px) 380px, (min-width: 700px) 50vw, 100vw" />
      </div>
      <span className="tag">{study.tag}</span>
      <Heading className="card-title">{study.title}</Heading>
      <p className="card-text">{study.summary}</p>
      <span className="card-footer arrow-link">Read the case study</span>
    </Link>
  )
}
