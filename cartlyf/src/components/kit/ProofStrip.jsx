import { Link } from "react-router-dom"

/** A row of proof points on ink, attached under the home hero. */
export default function ProofStrip({ items, label = "Recent work" }) {
  return (
    <section className="proof-strip on-dark" aria-label={label}>
      <ul className="container proof-strip-list">
        {items.map((item) => (
          <li key={item.title} className="proof-strip-item">
            <Link to={item.to}>
              <strong className="proof-strip-title">{item.title}</strong>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
