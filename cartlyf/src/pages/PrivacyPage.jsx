import { Link } from "react-router-dom"
import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"
import { CONTACT } from "../config/site"
import "../styles/insights.css"

export default function PrivacyPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Privacy Policy"
        description="How Cartlyf Technologies handles personal data sent through this website, and how to request access or deletion under Kenya's Data Protection Act, 2019."
        path="/privacy"
      />

      <PageHero eyebrow="Legal" title="Privacy Policy" lead="How we handle the personal data you send us through this website." />

      <section className="section">
        <div className="container container-narrow">
          <p className="privacy-review meta">Last updated: 8 October 2026</p>

          <div className="article-body">
            <p>
              This policy covers the website at cartlyftechnologies.com, run by Cartlyf Technologies Limited, a
              company registered in Kenya ("Cartlyf", "we", "us"). It explains what we collect through the site,
              why, and the rights you have under Kenya's Data Protection Act, 2019. It does not cover systems we
              build or run for clients; those have their own terms.
            </p>

            <h2>What we collect</h2>
            <p>When you use the contact form, we collect what you type into it:</p>
            <ul>
              <li>your name and, if you give it, your company;</li>
              <li>your email address and phone number;</li>
              <li>the subject you choose and your message.</li>
            </ul>
            <p>
              If you email, call or message us on WhatsApp, we receive your contact details and whatever you
              send. We do not use advertising trackers on this site.
            </p>

            <h2>Why we collect it</h2>
            <p>
              We use these details to reply to your enquiry, arrange a health check or call you asked for, and
              keep a record of our conversation with you. Our lawful basis is your consent when you send the
              form, and our legitimate interest in responding to business enquiries. We do not sell your data
              or use it for unrelated marketing.
            </p>

            <h2>Who we share it with</h2>
            <p>
              Form messages are delivered to us through Formspree, a form-handling service, and stored in our
              email system. These providers process the data on our behalf and may store it outside Kenya. We
              only share your details with anyone else if the law requires it.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep enquiries for as long as we need them to deal with your request and any work that follows.
              If no work follows, we delete enquiries within 24 months.
            </p>

            <h2>Your rights</h2>
            <p>Under the Data Protection Act, 2019, you can ask us to:</p>
            <ul>
              <li>tell you what personal data we hold about you and give you a copy;</li>
              <li>correct data that is wrong or incomplete;</li>
              <li>delete your data;</li>
              <li>stop or limit how we use it, or withdraw your consent.</li>
            </ul>
            <p>
              To make a request, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with the subject
              "Data request" and tell us what you need. We may ask you to confirm your identity before we act.
              If you are not satisfied with our response, you can complain to the Office of the Data Protection
              Commissioner (ODPC) at <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">odpc.go.ke</a>.
            </p>

            <h2>Security</h2>
            <p>
              We limit access to enquiries to the people who need them to reply, and use providers that encrypt
              data in transit.
            </p>

            <h2>Changes</h2>
            <p>
              If we change this policy, we will update this page. Questions?{" "}
              <Link to="/contact">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
