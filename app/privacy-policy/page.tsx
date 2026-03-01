import type { Metadata } from "next";
import Link from "next/link";
import SEO from "@/components/common/SEO/SEO";
import StructuredData from "@/components/common/SEO/StructuredData";
import CTA from "@/components/common/CTA/CTA";
import styles from "./PrivacyPolicy.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy | Metahorizon - Data Protection & Privacy",
  description:
    "Metahorizon Privacy Policy - Learn how we collect, use, protect, and manage your personal information. Your privacy and data security are our top priorities.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Privacy",
    "GDPR Compliance",
    "Data Security",
    "Personal Information",
    "Cookie Policy",
    "Metahorizon Privacy",
    "Data Privacy",
    "Information Security",
  ],
  authors: [{ name: "Metahorizon" }],
  openGraph: {
    title: "Privacy Policy | Metahorizon - Data Protection & Privacy",
    description:
      "Learn how Metahorizon collects, uses, and protects your personal information. Your privacy is our priority.",
    url: "https://metahorizon.com/privacy-policy",
    siteName: "Metahorizon",
    images: [
      {
        url: "/assets/img/meta-horizon-logo.png",
        width: 1200,
        height: 630,
        alt: "Metahorizon Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Metahorizon",
    description:
      "Your privacy matters. Learn how we protect your personal information.",
    images: ["/assets/img/meta-horizon-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://metahorizon.com/privacy-policy",
  },
};

const lastUpdated = "February 28, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Privacy Policy | Metahorizon - Data Protection & Privacy"
        description="Metahorizon Privacy Policy - Learn how we collect, use, protect, and manage your personal information."
        canonical="/privacy-policy"
      />

      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade Identity Access Management, IT services, and professional training provider."
      />

      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.container}>
          <div className={styles.toc}>
            <h2 className={styles.tocTitle}>Table of Contents</h2>
            <ul className={styles.tocList}>
              <li>
                <a href="#introduction">1. Introduction</a>
              </li>
              <li>
                <a href="#information-we-collect">2. Information We Collect</a>
              </li>
              <li>
                <a href="#how-we-use">3. How We Use Your Information</a>
              </li>
              <li>
                <a href="#information-sharing">
                  4. Information Sharing & Disclosure
                </a>
              </li>
              <li>
                <a href="#data-security">5. Data Security</a>
              </li>
              <li>
                <a href="#cookies">6. Cookies & Tracking</a>
              </li>
              <li>
                <a href="#your-rights">7. Your Privacy Rights</a>
              </li>
              <li>
                <a href="#data-retention">8. Data Retention</a>
              </li>
              <li>
                <a href="#children">9. Children's Privacy</a>
              </li>
              <li>
                <a href="#international">10. International Data Transfers</a>
              </li>
              <li>
                <a href="#changes">11. Changes to This Policy</a>
              </li>
              <li>
                <a href="#contact">12. Contact Us</a>
              </li>
            </ul>
          </div>

          <section id="introduction" className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Metahorizon ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website <Link href="/">metahorizon.com</Link> (the "Site") and use
              our services.
            </p>
            <p>
              By accessing or using our Site and services, you agree to the
              practices described in this Privacy Policy. If you do not agree
              with the terms of this Privacy Policy, please do not access or use
              our Site.
            </p>
          </section>

          <section id="information-we-collect" className={styles.section}>
            <h2>2. Information We Collect</h2>

            <h3>2.1 Information You Provide Directly</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, mailing address
              </li>
              <li>
                <strong>Business Information:</strong> Company name, job title,
                industry, company size
              </li>
              <li>
                <strong>Account Information:</strong> Username, password,
                account preferences
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, inquiries, and
                feedback you send to us
              </li>
              <li>
                <strong>Transaction Information:</strong> Payment details,
                billing information, purchase history
              </li>
              <li>
                <strong>Event Registration:</strong> Information provided when
                registering for webinars, training, or events
              </li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>
              When you visit our Site, we automatically collect certain
              information, including:
            </p>
            <ul>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system, device identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent,
                referring URLs, click patterns
              </li>
              <li>
                <strong>Location Data:</strong> General geographic location
                based on IP address
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> See our{" "}
                <a href="#cookies">Cookies section</a> for details
              </li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties,
              including:
            </p>
            <ul>
              <li>Business partners and affiliates</li>
              <li>Social media platforms (when you connect your accounts)</li>
              <li>Data providers and marketing partners</li>
              <li>Publicly available sources</li>
            </ul>
          </section>

          <section id="how-we-use" className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various business purposes,
              including:
            </p>
            <ul>
              <li>
                <strong>Service Delivery:</strong> Providing, maintaining, and
                improving our services
              </li>
              <li>
                <strong>Communication:</strong> Responding to inquiries, sending
                updates, and providing customer support
              </li>
              <li>
                <strong>Marketing:</strong> Sending promotional communications
                (with your consent where required)
              </li>
              <li>
                <strong>Personalization:</strong> Tailoring content and
                recommendations to your interests
              </li>
              <li>
                <strong>Analytics:</strong> Understanding usage patterns and
                improving our Site and services
              </li>
              <li>
                <strong>Security:</strong> Detecting and preventing fraud,
                abuse, and security incidents
              </li>
              <li>
                <strong>Compliance:</strong> Meeting legal and regulatory
                obligations
              </li>
              <li>
                <strong>Business Operations:</strong> Conducting research,
                analysis, and business development
              </li>
            </ul>
          </section>

          <section id="information-sharing" className={styles.section}>
            <h2>4. Information Sharing & Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>

            <h3>4.1 Service Providers</h3>
            <p>
              We share information with third-party vendors who perform services
              on our behalf, such as:
            </p>
            <ul>
              <li>Hosting and infrastructure providers</li>
              <li>Payment processors</li>
              <li>Analytics and marketing tools</li>
              <li>Customer support platforms</li>
              <li>Email delivery services</li>
            </ul>

            <h3>4.2 Business Partners</h3>
            <p>
              With your consent, we may share information with business partners
              to provide joint offerings or promotions.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose information when required by law, regulation,
              legal process, or governmental request, or to protect our rights
              and the rights of others.
            </p>

            <h3>4.4 Business Transfers</h3>
            <p>
              In connection with a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>
          </section>

          <section id="data-security" className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul>
              <li>
                <strong>Encryption:</strong> Data encryption in transit and at
                rest
              </li>
              <li>
                <strong>Access Controls:</strong> Role-based access and
                authentication requirements
              </li>
              <li>
                <strong>Security Monitoring:</strong> Continuous monitoring and
                threat detection
              </li>
              <li>
                <strong>Regular Assessments:</strong> Security audits and
                vulnerability assessments
              </li>
              <li>
                <strong>Employee Training:</strong> Privacy and security
                training for all employees
              </li>
            </ul>
            <p>
              While we strive to protect your information, no method of
              transmission over the Internet or electronic storage is 100%
              secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section id="cookies" className={styles.section}>
            <h2>6. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our Site. Cookies are small data files stored on
              your device that help us:
            </p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our Site</li>
              <li>Deliver relevant content and advertisements</li>
              <li>Analyze Site traffic and performance</li>
            </ul>

            <h3>Types of Cookies We Use:</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for Site
                functionality
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand Site
                usage
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Deliver relevant
                advertisements
              </li>
            </ul>

            <h3>Managing Cookies:</h3>
            <p>
              You can control cookies through your browser settings. Most
              browsers allow you to refuse or delete cookies. Note that
              disabling cookies may affect Site functionality.
            </p>
          </section>

          <section id="your-rights" className={styles.section}>
            <h2>7. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another party
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing
                activities
              </li>
              <li>
                <strong>Opt-Out:</strong> Opt out of marketing communications
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent where
                processing is based on consent
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:contact@metahorizon.com">
                contact@metahorizon.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          <section id="data-retention" className={styles.section}>
            <h2>8. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill
              the purposes outlined in this Privacy Policy, unless a longer
              retention period is required by law. When determining retention
              periods, we consider:
            </p>
            <ul>
              <li>The nature and sensitivity of the information</li>
              <li>The purposes for which we collected it</li>
              <li>Legal and regulatory requirements</li>
              <li>Whether the purposes could be achieved by other means</li>
            </ul>
            <p>
              When information is no longer needed, we securely delete or
              anonymize it.
            </p>
          </section>

          <section id="children" className={styles.section}>
            <h2>9. Children's Privacy</h2>
            <p>
              Our Site and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal information from
              children. If we become aware that we have collected personal
              information from a child, we will take steps to delete it.
            </p>
          </section>

          <section id="international" className={styles.section}>
            <h2>10. International Data Transfers</h2>
            <p>
              Metahorizon operates globally. Your information may be transferred
              to and processed in countries other than your country of
              residence. These countries may have data protection laws that
              differ from your country's laws.
            </p>
            <p>
              We implement appropriate safeguards for international transfers,
              including:
            </p>
            <ul>
              <li>
                Standard contractual clauses approved by relevant authorities
              </li>
              <li>Binding corporate rules</li>
              <li>Certification mechanisms</li>
              <li>Other legally authorized transfer mechanisms</li>
            </ul>
          </section>

          <section id="changes" className={styles.section}>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make changes, we will update the "Last Updated"
              date at the top of this page.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically.
              Continued use of our Site after changes constitutes acceptance of
              the updated Privacy Policy.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Metahorizon Inc.</strong>
              </p>
              <p>
                1303 W Walnut Hill, Suite 340
                <br />
                Irving, Texas 75038, USA
              </p>
              <p>
                Email:{" "}
                <a href="mailto:contact@metahorizon.com">
                  contact@metahorizon.com
                </a>
              </p>
              <p>
                Phone: <a href="tel:+14694969588">+1 (469) 496-9588</a>
              </p>
            </div>
            <p>
              For users in the European Economic Area (EEA), you have the right
              to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className={styles.relatedLinks}>
            <h2>Related Policies</h2>
            <ul>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <CTA
        title="Have Questions About Your Privacy?"
        ctaText="Contact Our Privacy Team"
        ctaHref="/contact-us"
        description="Our privacy team is here to address your concerns and help you understand how we protect your information."
      />
    </div>
  );
}
