import type { Metadata } from 'next';
import Image from 'next/image';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import UseCases from '@/components/common/UseCases/UseCases';
import Testimonials from '@/components/common/Testimonials/Testimonials';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import FAQ from '@/components/common/FAQ/FAQ';
import CTA from '@/components/common/CTA/CTA';
import WhyMetaHorizon from '@/components/common/WhyMetaHorizon/WhyMetaHorizon';
import SEO from '@/components/common/SEO/SEO';
import styles from './PingIdentity.module.scss';

export const metadata: Metadata = {
  title: 'Ping Identity Implementation & Management - Metahorizon',
  description: 'Expert Ping Identity implementation services including PingOne, PingFederate, PingAccess, PingID, and PingCentral. Secure identity platform with AI-powered intelligence.',
  keywords: [
    'Ping Identity',
    'PingOne',
    'PingFederate',
    'PingAccess',
    'PingID',
    'PingCentral',
    'Identity Platform',
    'SSO',
    'MFA',
    'Zero Trust',
    'Identity Governance',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Ping Identity Implementation & Management - Metahorizon',
    description: 'Expert Ping Identity implementation services across the entire Ping platform.',
    url: 'https://metahorizon.com/partners/pingidentity',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Ping Identity Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ping Identity Services - Metahorizon',
    description: 'Expert Ping Identity implementation and management services.',
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
    canonical: 'https://metahorizon.com/partners/pingidentity',
  },
};

const pingCapabilities = [
  {
    number: '01',
    title: 'PingOne Advanced Identity Cloud',
    description: 'Cloud-native identity platform with SSO, MFA, and lifecycle management. Deploy anywhere with multi-tenant, dedicated-tenant, or self-managed options. Features 6,500+ orchestrated capabilities across 350+ connectors.',
    iconKey: 'cloud',
  },
  {
    number: '02',
    title: 'PingFederate',
    description: 'Enterprise SSO federation with SAML, OAuth 2.0, and OpenID Connect. Connect cloud and on-premises applications seamlessly with standards-based identity federation and access management.',
    iconKey: 'shield',
  },
  {
    number: '03',
    title: 'PingAccess',
    description: 'Centralized access management and API security. Protect resources with fine-grained authorization policies, OAuth token management, and zero-trust access controls for apps and APIs.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'PingID',
    description: 'Multi-factor authentication with mobile push, biometrics, and offline codes. Passwordless authentication with FIDO2 support, adaptive MFA, and risk-based authentication for enhanced security.',
    iconKey: 'support',
  },
  {
    number: '05',
    title: 'PingCentral',
    description: 'Centralized policy and configuration management. Govern identity across the entire Ping platform from one console with unified visibility, configuration management, and policy enforcement.',
    iconKey: 'brain',
  },
  {
    number: '06',
    title: 'PingIdentity Governance',
    description: 'Automated identity governance with access requests, certification reviews, and compliance reporting. Enforce least-privilege access with Segregation of Duties (SoD) and automated workflows.',
    iconKey: 'career',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Flexible Deployment',
    description: 'Deploy anywhere – Multi-tenant SaaS (fastest time to value), Dedicated-tenant SaaS (scalable), Self-managed (highest control), or FEDRAMP High compliant for government.',
    iconKey: 'cloud',
  },
  {
    number: '02',
    title: 'Helix AI-Powered Security',
    description: 'Built-in AI engine powers intelligent identity services with advanced threat detection, fraud prevention, and risk analysis. Spot fakes and block threats without slowing real users.',
    iconKey: 'brain',
  },
  {
    number: '03',
    title: 'No-Code Orchestration',
    description: 'Drag-and-drop interface for designing identity journeys. 6,500+ orchestrated capabilities across 350+ connectors. Build custom workflows without coding.',
    iconKey: 'cpu',
  },
  {
    number: '04',
    title: 'Decentralized Identity',
    description: 'Reusable verified credentials for improved privacy, convenience, and security. Stay ahead with next-generation identity technologies.',
    iconKey: 'shield',
  },
  {
    number: '05',
    title: 'Industry Recognition',
    description: '9 years running as Gartner Magic Quadrant Leader for Access Management. Leader in Forrester Wave CIAM and KuppingerCole Leadership Compass.',
    iconKey: 'target',
  },
  {
    number: '06',
    title: 'Proven Results',
    description: '50% reduction in support calls, 52% reduction in incomplete applications, 45% efficiency improvement. Scalable to 45M+ users with zero downtime.',
    iconKey: 'support',
  },
];

const useCases = [
  {
    title: 'Government',
    description: 'Secure digital services for citizens with 50% reduction in support calls and 52% reduction in incomplete applications.',
    iconKey: 'shield',
  },
  {
    title: 'Financial Services',
    description: 'Fraud prevention and scalable security with projected 50% growth and 20% cost savings through intelligent identity.',
    iconKey: 'target',
  },
  {
    title: 'Healthcare',
    description: 'Data-sharing and consent technologies with improved efficiency, personalization, and quality of care.',
    iconKey: 'users',
  },
  {
    title: 'Retail & Telco',
    description: 'Scalable services across devices with 45M+ supported users and zero downtime on launch day.',
    iconKey: 'cloud',
  },
];

const faqs = [
  {
    question: 'What is Ping Identity?',
    answer: 'Ping Identity is a leading identity security platform that provides SSO, MFA, lifecycle management, and governance solutions. The PingOne cloud platform and enterprise products help organizations secure workforce, customer, and partner identities.',
  },
  {
    question: 'What is the difference between PingOne and PingFederate?',
    answer: 'PingOne is a cloud-native identity platform with SaaS deployment options. PingFederate is an enterprise SSO federation product that can be deployed on-premises or in the cloud. Both can work together in a hybrid identity architecture.',
  },
  {
    question: 'Does Ping Identity support passwordless authentication?',
    answer: 'Yes, PingID supports passwordless authentication with mobile push notifications, biometrics (fingerprint, face recognition), and offline codes. You can also integrate with FIDO2 security keys for phishing-resistant MFA.',
  },
  {
    question: 'What deployment options does Ping Identity offer?',
    answer: 'Ping Identity offers four deployment options: Multi-Tenant SaaS (fastest time to value), Dedicated-Tenant SaaS (scalable and flexible), Self-Managed Software (highest level of control), and FEDRAMP High compliant for government.',
  },
  {
    question: 'How does Ping Helix AI enhance identity security?',
    answer: 'Ping Helix is the AI engine that powers intelligent identity services across the platform. It provides advanced threat detection, fraud prevention, risk analysis, and automated responses to suspicious activities in real-time.',
  },
];

export default function PingIdentityPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Ping Identity Implementation & Management - Metahorizon"
        description="Expert Ping Identity implementation services including PingOne, PingFederate, PingAccess, PingID, and PingCentral."
        canonical="/partners/pingidentity"
      />

      <ServicesHero
        title={
          <div className={styles.heroWithTitle}>
            <div className={styles.pingLogo}>
              <Image
                src="/assets/img/services/pingidentity.png"
                alt="Ping Identity"
                width={200}
                height={60}
                priority
              />
            </div>
            <span>Ping Identity Services</span>
          </div>
        }
        subtitle="Intelligent Identity Platform"
        description="Verify identity at every step, automate lifecycle management, and provide secure access with Ping Identity's AI-powered platform. Metahorizon helps you deploy and optimize Ping solutions for workforce, customer, and partner identities."
        noBackground={true}
      />

      <ServiceDetail
        title="Ping Identity Implementation Services"
        description="The Ping Identity Platform offers unmatched flexibility, resilience, and security to meet your most demanding identity challenges."
        overview="Metahorizon helps organizations design, deploy, and optimize Ping Identity solutions across the entire platform. From PingOne Advanced Identity Cloud to PingFederate SSO, PingAccess authorization, PingID MFA, and PingCentral governance, we ensure your identity infrastructure is secure, scalable, and user-friendly. With 9 years as a Gartner Magic Quadrant Leader, Ping Identity delivers proven results."
        features={[
          {
            title: 'Identify & Verify',
            description: 'Biometrics, credentials, and real-time identity verification with zero-knowledge privacy and decentralized identity.',
          },
          {
            title: 'Manage Lifecycle',
            description: 'Automated onboarding, offboarding, and relationship-aware identity controls with HR system integrations.',
          },
          {
            title: 'Secure Access',
            description: 'SSO, MFA, passwordless, and JIT privileged access with adaptive authentication and FIDO2 support.',
          },
          {
            title: 'Govern & Protect',
            description: 'Automated compliance, least-privilege access, Helix AI-driven threat detection, and fraud prevention.',
          },
        ]}
        benefits={[
          'Flexible deployment: SaaS, dedicated-tenant, self-managed, or FEDRAMP High',
          'Helix AI engine for intelligent threat detection and fraud prevention',
          'No-code orchestration with 6,500+ capabilities across 350+ connectors',
          'Decentralized identity with reusable verified credentials',
          '9 years as Gartner Magic Quadrant Leader for Access Management',
          'Proven results: 50% reduction in support calls, 45% efficiency improvement',
        ]}
        noBackground={true}
      />

      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ping Identity Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive implementation and optimization across the entire Ping platform
            </p>
          </div>
          <ServiceCards services={pingCapabilities} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Ping Identity?</h2>
            <p className={styles.sectionSubtitle}>
              Discover the advantages of the Ping Identity Platform
            </p>
          </div>
          <ServiceCards services={benefits} />
        </div>
      </section>

      <UseCases
        title="Use Cases"
        subtitle="Identity solutions for every segment of your organization"
        useCases={useCases}
      />

      <WhyMetaHorizon />

      <Testimonials />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on cybersecurity, IAM, and enterprise technology trends."
        viewAllHref="/blog"
      />

      <FAQ
        title="Frequently Asked Questions About Ping Identity"
        subtitle="Get answers to common questions about Ping Identity Platform"
        faqs={faqs}
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
