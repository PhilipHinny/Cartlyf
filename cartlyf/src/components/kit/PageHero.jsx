import { Link } from "react-router-dom"
import Picture from "./Picture"

/** Dark header at the top of every page, optionally over a photo. Children are the action buttons. */
export default function PageHero({ image, eyebrow, title, lead, meta, breadcrumb, size = "page", children }) {
  return (
    <header className={`page-hero on-dark page-hero--${size}${image ? " has-media" : ""}`}>
      {image && (
        <div className="page-hero-media">
          <Picture id={image} alt="" priority />
        </div>
      )}
      <div className="container page-hero-inner">
        <div className="page-hero-content">
          {breadcrumb && (
            <nav className="breadcrumb" aria-label="Breadcrumb">
              {breadcrumb.map((item, i) => (
                <span key={item.label} className="breadcrumb-item">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-hero-title">{title}</h1>
          {lead && <p className="page-hero-lead">{lead}</p>}
          {meta && <p className="page-hero-meta">{meta}</p>}
          {children && <div className="btn-row page-hero-actions">{children}</div>}
        </div>
      </div>
    </header>
  )
}
