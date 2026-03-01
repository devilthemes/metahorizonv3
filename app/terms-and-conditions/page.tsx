import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/common/CTA/CTA';
import styles from './Terms.module.scss';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Metahorizon',
  description: 'Terms and Conditions for using Metahorizon services and website.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://metahorizon.com/terms-and-conditions',
  },
};

const lastUpdated = 'February 28, 2026';

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span>Terms and Conditions</span>
          </nav>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.container}>
          <div className={styles.toc}>
            <h2 className={styles.tocTitle}>Table of Contents</h2>
            <ul className={styles.tocList}>
              <li><a href="#acceptance">1. Acceptance of Terms</a></li>
              <li><a href="#services">2. Description of Services</a></li>
              <li><a href="#eligibility">3. Eligibility</a></li>
              <li><a href="#accounts">4. User Accounts</a></li>
              <li><a href="#acceptable-use">5. Acceptable Use</a></li>
              <li><a href="#intellectual-property">6. Intellectual Property</a></li>
              <li><a href="#fees">7. Fees and Payment</a></li>
              <li><a href="#confidentiality">8. Confidentiality</a></li>
              <li><a href="#warranties">9. Disclaimers and Warranties</a></li>
              <li><a href="#liability">10. Limitation of Liability</a></li>
              <li><a href="#indemnification">11. Indemnification</a></li>
              <li><a href="#termination">12. Termination</a></li>
              <li><a href="#governing-law">13. Governing Law</a></li>
              <li><a href="#changes">14. Changes to Terms</a></li>
              <li><a href="#contact">15. Contact Information</a></li>
            </ul>
          </div>

          <section id="acceptance" className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Metahorizon website (metahorizon.com) and any related services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not access or use our Services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Metahorizon Inc. ("Company," "we," "us," or "our").
            </p>
          </section>

          <section id="services" className={styles.section}>
            <h2>2. Description of Services</h2>
            <p>Metahorizon provides the following services:</p>
            <ul>
              <li><strong>IT Services:</strong> Identity & Access Management, Cloud & DevOps, Cybersecurity, Data Science & AI/ML, Custom Software Development, Managed IT Services</li>
              <li><strong>Products:</strong> Metahorizon Documme (AI documentation), Metahorizon Qvolv (AR/VR/MR solutions)</li>
              <li><strong>Training:</strong> Professional development, leadership training, technical certifications through Metahorizon Academy</li>
              <li><strong>Consulting:</strong> Expert-as-a-Service, staff augmentation, technical consulting</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any portion of the Services at any time without prior notice.
            </p>
          </section>

          <section id="eligibility" className={styles.section}>
            <h2>3. Eligibility</h2>
            <p>
              To use our Services, you must be at least 18 years old and have the legal authority to enter into these Terms. By using our Services, you represent and warrant that you meet these eligibility requirements.
            </p>
            <p>
              If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
            </p>
          </section>

          <section id="accounts" className={styles.section}>
            <h2>4. User Accounts</h2>
            <h3>4.1 Account Creation</h3>
            <p>
              To access certain Services, you may need to create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>

            <h3>4.2 Account Security</h3>
            <p>
              You agree to use strong passwords and not share your account credentials with others. Metahorizon is not liable for any losses arising from unauthorized access to your account.
            </p>

            <h3>4.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in suspicious activity.
            </p>
          </section>

          <section id="acceptable-use" className={styles.section}>
            <h2>5. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on others' intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Use the Services to send spam or unsolicited communications</li>
              <li>Impersonate any person or entity</li>
              <li>Reverse engineer or decompile any software</li>
              <li>Use automated systems to access the Services without permission</li>
            </ul>
          </section>

          <section id="intellectual-property" className={styles.section}>
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Our Property</h3>
            <p>
              All content, features, and functionality of the Services, including text, graphics, logos, software, and trademarks, are owned by Metahorizon and protected by intellectual property laws.
            </p>

            <h3>6.2 Your Content</h3>
            <p>
              You retain ownership of content you submit to the Services. By submitting content, you grant us a license to use, store, and process that content as necessary to provide the Services.
            </p>

            <h3>6.3 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas you provide about the Services may be used by us without compensation or attribution.
            </p>
          </section>

          <section id="fees" className={styles.section}>
            <h2>7. Fees and Payment</h2>
            <h3>7.1 Service Fees</h3>
            <p>
              Certain Services require payment of fees. Fees are as stated on our website or in service agreements. We reserve the right to change fees with notice.
            </p>

            <h3>7.2 Payment Terms</h3>
            <ul>
              <li>Fees are due as specified in your service agreement</li>
              <li>Payments are non-refundable unless otherwise stated</li>
              <li>Late payments may incur additional charges</li>
              <li>We may suspend services for non-payment</li>
            </ul>

            <h3>7.3 Taxes</h3>
            <p>
              You are responsible for all applicable taxes associated with your use of the Services, except for taxes on our net income.
            </p>
          </section>

          <section id="confidentiality" className={styles.section}>
            <h2>8. Confidentiality</h2>
            <p>
              Both parties may have access to confidential information. Each party agrees to:
            </p>
            <ul>
              <li>Use confidential information only for purposes of the Services</li>
              <li>Protect confidential information with reasonable care</li>
              <li>Not disclose confidential information to third parties</li>
              <li>Return or destroy confidential information upon request</li>
            </ul>
          </section>

          <section id="warranties" className={styles.section}>
            <h2>9. Disclaimers and Warranties</h2>
            <h3>9.1 No Warranties</h3>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3>9.2 No Guarantees</h3>
            <p>
              We do not guarantee that the Services will be uninterrupted, error-free, or completely secure. We do not guarantee specific results from use of the Services.
            </p>
          </section>

          <section id="liability" className={styles.section}>
            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, METAHORIZON SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Personal injury or property damage</li>
              <li>Unauthorized access to data or systems</li>
              <li>Third-party claims</li>
            </ul>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section id="indemnification" className={styles.section}>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Metahorizon from any claims, damages, losses, or expenses arising from:
            </p>
            <ul>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your infringement of third-party rights</li>
              <li>Your negligent or intentional misconduct</li>
            </ul>
          </section>

          <section id="termination" className={styles.section}>
            <h2>12. Termination</h2>
            <h3>12.1 By You</h3>
            <p>
              You may stop using the Services at any time. Some Services may require notice for cancellation as specified in service agreements.
            </p>

            <h3>12.2 By Us</h3>
            <p>
              We may terminate or suspend access to the Services at any time, with or without cause, with or without notice.
            </p>

            <h3>12.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Services ends immediately. Provisions that should survive termination (including intellectual property, disclaimers, and limitation of liability) shall survive.
            </p>
          </section>

          <section id="governing-law" className={styles.section}>
            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the State of Texas, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Irving, Texas.
            </p>
            <p>
              If you are outside the United States, you acknowledge that your use of the Services may involve transfer of data to the United States.
            </p>
          </section>

          <section id="changes" className={styles.section}>
            <h2>14. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last Updated" date. Continued use of the Services after changes constitutes acceptance of the new Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically for updates.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>15. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Metahorizon Inc.</strong></p>
              <p>1303 W Walnut Hill, Suite 340<br />
              Irving, Texas 75038, USA</p>
              <p>Email: <a href="mailto:legal@metahorizon.com">legal@metahorizon.com</a></p>
              <p>Phone: <a href="tel:+14694969588">+1 (469) 496-9588</a></p>
            </div>
          </section>

          <section className={styles.relatedLinks}>
            <h2>Related Policies</h2>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </section>
        </div>
      </main>

      <CTA
        title="Have Questions About Our Terms?"
        ctaText="Contact Our Legal Team"
        ctaHref="/contact-us"
        description="Our team is available to answer any questions about our terms and conditions."
      />
    </div>
  );
}
