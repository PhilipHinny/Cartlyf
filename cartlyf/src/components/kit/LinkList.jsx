import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

/** Bordered rows of title, short text and an arrow, each one a link. */
export default function LinkList({ items }) {
  return (
    <ul className="link-list">
      {items.map((item) => (
        <li key={item.to} className="link-list-item">
          <Link to={item.to}>
            <span>
              <span className="link-list-title">{item.title}</span>
              <span className="link-list-text">{item.text}</span>
            </span>
            <ArrowRight className="link-list-arrow" size={20} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
