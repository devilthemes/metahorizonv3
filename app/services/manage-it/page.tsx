import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import FAQ from '@/components/common/FAQ/FAQ';
import styles from './ManageIT.module.scss';

export const metadata: Metadata = {
  title: 'Managed IT Services | 24/7 IT Support & Infrastructure Management - Metahorizon',
  description: 'Comprehensive managed IT services including 24/7 help desk support, network monitoring, infrastructure management, and disaster recovery. Reduce IT costs with proactive maintenance. Contact Metahorizon today.',
  keywords: [
    'managed IT services',
    'IT management',
    'IT support',
    'help desk support',
    'network monitoring',
    'IT infrastructure management',
    'disaster recovery',
    'business continuity',
    'IT consulting',
    'managed service provider',
    'MSP',
    'IT outsourcing',
    '24/7 IT support',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Managed IT Services | 24/7 IT Support & Management - Metahorizon',
    description: 'Comprehensive IT management with 24/7 support, network monitoring, and disaster recovery.',
    url: 'https://metahorizon.com/services/manage-it',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Managed IT Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT Services | Metahorizon',
    description: '24/7 IT management, monitoring, and support services for your business.',
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
    canonical: 'https://metahorizon.com/services/manage-it',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Managed IT Services',
  provider: {
    '@type': 'Organization',
    name: 'Metahorizon',
    url: 'https://metahorizon.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description: 'Comprehensive managed IT services including 24/7 help desk support, network monitoring, infrastructure management, and disaster recovery.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Managed IT Services Offerings',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Infrastructure Management',
          description: 'Complete management of servers, networks, and endpoints.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Help Desk Support',
          description: '24/7 technical support for your users and employees.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Network Monitoring',
          description: 'Proactive monitoring and maintenance of network infrastructure.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Disaster Recovery',
          description: 'Business continuity planning and disaster recovery solutions.',
        },
      },
    ],
  },
};

const manageItFaqs = [
  {
    question: 'What is included in Managed IT Services?',
    answer: 'Our Managed IT Services include 24/7 help desk support, proactive network monitoring, IT infrastructure management, security monitoring, patch management, backup and disaster recovery, and strategic IT planning. We provide comprehensive coverage of your IT environment so you can focus on your core business.',
  },
  {
    question: 'How quickly do you respond to IT issues?',
    answer: 'We offer SLA-backed response times based on issue severity. Critical issues (system down, security breach) receive immediate response within 15 minutes. High-priority issues are addressed within 1 hour, medium priority within 4 hours, and low priority within 24 hours. Our 24/7 monitoring ensures we often detect and resolve issues before they impact your business.',
  },
  {
    question: 'Do you support both cloud and on-premises infrastructure?',
    answer: 'Yes, we support hybrid environments including on-premises servers, cloud platforms (AWS, Azure, GCP), and hybrid configurations. Our team has expertise in managing diverse infrastructure types and ensuring seamless integration between cloud and on-premises systems.',
  },
  {
    question: 'What security measures do you implement?',
    answer: 'We implement comprehensive security measures including 24/7 security monitoring, endpoint protection, patch management, vulnerability scanning, access control management, and security awareness training. Our SOC team monitors for threats and responds to incidents around the clock.',
  },
  {
    question: 'How do you handle disaster recovery and business continuity?',
    answer: 'We develop customized disaster recovery plans based on your business requirements and RTO/RPO objectives. This includes regular backups, off-site replication, failover testing, and documented recovery procedures. We ensure your critical systems can be restored quickly in case of any disruption.',
  },
  {
    question: 'Can you work with our existing IT team?',
    answer: 'Absolutely. We often work alongside existing IT teams, providing additional expertise, 24/7 coverage, and specialized skills. We can handle routine operations while your team focuses on strategic initiatives, or we can provide specific expertise in areas like security, cloud, or IAM.',
  },
];

const itCapabilities = [
  {
    number: '01',
    title: 'Proactive Monitoring',
    description: '24/7 monitoring of your IT infrastructure to detect and resolve issues before they impact your business.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Rapid Response Support',
    description: 'Fast response times with SLA-backed support to minimize downtime and keep your team productive.',
    iconKey: 'target',
  },
  {
    number: '03',
    title: 'Security Management',
    description: 'Comprehensive security monitoring, patch management, and threat detection to protect your assets.',
    iconKey: 'support',
  },
  {
    number: '04',
    title: 'Strategic IT Planning',
    description: 'Technology roadmap development and IT budget planning to align with your business goals.',
    iconKey: 'cpu',
  },
];

export default function ManageITPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Managed IT Services | 24/7 IT Support & Infrastructure Management - Metahorizon"
        description="Comprehensive managed IT services including 24/7 help desk support, network monitoring, infrastructure management, and disaster recovery. Reduce IT costs with proactive maintenance. Contact Metahorizon today."
        canonical="/services/manage-it"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServicesHero
        title="Manage IT Services"
        subtitle="IT Operations & Support"
        description="Optimize your IT operations with comprehensive management services."
      />

      <ServiceDetail
        title="Manage IT Services"
        description="Comprehensive IT management services to keep your infrastructure running smoothly and efficiently."
        overview="Our Managed IT Services provide end-to-end management of your IT infrastructure, allowing you to focus on your core business. From help desk support to network monitoring and disaster recovery, we ensure your technology environment is reliable, secure, and optimized for performance."
        features={[
          {
            title: 'IT Infrastructure Management',
            description: 'Complete management of servers, networks, and endpoints.',
          },
          {
            title: 'Help Desk Support',
            description: '24/7 technical support for your users and employees.',
          },
          {
            title: 'Network Monitoring',
            description: 'Proactive monitoring and maintenance of network infrastructure.',
          },
          {
            title: 'Disaster Recovery',
            description: 'Business continuity planning and disaster recovery solutions.',
          },
        ]}
        benefits={[
          'Reduced IT costs and downtime',
          'Proactive issue prevention',
          'Access to certified IT professionals',
          'Predictable IT spending',
          'Focus on core business activities',
        ]}
      />

      <section className={styles.itCapabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>IT Management Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Proactive IT management and support to keep your business running smoothly 24/7.
            </p>
          </div>
          <ServiceCards services={itCapabilities} variant="twoColumns" />
        </div>
      </section>

      <FAQ
        title="Frequently Asked Questions About Managed IT Services"
        subtitle="Get answers to common questions about our IT management and support services"
        faqs={manageItFaqs}
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
