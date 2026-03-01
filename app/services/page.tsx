import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServicesGrid from '@/components/common/ServicesGrid/ServicesGrid';
import CTA from '@/components/common/CTA/CTA';
import FAQ from '@/components/common/FAQ/FAQ';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';

export const metadata: Metadata = {
  title: 'Enterprise IT Services | Cloud, Security, AI & Custom Software - Metahorizon',
  description: 'Comprehensive enterprise IT services including cloud & DevOps, cybersecurity, AI/ML, identity management, and custom software development. Transform your business with Metahorizon.',
  keywords: [
    'IT services',
    'enterprise technology solutions',
    'cloud services',
    'DevOps automation',
    'cybersecurity services',
    'AI ML solutions',
    'custom software development',
    'identity access management',
    'data science services',
    'IT consulting',
    'managed IT services',
    'SOC services',
    'penetration testing',
    'Metahorizon services',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Enterprise IT Services | Cloud, Security, AI & Software - Metahorizon',
    description: 'Comprehensive enterprise IT services including cloud, cybersecurity, AI/ML, and custom software development.',
    url: 'https://metahorizon.com/services',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon IT Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise IT Services | Metahorizon',
    description: 'Comprehensive IT services: cloud, DevOps, cybersecurity, AI/ML, and custom software development.',
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
    canonical: 'https://metahorizon.com/services',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Metahorizon',
  url: 'https://metahorizon.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://metahorizon.com/assets/img/meta-horizon-logo.png',
  },
  description: 'Comprehensive enterprise IT services including cloud & DevOps, cybersecurity, AI/ML, identity management, and custom software development.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services Catalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Identity & Access Management',
          description: 'Enterprise IAM solutions with Zero Trust architecture.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud & DevOps',
          description: 'Cloud migration, CI/CD pipelines, and infrastructure automation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cybersecurity Services',
          description: 'SOC monitoring, penetration testing, and security assessments.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Science & AI/ML',
          description: 'Advanced analytics, machine learning, and AI solutions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Tailored software solutions for unique business challenges.',
        },
      },
    ],
  },
};

const serviceFaqs = [
  {
    question: 'What IT services does Metahorizon offer?',
    answer: 'Metahorizon offers comprehensive IT services including Identity & Access Management (IAM), Cloud & DevOps, Cybersecurity (SOC monitoring, penetration testing), Data Science & AI/ML, Custom Software Development, Expert-as-a-Service staffing, and Managed IT Services. We also provide AI-powered documentation solutions through Metahorizon Documme and immersive XR training through Metahorizon Qvolv.',
  },
  {
    question: 'How do I choose the right IT service for my business?',
    answer: 'The right service depends on your specific needs. For security concerns, start with Identity & Access Management or Cybersecurity services. For infrastructure modernization, consider Cloud & DevOps. For data-driven insights, explore Data Science & AI/ML. For custom solutions, our Custom Software Development team can help. Contact us for a free consultation to assess your needs.',
  },
  {
    question: 'Do you provide ongoing support after implementation?',
    answer: 'Yes, Metahorizon provides comprehensive ongoing support including 24/7 SOC monitoring, managed IT services, regular security assessments, system updates, and technical support. We offer flexible support packages tailored to your business requirements.',
  },
  {
    question: 'Can Metahorizon integrate new solutions with our existing systems?',
    answer: 'Absolutely. Our team specializes in seamless integration of new technologies with existing infrastructure. We conduct thorough assessments to ensure compatibility and minimize disruption during implementation.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve diverse industries including Banking & Financial Services, Healthcare, Insurance, Retail & E-Commerce, Telecom, Manufacturing, Energy, Defence, Aviation, Education, and Technology. Our solutions are designed to meet industry-specific compliance and security requirements.',
  },
  {
    question: 'Do you offer training for our team on new systems?',
    answer: 'Yes, through Metahorizon Academy, we provide comprehensive training programs including professional development courses, technical certifications, leadership tracks, and custom training tailored to your team\'s needs. This ensures your team can maximize the value of implemented solutions.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Enterprise IT Services | Cloud, Security, AI & Custom Software - Metahorizon"
        description="Comprehensive enterprise IT services including cloud & DevOps, cybersecurity, AI/ML, identity management, and custom software development."
        canonical="/services"
      />

      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade technology solutions including IAM, DevOps, AI/ML, cybersecurity, and custom software development."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <h1 className="sr-only">Enterprise IT Services | Metahorizon</h1>

      <ServicesHero
        title="Our Services"
        subtitle="Enterprise-Grade Technology Solutions"
        description="From identity management to AI-powered solutions, we deliver comprehensive technology services to help your business thrive in the digital age."
      />
      
      <ServicesGrid />

      {/* Related Services Section */}
      <section className="related-services-section">
        <div className="container">
          <h2 className="section-title">Explore Our Complete Service Portfolio</h2>
          <p className="section-subtitle">
            Discover how our integrated services can transform your business
          </p>
          <div className="services-links-grid">
            <Link href="/services/identity-access-management" className="service-link-card">
              <h3>Identity & Access Management</h3>
              <p>Zero Trust security with SSO, MFA, and privileged access management</p>
            </Link>
            <Link href="/services/devops-cloud" className="service-link-card">
              <h3>Cloud & DevOps</h3>
              <p>Cloud migration, CI/CD pipelines, and infrastructure automation</p>
            </Link>
            <Link href="/services/support-soc-pentesting" className="service-link-card">
              <h3>Support, SOC & Pentesting</h3>
              <p>24/7 monitoring, penetration testing, and incident response</p>
            </Link>
            <Link href="/services/data-science-ai" className="service-link-card">
              <h3>Data Science & AI/ML</h3>
              <p>Advanced analytics, machine learning, and AI-driven insights</p>
            </Link>
            <Link href="/services/custom-software" className="service-link-card">
              <h3>Custom Software Development</h3>
              <p>Tailored web, mobile, and enterprise applications</p>
            </Link>
            <Link href="/services/expert-as-a-service" className="service-link-card">
              <h3>Expert-as-a-Service</h3>
              <p>On-demand talent and specialized expertise</p>
            </Link>
            <Link href="/services/manage-it" className="service-link-card">
              <h3>Managed IT Services</h3>
              <p>24/7 help desk, network monitoring, and infrastructure management</p>
            </Link>
            <Link href="/products/documme" className="service-link-card">
              <h3>Metahorizon Documme</h3>
              <p>AI-powered documentation and knowledge management</p>
            </Link>
            <Link href="/products/qvolv" className="service-link-card">
              <h3>Metahorizon Qvolv</h3>
              <p>Immersive AR/VR/MR training and digital twins</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        title="Frequently Asked Questions About Our Services"
        subtitle="Get answers to common questions about Metahorizon IT services"
        faqs={serviceFaqs}
      />

      {/* Related Services Section */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(180deg, var(--color-white) 0%, var(--color-background) 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '1rem', color: 'var(--color-text)' }}>
            Explore Our Complete Service Portfolio
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Discover how our integrated services can transform your business
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <Link href="/services/identity-access-management" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Identity & Access Management</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>Zero Trust security with SSO, MFA, and privileged access management</p>
            </Link>
            <Link href="/services/devops-cloud" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Cloud & DevOps</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>Cloud migration, CI/CD pipelines, and infrastructure automation</p>
            </Link>
            <Link href="/services/support-soc-pentesting" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Support, SOC & Pentesting</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>24/7 monitoring, penetration testing, and incident response</p>
            </Link>
            <Link href="/services/data-science-ai" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Data Science & AI/ML</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>Advanced analytics, machine learning, and AI-driven insights</p>
            </Link>
            <Link href="/services/custom-software" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Custom Software Development</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>Tailored web, mobile, and enterprise applications</p>
            </Link>
            <Link href="/services/expert-as-a-service" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Expert-as-a-Service</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>On-demand talent and specialized expertise</p>
            </Link>
            <Link href="/services/manage-it" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Managed IT Services</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>24/7 help desk, network monitoring, and infrastructure management</p>
            </Link>
            <Link href="/products/documme" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Metahorizon Documme</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>AI-powered documentation and knowledge management</p>
            </Link>
            <Link href="/products/qvolv" style={{ display: 'block', padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>Metahorizon Qvolv</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>Immersive AR/VR/MR training and digital twins</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Build Secure Systems Together"
        ctaText="Contact Us Today"
        ctaHref="/contact-us"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />
    </div>
  );
}
