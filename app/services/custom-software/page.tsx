import type { Metadata } from 'next';
import ServicesHero from "@/components/common/ServicesHero/ServicesHero";
import ServiceDetail from "@/components/common/ServiceDetail/ServiceDetail";
import CTA from "@/components/common/CTA/CTA";
import SEO from "@/components/common/SEO/SEO";
import StructuredData from "@/components/common/SEO/StructuredData";
import ServiceCards from "@/components/common/ServiceCards/ServiceCards";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import FAQ from "@/components/common/FAQ/FAQ";
import UseCases from "@/components/common/UseCases/UseCases";
import WhyMetaHorizon from "@/components/common/WhyMetaHorizon/WhyMetaHorizon";
import styles from './CustomSoftware.module.scss';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconKey: string;
}

export const metadata: Metadata = {
  title: 'Custom Application Development Services | Tailored Software Solutions - Metahorizon',
  description: 'End-to-end custom application development with web apps, mobile apps, API development, legacy modernization & enterprise software. Scalable, secure, user-focused solutions.',
  keywords: [
    'Custom Application Development',
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'API Development',
    'Legacy System Modernization',
    'Enterprise Software Solutions',
    'Software Engineering',
    'Full-Stack Development',
    'Cloud-Native Applications',
    'React Development',
    'Angular Development',
    'Vue.js Development',
    'Flutter Development',
    'React Native',
    'RESTful API',
    'GraphQL API',
    'Microservices Architecture',
    'Agile Development',
    'Software Consulting',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Custom Application Development Services | Tailored Software Solutions - Metahorizon',
    description: 'End-to-end custom software development with web apps, mobile apps, API development, and legacy modernization. Build scalable, secure solutions.',
    url: 'https://metahorizon.com/services/custom-software',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Custom Application Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Application Development Services | Metahorizon',
    description: 'End-to-end custom software development with web apps, mobile apps, API development, and legacy modernization.',
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
    canonical: 'https://metahorizon.com/services/custom-software',
  },
};

const whatWeBuild: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Applications',
    description: 'High-performing, secure, and optimized web apps with modern front-end frameworks (React, Angular, Vue) and scalable backends (Node.js, .NET, Python).',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    description: 'Cross-platform and native mobile apps with Flutter and React Native that deliver seamless experiences on iOS and Android devices.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Legacy Modernization',
    description: 'Transform outdated systems with architecture redesign, codebase refactoring, cloud migration, and technology stack upgrades.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Enterprise Software Solutions',
    description: 'Streamline internal operations with workflow automation, customer portals, custom dashboards, and business process management tools.',
    iconKey: 'event',
  },
  {
    number: '05',
    title: 'API Development & Integrations',
    description: 'Connect systems and eliminate data silos with scalable RESTful and GraphQL APIs, third-party integrations, and microservices architecture.',
    iconKey: 'career',
  },
];

const benefits: ServiceItem[] = [
  {
    number: '01',
    title: 'Full End-to-End Development',
    description: 'From concept to deployment, we handle every aspect of your software project including requirements, design, development, testing, and launch.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Transparent Project Management',
    description: 'Clear communication, regular updates, and agile methodologies keep you informed and involved throughout the development process.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Future-Proof Architecture',
    description: 'Scalable designs that grow with your business and adapt to changing needs with modern, maintainable codebases.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Reliable Long-Term Support',
    description: 'Ongoing maintenance, upgrades, performance optimization, and feature enhancements after launch to ensure continued success.',
    iconKey: 'event',
  },
];

const capabilities: ServiceItem[] = [
  {
    number: '01',
    title: 'All-in-One Development Suite',
    description: 'Custom software, DevOps & Multi-Channel Marketing—all delivered faster, engineered smarter, and integrated seamlessly.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'AI-Powered Development',
    description: 'Leverage AI for code generation, testing automation, and intelligent features that accelerate development and enhance functionality.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Affordable & Flexible',
    description: 'Cost-effective development that\'s adaptable—built to fit your budget, timeline, and evolving business requirements.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Loved by Users',
    description: 'Intuitive UX design and clean interfaces that users love—streamlining workflows and boosting adoption rates.',
    iconKey: 'sparkles',
  },
];

const faqs = [
  {
    question: 'What is custom application development?',
    answer: 'Custom application development is the process of creating software specifically tailored to your business needs, workflows, and goals. Unlike off-the-shelf solutions, custom applications are built from the ground up to address your unique requirements and integrate seamlessly with your existing systems.',
  },
  {
    question: 'How long does it take to develop a custom application?',
    answer: 'Development timelines vary based on complexity, features, and integrations. Simple applications may take 6-8 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed project timelines during the discovery phase and use agile methodologies to deliver value incrementally.',
  },
  {
    question: 'What technologies do you use for development?',
    answer: 'We use modern, industry-standard technologies including React, Angular, Vue.js for front-end; Node.js, .NET, Python, Java for back-end; Flutter and React Native for mobile; and cloud platforms like AWS, Azure, and Google Cloud. We choose the best stack for your specific requirements.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive post-launch support including maintenance, bug fixes, performance optimization, security updates, and feature enhancements. We provide flexible support plans to ensure your application continues to perform optimally as your business grows.',
  },
  {
    question: 'Can you modernize our legacy systems?',
    answer: 'Absolutely. We specialize in legacy modernization, helping businesses transform outdated systems into modern, cloud-native applications. Our approach includes architecture redesign, codebase refactoring, data migration, and technology stack upgrades while minimizing business disruption.',
  },
  {
    question: 'How do you ensure the quality of the software?',
    answer: 'We follow rigorous quality assurance practices including automated testing (unit, integration, end-to-end), code reviews, continuous integration/continuous deployment (CI/CD), performance testing, and security audits. Our QA process ensures reliable, bug-free software that meets your expectations.',
  },
  {
    question: 'What is your development methodology?',
    answer: 'We use agile development methodologies with iterative sprints, regular demos, and continuous feedback loops. This approach ensures transparency, allows for course corrections, and delivers working software incrementally so you see progress throughout the project.',
  },
  {
    question: 'Do you integrate with third-party systems?',
    answer: 'Yes, we have extensive experience integrating custom applications with third-party systems including CRM platforms (Salesforce, HubSpot), payment gateways (Stripe, PayPal), ERP systems, marketing tools, and various APIs to create a unified ecosystem for your business.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Application Development Services',
  description: 'End-to-end custom software development including web applications, mobile apps, API development, legacy modernization, and enterprise software solutions.',
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
    name: 'Custom Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
          description: 'Modern, responsive web applications with React, Angular, or Vue',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile apps for iOS and Android',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legacy Modernization',
          description: 'Transform outdated systems with modern architecture and cloud migration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'API Development & Integration',
          description: 'RESTful and GraphQL APIs for seamless system integration',
        },
      },
    ],
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <SEO
        title="Custom Application Development Services | Tailored Software Solutions - MetaHorizon"
        description="End-to-end custom application development with web apps, mobile apps, API development, legacy modernization & enterprise software. Scalable, secure solutions."
        canonical="/services/custom-software"
      />

      <StructuredData
        type="LocalBusiness"
        name="MetaHorizon Custom Software Development"
        description="End-to-end custom application development services for enterprise software solutions."
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
          title="Custom Application Development"
          subtitle="Tailored Software Solutions"
          description="Build scalable, secure, and user-focused custom applications tailored to your business. From concept to deployment, MetaHorizon delivers end-to-end software engineering solutions."
          noBackground={true}
        />

        <ServiceDetail
          title="Custom Application Development Services"
          description="Your business is unique — your software should be too."
          overview="At MetaHorizon, we build custom applications designed to match your workflows, goals, and future vision. Whether you're launching a new product or upgrading legacy systems, our team brings together UX, engineering, architecture, and QA to deliver software that works beautifully and scales effortlessly. We believe great software isn't just built — it's crafted with insight, collaboration, and the right tech. Our custom application development services deliver software that fits your business perfectly, leveraging cutting-edge technologies and agile methodologies to build scalable, maintainable, and secure solutions that drive business value."
          features={[
            {
              title: 'Modern Tech Stack',
              description: 'Latest frameworks and languages including React, Angular, Vue, Node.js, .NET, Python, Flutter, and React Native.',
            },
            {
              title: 'Scalable Architecture',
              description: 'Cloud-native designs with microservices, containerization, and auto-scaling capabilities for growth.',
            },
            {
              title: 'Security First',
              description: 'Built-in security practices including authentication, authorization, encryption, and compliance standards.',
            },
            {
              title: 'Agile Development',
              description: 'Iterative development with regular feedback, transparent communication, and incremental delivery.',
            },
          ]}
          benefits={[
            'Solutions tailored to your unique business needs',
            'Scalable and maintainable code for long-term success',
            'Seamless integration with existing systems and platforms',
            'Modern technology stack for future-proof applications',
            'Agile development with regular feedback and demos',
            'Comprehensive testing and quality assurance',
            'Ongoing support and maintenance after launch',
          ]}
          noBackground={true}
        />

        <section className={styles.whatWeBuildSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>What We Build</h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive custom software solutions designed to meet your specific business requirements
              </p>
            </div>
            <ServiceCards services={whatWeBuild} />
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Companies Work With Us</h2>
              <p className={styles.sectionSubtitle}>
                Discover the MetaHorizon advantage for your custom software development needs
              </p>
            </div>
            <ServiceCards services={benefits} variant="twoColumns" />
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why MetaHorizon?</h2>
              <p className={styles.sectionSubtitle}>
                Because your software should do more than just function—it should drive growth, automate processes, and empower your team.
              </p>
            </div>
            <ServiceCards services={capabilities} variant="twoColumns" />
          </div>
        </section>

        <WhyMetaHorizon />

        <Testimonials />

        <FAQ
          title="Frequently Asked Questions About Custom Application Development"
          subtitle="Get answers to common questions about our custom software development services"
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
