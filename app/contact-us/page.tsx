import type { Metadata } from 'next';
import ContactForm from '@/components/common/ContactForm/ContactForm';
import ContactInfo from '@/components/common/ContactInfo/ContactInfo';
import FAQ from '@/components/common/FAQ/FAQ';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';
import styles from './Contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch - Metahorizon',
  description: 'Get in touch with Metahorizon for enterprise-grade Identity Access Management, cybersecurity, and technology solutions. Contact our offices in USA, India, and Nepal.',
  keywords: [
    'Contact Metahorizon',
    'Contact Us',
    'Get in Touch',
    'Metahorizon Contact',
    'IAM Consulting',
    'Cybersecurity Services',
    'Technology Solutions',
    'IT Consulting',
    'Metahorizon USA',
    'Metahorizon India',
    'Metahorizon Nepal',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Contact Us | Get in Touch - Metahorizon',
    description: 'Get in touch with Metahorizon for enterprise-grade Identity Access Management and cybersecurity solutions.',
    url: 'https://metahorizon.com/contact-us/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Metahorizon',
    description: 'Get in touch with Metahorizon for enterprise-grade IAM and cybersecurity solutions.',
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
    canonical: 'https://metahorizon.com/contact-us/',
  },
};

const contactLocations = [
  {
    company: 'Metahorizon Inc.',
    address: '1303 W Walnut Hill, Suite 340 Irving, Texas 75038',
    email: 'contact@metahorizon.com',
    phone: '+1 (469) 496-9588',
  },
  {
    company: 'Metahorizon Solutions Pvt. Ltd',
    address: 'Sidh Vihar, Nehrugram, Dehradun Uttarakhand, India, 248010',
  },
  {
    company: 'Metahorizon Information & Technology College Pvt. Ltd.',
    address: 'New Baneshwor, Kathmandu, Nepal',
    email: 'info@metahorizon.edu.np',
    phone: '+977-9851344501',
  },
];

const faqs = [
  {
    question: 'What services does Metahorizon offer?',
    answer: 'Metahorizon offers comprehensive Identity Access Management (IAM), cybersecurity, cloud automation, DevOps, data science/AI/ML, and custom software development services. We also provide professional training and certification programs through Metahorizon Academy.',
  },
  {
    question: 'How quickly can I expect a response?',
    answer: 'We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call our main office number and our team will assist you promptly.',
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations to discuss your requirements and explore how our solutions can meet your business needs. Contact us to schedule your consultation.',
  },
  {
    question: 'Can I visit your offices in person?',
    answer: 'Yes, we welcome visitors at all our office locations. Please contact us in advance to schedule an appointment and ensure the right team members are available to meet with you.',
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes, Metahorizon serves clients globally. With offices in the USA, India, and Nepal, we have the capability to support international projects and provide services across different time zones.',
  },
];

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Contact Us | Get in Touch - Metahorizon"
        description="Get in touch with Metahorizon for enterprise-grade Identity Access Management, cybersecurity, and technology solutions."
        canonical="/contact-us/"
      />

      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
        contactPoint={{
          telephone: '+1-469-496-9588',
          contactType: 'customer service',
          email: 'contact@metahorizon.com',
        }}
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Get in touch with us. <br />
            We're here to assist you.
          </h1>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.formColumn}>
              <ContactForm />
            </div>

            <div className={styles.infoColumn}>
              <ContactInfo
                title="Contact Information"
                locations={contactLocations}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Metahorizon and our services"
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
