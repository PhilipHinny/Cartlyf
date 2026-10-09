import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useForm, ValidationError } from "@formspree/react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Placeholder } from "./site-ui"
import { CONTACT, CONTACT_SUBJECTS } from "../config/site"
import { SERVICES } from "../data/services"
import "../styles/modern-contact.css"

const subjectFromParam = (value) => (CONTACT_SUBJECTS.some((s) => s.key === value) ? value : "")

export default function ModernContact() {
  const [state, handleSubmit] = useForm("xkoqzakw")
  const [searchParams] = useSearchParams()
  const offer = SERVICES.find((s) => s.id === searchParams.get("offer"))

  const [subject, setSubject] = useState(() => subjectFromParam(searchParams.get("subject")))
  const [message, setMessage] = useState(() => (offer ? `I'm interested in the ${offer.title}.` : ""))

  // Buttons elsewhere on the site link here with ?subject=...; follow the URL if it changes.
  useEffect(() => {
    const fromUrl = subjectFromParam(searchParams.get("subject"))
    if (fromUrl) setSubject(fromUrl)
    if (offer) setMessage((m) => m || `I'm interested in the ${offer.title}.`)
  }, [searchParams, offer])

  const subjectLabel = CONTACT_SUBJECTS.find((s) => s.key === subject)?.label

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-panel">
            <h2 className="modern-contact-title">Get in touch</h2>
            <p className="modern-contact-intro">
              Tell us what you're working on and we'll get back to you.
            </p>

            <dl className="modern-contact-details">
              {CONTACT.offices.map((office) => (
                <div key={office.city}>
                  <dt>{office.city}</dt>
                  <dd>{office.address || <Placeholder>{office.city} office address</Placeholder>}</dd>
                </div>
              ))}
              <div>
                <dt>Phone</dt>
                <dd>
                  {CONTACT.phones.map((p, i) => (
                    <span key={p.tel}>
                      {i > 0 && ", "}
                      <a href={`tel:${p.tel}`} className="modern-contact-link">{p.display}</a>
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="modern-contact-link">{CONTACT.email}</a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <span className="modern-contact-whatsapp-list">
                    {CONTACT.whatsapp.map((w) => (
                      <a
                        key={w.wa}
                        href={`https://wa.me/${w.wa}`}
                        className="btn btn-secondary btn-sm modern-contact-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat on WhatsApp with ${w.display}`}
                      >
                        <MessageCircle size={18} aria-hidden="true" />
                        {w.display}
                      </a>
                    ))}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact-form-card">
            {state.succeeded ? (
              <div className="modern-contact-success" role="status">
                <h3 className="modern-contact-form-title">Message sent</h3>
                <p>Thanks for getting in touch. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <h3 className="modern-contact-form-title">Send us a message</h3>
                <input type="hidden" name="_subject" value={`Website: ${subjectLabel || "Enquiry"}${offer ? ` (${offer.title})` : ""}`} />
                {offer && <input type="hidden" name="offer" value={offer.title} />}
                {searchParams.get("sector") && <input type="hidden" name="sector" value={searchParams.get("sector")} />}

                <div className="modern-contact-form-row">
                  <div className="modern-contact-form-group">
                    <label htmlFor="contact-name" className="modern-contact-label">Name</label>
                    <input id="contact-name" type="text" name="name" autoComplete="name" className="modern-contact-input" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="modern-contact-form-group">
                    <label htmlFor="contact-company" className="modern-contact-label">
                      Company <span className="modern-contact-optional">(optional)</span>
                    </label>
                    <input id="contact-company" type="text" name="company" autoComplete="organization" className="modern-contact-input" />
                  </div>
                </div>

                <div className="modern-contact-form-row">
                  <div className="modern-contact-form-group">
                    <label htmlFor="contact-email" className="modern-contact-label">Email</label>
                    <input id="contact-email" type="email" name="email" autoComplete="email" className="modern-contact-input" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="modern-contact-form-group">
                    <label htmlFor="contact-phone" className="modern-contact-label">Phone</label>
                    <input id="contact-phone" type="tel" name="phone" autoComplete="tel" className="modern-contact-input" required />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>

                <div className="modern-contact-form-group">
                  <label htmlFor="contact-subject" className="modern-contact-label">Subject</label>
                  <div className="modern-contact-select-wrapper">
                    <select
                      id="contact-subject"
                      name="subject"
                      className="modern-contact-select"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="">Choose a subject</option>
                      {CONTACT_SUBJECTS.map((s) => (
                        <option key={s.key} value={s.key}>{s.label}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="modern-contact-select-icon" aria-hidden="true" />
                  </div>
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="modern-contact-form-group">
                  <label htmlFor="contact-message" className="modern-contact-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="modern-contact-textarea"
                    rows="5"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <p className="modern-contact-privacy">
                  We use these details only to reply to you. See our <Link to="/privacy">Privacy Policy</Link>.
                </p>

                <button type="submit" className="btn btn-primary modern-contact-submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
                <ValidationError errors={state.errors} />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
