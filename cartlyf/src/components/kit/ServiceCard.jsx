import { Link } from "react-router-dom"
import Picture from "./Picture"

/** A linked card with a photo (or an icon element), title, text and arrow link. */
export default function ServiceCard({ to, image, icon, title, text, linkLabel = "See the offers", headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  return (
    <Link to={to} className="card">
      {image ? (
        <div className="card-media">
          <Picture id={image} alt="" sizes="(min-width: 1024px) 380px, (min-width: 700px) 50vw, 100vw" />
        </div>
      ) : (
        icon && <span className="card-icon">{icon}</span>
      )}
      <Heading className="card-title">{title}</Heading>
      <p className="card-text">{text}</p>
      <span className="card-footer arrow-link">{linkLabel}</span>
    </Link>
  )
}
