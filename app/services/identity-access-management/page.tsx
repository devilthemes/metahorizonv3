import type { Metadata } from 'next';
import ServicesHero from "@/components/common/ServicesHero/ServicesHero";
import ServiceDetail from "@/components/common/ServiceDetail/ServiceDetail";
import CTA from "@/components/common/CTA/CTA";
import SEO from "@/components/common/SEO/SEO";
import StructuredData from "@/components/common/SEO/StructuredData";
import ServiceCards from "@/components/common/ServiceCards/ServiceCards";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import FAQ from "@/components/common/FAQ/FAQ";
import IAMPlatforms from "@/components/common/IAMPlatforms/IAMPlatforms";
import WhyMetaHorizon from "@/components/common/WhyMetaHorizon/WhyMetaHorizon";
import styles from './IdentityAccessManagement.module.scss';

export const metadata: Metadata = {
  title: 'Identity & Access Management (IAM) Services | Zero Trust Security - Metahorizon',
  description: 'Enterprise Identity & Access Management services with Zero Trust architecture, SSO, MFA, access governance, and privileged access management. 24/7 IAM support and consulting.',
  keywords: [
    'Identity Access Management',
    'IAM services',
    'Zero Trust security',
    'Single Sign-On SSO',
    'Multi-Factor Authentication MFA',
    'access governance',
    'privileged access management',
    'PAM solutions',
    'identity governance',
    'IAM consulting',
    'Okta implementation',
    'PingIdentity',
    'CyberArk',
    'SailPoint',
    'Microsoft Entra ID',
    'Azure AD',
    'IAM integration',
    'access management solutions',
    'enterprise IAM',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Identity & Access Management (IAM) Services | Zero Trust Security - Metahorizon',
    description: 'Enterprise IAM services with Zero Trust architecture, SSO, MFA, and privileged access management. Secure your digital assets today.',
    url: 'https://metahorizon.com/services/identity-access-management',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon IAM Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identity & Access Management Services | Metahorizon',
    description: 'Enterprise IAM services with Zero Trust architecture, SSO, MFA, and privileged access management.',
    images: ['/assets/img/meta-horizon-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://metahorizon.com/services/identity-access-management',
  },
};

const benefits = [
  {
    number: '01',
    title: 'Easy Budgeting with Flat Rates',
    description: 'Predictable costs with flat-rate pricing simplify budgeting and financial planning for IAM services.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Free Up Your Internal Resources',
    description: 'Free internal IT resources to focus on core strategic work, not routine IAM tasks.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Save Instead of Hiring More',
    description: 'Reduce hiring costs by leveraging expert IAM support instead of new full-time employees.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: '24/7 Support',
    description: '24×7 support ensures continuous availability, rapid issue resolution, and uninterrupted IAM operations.',
    iconKey: 'event',
  },
  {
    number: '05',
    title: 'Effortless Security',
    description: 'Enhance security and compliance by leveraging expert IAM management, reducing risk and meeting regulatory requirements.',
    iconKey: 'career',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'All-in-One Security Suite',
    description: 'IAM, DevOps & Multi-Channel Marketing—all faster, engages smarter, and reach customers where they are.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'AI-Powered Automation',
    description: 'Let AI do the heavy lifting—automate follow-ups, personalize outreach, and never miss a lead.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Affordable & Flexible',
    description: 'A new-age platform that\'s cost-effective and adaptable—built to fit your needs, not the other way around.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Loved by Users',
    description: 'MetaHorizon redefines your experience, leaving behind complex, outdated, and costly tools — a solution that streamlines, automates, and amplifies.',
    iconKey: 'sparkles',
  },
];

const faqs = [
  {
    question: 'What is Identity and Access Management (IAM)?',
    answer: 'Identity and Access Management (IAM) is a framework of policies and technologies that ensures the right people have the appropriate access to technology resources. IAM systems help organizations manage digital identities and control user access to critical information.',
  },
  {
    question: 'What is Zero Trust Security?',
    answer: 'Zero Trust is a security model that requires strict identity verification for every person and device trying to access resources on a network, regardless of whether they are sitting within or outside of the network perimeter.',
  },
  {
    question: 'What IAM platforms do you support?',
    answer: 'We support all major IAM platforms including Okta, PingIdentity, CyberArk, SailPoint, Microsoft Entra ID (Azure AD), ForgeRock, and custom IAM solutions. Our team is certified across multiple vendors.',
  },
  {
    question: 'Do you provide 24/7 IAM support?',
    answer: 'Yes, we offer 24/7 IAM support and monitoring services. Our team is available around the clock to handle access issues, security incidents, and system maintenance to ensure uninterrupted IAM operations.',
  },
  {
    question: 'How long does IAM implementation take?',
    answer: 'IAM implementation timelines vary based on complexity and organization size. Simple SSO implementations can take 2-4 weeks, while comprehensive IAM programs with multiple integrations may take 3-6 months. We provide detailed project timelines during consultation.',
  },
  {
    question: 'What compliance standards do you support?',
    answer: 'We support multiple compliance frameworks including SOC 2, HIPAA, PCI DSS, GDPR, CCPA, and ISO 27001. Our IAM solutions include audit trails, access reviews, and reporting to help you meet regulatory requirements.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Identity & Access Management Services',
  description: 'Enterprise Identity & Access Management services with Zero Trust architecture, SSO, MFA, privileged access management, and 24/7 support.',
  provider: {
    '@type': 'Organization',
    name: 'MetaHorizon',
    url: 'https://metahorizon.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IAM Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zero Trust Architecture',
          description: 'Implement Zero Trust security model for your organization',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Single Sign-On (SSO)',
          description: 'Streamlined access to all applications with one credential',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Factor Authentication',
          description: 'Enhanced security with multiple verification methods',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Privileged Access Management',
          description: 'Secure and monitor privileged accounts',
        },
      },
    ],
  },
};

export default function IdentityAccessManagementPage() {
  return (
    <>
      <SEO
        title="Identity & Access Management (IAM) Services | Zero Trust Security - MetaHorizon"
        description="Enterprise IAM services with Zero Trust architecture, SSO, MFA, privileged access management & 24/7 support. Secure your digital assets."
        canonical="/services/identity-access-management"
      />
      
      <StructuredData
        type="LocalBusiness"
        name="MetaHorizon IAM Services"
        description="Enterprise Identity & Access Management services with Zero Trust security principles."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      
      <div className={styles.pageContainer}>
        <ServicesHero
          title="Identity & Access Management"
          subtitle="Zero Trust Security Solutions"
          description="Our Identity & Access Management Service keeps your organization safe. It controls who can access apps and info, making security simple. Only authorized folks can enter specific data, protecting sensitive info and making work smoother and safer."
          noBackground={true}
        />

        <ServiceDetail
          title="Identity & Access Management Services"
          description="Comprehensive IAM solutions to secure your digital assets and streamline access management."
          overview="Our IAM experts help optimize your program, enhance efficiency, increase uptime, and improve user experience, providing dedicated engineering support for ongoing management, troubleshooting, and software maintenance. We implement enterprise-grade IAM solutions that enforce Zero Trust security models, providing granular access control while maintaining user productivity."
          features={[
            {
              title: "Single Sign-On (SSO)",
              description: "Streamlined access to all applications with one set of credentials, improving user experience and security.",
            },
            {
              title: "Multi-Factor Authentication (MFA)",
              description: "Enhanced security with multiple verification methods including biometrics, tokens, and mobile authenticators.",
            },
            {
              title: "Access Governance",
              description: "Comprehensive access policies, certification campaigns, and compliance reporting for regulatory requirements.",
            },
            {
              title: "Privileged Access Management (PAM)",
              description: "Secure and monitor privileged accounts with session recording, just-in-time access, and credential vaulting.",
            },
          ]}
          benefits={[
            "Enhanced security posture with Zero Trust architecture",
            "Improved user experience with seamless access",
            "Reduced helpdesk costs from password resets",
            "Compliance with SOC 2, HIPAA, PCI DSS, GDPR, ISO 27001",
            "Granular visibility into access patterns and anomalies",
            "Automated user provisioning and deprovisioning",
            "Integration with existing IT infrastructure",
          ]}
          noBackground={true}
        />

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How You Benefit</h2>
              <p className={styles.sectionSubtitle}>
                Discover the advantages of partnering with MetaHorizon for your IAM needs
              </p>
            </div>
            <ServiceCards services={benefits} />
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why MetaHorizon?</h2>
              <p className={styles.sectionSubtitle}>
                Because your IAM should do more than just store contacts—it should drive growth, automate outreach, and never let a lead slip away.
              </p>
            </div>
            <ServiceCards services={capabilities} />
          </div>
        </section>

        <WhyMetaHorizon />

        <Testimonials />

        <IAMPlatforms
          title="IAM Platforms We Support"
          subtitle="Expert implementation and management across leading identity platforms"
        />

        <FAQ
          title="Frequently Asked Questions About IAM"
          subtitle="Get answers to common questions about Identity & Access Management"
          faqs={faqs}
        />

        <CTA
          title="Let's Build Secure Systems Together"
          ctaText="Contact Us Today"
          ctaHref="/contact-us"
          description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
        />
      </div>
    </>
  );
}
