import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import UseCases from '@/components/common/UseCases/UseCases';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import FAQ from '@/components/common/FAQ/FAQ';

export const metadata: Metadata = {
  title: 'Expert as a Service (EaaS) & Staffing Solutions | On-Demand Talent - Metahorizon',
  description: 'Access top-tier talent and expert consultants on-demand. Our Expert as a Service provides flexible staffing, technical consulting, and skilled professionals for your projects. Contact Metahorizon today.',
  keywords: [
    'Expert as a Service',
    'EaaS',
    'staff augmentation',
    'on-demand expertise',
    'technical consulting',
    'skilled professionals',
    'flexible staffing',
    'project-based experts',
    'IT staffing solutions',
    'consulting services',
    'talent acquisition',
    'workforce solutions',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Expert as a Service (EaaS) & Staffing | On-Demand Talent - Metahorizon',
    description: 'Access top-tier talent and expert consultants on-demand for your projects and initiatives.',
    url: 'https://metahorizon.com/services/expert-as-a-service',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Expert as a Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert as a Service & Staffing | Metahorizon',
    description: 'On-demand expertise and flexible staffing solutions for your business.',
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
    canonical: 'https://metahorizon.com/services/expert-as-a-service',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Expert as a Service & Staffing',
  provider: {
    '@type': 'Organization',
    name: 'Metahorizon',
    url: 'https://metahorizon.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description: 'On-demand expertise and flexible staffing solutions including technical consulting, staff augmentation, and project-based experts.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Expert as a Service Offerings',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Consulting',
          description: 'Expert guidance on architecture, strategy, and implementation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Staff Augmentation',
          description: 'Skilled professionals to supplement your existing team.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Project-Based Experts',
          description: 'Experienced consultants for specific projects or initiatives.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Training & Upskilling',
          description: 'Custom training programs to enhance your team capabilities.',
        },
      },
    ],
  },
};

const eaasFaqs = [
  {
    question: 'What is Expert as a Service (EaaS)?',
    answer: 'Expert as a Service (EaaS) provides on-demand access to skilled professionals and subject matter experts. Instead of traditional hiring, you can engage experts for specific projects, temporary skill gaps, or ongoing consulting needs. This flexible model allows you to scale your team quickly without the overhead of permanent hires.',
  },
  {
    question: 'How quickly can I onboard an expert?',
    answer: 'We can typically onboard experts within 1-2 weeks, depending on the role and project requirements. For urgent needs, we have pre-vetted consultants available for immediate engagement. Our streamlined process ensures you get qualified professionals who can hit the ground running.',
  },
  {
    question: 'What types of experts are available?',
    answer: 'We offer experts across multiple domains including IAM (Okta, SailPoint, CyberArk, PingIdentity), Cloud & DevOps (AWS, Azure, GCP, Kubernetes), Cybersecurity (SOC, penetration testing), Data Science & AI/ML, Full-Stack Development, and Business Intelligence. All our experts are vetted for technical skills and communication abilities.',
  },
  {
    question: 'Can I convert a contractor to a full-time employee?',
    answer: 'Yes, many clients choose to convert contractors to full-time employees after a successful engagement. We offer flexible conversion terms and can facilitate the transition smoothly. This "try before you hire" approach reduces hiring risk and ensures good cultural fit.',
  },
  {
    question: 'What engagement models do you offer?',
    answer: 'We offer multiple engagement models: hourly consulting for specific tasks, part-time ongoing support (10-20 hours/week), full-time contractor engagements (40 hours/week), and project-based fixed-price engagements. We can also create custom arrangements based on your specific needs.',
  },
  {
    question: 'How do you ensure quality and fit?',
    answer: 'Our rigorous vetting process includes technical assessments, reference checks, and cultural fit evaluations. We match experts based on technical skills, industry experience, and communication style. If the fit isn\'t right, we offer a replacement guarantee to ensure your satisfaction.',
  },
];

const useCases = [
  {
    title: 'Temporary Skill Gaps',
    description: 'Fill critical skill gaps quickly with experienced professionals who can deliver immediate impact.',
    iconKey: 'trendingUp',
  },
  {
    title: 'Large-Scale Deployments',
    description: 'Scale your team for major projects with experts who have proven deployment experience.',
    iconKey: 'package',
  },
  {
    title: 'Managed Service Support',
    description: 'Augment your managed services team with specialized expertise for complex client requirements.',
    iconKey: 'users',
  },
  {
    title: 'Cloud Data Migration',
    description: 'Expert guidance and execution for secure, efficient cloud migration and data transformation.',
    iconKey: 'barChart3',
  },
  {
    title: 'IAM Implementation & Governance',
    description: 'Deploy and govern identity and access management solutions with certified specialists.',
    iconKey: 'shieldCheck',
  },
  {
    title: 'BI/Analytics Support',
    description: 'Enhance your analytics capabilities with data experts who can build insights-driven solutions.',
    iconKey: 'trendingUp',
  },
];

export default function ExpertAsAServicePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Expert as a Service (EaaS) & Staffing Solutions | On-Demand Talent - Metahorizon"
        description="Access top-tier talent and expert consultants on-demand. Our Expert as a Service provides flexible staffing, technical consulting, and skilled professionals for your projects. Contact Metahorizon today."
        canonical="/services/expert-as-a-service"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServicesHero
        title="Expert as a Service (EaaS) & Staffing"
        subtitle="On-Demand Expertise"
        description="Augment your team with skilled professionals and expert consultants."
      />

      <ServiceDetail
        title="Expert as a Service (EaaS) & Staffing"
        description="Access top-tier talent and expert consultants on-demand to accelerate your projects and initiatives."
        overview="Our Expert as a Service and Staffing solutions provide flexible access to skilled professionals and subject matter experts. Whether you need temporary staff augmentation, project-based experts, or ongoing consulting, we connect you with qualified professionals who can hit the ground running and deliver results."
        features={[
          {
            title: 'Technical Consulting',
            description: 'Expert guidance on architecture, strategy, and implementation.',
          },
          {
            title: 'Staff Augmentation',
            description: 'Skilled professionals to supplement your existing team.',
          },
          {
            title: 'Project-Based Experts',
            description: 'Experienced consultants for specific projects or initiatives.',
          },
          {
            title: 'Training & Upskilling',
            description: 'Custom training programs to enhance your team capabilities.',
          },
        ]}
        benefits={[
          'Access to top-tier talent on-demand',
          'Flexible engagement models',
          'Reduced hiring and onboarding time',
          'Cost-effective resourcing',
          'Knowledge transfer and skill development',
        ]}
      />

      <UseCases
        title="Use Cases"
        subtitle="Real-world scenarios where our expert staffing makes the difference"
        useCases={useCases}
      />

      <FAQ
        title="Frequently Asked Questions About Expert as a Service"
        subtitle="Get answers to common questions about our staffing and consulting services"
        faqs={eaasFaqs}
      />

      <CTA
        title="Ready to Scale Your Team?"
        ctaText="Get Expert Support"
        ctaHref="/contact-us"
        description="Access top-tier talent and expert consultants on-demand. Let us help you accelerate your projects with skilled professionals."
      />
    </div>
  );
}
