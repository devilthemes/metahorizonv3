import type { Metadata } from 'next';
import AboutHero from "../../components/common/AboutHero/AboutHero";
import OurStory from "../../components/common/OurStory/OurStory";
import MissionVision from "../../components/common/MissionVision/MissionVision";
import Values from "../../components/common/Values/Values";
import Timeline from "../../components/common/Timeline/Timeline";
import WhyMetaHorizon from "../../components/common/WhyMetaHorizon/WhyMetaHorizon";
import Testimonials from "../../components/common/Testimonials/Testimonials";
import Industries from "../../components/common/Industries/Industries";
import BlogInsights from "../../components/common/BlogInsights/BlogInsights";
import CTA from "../../components/common/CTA/CTA";
import Stats from "../../components/common/Stats/Stats";
import FAQ from "../../components/common/FAQ/FAQ";
import SEO from "../../components/common/SEO/SEO";
import StructuredData from "../../components/common/SEO/StructuredData";

export const metadata: Metadata = {
  title: 'About Metahorizon | 10+ Years Leading Enterprise Cybersecurity & IAM',
  description: 'Learn about Metahorizon - a global leader in Identity Access Management, cybersecurity, and cloud solutions. Over 10 years of experience securing enterprise digital infrastructure worldwide.',
  keywords: [
    'About Metahorizon',
    'Metahorizon',
    'Identity Access Management',
    'IAM solutions',
    'cybersecurity',
    'Zero Trust security',
    'SOC services',
    'cloud automation',
    'enterprise security',
    'IT consulting',
    'managed security services',
    'cybersecurity company',
    'IAM provider',
    'IT consulting firm',
    'technology solutions',
    'security experts',
    'enterprise cybersecurity',
    'Metahorizon company',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'About Metahorizon | Enterprise Cybersecurity & IAM Solutions',
    description: 'Learn about Metahorizon - a global leader in Identity Access Management, cybersecurity, and cloud solutions.',
    url: 'https://metahorizon.com/about-us',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Metahorizon | Enterprise Cybersecurity & IAM Solutions',
    description: 'Learn about Metahorizon - a global leader in Identity Access Management, cybersecurity, and cloud solutions.',
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
    canonical: 'https://metahorizon.com/about-us',
  },
};

const aboutFaqs = [
  {
    question: 'What services does Metahorizon offer?',
    answer: 'Metahorizon offers comprehensive IT services including Identity & Access Management (IAM), managed IT services, AI-powered documentation solutions, cybersecurity (SOC monitoring, penetration testing), cloud & DevOps services, data science and AI/ML, custom software development, and professional development training programs through Metahorizon Academy.',
  },
  {
    question: 'Where is Metahorizon located?',
    answer: 'Metahorizon is headquartered in Irving, Texas, USA, with additional offices in Dehradun, India and Kathmandu, Nepal. This global presence allows us to serve clients across different time zones and provide 24/7 support.',
  },
  {
    question: 'What industries does Metahorizon serve?',
    answer: 'We serve a wide range of industries including Banking & Financial Institutions, Healthcare, Insurance, Retail & E-Commerce, Telecom, Manufacturing, Energy, Defence, Aviation, Education, and Technology companies. Our solutions are tailored to meet industry-specific compliance and security requirements.',
  },
  {
    question: 'How many years of experience does Metahorizon have?',
    answer: 'Metahorizon has over 10 years of experience delivering enterprise-grade technology solutions. Our team of 50+ experts has successfully completed 500+ projects for 200+ clients worldwide.',
  },
  {
    question: 'Does Metahorizon provide 24/7 support?',
    answer: 'Yes, Metahorizon provides 24/7 SOC monitoring, managed IT support, and incident response services. Our global team structure ensures continuous coverage and rapid response to security incidents and technical issues.',
  },
  {
    question: 'What makes Metahorizon different from other IT service providers?',
    answer: 'Metahorizon combines deep technical expertise with a consultative approach. We specialize in Zero Trust security architecture, have partnerships with leading IAM platforms (Okta, SailPoint, CyberArk, PingIdentity), and offer end-to-end services from strategy to implementation to ongoing support. Our Metahorizon Academy also provides training to ensure your team can maximize the value of our solutions.',
  },
];

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Metahorizon | 10+ Years Leading Enterprise Cybersecurity & IAM"
        description="Learn about Metahorizon - a global leader in Identity Access Management, cybersecurity, and cloud solutions. Over 10 years of experience securing enterprise digital infrastructure worldwide."
        canonical="/about-us"
      />
      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />

      <div className="min-h-screen">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <Stats />
        <Values />
        <Timeline />
        <WhyMetaHorizon />
        <Testimonials />
        <Industries />
        <FAQ
          title="Frequently Asked Questions About Metahorizon"
          subtitle="Get answers to common questions about our company and services"
          faqs={aboutFaqs}
        />
        <BlogInsights />
        <CTA />
      </div>
    </>
  );
}
