import { useSearchParams } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"
import CtaBand from "../components/kit/CtaBand"
import InsightCard from "../components/kit/InsightCard"
import { INSIGHTS, INSIGHT_TAGS } from "../lib/insights"
import "../styles/insights.css"

export default function InsightsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = INSIGHT_TAGS.find((t) => t === searchParams.get("tag")) || null
  const articles = activeTag ? INSIGHTS.filter((a) => a.tags.includes(activeTag)) : INSIGHTS

  const selectTag = (tag) => {
    setSearchParams(tag ? { tag } : {}, { replace: true, preventScrollReset: true })
  }

  return (
    <div className="page-wrapper">
      <SeoHead
        title="Insights: Payments, Data Protection and Logistics"
        description="Practical articles on M-Pesa reconciliation, ODPC compliance, fleet document tracking and building payment systems for East African businesses."
        path="/insights"
      />

      <PageHero
        image="nairobi-skyline"
        eyebrow="Insights"
        title="What we've learned, written down"
        lead="Practical notes on payments, data protection and logistics in East Africa."
      />

      <section className="section">
        <div className="container">
          <div className="insights-filters" role="group" aria-label="Filter articles by topic">
            <button type="button" className="insights-filter" aria-pressed={!activeTag} onClick={() => selectTag(null)}>
              All
            </button>
            {INSIGHT_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className="insights-filter"
                aria-pressed={activeTag === tag}
                onClick={() => selectTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="visually-hidden" aria-live="polite">
            {articles.length} {articles.length === 1 ? "article" : "articles"} shown
          </p>

          {articles.length > 0 ? (
            <div className="grid grid-3">
              {articles.map((article) => (
                <InsightCard key={article.slug} article={article} headingLevel={2} />
              ))}
            </div>
          ) : (
            <p className="insights-empty">No articles on this topic yet.</p>
          )}
        </div>
      </section>

      <CtaBand
        title="Want this checked for your business?"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </div>
  )
}
