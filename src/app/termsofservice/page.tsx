export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using BeOnEdge, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you should not use the platform.",
    },
    {
      title: "Educational Purpose",
      content:
        "All content provided on BeOnEdge is for educational and awareness purposes only. Nothing on this platform constitutes financial, investment, legal, or tax advice.",
    },
    {
      title: "User Responsibilities",
      content:
        "Users are responsible for providing accurate information, maintaining account security, and using the platform lawfully. Misuse, abuse, scraping, or redistribution of content is strictly prohibited.",
    },
    {
      title: "Payments & Memberships",
      content:
        "Certain courses and memberships may require payment. Prices may change over time. Access to premium content is granted only after successful payment processing.",
    },
    {
      title: "Intellectual Property",
      content:
        "All course materials, worksheets, branding, designs, and written content remain the intellectual property of BeOnEdge and may not be copied or redistributed without permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "BeOnEdge shall not be liable for financial losses, investment decisions, or damages arising from the use of educational content available on the platform.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. Continued use of the platform after updates means you accept the revised terms.",
    },
  ];

  return (
    <main className="tos-page">
      <section className="tos-hero">
        <div className="container">
          <h1 className="tos-title">
            Terms of Service
          </h1>

          <p className="tos-lead">
            Clear terms for using BeOnEdge educational
            courses, memberships, worksheets, and
            premium learning content.
          </p>
        </div>
      </section>

      <section className="tos-content-section">
        <div className="container tos-content">
          {sections.map((section, index) => (
            <article key={index} className="tos-item">
              <div className="tos-item-top">
                <span className="tos-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.title}</h2>
              </div>

              <p>{section.content}</p>
            </article>
          ))}

          <div className="tos-help">
            <h3>Need help?</h3>

            <p>
              For legal questions, billing issues,
              or account-related concerns, contact
              the BeOnEdge support team through
              official support channels.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}