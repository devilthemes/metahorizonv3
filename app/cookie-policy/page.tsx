import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/common/CTA/CTA";
import styles from "./CookiePolicy.module.scss";

export const metadata: Metadata = {
  title: "Cookie Policy | Metahorizon",
  description:
    "Cookie Policy explaining how Metahorizon uses cookies and tracking technologies.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://metahorizon.com/cookie-policy",
  },
};

const lastUpdated = "February 28, 2026";

export default function CookiePolicyPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span>Cookie Policy</span>
          </nav>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.container}>
          <div className={styles.toc}>
            <h2 className={styles.tocTitle}>Table of Contents</h2>
            <ul className={styles.tocList}>
              <li>
                <a href="#what-are-cookies">1. What Are Cookies?</a>
              </li>
              <li>
                <a href="#how-we-use">2. How We Use Cookies</a>
              </li>
              <li>
                <a href="#types-of-cookies">3. Types of Cookies We Use</a>
              </li>
              <li>
                <a href="#third-party-cookies">4. Third-Party Cookies</a>
              </li>
              <li>
                <a href="#managing-cookies">
                  5. Managing Your Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#cookie-list">6. Cookies We Use</a>
              </li>
              <li>
                <a href="#updates">7. Updates to This Policy</a>
              </li>
              <li>
                <a href="#contact">8. Contact Us</a>
              </li>
            </ul>
          </div>

          <section id="what-are-cookies" className={styles.section}>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device
              (computer, smartphone, or tablet) when you visit a website. They
              help websites remember information about your visit, making it
              easier to navigate and interact with the site.
            </p>
            <p>
              Cookies are widely used to make websites work more efficiently and
              provide information to website owners about how the site is being
              used.
            </p>
            <h3>Similar Technologies</h3>
            <p>
              In addition to cookies, we may use similar technologies such as:
            </p>
            <ul>
              <li>
                <strong>Local Storage:</strong> Stores data locally on your
                device
              </li>
              <li>
                <strong>Session Storage:</strong> Temporary storage for a
                browsing session
              </li>
              <li>
                <strong>Pixels/Web Beacons:</strong> Small images that track
                page views
              </li>
              <li>
                <strong>Device Fingerprinting:</strong> Identifying devices
                based on configuration
              </li>
            </ul>
          </section>

          <section id="how-we-use" className={styles.section}>
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Operations:</strong> Enable core website
                functionality and security features
              </li>
              <li>
                <strong>Performance:</strong> Understand how visitors interact
                with our website
              </li>
              <li>
                <strong>Functionality:</strong> Remember your preferences and
                settings
              </li>
              <li>
                <strong>Analytics:</strong> Analyze website traffic and usage
                patterns
              </li>
              <li>
                <strong>Marketing:</strong> Deliver relevant content and
                advertisements
              </li>
              <li>
                <strong>Social Media:</strong> Enable social media sharing and
                integration
              </li>
            </ul>
          </section>

          <section id="types-of-cookies" className={styles.section}>
            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable basic functions like page navigation, secure access,
              and form submission. Without these cookies, the website cannot
              function properly.
            </p>
            <p>
              <strong>Examples:</strong> Session cookies, authentication
              cookies, security cookies
            </p>

            <h3>3.2 Performance/Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our
              website by collecting anonymous information about pages visited,
              time spent, and errors encountered. This helps us improve website
              performance.
            </p>
            <p>
              <strong>Examples:</strong> Google Analytics, page view tracking,
              bounce rate analysis
            </p>

            <h3>3.3 Functionality Cookies</h3>
            <p>
              These cookies remember your choices and preferences (such as
              language, region, or login information) to provide enhanced,
              personalized features.
            </p>
            <p>
              <strong>Examples:</strong> Language preferences, login
              persistence, video player settings
            </p>

            <h3>3.4 Marketing/Advertising Cookies</h3>
            <p>
              These cookies track your browsing activity across websites to
              deliver advertisements that are relevant to you. They are also
              used to limit the number of times you see an advertisement and
              measure advertising effectiveness.
            </p>
            <p>
              <strong>Examples:</strong> Ad targeting, retargeting, conversion
              tracking
            </p>

            <h3>3.5 Social Media Cookies</h3>
            <p>
              These cookies are set by social media services that we have added
              to the site to enable you to share our content with your friends
              and networks.
            </p>
            <p>
              <strong>Examples:</strong> LinkedIn, Twitter, Facebook sharing
              buttons
            </p>
          </section>

          <section id="third-party-cookies" className={styles.section}>
            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics, deliver
              advertisements, and for other purposes. These third parties may
              include:
            </p>
            <ul>
              <li>
                <strong>Analytics Providers:</strong> Google Analytics,
                Microsoft Clarity
              </li>
              <li>
                <strong>Advertising Networks:</strong> Google Ads, LinkedIn Ads
              </li>
              <li>
                <strong>Social Media Platforms:</strong> LinkedIn, Twitter,
                YouTube
              </li>
              <li>
                <strong>Service Providers:</strong> CRM systems, email marketing
                platforms
              </li>
              <li>
                <strong>Content Providers:</strong> Video hosting, document
                sharing
              </li>
            </ul>
            <p>
              These third parties may collect information about your online
              activities over time and across different websites.
            </p>
          </section>

          <section id="managing-cookies" className={styles.section}>
            <h2>5. Managing Your Cookie Preferences</h2>

            <h3>5.1 Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their
              settings. You can:
            </p>
            <ul>
              <li>View what cookies are stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Set preferences for different types of cookies</li>
            </ul>

            <h3>5.2 Browser-Specific Instructions</h3>
            <p>Here's how to manage cookies in popular browsers:</p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Settings → Privacy and Security
                → Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Options → Privacy & Security →
                Cookies and Site Data
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings → Cookies and site
                permissions → Manage and delete cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and
                website data
              </li>
            </ul>

            <h3>5.3 Impact of Disabling Cookies</h3>
            <p>
              Please note that if you disable cookies, some features of our
              website may not function properly. You may not be able to:
            </p>
            <ul>
              <li>Log in to your account</li>
              <li>Submit forms</li>
              <li>Access personalized content</li>
              <li>Use certain interactive features</li>
            </ul>

            <h3>5.4 Opt-Out Resources</h3>
            <p>
              You can also manage your cookie preferences through these industry
              opt-out pages:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.aboutads.info/choices"
                  target="_blank"
                  rel="noopener"
                >
                  Digital Advertising Alliance (DAA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener"
                >
                  European Interactive Digital Advertising Alliance
                </a>
              </li>
              <li>
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener"
                >
                  Network Advertising Initiative
                </a>
              </li>
            </ul>
          </section>

          <section id="cookie-list" className={styles.section}>
            <h2>6. Cookies We Use</h2>
            <p>Below is a list of the main cookies we use:</p>

            <h3>Essential Cookies</h3>
            <ul>
              <li>
                <strong>session_id</strong> - Maintains your session during
                browsing (Session)
              </li>
              <li>
                <strong>csrf_token</strong> - Protects against cross-site
                request forgery (Session)
              </li>
              <li>
                <strong>auth_token</strong> - Authentication for logged-in users
                (30 days)
              </li>
            </ul>

            <h3>Analytics Cookies</h3>
            <ul>
              <li>
                <strong>_ga</strong> - Google Analytics user identification (2
                years)
              </li>
              <li>
                <strong>_gid</strong> - Google Analytics session identification
                (24 hours)
              </li>
              <li>
                <strong>_gat</strong> - Google Analytics throttling (1 minute)
              </li>
            </ul>

            <h3>Functionality Cookies</h3>
            <ul>
              <li>
                <strong>preferred_language</strong> - Stores your language
                preference (1 year)
              </li>
              <li>
                <strong>cookie_consent</strong> - Remembers your cookie
                preferences (1 year)
              </li>
            </ul>

            <h3>Marketing Cookies</h3>
            <ul>
              <li>
                <strong>_fbp</strong> - Facebook advertising (3 months)
              </li>
              <li>
                <strong>li_fat_id</strong> - LinkedIn advertising (3 months)
              </li>
              <li>
                <strong>IDE</strong> - Google advertising (1 year)
              </li>
            </ul>
          </section>

          <section id="updates" className={styles.section}>
            <h2>7. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our business operations.
              When we make changes, we will update the "Last Updated" date at
              the top of this page.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay
              informed about how we use cookies.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>8. Contact Us</h2>
            <p>
              If you have questions about our use of cookies or this Cookie
              Policy, please contact us:
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
          </section>

          <section className={styles.relatedLinks}>
            <h2>Related Policies</h2>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <CTA
        title="Have Questions About Cookies?"
        ctaText="Contact Our Privacy Team"
        ctaHref="/contact-us"
        description="Our privacy team can help you understand and manage your cookie preferences."
      />
    </div>
  );
}
