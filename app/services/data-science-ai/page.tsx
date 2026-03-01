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
import styles from './DataScienceAI.module.scss';

export const metadata: Metadata = {
  title: 'Data Science, AI/ML & Advanced Analytics Services | Enterprise AI Solutions - Metahorizon',
  description: 'Enterprise Data Science, AI/ML and Advanced Analytics solutions with machine learning, deep learning, generative AI, LLMs, predictive analytics, NLP, computer vision, and MLOps.',
  keywords: [
    'Data Science services',
    'Machine Learning development',
    'Deep Learning solutions',
    'Generative AI',
    'Large Language Models',
    'LLM development',
    'Predictive Analytics',
    'Prescriptive Analytics',
    'Real-time Analytics',
    'Streaming Analytics',
    'Natural Language Processing',
    'NLP services',
    'Computer Vision',
    'MLOps',
    'Model lifecycle management',
    'Data Visualization',
    'Business Intelligence',
    'Self-Service BI',
    'AI Governance',
    'Responsible AI',
    'AI Ethics',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Data Science, AI/ML & Advanced Analytics Services | Metahorizon',
    description: 'Enterprise AI/ML solutions with machine learning, generative AI, LLMs, predictive analytics, NLP, and computer vision.',
    url: 'https://metahorizon.com/services/data-science-ai',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon AI ML Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Science, AI/ML & Advanced Analytics | Metahorizon',
    description: 'Enterprise AI/ML solutions with machine learning, generative AI, LLMs, and predictive analytics.',
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
    canonical: 'https://metahorizon.com/services/data-science-ai',
  },
};

const capabilities = [
  {
    number: '01',
    title: 'Machine Learning & Deep Learning Models',
    description: 'Custom development and deployment of supervised, unsupervised, and reinforcement learning solutions.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Generative AI & Large Language Models',
    description: 'Build and fine-tune LLMs, chatbots, content generators, and intelligent automation workflows.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Predictive & Prescriptive Analytics',
    description: 'Forecast outcomes, identify risks, and recommend optimal actions using advanced statistical and AI techniques.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Real-time & Streaming Analytics',
    description: 'Process high-velocity data with instant insights and live dashboards.',
    iconKey: 'event',
  },
  {
    number: '05',
    title: 'Natural Language Processing & Computer Vision',
    description: 'Extract meaning from text, documents, images, and video for intelligent automation.',
    iconKey: 'career',
  },
  {
    number: '06',
    title: 'MLOps & Automated Model Lifecycle',
    description: 'End-to-end pipelines for model training, deployment, monitoring, and retraining at scale.',
    iconKey: 'shield',
  },
  {
    number: '07',
    title: 'Advanced Data Visualization & Self-Service BI',
    description: 'Interactive dashboards and reporting that empower business users.',
    iconKey: 'support',
  },
  {
    number: '08',
    title: 'AI Governance, Ethics & Responsible AI',
    description: 'Bias detection, explainability, compliance, and secure AI frameworks.',
    iconKey: 'target',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Faster Data-Driven Decisions',
    description: 'Make faster, more accurate data-driven decisions with advanced analytics and AI-powered insights.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Significant Cost Savings',
    description: 'Achieve significant cost savings through predictive maintenance and process automation.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Real-Time Fraud Detection',
    description: 'Detect fraud, risks, and opportunities in real time with advanced monitoring and alerts.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Hyper-Personalized Experiences',
    description: 'Deliver hyper-personalized customer experiences at scale with AI-driven insights.',
    iconKey: 'event',
  },
  {
    number: '05',
    title: 'Reduced Time-to-Insight',
    description: 'Reduce time-to-insight from weeks to hours with automated analytics and reporting.',
    iconKey: 'career',
  },
  {
    number: '06',
    title: 'Secure AI Scaling',
    description: 'Scale AI initiatives securely with full governance and compliance frameworks.',
    iconKey: 'shield',
  },
];

const testimonials = [
  {
    quote: 'Metahorizon\'s professional training programs gave our team real-world, applicable skills in AI and DevOps. The instructors were exceptional, and the impact on our productivity was immediate.',
    name: 'Carlos Mendoza',
    role: 'Sr. Engineer',
    company: 'Vertex Innovations',
    image: '/assets/img/avatar-120x120.jpg',
    rating: 5,
  },
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
];

const faqs = [
  {
    question: 'What is the difference between predictive and prescriptive analytics?',
    answer: 'Predictive analytics forecasts what will happen based on historical data and patterns. Prescriptive analytics goes further by recommending specific actions to take based on those predictions, helping you make optimal decisions.',
  },
  {
    question: 'How can generative AI benefit my business?',
    answer: 'Generative AI can automate content creation, enhance customer service with intelligent chatbots, generate code, create marketing materials, and streamline workflows. Our LLM solutions are customized to your specific business needs and data.',
  },
  {
    question: 'What is MLOps and why do I need it?',
    answer: 'MLOps (Machine Learning Operations) is the practice of automating and streamlining the entire ML lifecycle from development to deployment to monitoring. It ensures your models remain accurate, scalable, and maintainable in production environments.',
  },
  {
    question: 'Do you provide real-time analytics solutions?',
    answer: 'Yes, we build real-time and streaming analytics platforms that process high-velocity data from multiple sources, providing instant insights through live dashboards and automated alerts for time-critical decisions.',
  },
  {
    question: 'How do you ensure AI ethics and responsible AI practices?',
    answer: 'We implement comprehensive AI governance frameworks that include bias detection and mitigation, model explainability, fairness assessments, compliance with regulations, and transparent AI decision-making processes.',
  },
  {
    question: 'What industries do you serve with AI/ML solutions?',
    answer: 'We serve diverse industries including healthcare, finance, retail, manufacturing, telecom, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Science, AI/ML & Advanced Analytics Services',
  description: 'Enterprise AI/ML solutions including machine learning, deep learning, generative AI, LLMs, predictive analytics, NLP, computer vision, and MLOps.',
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
    name: 'AI/ML Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machine Learning & Deep Learning',
          description: 'Custom ML/DL model development and deployment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Generative AI & LLMs',
          description: 'Large Language Models and generative AI solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Predictive Analytics',
          description: 'Forecast outcomes and recommend optimal actions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NLP & Computer Vision',
          description: 'Text, image, and video analysis for automation',
        },
      },
    ],
  },
};

export default function DataScienceAIPage() {
  return (
    <>
      <SEO
        title="Data Science, AI/ML & Advanced Analytics Services | Enterprise AI - MetaHorizon"
        description="Enterprise AI/ML solutions with machine learning, deep learning, generative AI, LLMs, predictive analytics, NLP, computer vision & MLOps."
        canonical="/services/data-science-ai"
      />
      
      <StructuredData
        type="LocalBusiness"
        name="MetaHorizon AI ML Services"
        description="Enterprise data science, artificial intelligence, and machine learning solutions."
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
          title="Data Science, AI/ML & Advanced Analytics"
          subtitle="Intelligent Data Solutions"
          description="Metahorizon delivers enterprise-grade Data Science, AI/ML, and Advanced Analytics solutions that transform raw data into intelligent, predictive, and actionable business outcomes."
          noBackground={true}
        />
        
        <ServiceDetail
          title="Data Science, AI/ML & Advanced Analytics"
          description="End-to-end data science and AI solutions designed for enterprises navigating complex digital ecosystems."
          overview="Metahorizon provides end-to-end Data Science, AI/ML, and Advanced Analytics solutions designed for enterprises navigating complex digital ecosystems. From building production-ready AI models and MLOps pipelines to delivering real-time predictive insights and generative AI applications, we translate large, complex datasets into meaningful business intelligence. Whether you're forecasting market trends, automating decision-making, personalizing customer experiences, or optimizing operations at scale, our framework is built for strategic growth securely, compliantly, and with seamless integration across cloud, identity, and security platforms."
          features={[
            {
              title: 'Predictive Analytics',
              description: 'Forecast trends and outcomes with advanced statistical models and machine learning algorithms.',
            },
            {
              title: 'Machine Learning Models',
              description: 'Custom ML solutions for classification, prediction, automation, and intelligent decision-making.',
            },
            {
              title: 'Data Visualization',
              description: 'Interactive dashboards and reports that make complex data understandable and actionable.',
            },
            {
              title: 'Business Intelligence',
              description: 'Comprehensive BI solutions with self-service analytics for enterprise-wide insights.',
            },
          ]}
          benefits={[
            'Make faster, more accurate data-driven decisions',
            'Achieve significant cost savings through predictive maintenance',
            'Detect fraud, risks, and opportunities in real time',
            'Deliver hyper-personalized customer experiences at scale',
            'Reduce time-to-insight from weeks to hours',
            'Scale AI initiatives securely with full governance',
          ]}
        />
        
        <section className={styles.capabilitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive AI/ML and analytics capabilities to transform your business
              </p>
            </div>
            <ServiceCards services={capabilities} />
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Benefits for Your Business</h2>
              <p className={styles.sectionSubtitle}>
                Discover how AI and advanced analytics can drive your business forward
              </p>
            </div>
            <ServiceCards services={benefits} />
          </div>
        </section>

        <UseCases
          title="Use Cases"
          subtitle="Transform your business with AI-powered insights across key areas"
        />
        
        <Testimonials
          title="Trusted by Industry Leaders"
          subtitle="See what our clients say about our AI/ML and data science services"
          testimonials={testimonials}
        />
        
        <FAQ
          title="Frequently Asked Questions About AI/ML & Data Science"
          subtitle="Get answers to common questions about our artificial intelligence and analytics services"
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
