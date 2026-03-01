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
import OktaCapabilities from '@/components/common/OktaCapabilities/OktaCapabilities';
import WhyMetaHorizon from '@/components/common/WhyMetaHorizon/WhyMetaHorizon';
import SEO from '@/components/common/SEO/SEO';
import styles from './Okta.module.scss';

export const metadata: Metadata = {
  title: 'Okta Workforce Identity Implementation & Management - Metahorizon',
  description: 'Expert Okta implementation services including SSO, MFA, lifecycle management, API access management, and identity governance. Secure access for your entire organization.',
  keywords: [
    'Okta',
    'Okta Implementation',
    'Workforce Identity',
    'SSO',
    'Single Sign-On',
    'Multi-Factor Authentication',
    'MFA',
    'Identity Lifecycle Management',
    'API Access Management',
    'Okta Identity Governance',
    'Universal Directory',
    'Cloud IAM',
    'Zero Trust',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Okta Workforce Identity Implementation & Management - Metahorizon',
    description: 'Expert Okta implementation services including SSO, MFA, lifecycle management, and identity governance.',
    url: 'https://metahorizon.com/partners/okta',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Okta Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Okta Workforce Identity - Metahorizon',
    description: 'Expert Okta implementation and management services.',
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
    canonical: 'https://metahorizon.com/partners/okta',
  },
};

const benefits = [
  {
    number: '01',
    title: 'Centralized Access Control',
    description: 'Single pane of glass for managing access across all applications.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Stronger Authentication',
    description: 'Adaptive MFA that responds to risk signals and user context.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Automated Identity Workflows',
    description: 'Eliminate manual provisioning with automated lifecycle management.',
    iconKey: 'cpu',
  },
  {
    number: '04',
    title: 'Reduced Helpdesk Overhead',
    description: 'Self-service password reset and access requests reduce IT tickets.',
    iconKey: 'target',
  },
  {
    number: '05',
    title: 'Improved Compliance Posture',
    description: 'Automated access reviews and comprehensive audit trails.',
    iconKey: 'brain',
  },
  {
    number: '06',
    title: 'Seamless User Experience',
    description: 'Frictionless access that employees and contractors love.',
    iconKey: 'sparkles',
  },
];

const useCases = [
  {
    title: 'Cloud-First SSO',
    description: 'Enable secure, seamless access to all cloud applications with a single login.',
    iconKey: 'trendingUp',
  },
  {
    title: 'Remote Workforce Access',
    description: 'Secure access for employees and contractors from anywhere, on any device.',
    iconKey: 'users',
  },
  {
    title: 'Customer Authentication',
    description: 'Extend identity security to customer-facing applications and portals.',
    iconKey: 'package',
  },
  {
    title: 'Hybrid Workforce Security',
    description: 'Unified security across on-premises and cloud environments.',
    iconKey: 'shieldCheck',
  },
  {
    title: 'Automated Onboarding',
    description: 'Streamline new hire setup with automated provisioning and access grants.',
    iconKey: 'barChart3',
  },
  {
    title: 'Zero Trust Implementation',
    description: 'Implement Zero Trust security with context-aware access policies.',
    iconKey: 'trendingUp',
  },
];

const faqs = [
  {
    question: 'What is Okta Workforce Identity?',
    answer: 'Okta Workforce Identity is a cloud-based identity and access management solution that provides secure access to applications for employees, contractors, and partners. It includes SSO, MFA, lifecycle management, and universal directory capabilities.',
  },
  {
    question: 'How long does an Okta implementation take?',
    answer: 'Implementation timelines vary based on complexity. A basic SSO setup can take 2-4 weeks, while comprehensive deployments with lifecycle management and governance typically take 8-12 weeks.',
  },
  {
    question: 'Can Okta integrate with our existing applications?',
    answer: 'Yes, Okta supports over 7,000 pre-integrated applications and provides flexible APIs for custom integrations. We can integrate with your existing on-premises and cloud applications.',
  },
  {
    question: 'What is the difference between Okta WIC and Okta CIAM?',
    answer: 'Okta Workforce Identity Cloud (WIC) secures employee and contractor access to internal applications. Okta Customer Identity Cloud (CIAM) manages customer identities for external-facing applications and experiences.',
  },
  {
    question: 'How does Okta support Zero Trust security?',
    answer: 'Okta enables Zero Trust through adaptive MFA, context-aware policies, device trust, and continuous verification. Every access request is evaluated based on user, device, location, and risk signals.',
  },
];

export default function OktaPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Okta Workforce Identity Implementation & Management - Metahorizon"
        description="Expert Okta implementation services including SSO, MFA, lifecycle management, API access management, and identity governance."
        canonical="/partners/okta"
      />

      <ServicesHero
        title={
          <div className={styles.heroWithTitle}>
            <div className={styles.oktaLogo}>
              <Image
                src="/assets/img/services/okta.jpg"
                alt="Okta"
                width={180}
                height={60}
                priority
              />
            </div>
            <span>Okta Workforce Identity</span>
          </div>
        }
        subtitle="Cloud-First Identity Management"
        description="Okta simplifies identity for modern businesses. We help you implement Okta to deliver seamless SSO, intelligent MFA, automated provisioning, and secure access across your entire organization."
        noBackground={true}
      />

      <ServiceDetail
        title="Okta Workforce Identity Services"
        description="As a leader in cloud IAM, Okta enables secure access for employees, contractors, and customers — from anywhere, on any device. Metahorizon helps organizations design, configure, and optimize Okta environments so they scale securely and deliver exceptional user experiences."
        overview="Our Okta experts help you implement and optimize Okta Workforce Identity to provide secure, seamless access to all your applications. From initial setup to ongoing management, we ensure your Okta environment is configured for security, scalability, and exceptional user experience."
        features={[
          {
            title: 'Single Sign-On (SSO)',
            description: 'One login for all business applications with SAML, OIDC, and OAuth integrations.',
          },
          {
            title: 'Multi-Factor Authentication',
            description: 'Adaptive MFA with push notifications, biometrics, and risk-based authentication.',
          },
          {
            title: 'Lifecycle Management',
            description: 'Automated onboarding, role changes, and offboarding with HR system integrations.',
          },
          {
            title: 'Identity Governance',
            description: 'Access requests, reviews, and compliance with automated workflows.',
          },
        ]}
        benefits={[
          'Centralized access control across all applications',
          'Stronger security with adaptive authentication',
          'Automated identity workflows and provisioning',
          'Reduced helpdesk overhead with self-service',
          'Improved compliance with audit trails',
          'Seamless user experience for employees',
        ]}
        noBackground={true}
      />

      <OktaCapabilities />

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Okta With Us?</h2>
            <p className={styles.sectionSubtitle}>
              Discover the advantages of Okta Workforce Identity
            </p>
          </div>
          <ServiceCards services={benefits} />
        </div>
      </section>

      <UseCases
        title="Use Cases"
        subtitle="Real-world scenarios where Okta Workforce Identity makes the difference"
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
        title="Frequently Asked Questions About Okta"
        subtitle="Get answers to common questions about Okta Workforce Identity"
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
