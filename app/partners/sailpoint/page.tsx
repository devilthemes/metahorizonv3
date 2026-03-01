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
import styles from './SailPoint.module.scss';

export const metadata: Metadata = {
  title: 'SailPoint Identity Security Implementation & Management - Metahorizon',
  description: 'Expert SailPoint implementation services including Identity Security Cloud, IdentityIQ, and IdentityNow. AI-powered identity governance, access management, and compliance automation.',
  keywords: [
    'SailPoint',
    'Identity Security',
    'Identity Governance',
    'IdentityIQ',
    'IdentityNow',
    'Identity Security Cloud',
    'IGA',
    'Access Management',
    'Compliance Automation',
    'Zero Trust',
    'AI-Powered Identity',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'SailPoint Identity Security Implementation & Management - Metahorizon',
    description: 'Expert SailPoint implementation services across the entire identity security platform.',
    url: 'https://metahorizon.com/partners/sailpoint',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon SailPoint Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SailPoint Identity Security - Metahorizon',
    description: 'Expert SailPoint implementation and management services.',
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
    canonical: 'https://metahorizon.com/partners/sailpoint',
  },
};

const sailpointCapabilities = [
  {
    number: '01',
    title: 'Identity Security Cloud',
    description: 'Intelligent and unified identity security platform with AI-powered governance. Cloud-native architecture with real-time risk assessment, automated access reviews, and seamless integrations across your entire IT ecosystem.',
    iconKey: 'cloud',
  },
  {
    number: '02',
    title: 'IdentityIQ',
    description: 'Enterprise identity governance and administration (IGA) software. Comprehensive lifecycle management, access certifications, policy enforcement, and Separation of Duties (SoD) controls for complex enterprise environments.',
    iconKey: 'shield',
  },
  {
    number: '03',
    title: 'IdentityNow',
    description: 'Cloud-first identity governance with fast deployment and minimal maintenance. SaaS-based IGA with automated provisioning, cloud access certifications, and pre-built connectors for rapid time-to-value.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Access Risk Management',
    description: 'Continuous risk monitoring and adaptive access controls. Detect toxic access combinations, enforce least privilege, and automatically remediate access risks before they become security incidents.',
    iconKey: 'lock',
  },
  {
    number: '05',
    title: 'Machine Identity Security',
    description: 'Secure non-human identities including service accounts, APIs, and AI agents. Gain visibility and control over machine identities that increasingly power modern enterprises.',
    iconKey: 'cpu',
  },
  {
    number: '06',
    title: 'Data Access Security',
    description: 'Protect sensitive data with intelligent access governance. Monitor and control who has access to what data across cloud and on-premises systems with automated policy enforcement.',
    iconKey: 'database',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Unified Identity Intelligence',
    description: 'Single platform for all identity types—human, machine, and AI. Real-time visibility into access patterns, entitlements, and risk across your entire enterprise.',
    iconKey: 'brain',
  },
  {
    number: '02',
    title: 'AI-Powered Automation',
    description: 'Machine learning-driven insights for access recommendations, anomaly detection, and intelligent certification campaigns. Reduce manual effort by 40-70%.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: '30% Risk Reduction',
    description: 'Continuously assess and remediate identity risks. Detect toxic access combinations, orphaned accounts, and policy violations before they become breaches.',
    iconKey: 'shield',
  },
  {
    number: '04',
    title: 'Simplified Compliance',
    description: 'Automated audit trails, policy enforcement, and certification workflows. Meet SOX, HIPAA, GDPR, PCI DSS, and other regulatory requirements with confidence.',
    iconKey: 'target',
  },
  {
    number: '05',
    title: 'Zero Trust Enablement',
    description: 'Operationalize Zero Trust with adaptive identity controls. Verify every access request based on risk, context, and behavior in real-time.',
    iconKey: 'lock',
  },
  {
    number: '06',
    title: 'Proven at Scale',
    description: 'Trusted by 53% of Fortune 500 and 28% of Forbes Global 2000 companies. #1 IGA vendor by revenue with industry-leading customer satisfaction.',
    iconKey: 'users',
  },
];

const useCases = [
  {
    title: 'Financial Services',
    description: 'Meet stringent regulatory requirements with automated governance. Reduce identity-related risks by 30% while accelerating customer onboarding.',
    iconKey: 'shield',
  },
  {
    title: 'Healthcare',
    description: 'Protect patient data with HIPAA-compliant access controls. Automate workforce lifecycle management across complex healthcare systems.',
    iconKey: 'users',
  },
  {
    title: 'Manufacturing',
    description: 'Secure global operations with unified identity governance. Enable secure collaboration across supply chains and partner ecosystems.',
    iconKey: 'cloud',
  },
  {
    title: 'Government',
    description: 'Achieve FedRAMP compliance with robust identity security. Protect citizen data and critical infrastructure with adaptive access controls.',
    iconKey: 'target',
  },
];

const faqs = [
  {
    question: 'What is SailPoint Identity Security?',
    answer: 'SailPoint is the enterprise leader in identity security, providing comprehensive identity governance and administration (IGA) solutions. The SailPoint Platform unifies identity, data, and security intelligence to continuously assess risk and dynamically adjust access across all identity types—human, machine, and AI.',
  },
  {
    question: 'What is the difference between IdentityIQ and IdentityNow?',
    answer: 'IdentityIQ is an on-premises or private cloud IGA solution for enterprises requiring maximum control and customization. IdentityNow is a cloud-native SaaS IGA solution with faster deployment and lower maintenance. Both provide comprehensive identity governance with different deployment models.',
  },
  {
    question: 'How does SailPoint support Zero Trust security?',
    answer: 'SailPoint operationalizes Zero Trust by continuously verifying every identity, assessing risk in real-time, and dynamically adjusting access based on context and behavior. It provides visibility into all access paths and entitlements, enabling least-privilege enforcement across your enterprise.',
  },
  {
    question: 'Can SailPoint secure non-human identities?',
    answer: 'Yes, SailPoint provides Machine Identity Security to manage service accounts, API keys, and AI agents. With 80% of AI agents acting beyond their intended scope, SailPoint helps you gain visibility and control over all non-human identities in your environment.',
  },
  {
    question: 'How long does a SailPoint implementation take?',
    answer: 'Implementation timelines vary by complexity. IdentityNow (cloud) deployments can go live in 4-8 weeks. IdentityIQ implementations typically take 12-20 weeks depending on integrations and customization. Metahorizon accelerates deployments with proven methodologies and pre-built connectors.',
  },
  {
    question: 'What compliance standards does SailPoint support?',
    answer: 'SailPoint supports major compliance frameworks including SOX, HIPAA, GDPR, PCI DSS, ISO 27001, and FedRAMP. Automated audit trails, policy enforcement, and certification workflows simplify compliance reporting and audit preparation.',
  },
];

export default function SailPointPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="SailPoint Identity Security Implementation & Management - Metahorizon"
        description="Expert SailPoint implementation services including Identity Security Cloud, IdentityIQ, and IdentityNow. AI-powered identity governance and compliance automation."
        canonical="/partners/sailpoint"
      />

      <ServicesHero
        title={
          <div className={styles.heroWithTitle}>
            <div className={styles.sailpointLogo}>
              <Image
                src="/assets/img/services/sailpoint.png"
                alt="SailPoint"
                width={220}
                height={60}
                priority
              />
            </div>
            <span>Identity Security Services</span>
          </div>
        }
        subtitle="Unified. Intelligent. Powerful."
        description="Managing identities across growing cloud environments is complicated — but with SailPoint, you get precision, automation, and enterprise-grade control. Metahorizon helps organizations deploy, optimize, and manage SailPoint so they can govern every identity with confidence."
        noBackground={true}
      />

      <ServiceDetail
        title="SailPoint Identity Security Implementation"
        description="The era of adaptive identity security that unifies identity, data, and security intelligence in real time."
        overview="Metahorizon helps organizations design, deploy, and optimize SailPoint identity security solutions across the entire platform. From Identity Security Cloud to IdentityIQ and IdentityNow, we ensure your identity governance infrastructure is secure, scalable, and compliant. As the #1 IGA vendor trusted by 53% of Fortune 500 companies, SailPoint delivers proven results with 30% reduction in identity-related risks."
        features={[
          {
            title: 'Identity Governance',
            description: 'Comprehensive IGA with lifecycle management, access certifications, and policy enforcement for all identity types.',
          },
          {
            title: 'Access Management',
            description: 'Dynamic access adjustment based on real-time risk assessment, context, and behavioral analytics.',
          },
          {
            title: 'AI-Powered Security',
            description: 'Machine learning for access recommendations, anomaly detection, and intelligent automation.',
          },
          {
            title: 'Compliance Automation',
            description: 'Automated audit trails, policy enforcement, and certification workflows for SOX, HIPAA, GDPR, and more.',
          },
        ]}
        benefits={[
          'Unified platform for human, machine, and AI identities',
          '30% reduction in identity-related risks',
          '40-70% faster application onboarding with AI',
          'Automated compliance for SOX, HIPAA, GDPR, PCI DSS',
          'Real-time risk assessment and adaptive access',
          '#1 IGA vendor trusted by Fortune 500 companies',
        ]}
        noBackground={true}
      />

      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>SailPoint Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive identity security across the entire SailPoint platform
            </p>
          </div>
          <ServiceCards services={sailpointCapabilities} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose SailPoint?</h2>
            <p className={styles.sectionSubtitle}>
              Discover the advantages of the SailPoint Identity Security Platform
            </p>
          </div>
          <ServiceCards services={benefits} />
        </div>
      </section>

      <UseCases
        title="Use Cases"
        subtitle="Identity security solutions for regulated industries"
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
        title="Frequently Asked Questions About SailPoint"
        subtitle="Get answers to common questions about SailPoint Identity Security"
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
