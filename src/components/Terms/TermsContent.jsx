import React from "react";
import "../../appStyles/TermsPageStyles/TermsContent.css";

const TermsContent = () => {
  return (
    <section className="terms-content">
      <div className="terms-content__inner">
        <p>
          Welcome to IncrediQuo Solutions (&quot;Company&quot;, &quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;). By accessing or using our website
          and services, you agree to the following Terms &amp; Conditions.
          Please read them carefully before using our platform.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing our website, requesting a quote, creating an account, or
          using any of our services, you acknowledge that you have read,
          understood, and agree to be legally bound by these Terms &amp;
          Conditions.
        </p>

        <h2>Scope of Services</h2>
        <p>IncrediQuo Solutions provides, including but not limited to:</p>
        <ul>
          <li>Transcription Services</li>
          <li>Closed Captioning &amp; Subtitling</li>
          <li>Summarisation</li>
          <li>Additional Language &amp; Administrative Support</li>
        </ul>
        <p>
          We reserve the right to modify, expand, or discontinue any service at
          any time.
        </p>

        <h2>User Responsibilities</h2>
        <p>Users agree not to:</p>
        <ul>
          <li>
            Submit unlawful, harmful, or confidential content without proper
            permissions.
          </li>
          <li>
            Upload materials that infringe copyright or intellectual property
            rights.
          </li>
          <li>
            Misuse the website or attempt unauthorised access to systems.
          </li>
        </ul>
        <p>Users are responsible for the accuracy of the data they provide.</p>

        <h2>Confidentiality &amp; Data Handling</h2>
        <p>
          All files shared with us are treated as strictly confidential. We do
          not claim ownership of your content and use it solely for providing
          requested services. Your data is stored securely and accessed only by
          authorised personnel.
        </p>

        <h2>Turnaround Times</h2>
        <p>
          Delivery timelines depend on service mode (Standard, 24-Hour,
          Real-Time, Same-Day, Custom). Delays may occur due to:
        </p>
        <ul>
          <li>Poor audio / video quality</li>
          <li>Unclear speech or heavy accents</li>
          <li>Large file volumes</li>
          <li>Additional editing or formatting requests</li>
        </ul>
        <p>We will communicate any expected delays in advance where possible.</p>

        <h2>Payments &amp; Billing</h2>
        <p>
          Fees are based on the pricing agreed at the time of order
          confirmation. Payments are due as per the invoice terms. We reserve
          the right to suspend services for overdue accounts.
        </p>

        <h2>Limitations of Liability</h2>
        <p>
          While we strive for high accuracy and reliability, we do not guarantee
          error-free output. Our liability is limited to the value of the
          service purchased and we are not responsible for indirect or
          consequential damages.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions from time to time. Any
          changes will be posted on this page with an updated revision date.
          Continued use of our website or services after changes are published
          means you accept the revised terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms &amp; Conditions, please
          contact us via the details provided on our Contact page.
        </p>
      </div>
    </section>
  );
};

export default TermsContent;
