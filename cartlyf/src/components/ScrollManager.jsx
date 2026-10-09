import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Scrolls to the top on page change, or to the #section in the URL when there is one.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
