import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import styles from './Qvolv.module.scss';

export const metadata: Metadata = {
  title: 'Metahorizon Qvolv | Enterprise AR/VR/MR & Digital Twin Solutions',
  description: 'Metahorizon Qvolv delivers immersive AR/VR/MR solutions with AI-powered digital twins for enterprise training, remote collaboration, and predictive maintenance. Transform your operations with extended reality (XR) technology.',
  keywords: [
    'AR VR MR solutions',
    'augmented reality enterprise',
    'virtual reality training',
    'mixed reality collaboration',
    'digital twin technology',
    'XR analytics platform',
    'immersive training solutions',
    'remote collaboration VR',
    'industrial IoT integration',
    'predictive maintenance AR',
    '3D digital twins',
    'enterprise XR platform',
    'immersive manuals',
    'real-time collaboration',
    'Metahorizon Qvolv',
    'Metahorizon products',
    'Industry 4.0 solutions',
    'smart manufacturing XR',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Metahorizon Qvolv | Enterprise AR/VR/MR & Digital Twin Solutions',
    description: 'Immersive AR/VR/MR solutions with AI-powered digital twins for enterprise training, collaboration, and predictive maintenance.',
    url: 'https://metahorizon.com/products/qvolv',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/qvolv.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Qvolv - AR/VR/MR Digital Twin Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metahorizon Qvolv | Enterprise AR/VR/MR Solutions',
    description: 'Transform your enterprise with immersive AR/VR/MR technology, digital twins, and AI-powered analytics. Book a demo today.',
    images: ['/assets/img/qvolv.png'],
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
    canonical: 'https://metahorizon.com/products/qvolv',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Metahorizon Qvolv',
  alternateName: ['Qvolv', 'Metahorizon Qvolv XR'],
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud-based, Multi-platform (VR/AR/MR headsets, desktop, mobile)',
  description: 'Metahorizon Qvolv is an enterprise immersive technology platform delivering AR/VR/MR solutions with AI-powered digital twins for training, remote collaboration, maintenance, and predictive analytics.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '94',
  },
  provider: {
    '@type': 'Organization',
    name: 'Metahorizon',
    url: 'https://metahorizon.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://metahorizon.com/assets/img/meta-horizon-logo.png',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1303 W Walnut Hill, Suite 340',
      addressLocality: 'Irving',
      addressRegion: 'TX',
      postalCode: '75038',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-469-496-9588',
      contactType: 'Sales',
      email: 'contact@metahorizon.com',
    },
  },
  featureList: [
    'Ultra-Accurate Digital Twins',
    'Real-Time AR/VR/MR Collaboration',
    'AI-Powered XR Analytics',
    'Industrial IoT Integration',
    'Immersive Training Modules',
    'Remote Expert Support',
    '3D Interactive Manuals',
    'Predictive Maintenance',
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    description: 'Enterprise pricing available. Contact sales for custom quote.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Metahorizon Qvolv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metahorizon Qvolv is an enterprise immersive technology platform that combines AR (Augmented Reality), VR (Virtual Reality), and MR (Mixed Reality) with AI-powered digital twins. It enables organizations to create ultra-accurate digital replicas of physical assets for training, remote collaboration, maintenance, and predictive analytics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries can benefit from Qvolv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qvolv serves multiple industries including Manufacturing, Healthcare, Defence, Aviation, Energy, Education, and Pharmaceuticals. Our solutions are designed for mission-critical organizations that require accurate digital twins, immersive training, and real-time remote collaboration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hardware is required to use Qvolv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qvolv is designed for flexibility. It works across VR/AR/MR headsets (Meta Quest, Microsoft HoloLens, Magic Leap, Apple Vision Pro), desktop computers, tablets, and mobile devices. Our platform adapts to your existing hardware infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Qvolv integrate with our existing IoT systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Qvolv seamlessly integrates with Industrial IoT sensors and systems. Our platform converges AR/VR/MR with real-time IoT and sensor data to deliver live insights, smart reporting, and intelligent recommendations for predictive maintenance and rapid issue diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in Qvolv\'s product suite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qvolv includes three core products: Q-Connect (real-time immersive collaboration platform), Q-Intel (AI-powered XR analytics), and Q-Companion (flagship "Human 2.0" platform combining both with an AI-powered digital eBuddy for intelligent guidance).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implementation timelines vary based on complexity. Simple digital twin deployments can be completed in 4-6 weeks, while comprehensive enterprise implementations with custom training modules typically take 8-12 weeks. Our team provides white-glove onboarding and support throughout.',
      },
    },
  ],
};

const capabilities = [
  {
    number: '01',
    title: 'Ultra-Accurate Digital Twins',
    description: 'Create precise digital replicas of any physical asset regardless of size or complexity. Enable real-time monitoring, simulation, and predictive insights for mission-critical operations.',
    iconKey: 'box',
  },
  {
    number: '02',
    title: 'Immersive Training & Simulation',
    description: 'Deliver realistic, risk-free training experiences across engineering, medical, and industrial scenarios. Reduce training costs while improving retention and safety.',
    iconKey: 'graduation-cap',
  },
  {
    number: '03',
    title: 'Remote Collaboration',
    description: 'Connect teams and experts globally to collaborate on SOPs and products in immersive 3D or on any device with ultra-low latency. Share files and annotations instantly.',
    iconKey: 'users',
  },
  {
    number: '04',
    title: 'AI-Powered Analytics',
    description: 'Converge AR/VR/MR with IoT and real-time sensor data to deliver live insights, smart reporting, and intelligent recommendations for data-driven decisions.',
    iconKey: 'bar-chart',
  },
];

const industries = [
  { name: 'Manufacturing', icon: 'factory', description: 'Smart factory digital twins, assembly line training, predictive maintenance' },
  { name: 'Healthcare', icon: 'heart', description: 'Surgical simulation, anatomy training, patient care procedures' },
  { name: 'Defence', icon: 'shield', description: 'Tactical training, equipment maintenance, mission rehearsal' },
  { name: 'Aviation', icon: 'plane', description: 'Aircraft maintenance training, cockpit simulation, safety procedures' },
  { name: 'Energy', icon: 'zap', description: 'Power plant monitoring, safety training, remote inspection' },
  { name: 'Education', icon: 'book', description: 'Immersive learning modules, virtual labs, interactive coursework' },
  { name: 'Pharmaceuticals', icon: 'pill', description: 'Drug formulation training, compliance procedures, quality control' },
  { name: 'Automotive', icon: 'car', description: 'Assembly training, design visualization, maintenance procedures' },
];

const products = [
  {
    title: 'Q-Connect',
    subtitle: 'Real-Time Immersive Collaboration',
    description: 'Enable live virtual interactions with instant file sharing and annotations across physical and digital twin environments. Powered by VR/AR/MR and AI.',
    features: [
      'Live multi-user collaboration',
      'Instant file sharing',
      'Real-time annotations',
      'Cross-platform support',
      'Low-latency streaming',
    ],
  },
  {
    title: 'Q-Intel',
    subtitle: 'AI-Powered XR Analytics',
    description: 'Converge AR/VR/MR, IoT, and real-time sensor data to deliver live insights, smart reporting, and intelligent recommendations.',
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Smart reporting',
      'IoT integration',
      'AI recommendations',
    ],
  },
  {
    title: 'Q-Companion',
    subtitle: 'Human 2.0 Platform',
    description: 'Our flagship platform combining Q-Connect and Q-Intel with an AI-powered digital eBuddy for real-time collaboration and intelligent guidance.',
    features: [
      'AI digital eBuddy',
      'Combined collaboration + analytics',
      'Intelligent guidance',
      'Live IoT analytics',
      'Enterprise-ready',
    ],
    popular: true,
  },
];

export default function QvolvPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Metahorizon Qvolv | Enterprise AR/VR/MR & Digital Twin Solutions"
        description="Immersive AR/VR/MR solutions with AI-powered digital twins for enterprise training, remote collaboration, and predictive maintenance."
        canonical="/products/qvolv"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServicesHero
        title="Metahorizon Qvolv"
        subtitle="Immersive AR/VR/MR Solutions"
        description="Ultra-accurate digital twins and AI-powered extended reality for enterprise training, collaboration, and predictive maintenance."
      />

      <ServiceDetail
        title="Transform Your Enterprise with Immersive Technology"
        description="Metahorizon Qvolv is an immersive technology platform specializing in AR/VR/MR (Augmented Reality/Virtual Reality/Mixed Reality) solutions powered by AI for enterprise and mission-critical organizations."
        overview="Qvolv creates ultra-accurate digital twins and delivers immersive training, collaboration, and analytics platforms that transform how organizations operate. In today's complex industrial landscape, traditional training methods are costly and risky, remote collaboration lacks immersion, and maintenance operations depend on outdated documentation. Qvolv solves these challenges by creating precise digital replicas of physical assets, enabling realistic risk-free training, connecting global teams in immersive 3D environments, and providing real-time expert support with AI-powered insights. Organizations using Qvolv report 60% reduction in training costs, 45% faster maintenance operations, 70% improvement in knowledge retention, and significant reduction in operational downtime."
        features={[
          {
            title: 'Ultra-Accurate Digital Twins',
            description: 'Create precise digital replicas of any physical asset regardless of size or complexity for real-time monitoring and simulation.',
          },
          {
            title: 'Immersive Training Modules',
            description: 'Deliver realistic, risk-free training experiences across engineering, medical, and industrial scenarios with interactive 3D content.',
          },
          {
            title: 'Remote Expert Support',
            description: 'Connect with experts globally for real-time guidance on SOPs and products in immersive 3D or on any device.',
          },
          {
            title: '3D Interactive Manuals',
            description: 'Replace traditional documentation with interactive 3D manuals featuring guided steps and visual instructions.',
          },
          {
            title: 'Industrial IoT Integration',
            description: 'Unite IoT with VR/MR to convert real-time system data into immersive insights for predictive maintenance.',
          },
          {
            title: 'AI-Powered Analytics',
            description: 'Get intelligent recommendations and smart reporting from converged XR, IoT, and sensor data.',
          },
          {
            title: 'Multi-Platform Support',
            description: 'Works across VR/AR/MR headsets, desktop computers, tablets, and mobile devices.',
          },
          {
            title: 'Low-Latency Collaboration',
            description: 'Ultra-fast streaming and synchronization for seamless real-time collaboration.',
          },
        ]}
        benefits={[
          'Reduce training costs by up to 60%',
          'Accelerate maintenance operations by 45%',
          'Improve knowledge retention by 70%',
          'Minimize operational downtime',
          'Enhance safety and risk mitigation',
          'Enable faster, data-driven decision making',
          'Support 18+ languages for global teams',
          'Scale training across locations',
        ]}
      />

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Qvolv Product Suite</h2>
            <p className={styles.sectionSubtitle}>
              Three powerful platforms working together to transform your enterprise
            </p>
          </div>
          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <div key={index} className={`${styles.productCard} ${product.popular ? styles.popular : ''}`}>
                {product.popular && <div className={styles.popularBadge}>Flagship Platform</div>}
                <div className={styles.productHeader}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productSubtitle}>{product.subtitle}</p>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
                <ul className={styles.productFeatures}>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.productFeature}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive immersive technology solutions for mission-critical operations
            </p>
          </div>
          <ServiceCards services={capabilities} variant="twoColumns" />
        </div>
      </section>

      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <p className={styles.sectionSubtitle}>
              Trusted by enterprise and mission-critical organizations across diverse sectors
            </p>
          </div>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryIcon}>
                  {industry.icon === 'factory' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>
                    </svg>
                  )}
                  {industry.icon === 'heart' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  )}
                  {industry.icon === 'shield' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    </svg>
                  )}
                  {industry.icon === 'plane' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12h5"/><path d="M13 12h9"/><path d="M10 12v.5a2.5 2.5 0 0 0 5 0V12"/><path d="M10 12V7a5 5 0 0 1 10 0v5"/><path d="M10 12v5a2.5 2.5 0 0 0 5 0v-5"/>
                    </svg>
                  )}
                  {industry.icon === 'zap' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  )}
                  {industry.icon === 'book' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  )}
                  {industry.icon === 'pill' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
                    </svg>
                  )}
                  {industry.icon === 'car' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                    </svg>
                  )}
                </div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Proven Track Record</h2>
            <p className={styles.sectionSubtitle}>
              Delivering immersive solutions to enterprises worldwide
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>100+</span>
              <span className={styles.statLabel}>3D Assets Created</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>250+</span>
              <span className={styles.statLabel}>Immersive Modules</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>18</span>
              <span className={styles.statLabel}>Languages Supported</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>80+</span>
              <span className={styles.statLabel}>Customers Served</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>9+</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Training Modules by Sector</h2>
            <p className={styles.sectionSubtitle}>
              Specialized immersive training designed for industry-specific requirements
            </p>
          </div>
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/>
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Engineering Training</h3>
              <p className={styles.useCaseDescription}>
                Coding environments, algorithm simulations, mechanical design, 3D modeling, and machine operations training in immersive virtual environments.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  <path d="M12 10v4"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Medical Training</h3>
              <p className={styles.useCaseDescription}>
                Anatomy visualization, surgical procedure simulation, patient care protocols, and emergency response training with realistic haptic feedback.
              </p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
                </svg>
              </div>
              <h3 className={styles.useCaseTitle}>Pharmacy Training</h3>
              <p className={styles.useCaseDescription}>
                Drug formulation procedures, dosage calculations, patient counseling scenarios, clinical practices, and pharmacy management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Get answers to common questions about Metahorizon Qvolv
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What is Metahorizon Qvolv?</h3>
              <p className={styles.faqAnswer}>
                Metahorizon Qvolv is an enterprise immersive technology platform that combines AR (Augmented Reality), VR (Virtual Reality), and MR (Mixed Reality) with AI-powered digital twins. It enables organizations to create ultra-accurate digital replicas of physical assets for training, remote collaboration, maintenance, and predictive analytics.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What industries can benefit from Qvolv?</h3>
              <p className={styles.faqAnswer}>
                Qvolv serves multiple industries including Manufacturing, Healthcare, Defence, Aviation, Energy, Education, and Pharmaceuticals. Our solutions are designed for mission-critical organizations that require accurate digital twins, immersive training, and real-time remote collaboration.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What hardware is required to use Qvolv?</h3>
              <p className={styles.faqAnswer}>
                Qvolv is designed for flexibility. It works across VR/AR/MR headsets (Meta Quest, Microsoft HoloLens, Magic Leap, Apple Vision Pro), desktop computers, tablets, and mobile devices. Our platform adapts to your existing hardware infrastructure.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Can Qvolv integrate with our existing IoT systems?</h3>
              <p className={styles.faqAnswer}>
                Yes, Qvolv seamlessly integrates with Industrial IoT sensors and systems. Our platform converges AR/VR/MR with real-time IoT and sensor data to deliver live insights, smart reporting, and intelligent recommendations for predictive maintenance and rapid issue diagnosis.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What is included in Qvolv's product suite?</h3>
              <p className={styles.faqAnswer}>
                Qvolv includes three core products: Q-Connect (real-time immersive collaboration platform), Q-Intel (AI-powered XR analytics), and Q-Companion (flagship "Human 2.0" platform combining both with an AI-powered digital eBuddy for intelligent guidance).
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>How long does implementation take?</h3>
              <p className={styles.faqAnswer}>
                Implementation timelines vary based on complexity. Simple digital twin deployments can be completed in 4-6 weeks, while comprehensive enterprise implementations with custom training modules typically take 8-12 weeks. Our team provides white-glove onboarding and support throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Enterprise with Immersive Technology?"
        ctaText="Book a Demo"
        ctaHref="/contact-us"
        description="Experience the power of AR/VR/MR and digital twins. See how Qvolv can revolutionize your training, collaboration, and maintenance operations."
      />
    </div>
  );
}
