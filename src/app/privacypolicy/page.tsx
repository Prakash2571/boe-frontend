// app/privacy/page.tsx

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect your name, email address, phone number, payment information, and learning preferences when you use BeOnEdge.",
    },
    {
      title: "How We Use Information",
      content:
        "Your information is used to provide courses, improve learning experiences, process payments, communicate updates, and offer customer support.",
    },
    {
      title: "Payment Security",
      content:
        "Payments are processed through trusted third-party payment providers. We do not store complete card or banking information on our servers.",
    },
    {
      title: "Cookies & Analytics",
      content:
        "We may use cookies and analytics tools to understand platform usage, improve performance, and personalise user experiences.",
    },
    {
      title: "Data Sharing",
      content:
        "We do not sell your personal information. Data may only be shared with trusted service providers required for payments, analytics, or infrastructure operations.",
    },
    {
      title: "Data Protection",
      content:
        "We take reasonable technical and organisational measures to protect user data from unauthorised access or misuse.",
    },
    {
      title: "Contact",
      content:
        "For privacy-related questions or requests, contact us through the official BeOnEdge support channels.",
    },
  ];

  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <p className="privacy-label">
            Privacy Policy
          </p>

          <h1 className="privacy-title">
            Your privacy matters
          </h1>

          <p className="privacy-lead">
            Learn how BeOnEdge collects,
            protects, and uses your information
            while you use our courses,
            memberships, and learning tools.
          </p>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="container privacy-content">
          {sections.map((section, index) => (
            <article key={index} className="privacy-item">
              <div className="privacy-item-top">
                <span className="privacy-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.title}</h2>
              </div>

              <p>{section.content}</p>
            </article>
          ))}

          <div className="privacy-help">
            <h3>Need support?</h3>

            <p>
              For privacy-related concerns,
              account requests, or data
              questions, contact BeOnEdge
              through official support channels.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}