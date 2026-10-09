import { Link, useParams } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { BookingButton } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import SectionHeader from "../components/kit/SectionHeader"
import InsightCard from "../components/kit/InsightCard"
import { getInsight, formatDate, INSIGHTS } from "../lib/insights"
import { SITE_URL, DEFAULT_OG_IMAGE } from "../config/site"
import NotFoundPage from "./NotFoundPage"
import "../styles/insights.css"

export default function InsightArticlePage() {
  const { slug } = useParams()
  const article = getInsight(slug)
  if (!article) return <NotFoundPage />

  const more = INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 3)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "Cartlyf Technologies Limited",
      logo: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE },
    },
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
  }

  return (
    <div className="page-wrapper">
      <SeoHead
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        ogType="article"
        structuredData={structuredData}
        breadcrumb={[
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />

      <PageHero
        breadcrumb={[
          { label: "Insights", to: "/insights" },
          { label: article.tags[0], to: `/insights?tag=${encodeURIComponent(article.tags[0])}` },
        ]}
        title={article.title}
        meta={
          <>
            {article.author} · <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
            {article.readingMinutes} min read
          </>
        }
      />

      <section className="section">
        <div className="container container-narrow">
          <article className="article-body" dangerouslySetInnerHTML={{ __html: article.html }} />

          <aside className="article-cta on-dark" aria-label="Book a health check">
            <h2 className="article-cta-title">Want this checked for your business?</h2>
            {article.ctaHtml && <p className="article-cta-text" dangerouslySetInnerHTML={{ __html: article.ctaHtml }} />}
            <BookingButton />
          </aside>

          <div className="tag-list article-tags">
            {article.tags.map((tag) => (
              <Link key={tag} to={`/insights?tag=${encodeURIComponent(tag)}`} className="tag">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <SectionHeader title="More insights" />
            <div className="grid grid-3">
              {more.map((a) => (
                <InsightCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
