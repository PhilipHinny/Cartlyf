import { useParams } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import { WithPlaceholders, ArrowLink } from "../components/site-ui"
import PageHero from "../components/kit/PageHero"
import CtaBand from "../components/kit/CtaBand"
import Picture from "../components/kit/Picture"
import { getCaseStudy } from "../data/caseStudies"
import { getImage } from "../data/images"
import { getInsight } from "../lib/insights"
import { SITE_URL } from "../config/site"
import NotFoundPage from "./NotFoundPage"
import "../styles/case-study.css"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  if (!study) return <NotFoundPage />

  const article = study.articleSlug ? getInsight(study.articleSlug) : null

  return (
    <div className="page-wrapper">
      <SeoHead
        title={`${study.title} Case Study`}
        description={study.seoDescription}
        path={`/case-studies/${study.slug}`}
        ogType="article"
        image={`${SITE_URL}${encodeURI(getImage(study.image).file)}`}
        breadcrumb={[
          { name: "Case studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ]}
      />

      <PageHero
        image={study.image}
        breadcrumb={[{ label: "Case studies", to: "/case-studies" }, { label: study.title }]}
        eyebrow={study.tag}
        title={study.title}
        lead={study.headline}
      />

      <section className="section">
        <div className="container case-study-layout">
          <div className="case-study-body">
            <section aria-labelledby="cs-client">
              <h2 id="cs-client" className="case-study-heading">The client</h2>
              <p>{study.client}</p>
            </section>

            <section aria-labelledby="cs-challenge">
              <h2 id="cs-challenge" className="case-study-heading">The challenge</h2>
              {study.challenge.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>

            <section aria-labelledby="cs-built">
              <h2 id="cs-built" className="case-study-heading">What we built</h2>
              <ul className="check-list">
                {study.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {study.screenshot && (
                <figure className="case-study-screenshot">
                  <Picture id={study.screenshot} />
                </figure>
              )}
            </section>

            {study.results && (
              <section aria-labelledby="cs-results">
                <h2 id="cs-results" className="case-study-heading">Results</h2>
                <ul className="check-list">
                  {study.results.map((item) => (
                    <li key={item}>
                      <WithPlaceholders text={item} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {article && (
              <aside className="case-study-related">
                <p className="eyebrow">Read more</p>
                <p className="case-study-related-title">{article.title}</p>
                <ArrowLink to={`/insights/${article.slug}`}>Read the article</ArrowLink>
              </aside>
            )}
          </div>

          <aside className="case-study-side" aria-labelledby="cs-stack">
            <div className="card">
              <h2 id="cs-stack" className="case-study-heading">Stack</h2>
              <ul className="case-study-stack">
                {study.stack.map((item) => (
                  <li key={item}>
                    <WithPlaceholders text={item} />
                  </li>
                ))}
              </ul>
              {study.externalLink && (
                <a href={study.externalLink.href} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  {study.externalLink.label}
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Have a problem like this one?"
        text="Book a free 30-minute health check and we'll tell you the one thing worth fixing first."
      />
    </div>
  )
}
