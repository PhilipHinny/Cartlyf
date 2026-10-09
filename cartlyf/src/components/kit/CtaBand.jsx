import { BookingButton } from "../site-ui"

/** Dark closing band with a call to action. Defaults to the health-check booking button. */
export default function CtaBand({ title, text, children }) {
  return (
    <section className="cta-band on-dark" aria-label="Call to action">
      <div className="container cta-band-inner">
        <div className="cta-band-copy">
          <h2 className="cta-band-title">{title}</h2>
          {text && <p className="cta-band-text">{text}</p>}
        </div>
        <div className="btn-row">{children || <BookingButton />}</div>
      </div>
    </section>
  )
}
