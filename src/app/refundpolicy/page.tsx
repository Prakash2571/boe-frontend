// app/refund-policy/page.tsx

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "Digital Products",
      content:
        "Since BeOnEdge provides digital educational products and membership access, refunds may be limited once course access has been granted.",
    },
    {
      title: "Eligibility for Refunds",
      content:
        "Refund requests may be considered within 7 days of purchase if the course has not been substantially accessed or completed.",
    },
    {
      title: "Membership Cancellation",
      content:
        "Premium memberships may be cancelled anytime. Cancellation stops future billing but does not automatically guarantee refunds for prior billing periods.",
    },
    {
      title: "Non-Refundable Cases",
      content:
        "Refunds may not be provided for completed courses, downloadable resources already accessed, abuse of refund policies, or violations of platform terms.",
    },
    {
      title: "Processing Time",
      content:
        "Approved refunds are generally processed within 5–10 business days, depending on the payment provider and banking systems.",
    },
    {
      title: "Contact Support",
      content:
        "To request a refund or report a billing issue, contact BeOnEdge support with your payment details and registered email address.",
    },
  ];

  return (
    <main className="refund-page">
      <section className="refund-hero">
        <div className="container">
          <p className="refund-label">
            Refund Policy
          </p>

          <h1 className="refund-title">
            Refund & Cancellation Policy
          </h1>

          <p className="refund-lead">
            Understand how refunds,
            cancellations, memberships,
            and billing requests are handled
            on BeOnEdge.
          </p>
        </div>
      </section>

      <section className="refund-content-section">
        <div className="container refund-content">
          {sections.map((section, index) => (
            <article key={index} className="refund-item">
              <div className="refund-item-top">
                <span className="refund-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.title}</h2>
              </div>

              <p>{section.content}</p>
            </article>
          ))}

          <div className="refund-help">
            <h3>Need billing help?</h3>

            <p>
              For refund requests, payment
              concerns, or cancellation support,
              contact BeOnEdge through official
              support channels.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}