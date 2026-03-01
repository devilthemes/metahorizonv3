import type { Metadata } from "next";
import Image from "next/image";
import DemoForm from "@/components/common/DemoForm/DemoForm";
import FAQ from "@/components/common/FAQ/FAQ";
import BlogInsights from "@/components/common/BlogInsights/BlogInsights";
import CTA from "@/components/common/CTA/CTA";
import SEO from "@/components/common/SEO/SEO";
import StructuredData from "@/components/common/SEO/StructuredData";
import styles from "./Demo.module.scss";

export const metadata: Metadata = {
  title: "Request a Free 1-on-1 Demo | Metahorizon",
  description:
    "Schedule a personalized demo with Metahorizon experts. Explore how our IAM, cybersecurity, and technology solutions can address your specific business needs.",
  keywords: [
    "Request Demo",
    "Free Demo",
    "1-on-1 Demo",
    "Product Demo",
    "IAM Demo",
    "Cybersecurity Demo",
    "Metahorizon Demo",
    "Schedule Demo",
    "Book Demo",
    "Technology Solutions Demo",
    "Enterprise Software Demo",
    "Metahorizon",
  ],
  authors: [{ name: "Metahorizon" }],
  openGraph: {
    title: "Request a Free 1-on-1 Demo | Metahorizon",
    description:
      "Schedule a personalized demo with Metahorizon experts to explore our IAM and cybersecurity solutions.",
    url: "https://metahorizon.com/request-a-free-1on1-demo/",
    siteName: "Metahorizon",
    images: [
      {
        url: "/assets/img/meta-horizon-logo.png",
        width: 1200,
        height: 630,
        alt: "Metahorizon Demo Request",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Free 1-on-1 Demo | Metahorizon",
    description: "Schedule a personalized demo with Metahorizon experts.",
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
    canonical: "https://metahorizon.com/request-a-free-1on1-demo/",
  },
};

const faqs = [
  {
    question: "What happens during the demo?",
    answer:
      "During your personalized demo, our experts will deep dive into your specific use cases, demonstrate relevant Metahorizon solutions, and show how our IAM, cybersecurity, and technology services can address your business challenges. You'll have the opportunity to ask questions and see live examples.",
  },
  {
    question: "How long is the demo session?",
    answer:
      "Demo sessions typically last 30-60 minutes, depending on your specific requirements and the depth of discussion. We can schedule extended sessions for complex requirements or multiple stakeholders.",
  },
  {
    question: "Who will conduct the demo?",
    answer:
      "Your demo will be conducted by experienced Metahorizon consultants who specialize in your areas of interest. Our team includes IAM experts, cybersecurity specialists, and technology consultants with real-world implementation experience.",
  },
  {
    question: "Is there any cost or obligation?",
    answer:
      "No, the demo is completely free with no obligation. It's an opportunity for you to learn about our solutions and determine if Metahorizon is the right fit for your organization.",
  },
  {
    question: "Can I schedule a demo for my team?",
    answer:
      "Absolutely! We encourage team demos so all stakeholders can participate in the discussion. Please mention the number of attendees and their roles when requesting your demo, and we'll ensure the session is tailored accordingly.",
  },
  {
    question: "What if I need a demo outside regular business hours?",
    answer:
      "We offer flexible scheduling to accommodate different time zones and schedules. Please mention your preferred time in the demo request form, and we'll work with you to find a suitable time.",
  },
];

export default function DemoPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Request a Free 1-on-1 Demo | Metahorizon"
        description="Schedule a personalized demo with Metahorizon experts. Explore how our IAM, cybersecurity, and technology solutions can address your specific business needs."
        canonical="/request-a-free-1on1-demo/"
      />

      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Request a free 1on1 demo</h1>
          <p className={styles.heroDescription}>
            Let's deep dive into your specific use cases and explore how
            Metahorizon can be helpful.
          </p>
        </div>
      </section>

      <section className={styles.demoSection}>
        <div className={styles.container}>
          <div className={styles.demoGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/img/support-1.jpg"
                  alt="MetaHorizon expert conducting a personalized demo session"
                  width={600}
                  height={600}
                  className={styles.demoImage}
                  priority
                />
              </div>
            </div>

            <div className={styles.formColumn}>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our demo sessions"
        faqs={faqs}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on cybersecurity, IAM, and enterprise technology trends."
        viewAllHref="/blog"
      />

      <CTA
        title="Let's Build Secure Systems Together"
        ctaText="Contact Us Today"
        ctaHref="/contact-us"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />
    </div>
  );
}
