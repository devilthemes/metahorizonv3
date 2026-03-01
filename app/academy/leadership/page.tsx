import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import UseCases from '@/components/common/UseCases/UseCases';
import Testimonials from '@/components/common/Testimonials/Testimonials';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import FAQ from '@/components/common/FAQ/FAQ';
import CTA from '@/components/common/CTA/CTA';
import WhyAcademy from '@/components/common/WhyAcademy/WhyAcademy';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';
import styles from './Leadership.module.scss';

export const metadata: Metadata = {
  title: 'Leadership Training Programs | Executive Development - Metahorizon Academy',
  description: 'Develop agile leadership, communication for tech teams, digital transformation strategies, and executive upskilling. Certification prep including CISSP, AWS Security, PMP. Career coaching and networking opportunities.',
  keywords: [
    'Leadership Training',
    'Executive Development',
    'Agile Leadership',
    'Professional Skills',
    'Digital Transformation',
    'Communication Skills',
    'Tech Leadership',
    'CISSP Preparation',
    'PMP Certification',
    'AWS Security',
    'Career Coaching',
    'Metahorizon Academy',
    'Leadership Development',
    'Corporate Training',
    'Management Training',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Leadership Training Programs | Executive Development - Metahorizon Academy',
    description: 'Develop agile leadership, communication for tech teams, digital transformation strategies, and executive upskilling.',
    url: 'https://metahorizon.com/academy/leadership/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Academy Leadership Training',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership Training Programs | Metahorizon Academy',
    description: 'Executive upskilling, agile leadership, and professional skills training for tech professionals.',
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
    canonical: 'https://metahorizon.com/academy/leadership/',
  },
};

const leadershipTracks = [
  {
    number: '01',
    title: 'Agile Leadership Workshops',
    description: 'Develop adaptive leadership capabilities with hands-on workshops focused on team empowerment, iterative delivery, and cross-functional collaboration. Learn to lead in fast-paced technology environments with confidence.',
    iconKey: 'users',
  },
  {
    number: '02',
    title: 'Communication for Tech Teams',
    description: 'Master stakeholder management, technical presentations, and cross-team collaboration. Learn to translate complex technical concepts for non-technical audiences and drive alignment across organizations.',
    iconKey: 'support',
  },
  {
    number: '03',
    title: 'Digital Transformation Strategies',
    description: 'Lead organizational change and implement emerging technologies that deliver measurable business value. Create innovation roadmaps and drive digital transformation initiatives successfully.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Executive Upskilling Programs',
    description: 'Advanced development for C-suite and senior executives. Focus on strategic technology leadership, cybersecurity governance, digital business models, and data-driven decision making.',
    iconKey: 'brain',
  },
  {
    number: '05',
    title: 'Certification Preparation',
    description: 'Comprehensive exam prep for CISSP, AWS Security Specialty, PMP, and other industry-leading certifications. Includes exam strategies, practice labs, and mock assessments for success.',
    iconKey: 'shield',
  },
  {
    number: '06',
    title: 'Career Development Services',
    description: 'Personalized career coaching, mock interviews, resume optimization, and networking opportunities. Access our international placement network for career advancement and global opportunities.',
    iconKey: 'briefcase',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Practical & Hands-On',
    description: 'Targeted bootcamps with real tools, case studies, and enterprise projects. Learn from actual consulting engagements, not just theory.',
    iconKey: 'cpu',
  },
  {
    number: '02',
    title: 'Career Accelerating',
    description: 'Resume optimization, mock interviews, networking introductions, and access to international placement network. Measurable career advancement within months.',
    iconKey: 'trendingUp',
  },
  {
    number: '03',
    title: 'Flexible & Accessible',
    description: 'Evening, weekend, and online options designed for working professionals. Corporate onsite training available. Self-paced and instructor-led formats.',
    iconKey: 'cloud',
  },
  {
    number: '04',
    title: 'Expert-Led Training',
    description: 'Learn from certified professionals with real-world consulting experience from MetaHorizon Inc. USA-based practice. Mentorship and ongoing support included.',
    iconKey: 'users',
  },
];

const targetAudience = [
  {
    title: 'Working Professionals',
    description: 'Mid-to-senior level professionals seeking career advancement into leadership roles or transitioning to new technology domains.',
    iconKey: 'briefcase',
  },
  {
    title: 'Tech Teams',
    description: 'Engineering and IT teams needing enhanced communication, collaboration, and leadership capabilities for better cross-functional delivery.',
    iconKey: 'users',
  },
  {
    title: 'Executives & Leaders',
    description: 'C-suite and senior leaders requiring strategic technology knowledge, digital transformation expertise, and cybersecurity governance understanding.',
    iconKey: 'trophy',
  },
  {
    title: 'Organizations',
    description: 'Companies looking for corporate onsite training to upskill teams, improve leadership capabilities, and drive digital transformation initiatives.',
    iconKey: 'target',
  },
];

const faqs = [
  {
    question: 'What leadership and professional skills programs do you offer?',
    answer: 'We offer tailored workshops for agile leadership, communication for tech teams, digital transformation strategies, and executive upskilling. We also provide certification preparation for CISSP, AWS Security, PMP, and other industry-leading credentials, plus career coaching and networking services.',
  },
  {
    question: 'How flexible are the learning schedules?',
    answer: 'Our programs are designed for working professionals with flexible delivery options including online, evenings, weekends, and corporate onsite training. Self-paced and instructor-led formats are available to accommodate busy schedules.',
  },
  {
    question: 'What is the duration of each program?',
    answer: 'Program durations vary by track. Agile Leadership and Communication workshops typically run 2-4 weeks. Digital Transformation and Executive Upskilling programs run 6-12 weeks. Certification prep courses range from 8-16 weeks depending on the certification and your prior experience.',
  },
  {
    question: 'Do you provide corporate or onsite training?',
    answer: 'Yes, we offer customized corporate onsite training programs tailored to your organization\'s specific needs. Our experts can deliver training at your location or virtually for distributed teams. Contact us for a customized proposal.',
  },
  {
    question: 'What certifications can I prepare for?',
    answer: 'We offer comprehensive preparation for CISSP (Certified Information Systems Security Professional), AWS Security Specialty, PMP (Project Management Professional), and other industry-leading certifications. Our prep includes exam strategies, practice labs, and mock assessments.',
  },
  {
    question: 'What career support is available after course completion?',
    answer: 'We provide ongoing career support including resume optimization, mock interviews, networking introductions, and access to our international placement network. Our career coaches work with you to identify opportunities and prepare for interviews in your target roles.',
  },
  {
    question: 'How is MetaHorizon Academy different from other training providers?',
    answer: 'Our programs are powered by real-world consulting experience from MetaHorizon Inc., a USA-based consulting practice. You learn from active practitioners, work on actual enterprise scenarios, and gain skills that are immediately applicable. Our 4-step methodology ensures personalized, impactful learning.',
  },
  {
    question: 'Are there prerequisites for leadership programs?',
    answer: 'Most programs are designed for professionals with some work experience. Executive programs typically require 5+ years of experience. Entry-level workshops are available for those new to leadership. Our advisors help you choose the right program based on your background and goals.',
  },
];

export default function LeadershipPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Leadership Training Programs | Executive Development - MetaHorizon Academy"
        description="Develop agile leadership, communication for tech teams, digital transformation strategies, and executive upskilling."
        canonical="/academy/leadership/"
      />

      <StructuredData
        type="EducationalOrganization"
        name="MetaHorizon Academy - Leadership Training"
        description="Professional leadership training and executive development programs for technology professionals and organizations."
      />

      <ServicesHero
        title="Leadership & Professional Skills"
        subtitle="Executive Development & Career Acceleration"
        description="We offer tailored workshops for agile leadership, communication for tech teams, digital transformation strategies, and executive upskilling. Including certification prep (CISSP, AWS Security, PMP), career coaching, mock interviews, and networking — all powered by our global consulting experience for measurable career acceleration."
        noBackground={true}
      />

      <ServiceDetail
        title="Professional Skills Development for Technology Leaders"
        description="Develop the leadership, communication, and strategic skills needed to excel in today's fast-paced technology landscape."
        overview="MetaHorizon Academy's Leadership & Professional Skills programs are designed for working professionals, tech teams, and executives seeking to accelerate their careers. Our programs combine expert instruction with real-world consulting insights from MetaHorizon Inc., a USA-based consulting practice. Through our proven 4-step methodology — Discover, Assess, Design, Enable — we create personalized learning paths that deliver immediate impact and long-term career growth."
        features={[
          {
            title: 'Agile Leadership',
            description: 'Master adaptive management, team empowerment, and iterative delivery for cross-functional technology teams.',
          },
          {
            title: 'Communication Excellence',
            description: 'Develop stakeholder management, technical presentation, and cross-team collaboration skills.',
          },
          {
            title: 'Digital Transformation',
            description: 'Learn to drive organizational change and implement emerging technologies that deliver business value.',
          },
          {
            title: 'Executive Development',
            description: 'Advanced training in strategic technology leadership, cybersecurity governance, and data-driven decision making.',
          },
        ]}
        benefits={[
          'Expert-led training with real-world consulting insights',
          'Flexible delivery: online, evenings, weekends, or corporate onsite',
          'Certification preparation with exam strategies and practice labs',
          'Career coaching, mock interviews, and networking opportunities',
          'Access to international placement network',
          'Personalized learning paths tailored to your goals',
        ]}
        noBackground={true}
      />

      <section className={styles.tracksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Leadership Tracks</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive programs designed for career acceleration and leadership excellence
            </p>
          </div>
          <ServiceCards services={leadershipTracks} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why MetaHorizon Academy?</h2>
            <p className={styles.sectionSubtitle}>
              Our upskilling approach delivers measurable results through proven methodology
            </p>
          </div>
          <ServiceCards services={benefits} variant="twoColumns" />
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our 4-Step Upskilling Methodology</h2>
            <p className={styles.sectionSubtitle}>
              A proven framework for personalized, impactful learning
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>01</div>
              <h3 className={styles.approachTitle}>Discover</h3>
              <p className={styles.approachDescription}>
                Assess current skills, career goals, team gaps, and industry trends to uncover high-impact upskilling opportunities aligned with your aspirations.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>02</div>
              <h3 className={styles.approachTitle}>Assess</h3>
              <p className={styles.approachDescription}>
                Map individual and organizational skill levels against global standards, certifications, and MetaHorizon Inc.'s real-world consulting benchmarks in IAM, Zero Trust, cloud, and more.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>03</div>
              <h3 className={styles.approachTitle}>Design</h3>
              <p className={styles.approachDescription}>
                Create personalized, flexible learning paths with hands-on labs, real projects, bootcamps, and blended delivery (online, evenings, weekends, or corporate onsite) tailored to busy professionals.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>04</div>
              <h3 className={styles.approachTitle}>Enable</h3>
              <p className={styles.approachDescription}>
                Deliver expert-led training with mentorship, portfolio building, certification prep, mock interviews, networking, and ongoing support to ensure immediate application and long-term career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UseCases
        title="Who Should Enroll?"
        subtitle="Our programs are designed for professionals and organizations committed to excellence"
        useCases={targetAudience}
      />

      <WhyAcademy />

      <Testimonials />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our leadership and professional skills programs"
        faqs={faqs}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on leadership, professional development, and technology trends."
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
