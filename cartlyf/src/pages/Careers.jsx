import { useState, useEffect } from "react";
import SeoHead from "../components/SeoHead";
import "../styles/careers.css";

const positions = [
  {
    id: "market-research",
    number: "01",
    title: "Market Research & Business Intelligence Intern",
    department: "Strategy & Innovation",
    type: "Internship · Remote",
    duration: "2 Months",
    location: "Kenya (Remote)",
    overview:
      "Drive the market expansion of Cartlyf's diverse product ecosystem. You will work across FLYTS (Mobility), our Timetable Automation systems and our client services to map demand, analyze competitors, and identify cross-product synergies that empower African users.",
    responsibilities: [
      "Conduct market research for FLYTS across Kenya and East Africa",
      "Develop user acquisition frameworks for FLYTS renters and fleet partners",
      "Design and administer structured surveys to 100+ potential users across three industries",
      "Produce a 'Cartlyf Synergy Report' identifying how our products can grow together"
    ],
    qualifications: [
      "Currently enrolled in a Degree in Business Administration, Marketing, Economics, Statistics, or a related field",
      "Analytical mindset with the ability to find patterns across different industries",
      "Strong interest in the African tech ecosystem and platform economies",
      "Proficient in Notion, Google Workspace and data visualization tools",
      "Leveraging AI tools for market research and data analysis"
    ],
    emailSubject: "INTERNSHIP – MARKET RESEARCH & BUSINESS INTELLIGENCE INTERN",
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media & Content Creation Intern",
    department: "Marketing & Creative",
    type: "Internship · Remote",
    duration: "2 Months",
    location: "Remote",
    overview:
      "Build the digital soul of Cartlyf. Your mission is to establish FLYTS as the most trusted name in car rental. You'll create high-energy content that turns users into community advocates.",
    responsibilities: [
      "Create and manage viral-ready short-form video content for FLYTS on TikTok and Instagram",
      "Develop a 'Trust & Safety' content series for FLYTS to build host and renter confidence",
      "Execute community engagement plans for FLYTS renters and vehicle providers",
      "Design a monthly cross-platform content calendar for all Cartlyf product brands",
      "Monitor and report on community sentiment and viral reach for new product launches"
    ],
    qualifications: [
      "Currently enrolled in a Diploma or Degree in Business Administration, Marketing, Communications, PR, or Creative Media",
      "Strong storytelling skills with a portfolio of video content (TikTok/Reels)",
      "Native-level proficiency in social media platforms and trending formats",
      "Experience with CapCut, Canva, or Adobe Creative Suite",
      "Proficient in Notion, Google Workspace and data visualization tools",
      "Leveraging AI tools for content creation and optimization"
    ],
    emailSubject: "INTERNSHIP – SOCIAL MEDIA & CONTENT CREATION INTERN",
    note: "A link to your creative portfolio or active social presence is mandatory.",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing & SEO Intern",
    department: "Growth Ops",
    type: "Internship · Remote",
    duration: "2 Months",
    location: "Global Remote (Africa-focused)",
    overview:
      "Optimize the digital discoverability of Cartlyf's product suite. You will own the SEO strategy for FLYTS car hire searches and build the performance marketing foundation for our B2B academic tools and B2C social apps.",
    responsibilities: [
      "Perform deep keyword research for 'Car Rental Kenya' and 'Timetable Automation'",
      "Audit and optimize technical SEO and meta-data for Cartlyf.com and product subdomains",
      "Set up and manage GA4 events and Meta Pixel tracking for FLYTS",
      "Write high-ranking, SEO-optimized blog articles that position Cartlyf as a tech leader",
      "Run small-scale A/B tests on Meta/Google Ads to optimize user acquisition costs"
    ],
    qualifications: [
      "Currently enrolled in a Diploma or Degree in Marketing, IT, Business Computing, or Data Science",
      "Hands-on experience with SEO tools (Ahrefs, Semrush) and Google Analytics",
      "Excellent technical writing skills with an eye for marketing psychology",
      "Data-driven approach to testing and scaling digital campaigns",
      "Proficient in Notion, Google Workspace and data visualization tools",
      "Leveraging AI tools for SEO optimization and content creation"
    ],
    emailSubject: "INTERNSHIP – DIGITAL MARKETING & SEO INTERN",
  },
  {
    id: "regulatory",
    number: "04",
    title: "Regulatory Research & Compliance Intern",
    department: "Legal & Ops",
    type: "Internship · Remote",
    duration: "2 Months",
    location: "Kenya (Remote)",
    overview:
      "Ensure the scalability and integrity of Cartlyf's marketplaces. You will focus on regulatory compliance for FLYTS, ensuring our users are protected and our operations meet the highest legal standards in East Africa.",
    responsibilities: [
      "Research and document licensing requirements for mobility marketplaces in Kenya",
      "Develop 'Trust & Safety' guidelines for verify hosts on the FLYTS platform",
      "Track ODPC data protection compliance for FLYTS user data",
      "Liaise with insurance providers for commercial car hire protection products",
      "Draft institutional onboarding checklists for Timetable Automation clients"
    ],
    qualifications: [
      "Currently enrolled in a Diploma or Degree in Law, Public Policy, Business Admin, or tech-adjacent fields",
      "Sharp research skills with the ability to simplify complex legal documents",
      "High attention to detail and a commitment to user safety and privacy",
      "Strong structured writing skills for compliance reporting",
      "Proficient in Notion, Google Workspace and data visualization tools",
      "Leveraging AI tools for regulatory research and compliance"
    ],
    emailSubject: "INTERNSHIP – REGULATORY RESEARCH & COMPLIANCE INTERN",
  },
];

const EMAILJS_FIELDS = [
  { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
  { name: "email", label: "Email Address", type: "email", required: true, placeholder: "Enter your email" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "+256 700 000 000" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "City, Country" },
  { name: "university", label: "University / Institution", type: "text", required: true, placeholder: "Your current or most recent institution" },
  { name: "course", label: "Course / Field of Study", type: "text", required: true, placeholder: "e.g. Business Administration" },
  { name: "linkedin", label: "LinkedIn Profile", type: "url", required: false, placeholder: "https://linkedin.com/in/yourprofile" },
  { name: "portfolio", label: "Portfolio / TikTok / Instagram", type: "url", required: false, placeholder: "Link to portfolio or social account" },
  { name: "impactAnswer", label: "Which Cartlyf product (FLYTS or Timetable Automation) interests you most, and how would you help it grow?", type: "textarea", required: true, placeholder: "Answer in 3–5 sentences..." },
  { name: "coverLetter", label: "Cover Letter", type: "textarea", required: true, placeholder: "Tell us why you are the right fit for this role (max 1 page)..." },
];

function ApplicationModal({ position, onClose }) {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("idle");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    // Add metadata for better email organization in Formspree
    formData.append("_subject", `New Application: ${position.title} - ${formData.get("fullName")}`);
    formData.append("Role", position.title);
    formData.append("Department", position.department);

    try {
      const response = await fetch("https://formspree.io/f/mgopevny", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        formElement.reset();
        setFileName("");
      } else {
        const data = await response.json();
        const errorMessage = data.errors
          ? data.errors.map(error => error.message).join(", ")
          : "Submission failed. Please check all fields and try again.";
        alert(errorMessage);
        setStatus("idle");
      }
    } catch (error) {
      alert("Network error. Please try again or email us at careers@cartlyf.com");
      setStatus("idle");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="modal-header">
          <span className="modal-position-num">{position.number}</span>
          <div>
            <p className="modal-dept">{position.department}</p>
            <h2 className="modal-title">{position.title}</h2>
          </div>
        </div>

        {status === "success" ? (
          <div className="form-success">
            <div className="success-icon">✓</div>
            <h3>Application Received!</h3>
            <p>
              Thank you for applying for the **{position.title}** position.
              We will review your application and get back to you soon.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <div className="application-instructions">
            <div className="instructions-card">
              <h3>How to Apply</h3>
              <p className="instructions-intro">
                Please follow the steps below to submit your application for the
                <strong> {position.title}</strong> role:
              </p>

              <ul className="instructions-list">
                <li>
                  <strong>1. Prepare Documents:</strong> Have your CV/Resume and a
                  brief Cover Letter ready in PDF format.
                </li>
                <li>
                  <strong>2. Answer the Growth Question:</strong> Which Cartlyf product
                  (FLYTS or Timetable Automation) interests you most, and how
                  would you help it grow?
                </li>
                <li>
                  <strong>3. Send Email:</strong> Email your documents and answer to
                  <a href="mailto:careers@cartlyf.com"> careers@cartlyf.com</a>.
                </li>
                <li>
                  <strong>4. Subject Line:</strong> Use the subject:
                  <code> INTERNSHIP – {position.title} – [Your Name]</code>
                </li>
              </ul>

              <div className="instructions-footer">
                <a
                  href={`mailto:careers@cartlyf.com?subject=INTERNSHIP – ${position.title} – [Your Name]&body=Hello Cartlyf Team,%0D%0A%0D%0AI am applying for the ${position.title} position.%0D%0A%0D%0A[My Answer to the Growth Question]:%0D%0A%0D%0A[Link to Portfolio/LinkedIn]:%0D%0A%0D%0A(Please attach your CV and Cover Letter to this email.)`}
                  className="btn-primary btn-full"
                >
                  Draft Application Email →
                </a>
              </div>
            </div>

            {/* 
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {EMAILJS_FIELDS.map((field) => (
                  <div
                    key={field.name}
                    className={`form-group ${field.type === "textarea" ? "form-group--full" : ""}`}
                  >
                    <label className="form-label">
                      {field.label}
                      {field.required && <span className="required">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        className="form-input form-textarea"
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleChange}
                        rows={4}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        className="form-input"
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                <div className="form-group form-group--full">
                  <label className="form-label">
                    Upload CV / Resume <span className="required">*</span>
                  </label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      id="cv-upload"
                      className="file-input"
                      onChange={handleFileChange}
                      required
                    />
                    <label htmlFor="cv-upload" className="file-upload-label">
                      <span className="file-icon">↑</span>
                      <span>{fileName || "Drag & drop or click to upload"}</span>
                      <span className="file-hint">PDF, DOC, DOCX · Max 2 MB</span>
                    </label>
                  </div>
                </div>
              </div>

              {position.note && (
                <div className="form-note">
                  <span>📌</span> {position.note}
                </div>
              )}

              <div className="form-footer">
                <p className="form-disclaimer">
                  By submitting, you agree that your information will be sent to{" "}
                  <strong>careers@cartlyf.com</strong> for review.
                </p>
                <button
                  type="submit"
                  className="btn-primary btn-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Preparing Email…" : "Submit Application →"}
                </button>
              </div>
            </form>
            */}
          </div>
        )}
      </div>
    </div>
  );
}

function PositionCard({ position, onApply }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`position-card ${expanded ? "position-card--open" : ""}`}>
      <div className="position-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="position-card-left">
          <span className="position-num">{position.number}</span>
          <div className="position-info">
            <span className="position-dept">{position.department}</span>
            <h3 className="position-title">{position.title}</h3>
            <div className="position-tags">
              <span className="tag">{position.type}</span>
              <span className="tag">2 Months</span>
              <span className="tag">{position.location}</span>
            </div>
          </div>
        </div>
        <div className="position-card-right">
          <button
            className="btn-primary btn-apply"
            onClick={(e) => { e.stopPropagation(); onApply(position); }}
          >
            Apply Now
          </button>
          <span className={`expand-icon ${expanded ? "expand-icon--open" : ""}`}>›</span>
        </div>
      </div>

      {expanded && (
        <div className="position-card-body">
          <p className="position-overview">{position.overview}</p>

          <div className="position-details-grid">
            <div>
              <h4 className="detail-heading">Role Responsibilities</h4>
              <ul className="detail-list">
                {position.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="detail-heading">Minimum Qualifications</h4>
              <ul className="detail-list">
                {position.qualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="position-card-cta">
            <button
              className="btn-primary"
              onClick={() => onApply(position)}
            >
              Apply for this Position →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Careers() {
  const [activePosition, setActivePosition] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      <SeoHead
        title="Careers and Internships"
        description="Join the Cartlyf Technologies growth cohort. Internships in market research, social media, SEO and regulatory compliance at a Kenyan technology company."
        path="/careers"
      />
      {/* Hero */}
      <section className="careers-hero">
        <div className="hero-badge fade-in-up">Growth Cohort 2026</div>
        <h1 className="hero-heading fade-in-up" style={{ animationDelay: "0.1s" }}>
          Build the Future of<br />Digital Africa
        </h1>
        <p className="hero-subtext fade-in-up" style={{ animationDelay: "0.2s" }}>
          Cartlyf Technologies is scaling a multi-product ecosystem across mobility
          and education. Join our 2-month growth cohort and help
          us launch FLYTS and our Timetable Automation systems in East Africa.
        </p>
        <div className="hero-stats fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="stat"><span className="stat-num">2</span><span className="stat-label">Core Products</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">4</span><span className="stat-label">Growth Roles</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Impact Driven</span></div>
        </div>
      </section>

      {/* About Cartlyf Growth */}
      <section className="programme-section">
        <div className="section-label">The Strategy</div>
        <div className="programme-grid">
          <div>
            <h2 className="section-heading">
              Innovating at the<br />Speed of Africa
            </h2>
          </div>
          <div className="programme-text">
            <p>
              Cartlyf isn't just one app. We are a technology builder creating solutions
              for high-friction markets. From digitizing car rentals with **FLYTS** to
              clash-free school timetables, we build products that
              solve practical problems.
            </p>
            <p>
              This internship cohort is our 'founding growth team.' You won't be observing
              from the sidelines—you will be identifying market demand, building communities,
              and optimizing performance across our entire product portfolio.
            </p>
            <div className="perks-row">
              <div className="perk">✓ Multi-Product Experience</div>
              <div className="perk">✓ Market Entry Strategy</div>
              <div className="perk">✓ High-Impact Mentorship</div>
              <div className="perk">✓ Reference & Certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="positions-section">
        <div className="section-label">Open Roles</div>
        <h2 className="section-heading">Join the Innovation Cohort</h2>
        <div className="positions-list">
          {positions.map((pos) => (
            <PositionCard
              key={pos.id}
              position={pos}
              onApply={setActivePosition}
            />
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="how-to-apply">
        <div className="apply-card">
          <h2>Application Process</h2>
          <p>
            We look for curiosity, grit, and a passion for African technology.
            Applications are reviewed on a rolling basis—we encourage you to
            apply early and show us your unique value.
          </p>
          <div className="apply-steps">
            <div className="apply-step">
              <span className="step-num">1</span>
              <span>Find your fit in the roles above</span>
            </div>
            <div className="apply-step">
              <span className="step-num">2</span>
              <span>Complete the application form</span>
            </div>
            <div className="apply-step">
              <span className="step-num">3</span>
              <span>Draft and verify your application email</span>
            </div>
            <div className="apply-step">
              <span className="step-num">4</span>
              <span>Submit — our team will reach out</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activePosition && (
        <ApplicationModal
          position={activePosition}
          onClose={() => setActivePosition(null)}
        />
      )}
    </div>
  );
}
