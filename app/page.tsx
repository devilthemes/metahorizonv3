import type { Metadata } from "next";
import Slider from "@/components/common/Slider";
import StructuredData from "@/components/common/SEO/StructuredData";
import ValueProps from "@/components/home/ValueProps";
import ServicesOverview from "@/components/home/ServicesOverview";
import Stats from "@/components/common/Stats/Stats";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import FAQ from "@/components/common/FAQ/FAQ";
import BlogInsights from "@/components/common/BlogInsights/BlogInsights";
import CTA from "@/components/common/CTA/CTA";

export const metadata: Metadata = {
  title:
    "Metahorizon | IT Services, Identity Management & Professional Training",
  description:
    "Metahorizon delivers managed IT services, enterprise identity & access management (IAM), AI-powered documentation, and professional development training. Transform your business today.",
  keywords: [
    "IT services",
    "identity access management",
    "IAM solutions",
    "professional training",
    "managed IT services",
    "AI documentation",
    "cybersecurity",
    "Zero Trust security",
    "cloud services",
    "DevOps",
    "SOC monitoring",
    "penetration testing",
    "Metahorizon",
  ],
  authors: [{ name: "Metahorizon" }],
  openGraph: {
    title: "Metahorizon | IT Services & Professional Training",
    description:
      "Enterprise IT solutions, IAM, AI-powered documentation, and professional development training.",
    url: "https://metahorizon.com",
    siteName: "Metahorizon",
    images: [
      {
        url: "/assets/img/meta-horizon-logo.png",
        width: 1200,
        height: 630,
        alt: "Metahorizon - Innovation and Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metahorizon | IT Services & Professional Training",
    description:
      "Enterprise IT solutions, IAM, AI-powered documentation, and professional development.",
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
    canonical: "https://metahorizon.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metahorizon",
  url: "https://metahorizon.com",
  logo: "https://metahorizon.com/assets/img/meta-horizon-logo.png",
  description:
    "Enterprise-grade Identity Access Management, IT services, and professional training provider with Zero Trust security expertise.",
  sameAs: [
    "https://www.facebook.com/metahorizon",
    "https://www.linkedin.com/company/metahorizon",
    "https://www.youtube.com/@metahorizon",
    "https://twitter.com/metahorizon",
  ],
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
    contactType: "Customer Service",
    email: "contact@metahorizon.com",
  },
};

const homeFaqs = [
  {
    question: "What services does Metahorizon offer?",
    answer:
      "Metahorizon offers comprehensive IT services including Identity & Access Management (IAM), managed IT services, AI-powered documentation solutions, cybersecurity (SOC monitoring, penetration testing), cloud & DevOps services, and professional development training programs.",
  },
  {
    question: "What is Identity and Access Management (IAM)?",
    answer:
      "Identity and Access Management (IAM) is a framework of policies and technologies that ensures the right people have the appropriate access to technology resources. IAM systems help organizations manage digital identities and control user access to critical information securely.",
  },
  {
    question: "Do you provide 24/7 IT support?",
    answer:
      "Yes, we provide 24/7 SOC monitoring, managed IT support, and incident response services to ensure your systems are protected and operational around the clock.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including Banking & Financial Institutions, Healthcare, Insurance, Retail & E-Commerce, Telecom, Manufacturing, and Technology companies. Our solutions are tailored to meet industry-specific compliance and security requirements.",
  },
  {
    question: "What professional training programs do you offer?",
    answer:
      "Our Metahorizon Academy offers professional development courses, leadership skills tracks, degree and diploma programs, global technical certifications, and skill enhancement programs in areas like cybersecurity, cloud computing, DevOps, and AI.",
  },
];

export default function Home() {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* H1 for SEO - visually hidden but accessible */}
      <h1 className="sr-only">
        Metahorizon - IT Services, Identity Management & Professional Training
      </h1>
      <div className="homeTitle">
        Metahorizon Global Innovation & Capability Hub
      </div>
      {/* Hero Slider */}
      <Slider />

      {/* Value Propositions */}
      <ValueProps />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Stats Section */}
      <Stats
        title="Trusted by Businesses Worldwide"
        stats={[
          { value: "10+", label: "Years of Experience" },
          { value: "500+", label: "Projects Delivered" },
          { value: "200+", label: "Happy Clients" },
          { value: "50+", label: "Expert Professionals" },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        title="Trusted by Industry Leaders"
        subtitle="See what our clients say about our enterprise solutions and services"
      />

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our services"
        faqs={homeFaqs}
      />

      {/* Latest Blog Posts */}
      <BlogInsights
        title="Latest Insights from Our Team"
        subtitle="Stay informed with expert insights on cybersecurity, IAM, AI documentation, and enterprise technology trends."
        limit={2}
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        ctaText="Get Started Today"
        ctaHref="/contact-us"
        description="Enterprise-grade technology solutions tailored to your business needs. Let's build something great together."
      />
    </>
  );
}
