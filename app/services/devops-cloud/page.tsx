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
import styles from './DevOpsCloud.module.scss';

export const metadata: Metadata = {
  title: 'DevOps & Cloud Automation Services | Cloud Migration & CI/CD - Metahorizon',
  description: 'Enterprise DevOps & Cloud Automation services with CI/CD pipeline engineering, Kubernetes, Infrastructure as Code (IaC), cloud migration (AWS, Azure, GCP), and automated monitoring.',
  keywords: [
    'DevOps services',
    'Cloud Automation',
    'CI/CD Pipeline',
    'Kubernetes',
    'Docker',
    'Container Orchestration',
    'Infrastructure as Code',
    'IaC',
    'Terraform',
    'Cloud Migration',
    'AWS',
    'Azure',
    'Google Cloud Platform',
    'GCP',
    'Cloud-Native Architecture',
    'DevOps Consulting',
    'Automated Monitoring',
    'Cloud Infrastructure',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'DevOps & Cloud Automation Services | Metahorizon',
    description: 'Streamline your infrastructure, accelerate releases, and build scalable cloud-native systems with expert DevOps services.',
    url: 'https://metahorizon.com/services/devops-cloud',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon DevOps Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & Cloud Automation Services | Metahorizon',
    description: 'Enterprise DevOps & Cloud Automation with CI/CD, Kubernetes, IaC, and cloud migration.',
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
    canonical: 'https://metahorizon.com/services/devops-cloud',
  },
};

const offerings = [
  {
    number: '01',
    title: 'Cloud Architecture & Migration',
    description: 'Move to the cloud without breaking your systems. We design future-ready cloud environments on AWS, Azure, and GCP.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'CI/CD Pipeline Engineering',
    description: 'Deliver updates constantly with automated pipelines that reduce deployment times and shrink failure rates.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Kubernetes & Containerization',
    description: 'Implement container-first infrastructure with Kubernetes, Docker, and Helm for modern app deployment.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Infrastructure as Code (IaC)',
    description: 'Automate your entire environment using Terraform, CloudFormation, Pulumi, and Ansible.',
    iconKey: 'event',
  },
  {
    number: '05',
    title: 'Automation & Monitoring',
    description: 'Eliminate repetitive tasks and gain real-time visibility into application health and performance.',
    iconKey: 'career',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Faster Deployments',
    description: 'Accelerate release cycles with automated pipelines and streamlined workflows.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and auto-remediation keep your systems running smoothly.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture that grows with your business demands.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Secure and Automated Systems',
    description: 'Optimize cloud spending with right-sizing and resource management.',
    iconKey: 'event',
  },
];

const useCases = [
  {
    title: 'Cloud Migration & Modernization',
    description: 'Seamlessly migrate legacy systems to cloud-native architectures with minimal downtime.',
    iconKey: 'shield',
  },
  {
    title: 'Continuous Integration & Delivery',
    description: 'Implement automated build, test, and deployment pipelines for rapid, reliable releases.',
    iconKey: 'cpu',
  },
  {
    title: 'Infrastructure Automation',
    description: 'Automate provisioning, configuration, and management of cloud infrastructure at scale.',
    iconKey: 'target',
  },
  {
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes and Docker.',
    iconKey: 'event',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Gain real-time insights into application performance with comprehensive monitoring solutions.',
    iconKey: 'career',
  },
];

const testimonials = [
  {
    quote: 'Partnering with Metahorizon accelerated our cloud modernization journey. Their consultants delivered scalable, future-ready solutions that improved performance, reduced costs, and empowered our engineering teams.',
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'NexaDigital Systems',
    image: '/assets/img/face2-120x120.jpg',
    rating: 5,
  },
  {
    quote: 'Metahorizon transformed our security architecture with a clear Zero Trust roadmap. Their team\'s expertise, responsiveness, and practical implementation approach significantly improved our risk posture and operational confidence.',
    name: 'Sophia Reynolds',
    role: 'CTO',
    company: 'FinTrust Solutions',
    image: '/assets/img/face1-120x120.jpg',
    rating: 5,
  },
  {
    quote: 'Metahorizon\'s professional training programs gave our team real-world, applicable skills in AI and DevOps. The instructors were exceptional, and the impact on our productivity was immediate.',
    name: 'Carlos Mendoza',
    role: 'Sr. Engineer',
    company: 'Vertex Innovations',
    image: '/assets/img/avatar-120x120.jpg',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What is DevOps and why do I need it?',
    answer: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. It helps organizations achieve faster time-to-market, improved collaboration, and better reliability.',
  },
  {
    question: 'Which cloud platforms do you support?',
    answer: 'We support all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our team is certified across multiple cloud providers and can help you choose the right platform for your needs.',
  },
  {
    question: 'How long does a typical cloud migration take?',
    answer: 'Cloud migration timelines vary based on complexity and size. Simple migrations can take 4-8 weeks, while large-scale enterprise migrations may take 3-6 months. We provide detailed assessment and migration roadmaps during consultation.',
  },
  {
    question: 'What is Infrastructure as Code (IaC)?',
    answer: 'Infrastructure as Code is the practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes. Tools like Terraform, CloudFormation, and Ansible enable version-controlled, repeatable infrastructure deployments.',
  },
  {
    question: 'Do you provide 24/7 monitoring and support?',
    answer: 'Yes, we offer 24/7 monitoring and support services for your DevOps infrastructure. Our team proactively monitors your systems, responds to alerts, and ensures high availability and performance.',
  },
  {
    question: 'Can you help with Kubernetes implementation?',
    answer: 'Absolutely. We provide end-to-end Kubernetes services including cluster setup, containerization, Helm chart development, auto-scaling configuration, and ongoing management. Our team is certified in Kubernetes administration.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DevOps & Cloud Automation Services',
  description: 'Enterprise DevOps and Cloud Automation services with CI/CD, Kubernetes, Infrastructure as Code, cloud migration, and automated monitoring.',
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
    name: 'DevOps Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Migration',
          description: 'Migrate to AWS, Azure, or GCP with minimal downtime',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CI/CD Pipeline Engineering',
          description: 'Automated build, test, and deployment pipelines',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kubernetes & Containerization',
          description: 'Container orchestration with Kubernetes and Docker',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrastructure as Code',
          description: 'Automated infrastructure with Terraform and Ansible',
        },
      },
    ],
  },
};

export default function DevOpsCloudPage() {
  return (
    <>
      <SEO
        title="DevOps & Cloud Automation Services | Cloud Migration & CI/CD - MetaHorizon"
        description="Enterprise DevOps & Cloud Automation with CI/CD pipeline engineering, Kubernetes, Infrastructure as Code, cloud migration (AWS, Azure, GCP), and automated monitoring."
        canonical="/services/devops-cloud"
      />
      
      <StructuredData
        type="LocalBusiness"
        name="MetaHorizon DevOps Services"
        description="Enterprise DevOps and Cloud Automation services for modern digital enterprises."
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
          title="DevOps & Cloud Automation"
          subtitle="Streamline Your Infrastructure"
          description="Streamline your infrastructure, accelerate releases, and build scalable cloud-native systems. Transform tangled infrastructure into streamlined, automated, high-performing systems built for modern enterprises."
          noBackground={true}
        />

        <ServiceDetail
          title="DevOps & Cloud Automation Services"
          description="Transform outdated delivery pipelines and slow release cycles into streamlined, automated, high-performing systems."
          overview="At Metahorizon, we transform outdated delivery pipelines and slow release cycles into streamlined, automated, high-performing systems. Our DevOps, Cloud & Automation services are built for organizations that want to modernize with confidence. We help you adopt cloud-native practices, eliminate manual inefficiencies, enhance reliability, and build the automated backbone your digital products need to scale."
          features={[
            {
              title: 'CI/CD Pipeline',
              description: 'Automated build, test, and deployment pipelines for rapid delivery.',
            },
            {
              title: 'Cloud Migration',
              description: 'Seamless migration to AWS, Azure, or Google Cloud Platform.',
            },
            {
              title: 'Infrastructure as Code',
              description: 'Automated infrastructure provisioning with Terraform and CloudFormation.',
            },
            {
              title: 'Container Orchestration',
              description: 'Kubernetes and Docker solutions for scalable applications.',
            },
          ]}
          benefits={[
            'Faster time to market with automated deployments',
            'Improved deployment frequency and reliability',
            'Reduced failure rate of releases',
            'Faster recovery time with auto-remediation',
            'Scalable and cost-effective cloud infrastructure',
            'Enhanced collaboration between Dev and Ops teams',
          ]}
          noBackground={true}
        />

        <section className={styles.offeringsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Comprehensive Offerings</h2>
              <p className={styles.sectionSubtitle}>
                End-to-end DevOps and cloud automation services for modern enterprises
              </p>
            </div>
            <ServiceCards services={offerings} />
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Perfect For Organizations That Want</h2>
              <p className={styles.sectionSubtitle}>
                Achieve business outcomes with modern DevOps practices
              </p>
            </div>
            <ServiceCards services={benefits} variant="twoColumns" />
          </div>
        </section>

        <UseCases
          title="DevOps Use Cases"
          subtitle="Transform your delivery pipeline with proven automation strategies"
        />
        
        <Testimonials
          title="Trusted by Industry Leaders"
          subtitle="See what our clients say about our DevOps and cloud services"
          testimonials={testimonials}
        />

        <FAQ
          title="Frequently Asked Questions About DevOps & Cloud Automation"
          subtitle="Get answers to common questions about our DevOps services"
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
