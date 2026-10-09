/** Numbered steps in open columns divided by thin rules. */
export default function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map((step, i) => (
        <li key={step.title} className="steps-item">
          <span className="steps-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="steps-title">{step.title}</h3>
          <p className="steps-text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
