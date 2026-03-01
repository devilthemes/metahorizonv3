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
import styles from './GlobalCertifications.module.scss';

export const metadata: Metadata = {
  title: 'Global Technical Certifications | AWS, Azure, CISSP, CompTIA - Metahorizon Academy',
  description: 'Prepare for globally recognized technical certifications in IAM, Cloud, Cybersecurity, Data Analytics, and DevOps. Expert-led prep courses with hands-on labs and exam strategies for AWS, Azure, CISSP, CompTIA, and more.',
  keywords: [
    'Technical Certifications',
    'AWS Certification',
    'Azure Certification',
    'CISSP Prep',
    'CompTIA Security',
    'Cloud Certifications',
    'Cybersecurity Certifications',
    'DevOps Certifications',
    'Kubernetes CKA',
    'Terraform Associate',
    'Metahorizon Academy',
    'Certification Training',
    'IT Certifications',
    'Professional Certifications',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Global Technical Certifications | AWS, Azure, CISSP, CompTIA - Metahorizon Academy',
    description: 'Prepare for globally recognized technical certifications with expert-led training and hands-on labs.',
    url: 'https://metahorizon.com/academy/global-certifications/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Academy Global Certifications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Technical Certifications | Metahorizon Academy',
    description: 'Expert-led certification prep for AWS, Azure, CISSP, CompTIA, and more.',
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
    canonical: 'https://metahorizon.com/academy/global-certifications/',
  },
};

const certificationTracks = [
  {
    number: '01',
    title: 'IAM & Zero Trust Certifications',
    description: 'Prepare for CompTIA Security+, CISSP domains, Okta Professional, and SailPoint certifications. Includes exam strategies, practice labs from real IAM deployments, and hands-on experience with enterprise identity solutions.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'Cloud & Security Specialist',
    description: 'AWS Solutions Architect, Azure Administrator, Google Cloud Architect, and CCSP certifications. Focused on exam blueprints, cloud simulations, compliance mastery, and real-world cloud architecture scenarios.',
    iconKey: 'cloud',
  },
  {
    number: '03',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'CompTIA CySA+, Certified Ethical Hacker (CEH), and advanced security certifications. Vulnerability testing, incident response, forensics prep aligned with real-world advisory services and penetration testing.',
    iconKey: 'lock',
  },
  {
    number: '04',
    title: 'Data & AI Professional Certificates',
    description: 'Google Data Analytics, Azure Data Scientist Associate, Tableau Desktop Specialist. Portfolio-focused projects, data visualization mastery, and machine learning fundamentals for data-driven careers.',
    iconKey: 'brain',
  },
  {
    number: '05',
    title: 'DevOps & Automation Certifications',
    description: 'AWS DevOps Engineer Professional, Certified Kubernetes Administrator (CKA), HashiCorp Terraform Associate. Pipeline builds, Infrastructure as Code, and exam readiness with hands-on labs.',
    iconKey: 'cpu',
  },
  {
    number: '06',
    title: 'Project Management & Leadership',
    description: 'PMP (Project Management Professional), CAPM, and Agile certifications. Comprehensive exam prep with real-world project scenarios, risk management, and leadership frameworks.',
    iconKey: 'target',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Expert-Led Preparation',
    description: 'Learn from certified instructors with real consulting experience from MetaHorizon Inc., USA. Gain insights beyond exam objectives.',
    iconKey: 'users',
  },
  {
    number: '02',
    title: 'Hands-On & Practical',
    description: 'Labs, simulations, and projects mirroring enterprise environments. Apply knowledge to real-world scenarios, not just theory.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Career Impact',
    description: 'Boost employability, salary potential, and access to international opportunities. Certified professionals earn 20-40% more on average.',
    iconKey: 'trendingUp',
  },
  {
    number: '04',
    title: 'Flexible Delivery',
    description: 'Online, evening, weekend, and corporate group options. Self-paced and instructor-led formats to fit your schedule.',
    iconKey: 'cloud',
  },
];

const targetAudience = [
  {
    title: 'IT Professionals',
    description: 'Working professionals seeking to validate skills, advance careers, or transition into high-demand technology roles.',
    iconKey: 'users',
  },
  {
    title: 'Career Changers',
    description: 'Individuals from other fields looking to enter technology with industry-recognized credentials that open doors.',
    iconKey: 'refresh',
  },
  {
    title: 'Recent Graduates',
    description: 'New graduates enhancing their degrees with certifications that demonstrate practical, job-ready skills to employers.',
    iconKey: 'briefcase',
  },
  {
    title: 'Corporate Teams',
    description: 'Organizations upskilling teams with group certification programs. Customized corporate training with flexible delivery.',
    iconKey: 'target',
  },
];

const faqs = [
  {
    question: 'What certification programs do you offer?',
    answer: 'We offer comprehensive preparation for globally recognized certifications across six tracks: IAM & Zero Trust (CompTIA Security+, CISSP, Okta, SailPoint), Cloud & Security (AWS, Azure, GCP, CCSP), Cybersecurity (CySA+, CEH), Data & AI (Google Data Analytics, Azure Data Scientist, Tableau), DevOps (AWS DevOps, CKA, Terraform), and Project Management (PMP, CAPM, Agile).',
  },
  {
    question: 'How long does certification preparation take?',
    answer: 'Preparation time varies by certification and your prior experience. Entry-level certifications like CompTIA Security+ typically take 8-12 weeks. Advanced certifications like CISSP or AWS Solutions Architect Professional may take 12-20 weeks. We create personalized study plans based on your goals and timeline.',
  },
  {
    question: 'Do you guarantee certification exam passage?',
    answer: 'While we cannot guarantee exam passage (as this depends on individual effort and performance), our programs have a high success rate. We provide comprehensive preparation including expert instruction, hands-on labs, practice exams, and exam strategies. If you complete all program requirements and don\'t pass, we offer additional support at no extra cost.',
  },
  {
    question: 'Are the certifications vendor-neutral or vendor-specific?',
    answer: 'We offer both! Vendor-neutral certifications include CompTIA Security+, CySA+, CEH, and CISSP. Vendor-specific certifications include AWS, Azure, Google Cloud, Okta, SailPoint, Kubernetes, Terraform, and Tableau. Our advisors help you choose the right certifications for your career goals.',
  },
  {
    question: 'Do you provide exam vouchers or testing support?',
    answer: 'Yes, we can provide exam vouchers as part of our certification packages. We also offer exam registration support, scheduling assistance, and test-taking strategies. Some programs include practice exam credits and access to official vendor practice tests.',
  },
  {
    question: 'What if I need to reschedule or retake an exam?',
    answer: 'Most certification vendors allow exam rescheduling with advance notice. If you need to retake an exam, we provide additional preparation support. Some of our programs include retake vouchers or discounts. Our instructors also provide post-exam review and additional study guidance if needed.',
  },
  {
    question: 'Do you offer corporate or group certification training?',
    answer: 'Yes, we offer customized corporate certification programs for teams. Our corporate training includes group discounts, flexible scheduling, onsite or virtual delivery, and programs tailored to your organization\'s specific certification goals. Contact us for a customized proposal.',
  },
  {
    question: 'What career support is available after certification?',
    answer: 'We provide comprehensive career support including resume optimization highlighting your new certifications, interview preparation, networking opportunities, and access to our industry connections. Certified professionals gain access to our job board and placement network for global opportunities.',
  },
];

export default function GlobalCertificationsPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Global Technical Certifications | AWS, Azure, CISSP, CompTIA - MetaHorizon Academy"
        description="Prepare for globally recognized technical certifications with expert-led training, hands-on labs, and exam strategies."
        canonical="/academy/global-certifications/"
      />

      <StructuredData
        type="EducationalOrganization"
        name="MetaHorizon Academy - Global Technical Certifications"
        description="Professional certification preparation programs for AWS, Azure, CISSP, CompTIA, and other industry-leading credentials."
      />

      <ServicesHero
        title="Global Technical Certifications"
        subtitle="Validate Your Expertise. Accelerate Your Career."
        description="At MetaHorizon Academy, we prepare professionals and students to earn globally recognized technical certifications that validate expertise and accelerate careers in high-demand fields. From IAM and Cloud to Cybersecurity and DevOps, we offer comprehensive prep programs led by certified experts."
        noBackground={true}
      />

      <ServiceDetail
        title="Industry-Recognized Certifications for Technology Professionals"
        description="Earn credentials that demonstrate your expertise and open doors to global opportunities."
        overview="MetaHorizon Academy's Global Technical Certifications programs prepare you for success in today's competitive technology landscape. Our certification prep courses are led by certified experts from MetaHorizon Inc., a USA-based consulting practice. Through our proven 4-step methodology — Discover, Assess, Train & Practice, Achieve & Advance — we ensure you not only pass your exams but also gain practical skills that employers value."
        features={[
          {
            title: 'Expert Instruction',
            description: 'Learn from certified professionals with real-world consulting experience.',
          },
          {
            title: 'Hands-On Labs',
            description: 'Practice with enterprise-grade tools and real-world scenarios.',
          },
          {
            title: 'Exam Strategies',
            description: 'Proven techniques for exam success including time management and question analysis.',
          },
          {
            title: 'Career Support',
            description: 'Resume optimization, interview prep, and access to placement network.',
          },
        ]}
        benefits={[
          'Certification prep led by certified experts from USA-based practice',
          'Coverage: IAM, Zero Trust, Cloud, Cybersecurity, Data, DevOps',
          'Vendor-neutral and vendor-specific credentials (AWS, Azure, CompTIA, CISSP)',
          'Hands-on labs, exam strategies, and practice assessments',
          'Flexible delivery: online, evenings, weekends, corporate groups',
          'Pathways to international job opportunities',
        ]}
        noBackground={true}
      />

      <section className={styles.tracksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Certification Tracks</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive preparation programs for globally recognized certifications
            </p>
          </div>
          <ServiceCards services={certificationTracks} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why MetaHorizon Academy?</h2>
            <p className={styles.sectionSubtitle}>
              Our certification prep programs deliver results through proven methodology
            </p>
          </div>
          <ServiceCards services={benefits} variant="twoColumns" />
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Certification Approach</h2>
            <p className={styles.sectionSubtitle}>
              A proven framework for certification success and career advancement
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>01</div>
              <h3 className={styles.approachTitle}>Discover</h3>
              <p className={styles.approachDescription}>
                Assess your current skills, career goals, and target certifications to identify the best-fit track (e.g., IAM/Zero Trust for security pros, AWS/Azure for cloud engineers).
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>02</div>
              <h3 className={styles.approachTitle}>Assess & Prepare</h3>
              <p className={styles.approachDescription}>
                Conduct gap analysis against exam blueprints, provide study plans, official resources, and MetaHorizon Inc.-led mock assessments to benchmark readiness.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>03</div>
              <h3 className={styles.approachTitle}>Train & Practice</h3>
              <p className={styles.approachDescription}>
                Engage in intensive prep: expert instruction, hands-on labs/simulations, real-world scenarios, practice exams, and flexible delivery (online, evenings, or corporate groups).
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>04</div>
              <h3 className={styles.approachTitle}>Achieve & Advance</h3>
              <p className={styles.approachDescription}>
                Pass your certification with confidence, earn digital badges, update your resume/portfolio, and access career support (interview prep, networking, placements) for global roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UseCases
        title="Who Should Enroll?"
        subtitle="Our certification programs are designed for professionals committed to excellence"
        useCases={targetAudience}
      />

      <section className={styles.certificationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Certifications We Cover</h2>
            <p className={styles.sectionSubtitle}>
              Vendor-neutral and vendor-specific credentials across all major technology domains
            </p>
          </div>
          <div className={styles.certificationsGrid}>
            <div className={styles.certificationGroup}>
              <h3 className={styles.groupTitle}>Security & IAM</h3>
              <ul className={styles.certificationList}>
                <li>CompTIA Security+</li>
                <li>CISSP</li>
                <li>CompTIA CySA+</li>
                <li>CEH (Certified Ethical Hacker)</li>
                <li>Okta Professional</li>
                <li>SailPoint Certifications</li>
              </ul>
            </div>
            <div className={styles.certificationGroup}>
              <h3 className={styles.groupTitle}>Cloud Platforms</h3>
              <ul className={styles.certificationList}>
                <li>AWS Solutions Architect</li>
                <li>AWS DevOps Engineer</li>
                <li>Azure Administrator</li>
                <li>Azure Data Scientist</li>
                <li>Google Cloud Architect</li>
                <li>CCSP (Cloud Security)</li>
              </ul>
            </div>
            <div className={styles.certificationGroup}>
              <h3 className={styles.groupTitle}>DevOps & Automation</h3>
              <ul className={styles.certificationList}>
                <li>CKA (Kubernetes)</li>
                <li>Terraform Associate</li>
                <li>AWS DevOps Professional</li>
                <li>Docker Certified Associate</li>
              </ul>
            </div>
            <div className={styles.certificationGroup}>
              <h3 className={styles.groupTitle}>Data & Analytics</h3>
              <ul className={styles.certificationList}>
                <li>Google Data Analytics</li>
                <li>Tableau Desktop Specialist</li>
                <li>Azure Data Scientist Associate</li>
                <li>Power BI Certification</li>
              </ul>
            </div>
            <div className={styles.certificationGroup}>
              <h3 className={styles.groupTitle}>Project Management</h3>
              <ul className={styles.certificationList}>
                <li>PMP (Project Management)</li>
                <li>CAPM</li>
                <li>Agile Certifications</li>
                <li>Scrum Master</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyAcademy />

      <Testimonials />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our certification programs"
        faqs={faqs}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on certifications, technology trends, and career development."
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
