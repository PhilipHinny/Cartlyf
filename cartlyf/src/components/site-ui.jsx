// Small shared building blocks used across pages.
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { BOOKING_URL } from "../config/site"

const PLACEHOLDER_RE = /\[\[PLACEHOLDER:\s*([^\]]+?)\]\]/g

/** Renders a visible, easy-to-spot placeholder for missing content. */
export function Placeholder({ children }) {
  return <span className="placeholder-marker">[[PLACEHOLDER: {children}]]</span>
}

/** Renders text, turning any [[PLACEHOLDER: ...]] markers into <Placeholder>. */
export function WithPlaceholders({ text }) {
  if (!text) return null
  const out = []
  let last = 0
  for (const m of text.matchAll(PLACEHOLDER_RE)) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(<Placeholder key={m.index}>{m[1]}</Placeholder>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <Fragment>{out}</Fragment>
}

/** A link that uses the router for internal paths and a plain <a> for external URLs. */
export function SmartLink({ to, children, ...props }) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

/** Every "Book a free health check" button goes through here so it always uses BOOKING_URL. */
export function BookingButton({ className = "btn btn-primary", children = "Book a free health check", ...props }) {
  return (
    <SmartLink to={BOOKING_URL} className={className} {...props}>
      {children}
    </SmartLink>
  )
}

export function ArrowLink({ to, children, className = "arrow-link", ...props }) {
  return (
    <SmartLink to={to} className={className} {...props}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </SmartLink>
  )
}
