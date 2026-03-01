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
import styles from './DegreeDiploma.module.scss';

export const metadata: Metadata = {
  title: 'Degree & Diploma Programs | BSc CSIT, BIT, BCA, BBA, MBA - Metahorizon Academy',
  description: 'Launch your career with recognized degree programs in Computer Science, Information Technology, Computer Applications, and Business Administration. 4-year undergraduate and 2-year MBA programs with industry-aligned curriculum.',
  keywords: [
    'Degree Programs',
    'Diploma Courses',
    'BSc CSIT',
    'BIT Bachelor',
    'BCA Degree',
    'BBA Program',
    'MBA Degree',
    'Computer Science Degree',
    'Information Technology',
    'Business Administration',
    'Metahorizon Academy',
    'Rajarshi Janak University',
    'Undergraduate Programs',
    'Graduate Programs',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Degree & Diploma Programs | BSc CSIT, BIT, BCA, BBA, MBA - Metahorizon Academy',
    description: 'Launch your career with recognized degree programs in Computer Science, IT, and Business Administration.',
    url: 'https://metahorizon.com/academy/degree-diploma/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Academy Degree Programs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Degree & Diploma Programs | Metahorizon Academy',
    description: 'Recognized degree programs in Computer Science, IT, and Business Administration.',
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
    canonical: 'https://metahorizon.com/academy/degree-diploma/',
  },
};

const degreePrograms = [
  {
    number: '01',
    title: 'BSc in Computer Science & IT (BSc.CSIT)',
    description: '4-year comprehensive program building strong foundations in software development, AI, networking, databases, algorithms, and system administration. Includes hands-on projects, modern labs, and real-world applications. Prepares for roles in software engineering, data science, and cybersecurity.',
    iconKey: 'cpu',
  },
  {
    number: '02',
    title: 'Bachelor in Information Technology (BIT)',
    description: '4-year program blending technology and business, focusing on IT systems, DevOps, cloud computing, project management, and cybersecurity. Equips graduates for IT infrastructure, system administration, and tech management careers in modern enterprises.',
    iconKey: 'cloud',
  },
  {
    number: '03',
    title: 'Bachelor of Computer Applications (BCA)',
    description: '4-year deep dive into full-stack development, UI/UX design, mobile/web applications, databases, and e-commerce solutions. Emphasizes real-world tech stacks and project-based learning for software development, app creation, and digital innovation roles.',
    iconKey: 'code',
  },
  {
    number: '04',
    title: 'Bachelor of Business Administration (BBA)',
    description: '4-year program covering core business disciplines: management, finance, marketing, accounting, economics, and IT management. Includes real-world projects; prepares for managerial roles or entrepreneurship in the global business landscape.',
    iconKey: 'briefcase',
  },
  {
    number: '05',
    title: 'Master of Business Administration (MBA)',
    description: '2-year advanced program in leadership, strategic management, digital business, entrepreneurship, finance, and data-driven decision making. Includes capstone projects and consulting exposure for executive roles, business transformation, and high-level strategy.',
    iconKey: 'trophy',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Industry-Aligned Curriculum',
    description: 'Programs designed with input from industry experts and powered by real-world insights from MetaHorizon Inc., a USA-based consulting practice.',
    iconKey: 'target',
  },
  {
    number: '02',
    title: 'Expert Faculty',
    description: 'Learn from experienced professionals and certified experts who bring practical knowledge and real-world case studies to the classroom.',
    iconKey: 'users',
  },
  {
    number: '03',
    title: 'Recognized Qualifications',
    description: 'Earn accredited degrees from Rajarshi Janak University with credentials recognized by employers and institutions globally.',
    iconKey: 'shield',
  },
  {
    number: '04',
    title: 'Global Pathways',
    description: 'Access international opportunities, certifications, internships, and placements through our extensive industry network.',
    iconKey: 'globe',
  },
];

const targetAudience = [
  {
    title: 'High School Graduates',
    description: 'Students seeking to launch careers in technology, software development, IT management, or business with a strong academic foundation.',
    iconKey: 'users',
  },
  {
    title: 'Career Changers',
    description: 'Professionals from other fields looking to transition into the digital economy with recognized qualifications and practical skills.',
    iconKey: 'refresh',
  },
  {
    title: 'Working Professionals',
    description: 'Individuals seeking to advance their careers through part-time or evening programs while continuing to work.',
    iconKey: 'briefcase',
  },
  {
    title: 'Aspiring Entrepreneurs',
    description: 'Future business leaders building comprehensive knowledge in technology and business management for startup success.',
    iconKey: 'trendingUp',
  },
];

const faqs = [
  {
    question: 'What degree programs does MetaHorizon Academy offer?',
    answer: 'We offer five comprehensive degree programs: BSc in Computer Science & IT (4 years), Bachelor in Information Technology (4 years), Bachelor of Computer Applications (4 years), Bachelor of Business Administration (4 years), and Master of Business Administration (2 years). All programs are recognized by Rajarshi Janak University.',
  },
  {
    question: 'Are these degrees recognized and accredited?',
    answer: 'Yes, all our degree programs are recognized qualifications from Rajarshi Janak University. Our programs are designed to meet international standards and are valued by employers globally.',
  },
  {
    question: 'What is the duration of each program?',
    answer: 'Our undergraduate programs (BSc.CSIT, BIT, BCA, BBA) are 4-year degrees. The MBA is a 2-year graduate program. We also offer flexible scheduling options including evening and weekend classes for working professionals.',
  },
  {
    question: 'Do you offer flexible learning options for working professionals?',
    answer: 'Yes, we understand that many of our students work while studying. We offer evening classes, weekend programs, and online learning options to accommodate busy schedules. Contact our admissions team to discuss flexible arrangements.',
  },
  {
    question: 'What career opportunities are available after graduation?',
    answer: 'Graduates pursue diverse careers: BSc.CSIT and BCA graduates become software engineers, data scientists, and cybersecurity specialists. BIT graduates work in IT infrastructure and cloud management. BBA graduates enter management, finance, and marketing roles. MBA graduates advance to executive leadership positions.',
  },
  {
    question: 'Do you provide internship and placement support?',
    answer: 'Yes, we provide comprehensive career support including internship placements, industry connections, resume building, interview preparation, and access to our international placement network. Our programs include real-world projects that build your portfolio.',
  },
  {
    question: 'What makes MetaHorizon Academy different from other institutions?',
    answer: 'Our programs are uniquely powered by MetaHorizon Inc., a USA-based consulting practice. You learn from active practitioners, work on actual enterprise scenarios, and gain skills that are immediately applicable. Our industry-aligned curriculum ensures you graduate job-ready.',
  },
  {
    question: 'Are scholarships or financial aid available?',
    answer: 'Yes, we offer merit-based scholarships and financial aid options for qualified students. Contact our admissions office to learn about available scholarships, payment plans, and financial assistance programs.',
  },
];

export default function DegreeDiplomaPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Degree & Diploma Programs | BSc CSIT, BIT, BCA, BBA, MBA - MetaHorizon Academy"
        description="Launch your career with recognized degree programs in Computer Science, Information Technology, and Business Administration."
        canonical="/academy/degree-diploma/"
      />

      <StructuredData
        type="EducationalOrganization"
        name="MetaHorizon Academy - Degree & Diploma Programs"
        description="Recognized undergraduate and graduate degree programs in Computer Science, IT, and Business Administration."
      />

      <ServicesHero
        title="Start With Degree and Diploma"
        subtitle="Build Your Academic Foundation"
        description="At MetaHorizon Academy, we provide the strong academic foundation needed to launch successful careers in technology and business. Our degree programs combine rigorous academics with practical, real-world experience."
        noBackground={true}
      />

      <ServiceDetail
        title="Recognized Degree Programs for Technology & Business Careers"
        description="Comprehensive undergraduate and graduate programs designed to prepare you for success in the digital economy."
        overview="MetaHorizon Academy offers five comprehensive degree programs recognized by Rajarshi Janak University. Our curriculum blends academic rigor with practical, real-world insights from MetaHorizon Inc., a USA-based consulting practice. With expert faculty, modern labs, hands-on projects, and pathways to global opportunities, we prepare graduates for successful careers in technology, business, and leadership."
        features={[
          {
            title: 'Hands-On Learning',
            description: 'Modern labs, real-world projects, and practical applications throughout your studies.',
          },
          {
            title: 'Industry Integration',
            description: 'Curriculum informed by active consulting engagements and industry trends.',
          },
          {
            title: 'Career Pathways',
            description: 'Internships, certifications, networking, and placement support for global opportunities.',
          },
          {
            title: 'Flexible Options',
            description: 'Evening, weekend, and online options for working professionals.',
          },
        ]}
        benefits={[
          'Recognized qualifications from Rajarshi Janak University',
          'Expert faculty with industry experience',
          'Modern facilities and hands-on learning',
          'Industry-aligned curriculum with practical focus',
          'Internship and placement support',
          'Pathways to global certifications and opportunities',
        ]}
        noBackground={true}
      />

      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Degree Programs</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive programs designed to launch your career in technology and business
            </p>
          </div>
          <ServiceCards services={degreePrograms} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why MetaHorizon Degree Programs?</h2>
            <p className={styles.sectionSubtitle}>
              Experience the MetaHorizon advantage in your academic journey
            </p>
          </div>
          <ServiceCards services={benefits} variant="twoColumns" />
        </div>
      </section>

      <UseCases
        title="Who Should Enroll?"
        subtitle="Our degree programs are designed for ambitious individuals ready to build their future"
        useCases={targetAudience}
      />

      <WhyAcademy />

      <section className={styles.credentialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Program Credentials</h2>
            <p className={styles.sectionSubtitle}>
              Your degree backed by recognized accreditation and industry partnerships
            </p>
          </div>
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <h3 className={styles.credentialTitle}>Recognized Qualifications</h3>
              <p className={styles.credentialDescription}>
                All programs are accredited by Rajarshi Janak University, ensuring your degree is recognized by employers and institutions globally.
              </p>
            </div>
            <div className={styles.credentialCard}>
              <h3 className={styles.credentialTitle}>USA-Based Insights</h3>
              <p className={styles.credentialDescription}>
                Curriculum powered by real-world consulting experience from MetaHorizon Inc., bringing cutting-edge industry practices to your education.
              </p>
            </div>
            <div className={styles.credentialCard}>
              <h3 className={styles.credentialTitle}>Global Pathways</h3>
              <p className={styles.credentialDescription}>
                Access international opportunities, industry certifications, internships, and placements through our extensive network.
              </p>
            </div>
            <div className={styles.credentialCard}>
              <h3 className={styles.credentialTitle}>Expert Faculty</h3>
              <p className={styles.credentialDescription}>
                Learn from certified professionals and experienced educators who bring practical knowledge to the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our degree and diploma programs"
        faqs={faqs}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on education, technology, and career development."
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
