import { Link } from "react-router-dom"
import { formatDate } from "../../lib/insights"

export default function InsightCard({ article, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  return (
    <Link to={`/insights/${article.slug}`} className="card insight-card">
      <div className="tag-list">
        {article.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <Heading className="card-title">{article.title}</Heading>
      <p className="meta">
        <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingMinutes} min read
      </p>
      <p className="card-text">{article.excerpt}</p>
      <span className="card-footer arrow-link">Read the article</span>
    </Link>
  )
}
