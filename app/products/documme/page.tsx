import type { Metadata } from "next";
import ServicesHero from "@/components/common/ServicesHero/ServicesHero";
import ServiceDetail from "@/components/common/ServiceDetail/ServiceDetail";
import ServiceCards from "@/components/common/ServiceCards/ServiceCards";
import CTA from "@/components/common/CTA/CTA";
import SEO from "@/components/common/SEO/SEO";
import styles from "./Documme.module.scss";

export const metadata: Metadata = {
  title:
    "Metahorizon Documme | AI Documentation & Knowledge Management Software",
  description:
    "Metahorizon Documme is an enterprise AI-powered documentation platform that automatically captures meetings, conversations & workflows into searchable knowledge. Reduce documentation time by 70%. Start your 7-day free trial.",
  keywords: [
    "AI documentation software",
    "automated documentation tool",
    "knowledge management platform",
    "meeting documentation AI",
    "workflow documentation software",
    "AI meeting notes",
    "automatic documentation generator",
    "enterprise knowledge base",
    "team documentation tool",
    "AI-powered knowledge management",
    "document automation software",
    "intelligent documentation system",
    "business documentation platform",
    "collaborative documentation tool",
    "Metahorizon Documme",
    "Metahorizon products",
    "AI documentation solution",
  ],
  authors: [{ name: "Metahorizon" }],
  openGraph: {
    title:
      "Metahorizon Documme | AI Documentation & Knowledge Management Software",
    description:
      "Transform your team's productivity with AI-powered documentation. Automatically capture, organize, and retrieve knowledge from meetings and workflows.",
    url: "https://metahorizon.com/products/documme",
    siteName: "Metahorizon",
    images: [
      {
        url: "/assets/img/docummeicon.png",
        width: 1200,
        height: 630,
        alt: "Metahorizon Documme - AI Documentation Platform Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metahorizon Documme | AI Documentation Software",
    description:
      "Your team's second brain. AI-powered documentation that captures knowledge automatically. 7-day free trial.",
    images: ["/assets/img/docummeicon.png"],
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
    canonical: "https://metahorizon.com/products/documme",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Metahorizon Documme",
  alternateName: ["Documme", "Metahorizon Documme AI"],
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud-based, Web-based",
  description:
    "Metahorizon Documme is an enterprise AI-powered documentation and knowledge management platform that automatically captures conversations, meetings, and workflows into structured, searchable knowledge. Reduce documentation time by 70% and prevent knowledge loss.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
  },
  provider: {
    "@type": "Organization",
    name: "Metahorizon",
    url: "https://metahorizon.com",
    logo: {
      "@type": "ImageObject",
      url: "https://metahorizon.com/assets/img/meta-horizon-logo.png",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1303 W Walnut Hill, Suite 340",
      addressLocality: "Irving",
      addressRegion: "TX",
      postalCode: "75038",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-469-496-9588",
      contactType: "Sales",
      email: "contact@metahorizon.com",
    },
  },
  featureList: [
    "AI-Driven Automatic Documentation",
    "Intelligent AI-Powered Search",
    "Automated Meeting Summarization",
    "100+ Enterprise Tool Integrations",
    "Centralized Knowledge Repository",
    "Auto-Categorization & Tagging",
    "Enterprise-Grade Security (SOC2, ISO 27001)",
    "Real-Time Knowledge Capture",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "999",
    highPrice: "8999",
    priceCurrency: "USD",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Professional Plan",
        price: "999",
        priceCurrency: "USD",
        description: "150 documents/month, core integrations, 24/7 support",
      },
      {
        "@type": "Offer",
        name: "Growth Plan",
        price: "2999",
        priceCurrency: "USD",
        description:
          "500 documents/month, advanced integrations, compliance audit trails",
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        price: "8999",
        priceCurrency: "USD",
        description:
          "2000+ documents/month, enterprise integrations, dedicated support",
      },
    ],
  },
  softwareHelp: {
    "@type": "CreativeWork",
    name: "Documme Documentation & Support",
    url: "https://metahorizon.com/products/documme/support",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Metahorizon Documme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metahorizon Documme is an AI-powered documentation and knowledge management platform that automatically captures your team's conversations, meetings, and workflows. It transforms unstructured communications into organized, searchable knowledge, helping teams reduce documentation time by up to 70% and prevent knowledge loss.",
      },
    },
    {
      "@type": "Question",
      name: "How does Documme integrate with existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documme seamlessly integrates with 100+ popular business tools including Jira, Slack, Microsoft Teams, Zoom, GitHub, Google Docs, Confluence, Notion, Salesforce, ServiceNow, Workday, Oracle ERP, and SAP. Our integrations capture knowledge directly from your existing workflows without requiring changes to how your team works.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure with Documme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Documme provides enterprise-grade security with end-to-end encryption, SOC2 and ISO 27001 compliance, audit trails, and retention policies. We offer cloud-hosted, private VPC, and air-gapped deployment options to meet your organization's security requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export my documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Documme believes in no vendor lock-in. You can export all your documentation at any time in standard formats. Your knowledge belongs to you, and we make it easy to maintain ownership and portability.",
      },
    },
    {
      "@type": "Question",
      name: "What types of teams benefit most from Documme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documme is ideal for software development teams, project managers, sales teams, HR departments, operations teams, and enterprise organizations. Any team that relies heavily on documentation, communication, and collaborative workflows will see significant productivity gains.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Documme offers a 7-day free trial with no credit card required. You can test all features and see how Documme transforms your documentation workflow before committing to a subscription.",
      },
    },
  ],
};

const capabilities = [
  {
    number: "01",
    title: "AI-Powered Capture",
    description:
      "Automatically logs meetings, updates, and discussions from your existing workflows without manual input. Captures knowledge from Slack, Teams, Zoom, and more.",
    iconKey: "cpu",
  },
  {
    number: "02",
    title: "Instant Retrieval",
    description:
      "Find answers in seconds with AI-precision search that understands context and intent. No more wasting hours searching through emails and documents.",
    iconKey: "search",
  },
  {
    number: "03",
    title: "Automatic Organization",
    description:
      "Intelligent auto-categorization, auto-tagging, and document classification keeps everything organized without manual effort.",
    iconKey: "layers",
  },
  {
    number: "04",
    title: "Seamless Integrations",
    description:
      "Connects with 100+ tools including Jira, Slack, GitHub, Teams, Zoom, Confluence, Salesforce, and other enterprise platforms.",
    iconKey: "link",
  },
];

const integrations = [
  { name: "Jira", category: "Project Management" },
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Zoom", category: "Video Conferencing" },
  { name: "GitHub", category: "Development" },
  { name: "Google Docs", category: "Documentation" },
  { name: "Confluence", category: "Documentation" },
  { name: "Notion", category: "Project Management" },
  { name: "Salesforce", category: "CRM" },
  { name: "ServiceNow", category: "IT Service Management" },
  { name: "Workday", category: "HR Management" },
  { name: "Oracle ERP", category: "Enterprise Resource Planning" },
];

export default function DocummePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Metahorizon Documme | AI Documentation & Knowledge Management Software"
        description="Enterprise AI-powered documentation platform that automatically captures meetings, conversations & workflows. Reduce documentation time by 70%. Start free trial."
        canonical="/products/documme"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServicesHero
        title="Metahorizon Documme"
        subtitle="AI-Powered Documentation Platform"
        description="Your team's second brain, always on. Automatically capture, organize, and retrieve knowledge from meetings and workflows."
      />

      <ServiceDetail
        title="Transform Your Documentation Workflow with AI"
        description="Metahorizon Documme is an enterprise AI-powered documentation and knowledge management platform that helps organizations capture, organize, and retrieve knowledge effortlessly."
        overview="Documme automatically transforms conversations, meetings, and workflows into structured, searchable knowledge—eliminating manual documentation challenges. In today's fast-paced business environment, valuable information gets lost across emails, chat messages, video calls, and project management tools. Documme solves this critical problem by capturing critical knowledge in real time, storing it securely with enterprise-grade protection, and making it instantly accessible to your entire team. Organizations using Documme report 70% reduction in documentation time, 30% increase in team productivity, and complete elimination of knowledge loss from employee turnover. Preserve your organizational intelligence and unlock unprecedented productivity with intelligent AI automation."
        features={[
          {
            title: "AI-Driven Automatic Documentation",
            description:
              "Automatically creates comprehensive documents from conversations, meetings, and workflows. Our advanced AI understands context and captures what matters most.",
          },
          {
            title: "Intelligent AI-Powered Search",
            description:
              "Find any information in seconds with semantic search that understands intent and context, not just keywords. Get precise answers instantly.",
          },
          {
            title: "Automated Meeting Summarization",
            description:
              "Transform video calls and meetings into actionable summaries with automatically extracted decisions, action items, and key discussion points.",
          },
          {
            title: "Centralized Knowledge Repository",
            description:
              "Maintain a single source of truth with an organized, searchable knowledge base accessible to your entire organization.",
          },
          {
            title: "Smart Document Analysis",
            description:
              "AI-powered auto-categorization, intelligent tagging, and automatic document classification keeps everything organized without manual effort.",
          },
          {
            title: "Enterprise-Grade Security",
            description:
              "End-to-end encryption, SOC2 and ISO 27001 compliance, audit trails, and flexible deployment options (cloud, private VPC, or air-gapped).",
          },
          {
            title: "100+ Tool Integrations",
            description:
              "Seamlessly connects with Jira, Slack, Teams, Zoom, GitHub, Google Workspace, Salesforce, ServiceNow, and 100+ other business tools.",
          },
          {
            title: "No Vendor Lock-In",
            description:
              "Export all your documentation anytime in standard formats. Your knowledge belongs to you—full ownership and portability guaranteed.",
          },
        ]}
        benefits={[
          "Reduce documentation time by up to 70%",
          "Recover 30% of work hours wasted searching for information",
          "Prevent knowledge loss from employee turnover (affects 70% of companies)",
          "Improve team collaboration and cross-functional transparency",
          "Minimize miscommunication and costly documentation errors",
          "Ensure consistent, high-quality documentation across all teams",
          "Scale knowledge management as your organization grows",
          "Maintain compliance with automated audit trails",
        ]}
      />

      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How Documme Works</h2>
            <p className={styles.sectionSubtitle}>
              Three simple steps to transform your documentation workflow and
              unlock team productivity
            </p>
          </div>
          <ServiceCards services={capabilities} variant="twoColumns" />
        </div>
      </section>

      <section className={styles.integrationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Seamless Enterprise Integrations
            </h2>
            <p className={styles.sectionSubtitle}>
              Documme integrates with 100+ tools your team already uses daily—no
              workflow changes required
            </p>
          </div>
          <div className={styles.integrationsGrid}>
            {integrations.map((integration, index) => (
              <div key={index} className={styles.integrationCard}>
                <h3 className={styles.integrationName}>{integration.name}</h3>
                <span className={styles.integrationCategory}>
                  {integration.category}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.integrationsNote}>
            And 100+ more integrations available. Need a custom integration?
            Contact our team.
          </p>
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Who Uses Metahorizon Documme?
            </h2>
            <p className={styles.sectionSubtitle}>
              Trusted by teams across industries that rely on documentation,
              communication, and collaboration
            </p>
          </div>
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>
                Software Development Teams
              </h3>
              <p className={styles.useCaseDescription}>
                Capture technical decisions, architecture discussions, code
                reviews, and sprint planning automatically. Maintain living
                documentation that evolves with your codebase.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Project Managers</h3>
              <p className={styles.useCaseDescription}>
                Track project updates, stakeholder communications, risk
                assessments, and action items effortlessly. Never miss a
                critical decision or deadline again.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Sales Teams</h3>
              <p className={styles.useCaseDescription}>
                Document client calls, discovery meetings, proposals, and
                follow-ups without manual note-taking. Sync automatically with
                Salesforce and CRM tools.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" x2="20" y1="8" y2="14" />
                  <line x1="23" x2="17" y1="11" y2="11" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>HR Departments</h3>
              <p className={styles.useCaseDescription}>
                Maintain employee records, onboarding processes, policy
                documentation, and training materials. Ensure compliance with
                automated audit trails.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Operations Teams</h3>
              <p className={styles.useCaseDescription}>
                Streamline operational workflows, SOPs, and process
                documentation. Capture institutional knowledge before employees
                leave.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c1 0 2-1 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14c0 1 1 2 2 2Z" />
                  <path d="M21 21c1 0 2-1 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v14c0 1 1 2 2 2Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c1 0 2-1 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2c0 1 1 2 2 2Z" />
                  <path d="M21 7h-2c-1 0-2-1-2-2V3a2 2 0 0 0-2-2h2a2 2 0 0 0 2 2v2c0 1-1 2-2 2Z" />
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Enterprise Organizations</h3>
              <p className={styles.useCaseDescription}>
                Scale knowledge management across departments with
                enterprise-grade security, compliance-ready features, and
                dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trusted by Innovative Teams</h2>
            <p className={styles.sectionSubtitle}>
              See how organizations are transforming their documentation
              workflow with Documme
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                "Documme has revolutionized how we handle documentation. Our
                team saves at least 15 hours per week, and we no longer worry
                about knowledge walking out the door when employees leave."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Sarah Mitchell</div>
                <div className={styles.authorRole}>
                  VP of Engineering, TechCorp Solutions
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                "The AI-powered search is incredible. I can find any decision,
                discussion, or document from months ago in seconds. It's like
                having a perfect memory for our entire organization."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Michael Chen</div>
                <div className={styles.authorRole}>CTO, InnovateDigital</div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>
                "Integration with our existing tools was seamless. Documme
                captures everything from our Slack conversations to Zoom
                meetings without any disruption to our workflow."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Jennifer Rodriguez</div>
                <div className={styles.authorRole}>
                  Director of Operations, GlobalServe Inc
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection} style={{ display: "none" }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <p className={styles.sectionSubtitle}>
              Choose the plan that fits your team's documentation needs. All
              plans include a 7-day free trial.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTier}>Professional</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>999</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.pricingDescription}>
                  For business units and professional teams demanding dependable
                  automation
                </p>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>150 documents per month</li>
                <li>Core integrations (Slack, Teams, Zoom, Google Docs)</li>
                <li>24/7 customer support</li>
                <li>White-glove onboarding & training</li>
                <li>AI-powered search & retrieval</li>
                <li>Basic analytics dashboard</li>
                <li>Up to 25 team members</li>
              </ul>
              <a href="/contact-us" className={styles.pricingButton}>
                Start 7-Day Free Trial
              </a>
              <p className={styles.trialNote}>No credit card required</p>
            </div>

            <div className={`${styles.pricingCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTier}>Growth</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>2,999</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.pricingDescription}>
                  For enterprises seeking scalable documentation automation
                  across multiple functions
                </p>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>500 documents per month</li>
                <li>Advanced integrations (Jira, Salesforce, ServiceNow)</li>
                <li>Concierge onboarding & dedicated training</li>
                <li>Compliance audit trails</li>
                <li>Priority 24/7 support</li>
                <li>Custom governance policies</li>
                <li>Advanced analytics & reporting</li>
                <li>Up to 100 team members</li>
              </ul>
              <a href="/contact-us" className={styles.pricingButton}>
                Start 7-Day Free Trial
              </a>
              <p className={styles.trialNote}>No credit card required</p>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTier}>Enterprise</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>8,999</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.pricingDescription}>
                  For global enterprises managing high-volume, compliance-driven
                  documentation
                </p>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>2,000+ documents per month</li>
                <li>Enterprise integrations (SAP, Oracle, Workday)</li>
                <li>Dedicated account manager</li>
                <li>Tailored governance & compliance</li>
                <li>Custom SLAs & support</li>
                <li>Volume discounts available</li>
                <li>Private VPC or air-gapped deployment</li>
                <li>Unlimited team members</li>
              </ul>
              <a href="/contact-us" className={styles.pricingButton}>
                Contact Sales
              </a>
              <p className={styles.trialNote}>
                Custom deployment & pricing available
              </p>
            </div>
          </div>
          <div className={styles.pricingNote}>
            <p>
              <strong>No contracts</strong> — cancel or scale anytime. Volume
              discounts and custom SLAs available for Enterprise. Need a custom
              plan? <a href="/contact-us">Contact our sales team</a>.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Get answers to common questions about Metahorizon Documme
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                What is Metahorizon Documme?
              </h3>
              <p className={styles.faqAnswer}>
                Metahorizon Documme is an AI-powered documentation and knowledge
                management platform that automatically captures your team's
                conversations, meetings, and workflows. It transforms
                unstructured communications into organized, searchable
                knowledge, helping teams reduce documentation time by up to 70%
                and prevent knowledge loss from employee turnover.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                How does Documme integrate with existing tools?
              </h3>
              <p className={styles.faqAnswer}>
                Documme seamlessly integrates with 100+ popular business tools
                including Jira, Slack, Microsoft Teams, Zoom, GitHub, Google
                Docs, Confluence, Notion, Salesforce, ServiceNow, Workday,
                Oracle ERP, and SAP. Our integrations capture knowledge directly
                from your existing workflows without requiring any changes to
                how your team works.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                Is my data secure with Documme?
              </h3>
              <p className={styles.faqAnswer}>
                Absolutely. Documme provides enterprise-grade security with
                end-to-end encryption, SOC2 and ISO 27001 compliance,
                comprehensive audit trails, and flexible retention policies. We
                offer cloud-hosted, private VPC, and air-gapped deployment
                options to meet your organization's specific security and
                compliance requirements.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                Can I export my documentation?
              </h3>
              <p className={styles.faqAnswer}>
                Yes, absolutely. Documme believes in no vendor lock-in. You can
                export all your documentation at any time in standard formats
                (PDF, Markdown, JSON, CSV). Your knowledge belongs to you, and
                we make it easy to maintain full ownership and portability.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                What types of teams benefit most from Documme?
              </h3>
              <p className={styles.faqAnswer}>
                Documme is ideal for software development teams, project
                managers, sales teams, HR departments, operations teams, and
                enterprise organizations. Any team that relies heavily on
                documentation, communication, and collaborative workflows will
                see significant productivity gains and reduced knowledge loss.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>
                Is there a free trial available?
              </h3>
              <p className={styles.faqAnswer}>
                Yes, Documme offers a 7-day free trial with no credit card
                required. You can test all features, integrate with your tools,
                and see how Documme transforms your documentation workflow
                before committing to a subscription. Contact our sales team for
                extended enterprise trials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Documentation Workflow?"
        ctaText="Start Your 7-Day Free Trial"
        ctaHref="/contact-us"
        description="See how Metahorizon Documme can revolutionize your team's knowledge management. No credit card required. Get started in minutes."
      />
    </div>
  );
}
