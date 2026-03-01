import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import UseCases from '@/components/common/UseCases/UseCases';
import Testimonials from '@/components/common/Testimonials/Testimonials';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import FAQ from '@/components/common/FAQ/FAQ';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';
import WhyMetaHorizon from '@/components/common/WhyMetaHorizon/WhyMetaHorizon';
import Stats from '@/components/common/Stats/Stats';
import styles from './ProfessionalDevelopment.module.scss';

export const metadata: Metadata = {
  title: 'Professional Development & Upskilling Programs | Metahorizon Academy',
  description: 'Industry-aligned upskilling programs in Zero Trust, IAM, Cloud Security, AI, Data Analytics, and DevOps. Expert-led training with globally recognized certifications. Transform your career with Metahorizon Academy.',
  keywords: [
    'Professional Development',
    'Upskilling Programs',
    'IT Training',
    'Tech Certifications',
    'Zero Trust Training',
    'IAM Certification',
    'Cloud Security Course',
    'AI Training',
    'Data Analytics Course',
    'DevOps Bootcamp',
    'Career Development',
    'Tech Skills Training',
    'Industry Certification',
    'Metahorizon Academy',
    'Professional Training',
    'Technology Upskilling',
    'Cybersecurity Training',
    'Cloud Computing Course',
    'Machine Learning Training',
    'Leadership Development',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Professional Development & Upskilling Programs | Metahorizon Academy',
    description: 'Industry-aligned upskilling programs in Zero Trust, IAM, Cloud Security, AI, Data Analytics, and DevOps with globally recognized certifications.',
    url: 'https://metahorizon.com/academy/professional-development',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Academy Professional Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Development & Upskilling | Metahorizon Academy',
    description: 'Transform your career with expert-led training in Zero Trust, IAM, Cloud Security, AI, and DevOps.',
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
    canonical: 'https://metahorizon.com/academy/professional-development',
  },
};

const programs = [
  {
    number: '01',
    title: 'Zero Trust & IAM Upskilling',
    description: 'Master Identity & Access Management with hands-on training in SailPoint, Okta, CyberArk, and Azure AD. Learn risk assessment, compliance frameworks, and identity governance.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Cloud Security & Architecture Mastery',
    description: 'Design resilient, scalable cloud solutions across AWS, Azure, and GCP. Master cloud-native security, DevSecOps integration, and multi-cloud architecture planning.',
    iconKey: 'cloud',
  },
  {
    number: '03',
    title: 'Data Analytics & AI Essentials',
    description: 'Transform data into actionable insights with Python, SQL, Tableau, and Power BI. Learn data engineering, advanced analytics, and AI foundations for data-driven decision making.',
    iconKey: 'barChart3',
  },
  {
    number: '04',
    title: 'DevOps & Automation Bootcamps',
    description: 'Implement modern DevOps practices with Terraform, Ansible, Docker, and Kubernetes. Build CI/CD pipelines and master infrastructure as code with real-world deployments.',
    iconKey: 'cpu',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Hands-on Expert-Led Training',
    description: 'Learn from USA-based consulting experts with real-world scenarios and practical labs that mirror enterprise environments.',
    iconKey: 'users',
  },
  {
    number: '02',
    title: 'Globally Recognized Certifications',
    description: 'Earn industry-recognized certifications that validate your skills and enhance your professional credibility worldwide.',
    iconKey: 'award',
  },
  {
    number: '03',
    title: 'Industry-Aligned Curriculum',
    description: 'Stay ahead with cutting-edge curriculum designed around current market demands and emerging technology trends.',
    iconKey: 'trendingUp',
  },
  {
    number: '04',
    title: 'Portfolio-Building Projects',
    description: 'Build a professional portfolio with real-world projects that demonstrate your capabilities to potential employers.',
    iconKey: 'folder',
  },
  {
    number: '05',
    title: 'Flexible Learning Paths',
    description: 'Choose from self-paced, instructor-led, or hybrid learning options that fit your schedule and learning style.',
    iconKey: 'calendar',
  },
  {
    number: '06',
    title: 'Measurable Career Impact',
    description: 'Drive tangible results in your organization with skills that translate directly to career advancement and salary growth.',
    iconKey: 'target',
  },
];

const learningOutcomes = [
  {
    title: 'Master Zero Trust Security',
    description: 'Implement Zero Trust architecture and Identity Governance capabilities across enterprise environments.',
    iconKey: 'shieldCheck',
  },
  {
    title: 'Design Cloud Solutions',
    description: 'Architect resilient, scalable multi-cloud solutions with security-first principles across AWS, Azure, and GCP.',
    iconKey: 'cloud',
  },
  {
    title: 'Drive Data Insights',
    description: 'Transform raw data into actionable business insights using Python, SQL, Tableau, and Power BI.',
    iconKey: 'barChart3',
  },
  {
    title: 'Implement DevOps Practices',
    description: 'Build and deploy modern CI/CD pipelines with containerization, automation, and infrastructure as code.',
    iconKey: 'gitBranch',
  },
  {
    title: 'Lead Security Initiatives',
    description: 'Guide organizational security strategy with compliance frameworks, risk assessment, and governance best practices.',
    iconKey: 'userCheck',
  },
  {
    title: 'Accelerate Career Growth',
    description: 'Position yourself for senior roles with validated skills and certifications that employers value.',
    iconKey: 'trendingUp',
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
    quote: 'Metahorizon transformed our security architecture with a clear Zero Trust roadmap. Their team\'s expertise, responsiveness, and practical implementation approach significantly improved our risk posture and operational confidence.',
    name: 'Sophia Reynolds',
    role: 'CTO',
    company: 'FinTrust Solutions',
    image: '/assets/img/face1-120x120.jpg',
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
];

const faqs = [
  {
    question: 'Who should enroll in these professional development programs?',
    answer: 'Our programs are designed for professionals seeking career advancement, teams requiring organizational upskilling, recent graduates entering the tech industry, enterprise security leaders, and technology executives. Whether you\'re looking to switch careers, enhance your current skillset, or lead digital transformation, we have programs tailored to your goals.',
  },
  {
    question: 'What certifications will I earn?',
    answer: 'Depending on your chosen program, you\'ll earn globally recognized certifications in areas such as Zero Trust Architecture, Identity & Access Management, Cloud Security (AWS, Azure, GCP), Data Analytics, AI/ML, and DevOps. Our certifications are industry-recognized and valued by employers worldwide.',
  },
  {
    question: 'How long does each program take to complete?',
    answer: 'Program duration varies based on the track and learning pace. Bootcamps typically run 8-12 weeks, comprehensive certification programs take 12-16 weeks, and specialized courses can be completed in 4-6 weeks. We offer flexible scheduling including part-time, full-time, and self-paced options to accommodate working professionals.',
  },
  {
    question: 'Are these programs suitable for beginners?',
    answer: 'Yes! We offer programs for all skill levels. Our foundational courses are perfect for beginners with no prior experience, while our advanced tracks are designed for experienced professionals looking to specialize. Each program includes prerequisite information to help you choose the right starting point.',
  },
  {
    question: 'What kind of hands-on experience will I gain?',
    answer: 'Every program includes extensive hands-on labs, real-world projects, and portfolio-building assignments. You\'ll work with enterprise-grade tools and platforms, solve actual business problems, and complete capstone projects that demonstrate your skills to potential employers. Our labs mirror real enterprise environments.',
  },
  {
    question: 'Do you offer corporate training for teams?',
    answer: 'Absolutely! We provide customized corporate training programs tailored to your organization\'s specific needs. Our team training includes needs assessment, customized curriculum, dedicated instructors, progress tracking, and post-training support. Contact us for enterprise pricing and customized learning paths.',
  },
  {
    question: 'What support do you provide after course completion?',
    answer: 'We offer comprehensive post-course support including career counseling, resume reviews, interview preparation, job placement assistance, alumni networking opportunities, and continued access to learning resources. Our goal is your long-term career success, not just course completion.',
  },
  {
    question: 'How is this different from online learning platforms?',
    answer: 'Unlike generic online platforms, MetaHorizon Academy offers expert-led instruction from USA-based consultants with real enterprise experience, personalized mentorship, hands-on projects with real-world scenarios, industry-recognized certifications, career support services, and direct connections to employers. Our programs are designed for measurable career impact.',
  },
];

const stats = [
  {
    value: '5000+',
    label: 'Professionals Trained',
  },
  {
    value: '95%',
    label: 'Career Advancement Rate',
  },
  {
    value: '500+',
    label: 'Corporate Partners',
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
  },
];

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Metahorizon Academy',
  description: 'Professional development and upskilling programs in Zero Trust, IAM, Cloud Security, AI, Data Analytics, and DevOps.',
  url: 'https://metahorizon.com/academy/professional-development',
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
    contactType: 'admissions',
  },
  hasCourse: [
    {
      '@type': 'Course',
      name: 'Zero Trust & IAM Upskilling',
      description: 'Master Identity & Access Management with hands-on training in SailPoint, Okta, CyberArk, and Azure AD.',
      educationalCredentialAward: 'Certificate of Completion',
    },
    {
      '@type': 'Course',
      name: 'Cloud Security & Architecture Mastery',
      description: 'Design resilient, scalable cloud solutions across AWS, Azure, and GCP with security-first principles.',
      educationalCredentialAward: 'Certificate of Completion',
    },
    {
      '@type': 'Course',
      name: 'Data Analytics & AI Essentials',
      description: 'Transform data into actionable insights with Python, SQL, Tableau, and Power BI.',
      educationalCredentialAward: 'Certificate of Completion',
    },
    {
      '@type': 'Course',
      name: 'DevOps & Automation Bootcamps',
      description: 'Implement modern DevOps practices with Terraform, Ansible, Docker, and Kubernetes.',
      educationalCredentialAward: 'Certificate of Completion',
    },
  ],
};

export default function ProfessionalDevelopmentPage() {
  return (
    <>
      <SEO
        title="Professional Development & Upskilling Programs | Metahorizon Academy"
        description="Industry-aligned upskilling programs in Zero Trust, IAM, Cloud Security, AI, Data Analytics, and DevOps. Expert-led training with globally recognized certifications."
        canonical="/academy/professional-development"
      />

      <StructuredData
        type="EducationalOrganization"
        name="Metahorizon Academy"
        description="Professional development and upskilling programs in cutting-edge technologies."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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
          title="Professional Development & Upskilling"
          subtitle="Metahorizon Academy"
          description="Empowering professionals and graduates with industry-aligned upskilling in Zero Trust, IAM, cloud security, AI, data analytics, DevOps, and leadership. Expert-led training with hands-on labs, real-world projects, and globally recognized certifications for measurable career impact."
          noBackground={true}
        />

        <Stats stats={stats} />

        <ServiceDetail
          title="Transform Your Career with Future-Ready Skills"
          description="In today's rapidly evolving technology landscape, continuous learning isn't optional—it's essential. Metahorizon Academy delivers comprehensive professional development programs that bridge the gap between theoretical knowledge and real-world application."
          overview="Our expert instructors—USA-based consultants with extensive enterprise experience—guide you through cutting-edge curriculum designed around current market demands. From Zero Trust security to AI-powered analytics, from cloud architecture to DevOps automation, our programs equip you with the skills that employers value most."
          features={[
            {
              title: 'Expert-Led Instruction',
              description: 'Learn from seasoned consultants and architects who bring real-world enterprise experience to every session.',
            },
            {
              title: 'Hands-on Labs & Projects',
              description: 'Gain practical experience with enterprise-grade tools, platforms, and real-world scenarios that mirror actual work environments.',
            },
            {
              title: 'Industry Certifications',
              description: 'Earn globally recognized certifications that validate your expertise and enhance your professional credibility.',
            },
            {
              title: 'Career Support Services',
              description: 'Access career counseling, resume reviews, interview preparation, and job placement assistance to accelerate your professional growth.',
            },
          ]}
          benefits={[
            'Stay competitive in the fast-evolving tech landscape',
            'Earn certifications valued by top employers',
            'Build a portfolio of real-world projects',
            'Network with industry professionals and peers',
            'Access to exclusive job opportunities',
            'Continuous learning with alumni resources',
          ]}
          noBackground={true}
        />

        <section className={styles.programsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Programs</h2>
              <p className={styles.sectionSubtitle}>
                Choose from our comprehensive tracks designed for career advancement
              </p>
            </div>
            <ServiceCards services={programs} />
          </div>
        </section>

        <section className={styles.outcomesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Learning Outcomes</h2>
              <p className={styles.sectionSubtitle}>
                What you'll achieve by completing our programs
              </p>
            </div>
            <UseCases
              title=""
              subtitle=""
              useCases={learningOutcomes}
            />
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Choose Metahorizon Academy?</h2>
              <p className={styles.sectionSubtitle}>
                Discover the advantages that set our programs apart
              </p>
            </div>
            <ServiceCards services={benefits} />
          </div>
        </section>

        <WhyMetaHorizon />

        <Testimonials
          title="Success Stories from Our Alumni"
          subtitle="See how our programs have transformed careers and organizations"
          testimonials={testimonials}
        />

        <BlogInsights
          title="Latest Insights on Professional Development"
          subtitle="Stay informed with expert insights on career growth, technology trends, and skill development."
          viewAllHref="/blog"
        />

        <FAQ
          title="Frequently Asked Questions About Professional Development"
          subtitle="Get answers to common questions about our training programs"
          faqs={faqs}
        />

        <CTA
          title="Ready to Transform Your Career?"
          ctaText="Enroll Today"
          ctaHref="/contact-us"
          description="Join thousands of professionals who have accelerated their careers with Metahorizon Academy. Get started with a free consultation."
        />
      </div>
    </>
  );
}
