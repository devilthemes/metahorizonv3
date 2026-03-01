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
import SEO from '@/components/common/SEO/SEO';
import styles from './CyberArk.module.scss';

export const metadata: Metadata = {
  title: 'CyberArk Privileged Access Management (PAM) Implementation - Metahorizon',
  description: 'Expert CyberArk PAM implementation services including privileged credential management, session monitoring, endpoint privilege security, and secrets management. Protect your critical assets with industry-leading identity security.',
  keywords: [
    'CyberArk',
    'Privileged Access Management',
    'PAM',
    'PAM Implementation',
    'Identity Security',
    'Privileged Credential Management',
    'Session Monitoring',
    'Endpoint Privilege Security',
    'Secrets Management',
    'Password Vault',
    'Privileged Session Manager',
    'Zero Trust',
    'Least Privilege',
    'Threat Detection',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'CyberArk Privileged Access Management (PAM) Implementation - Metahorizon',
    description: 'Expert CyberArk PAM implementation services including privileged credential management, session monitoring, and secrets management.',
    url: 'https://metahorizon.com/partners/cyberark',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon CyberArk Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberArk PAM Implementation - Metahorizon',
    description: 'Expert CyberArk privileged access management implementation and support services.',
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
    canonical: 'https://metahorizon.com/partners/cyberark',
  },
};

const benefits = [
  {
    number: '01',
    title: 'Prevent Credential Theft',
    description: 'Secure and automatically rotate privileged credentials to eliminate standing privileges.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Protect Critical Assets',
    description: 'Safeguard sensitive systems from unauthorized access and insider threats.',
    iconKey: 'target',
  },
  {
    number: '03',
    title: 'Enforce Least Privilege',
    description: 'Ensure users and applications only have minimum access required for their role.',
    iconKey: 'lock',
  },
  {
    number: '04',
    title: 'Monitor All Sessions',
    description: 'Record and audit every privileged session for compliance and forensic analysis.',
    iconKey: 'eye',
  },
  {
    number: '05',
    title: 'Reduce Breach Risk',
    description: 'Eliminate the #1 attack vector used in enterprise breaches with intelligent privilege controls.',
    iconKey: 'shieldCheck',
  },
  {
    number: '06',
    title: 'Strengthen Compliance',
    description: 'Meet regulatory requirements with comprehensive audit trails and automated reporting.',
    iconKey: 'fileCheck',
  },
];

const useCases = [
  {
    title: 'Protecting DevOps Secrets',
    description: 'Secure API keys, tokens, and credentials used in CI/CD pipelines and cloud-native applications.',
    iconKey: 'code',
  },
  {
    title: 'Cloud Access Governance',
    description: 'Centralized control and monitoring of privileged access across AWS, Azure, and GCP environments.',
    iconKey: 'cloud',
  },
  {
    title: 'Insider Threat Protection',
    description: 'Detect and prevent malicious or accidental misuse of privileged access with AI-powered analytics.',
    iconKey: 'users',
  },
  {
    title: 'Emergency Access Management',
    description: 'Break-glass access with full audit trails for critical incidents and emergency situations.',
    iconKey: 'alertCircle',
  },
  {
    title: 'Third-Party Vendor Security',
    description: 'Grant temporary, segmented access to external partners with automatic expiration and monitoring.',
    iconKey: 'briefcase',
  },
  {
    title: 'Endpoint Privilege Security',
    description: 'Remove local admin rights without impacting productivity while enforcing application control.',
    iconKey: 'laptop',
  },
];

const testimonials = [
  {
    quote: 'Metahorizon\'s professional training programs gave our team real-world, applicable skills in AI and DevOps. The instructors were exceptional, and the impact on our productivity was immediate.',
    name: 'Carlos Mendoza',
    role: 'Sr. Engineer',
    company: 'Vertex Innovations',
    image: '/assets/img/avatar-120x120.jpg',
  },
  {
    quote: 'Metahorizon transformed our security architecture with a clear Zero Trust roadmap. Their team\'s expertise, responsiveness, and practical implementation approach significantly improved our risk posture and operational confidence.',
    name: 'Sophia Reynolds',
    role: 'CTO',
    company: 'FinTrust Solutions',
    image: '/assets/img/avatar-120x120.jpg',
  },
  {
    quote: 'Partnering with Metahorizon accelerated our cloud modernization journey. Their consultants delivered scalable, future-ready solutions that improved performance, reduced costs, and empowered our engineering teams.',
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'NexaDigital Systems',
    image: '/assets/img/avatar-120x120.jpg',
  },
];

const faqs = [
  {
    question: 'What is Privileged Access Management (PAM)?',
    answer: 'Privileged Access Management (PAM) is a comprehensive security solution that protects, monitors, and controls privileged identities and access across your organization. It secures privileged credentials, enforces least privilege, and provides session monitoring to prevent breaches caused by privileged misuse.',
  },
  {
    question: 'Why is CyberArk the leader in PAM?',
    answer: 'CyberArk is recognized as a 7x Leader in the Gartner Magic Quadrant for PAM. It provides the most comprehensive identity security platform with secure vaulting, session management, endpoint privilege security, secrets management, and AI-powered threat detection—all unified under CyberArk CORA AI™.',
  },
  {
    question: 'How long does a CyberArk implementation take?',
    answer: 'Implementation timelines vary based on scope. A core PAS deployment (Vault, PSM, PVWA) typically takes 6-10 weeks. Comprehensive deployments including endpoint privilege management, cloud access, and secrets management may take 12-16 weeks depending on environment complexity.',
  },
  {
    question: 'Can CyberArk integrate with our existing security tools?',
    answer: 'Yes, CyberArk offers 300+ out-of-the-box integrations with SIEM, ITSM, cloud platforms, and identity providers. We ensure seamless integration with your existing security stack for unified visibility and automated workflows.',
  },
  {
    question: 'What is the difference between PAM and IAM?',
    answer: 'IAM (Identity and Access Management) manages access for all users across the organization. PAM (Privileged Access Management) specifically focuses on securing elevated access with enhanced controls, monitoring, and credential protection for administrative and privileged accounts.',
  },
  {
    question: 'How does CyberArk support Zero Trust?',
    answer: 'CyberArk enables Zero Trust by enforcing least privilege across all identities (human, machine, and AI), continuously verifying access requests, monitoring all privileged sessions, and eliminating standing privileges with just-in-time access and automatic credential rotation.',
  },
];

export default function CyberArkPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="CyberArk Privileged Access Management (PAM) Implementation - Metahorizon"
        description="Expert CyberArk PAM implementation services including privileged credential management, session monitoring, endpoint privilege security, and secrets management."
        canonical="/partners/cyberark"
      />

      <ServicesHero
        title={
          <div className={styles.heroWithTitle}>
            <div className={styles.cyberarkLogo}>
              <Image
                src="/assets/img/services/cyberark.png"
                alt="CyberArk"
                width={200}
                height={60}
                priority
              />
            </div>
            <span>CyberArk Privileged Access Management</span>
          </div>
        }
        subtitle="Identity Security for the AI Era"
        description="CyberArk is the global leader in Privileged Access Management. We help organizations implement CyberArk to secure every identity—human, machine, and AI—with intelligent privilege controls that prevent breaches and strengthen security posture."
        noBackground={true}
      />

      <ServiceDetail
        title="CyberArk PAM Services"
        description="Privileged accounts are the #1 target for cyberattacks. CyberArk provides comprehensive identity security to protect, monitor, and control every privileged identity across your enterprise. Metahorizon helps you implement and optimize CyberArk to eliminate breach risks and achieve Zero Trust."
        overview="Our CyberArk experts design, deploy, and manage enterprise-grade PAM solutions that secure your most critical assets. From core PAS deployment to endpoint privilege management and secrets management, we ensure your CyberArk environment delivers maximum security value with minimal operational overhead."
        features={[
          {
            title: 'Core PAS Deployment',
            description: 'Complete setup of CyberArk Vault, PSM, PVWA, and PTA with privileged credential onboarding and session monitoring.',
          },
          {
            title: 'Endpoint Privilege Management',
            description: 'Remove local admin rights, enforce least privilege, and prevent threats with application control and behavioral monitoring.',
          },
          {
            title: 'Privileged Cloud Access',
            description: 'Secure privileged access across AWS, Azure, and GCP with centralized control and monitoring of cloud administrator accounts.',
          },
          {
            title: 'Secrets Management',
            description: 'Protect machine identities, API keys, and credentials with automated rotation and secure injection into applications.',
          },
        ]}
        benefits={[
          'Prevent credential theft with secure vaulting and rotation',
          'Protect critical systems from unauthorized access',
          'Enforce least privilege across all identities',
          'Monitor and record all privileged sessions',
          'Reduce breach risk with intelligent threat detection',
          'Strengthen compliance with comprehensive audit trails',
        ]}
        noBackground={true}
      />

      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>CyberArk Platform Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive identity security across your entire enterprise
            </p>
          </div>
          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Password Vault</h3>
              <p className={styles.capabilityDescription}>
                Centralized, encrypted storage for all privileged credentials with automatic rotation and secure checkout.
              </p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Privileged Session Manager</h3>
              <p className={styles.capabilityDescription}>
                Monitor, record, and control all privileged sessions with real-time oversight and forensic playback.
              </p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Privileged Threat Analytics</h3>
              <p className={styles.capabilityDescription}>
                AI-powered behavioral analytics to detect and respond to privileged-based threats in real-time.
              </p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Endpoint Privilege Manager</h3>
              <p className={styles.capabilityDescription}>
                Enforce least privilege on endpoints, remove local admin rights, and control application execution.
              </p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Secrets Manager</h3>
              <p className={styles.capabilityDescription}>
                Secure machine identities, API keys, and cloud credentials with automated rotation and injection.
              </p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.capabilityTitle}>Cloud Security</h3>
              <p className={styles.capabilityDescription}>
                Visualize and control privileged access across AWS, Azure, and GCP with unified governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose CyberArk With Us?</h2>
            <p className={styles.sectionSubtitle}>
              Discover the advantages of CyberArk Privileged Access Management
            </p>
          </div>
          <ServiceCards services={benefits} />
        </div>
      </section>

      <UseCases
        title="Use Cases"
        subtitle="Real-world scenarios where CyberArk PAM makes the difference"
        useCases={useCases}
      />

      <section className={styles.whyMetahorizonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Metahorizon?</h2>
            <p className={styles.sectionSubtitle}>
              Because your identity security should do more than just store credentials—it should protect your entire enterprise, automate compliance, and enable Zero Trust.
            </p>
          </div>
          <ServiceCards services={[
            {
              number: '01',
              title: 'All-in-One Security Suite',
              description: 'IAM, PAM, DevOps & Multi-Channel Marketing—all integrated, secured smarter, and reaching customers where they are.',
              iconKey: 'shield',
            },
            {
              number: '02',
              title: 'AI-Powered Automation',
              description: 'Let AI do the heavy lifting—automate credential rotation, policy enforcement, and threat detection.',
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
              description: 'Metahorizon redefines your experience, leaving behind complex, outdated, and costly tools — a solution that streamlines, automates, and amplifies.',
              iconKey: 'sparkles',
            },
          ]} />
        </div>
      </section>

      <Testimonials
        title="Trusted by Industry Leaders"
        subtitle="See what our clients say about our CyberArk and identity security services"
        testimonials={testimonials}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on cybersecurity, PAM, and enterprise technology trends."
        viewAllHref="/blog"
      />

      <FAQ
        title="Frequently Asked Questions About CyberArk"
        subtitle="Get answers to common questions about CyberArk Privileged Access Management"
        faqs={faqs}
      />

      <CTA
        title="Let's Build Secure Systems Together"
        ctaText="Contact Us Today"
        ctaHref="/contact-us"
        description="Enterprise-grade Privileged Access Management and identity security solutions with Zero Trust principles."
      />
    </div>
  );
}
