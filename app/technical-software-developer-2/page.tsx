import type { Metadata } from 'next';
import SEO from '@/components/common/SEO/SEO';
import CTA from '@/components/common/CTA/CTA';
import styles from './JobPosting.module.scss';

export const metadata: Metadata = {
  title: 'Technical Software Developer - Metahorizon Inc.',
  description: 'Join Metahorizon as a Technical Software Developer. Design, code, and debug software applications. Bachelor\'s degree in Computer Science + 3 years experience required. Salary: $156,998/year.',
  keywords: [
    'Technical Software Developer',
    'Software Developer',
    'Groovy',
    'Grails',
    'Java',
    'GitHub',
    'SQL',
    'Kibana',
    'OOP',
    'Metahorizon careers',
    'IT jobs',
    'Texas jobs',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Technical Software Developer - Metahorizon Inc.',
    description: 'Design, code, and debug software applications. Join our team in Irving, TX.',
    url: 'https://metahorizon.com/technical-software-developer-2',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon - Technical Software Developer Position',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Software Developer - Metahorizon Inc.',
    description: 'Design, code, and debug software applications. $156,998/year.',
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
    canonical: 'https://metahorizon.com/technical-software-developer-2',
  },
};

const jobSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Technical Software Developer',
  description: 'Design, code, and debug software applications using various programming tools and concepts. Collaborate with stakeholders to gather and analyze user needs and product requirements.',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Metahorizon Inc.',
    value: 'TECH-SOFTWARE-DEV-2026',
  },
  datePosted: '2026-02-17',
  validThrough: '2026-05-17',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Metahorizon Inc.',
    sameAs: 'https://metahorizon.com',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1303 W. Walnut Hill Ln, Ste 340',
      addressLocality: 'Irving',
      addressRegion: 'TX',
      postalCode: '75038',
      addressCountry: 'US',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: {
      '@type': 'QuantitativeValue',
      value: 156998,
      unitText: 'YEAR',
    },
  },
  skills: 'Groovy, Grails, GitHub, SQL, Kibana, Java, OOP',
  educationRequirements: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Bachelor\'s Degree',
    educationalLevel: 'Bachelor\'s degree in Computer Science, Electrical Engineering or closely related',
  },
  experienceRequirements: {
    '@type': 'OccupationalExperienceRequirements',
    minimumMonthsOfExperience: 36,
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'United States',
  },
  workHours: 'Full-time',
  travelRequirements: 'Travel to various unanticipated worksites throughout the US required.',
};

export default function TechnicalSoftwareDeveloperJob() {
  return (
    <div className={styles.jobPostingPage}>
      <SEO
        title="Technical Software Developer - Metahorizon Inc."
        description="Design, code, and debug software applications. Bachelor's degree in Computer Science + 3 years experience required. Salary: $156,998/year."
        canonical="/technical-software-developer-2"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.jobType}>Full-time</span>
            <h1 className={styles.jobTitle}>TECHNICAL SOFTWARE DEVELOPER</h1>
            <div className={styles.jobMeta}>
              <span className={styles.location}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Irving, TX 75038
              </span>
              <span className={styles.salary}>$156,998.00/year</span>
            </div>
            <p className={styles.postedDate}>Posted: February 17, 2026</p>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className={styles.jobDetails}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Job Description */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Job Description</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.descriptionList}>
                    <li>Design, code, and debug software applications using various programming tools and concepts.</li>
                    <li>Collaborate with stakeholders to gather and analyze user needs and product requirements. Participate in code reviews, sprint planning, and other development processes to ensure high-quality software delivery.</li>
                    <li>Analyze and interpret software requirements to ensure clarity and feasibility before development.</li>
                    <li>Prepare clear, structured technical documentation to support development, maintenance, and user understanding.</li>
                    <li>Travel to various unanticipated worksites throughout the US required.</li>
                  </ul>
                </div>
              </div>

              {/* Qualifications */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Qualifications</h2>
                <div className={styles.qualificationsContent}>
                  <p className={styles.education}>
                    <strong>Education:</strong> Bachelor&apos;s degree in Computer Science, Electrical Engineering or closely related
                  </p>
                  <p className={styles.experience}>
                    <strong>Experience:</strong> 3 years
                  </p>
                </div>
              </div>

              {/* Salary */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Salary & Benefits</h2>
                <div className={styles.salaryBlock}>
                  <p className={styles.salaryAmount}>
                    <strong>Salary:</strong> $156,998.00/year
                  </p>
                  <p className={styles.salaryType}>Full-time position</p>
                </div>
              </div>

              {/* Required Skills */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Required Skills</h2>
                <div className={styles.skillsGrid}>
                  <span className={styles.skillTag}>Groovy</span>
                  <span className={styles.skillTag}>Grails</span>
                  <span className={styles.skillTag}>GitHub</span>
                  <span className={styles.skillTag}>SQL</span>
                  <span className={styles.skillTag}>Kibana</span>
                  <span className={styles.skillTag}>Java</span>
                  <span className={styles.skillTag}>OOP (Object-Oriented Programming)</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Job Overview</h3>
                <div className={styles.overviewList}>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Location</span>
                    <span className={styles.overviewValue}>Irving, TX 75038</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Job Type</span>
                    <span className={styles.overviewValue}>Full-time</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Salary</span>
                    <span className={styles.overviewValue}>$156,998.00/year</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Experience</span>
                    <span className={styles.overviewValue}>3 years</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Education</span>
                    <span className={styles.overviewValue}>Bachelor&apos;s Degree</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Travel</span>
                    <span className={styles.overviewValue}>Required (U.S.)</span>
                  </div>
                </div>
              </div>

              <div className={styles.applyCard}>
                <h3 className={styles.applyTitle}>How to Apply</h3>
                <p className={styles.applyDescription}>
                  Submit applications to:
                </p>
                <div className={styles.contactInfo}>
                  <p className={styles.companyName}>Metahorizon Inc.</p>
                  <p className={styles.address}>1303 W. Walnut Hill Ln, Ste 340</p>
                  <p className={styles.address}>Irving, TX 75038</p>
                </div>
                <div className={styles.contactDetails}>
                  <p>
                    <strong>Phone:</strong> +1 (469) 496-9588
                  </p>
                  <p>
                    <strong>Email:</strong> contact@metahorizon.com
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Join Our Team?"
        ctaText="View All Open Positions"
        ctaHref="/contact-us"
        description="Explore career opportunities at Metahorizon and be part of a team that's transforming enterprise technology."
      />
    </div>
  );
}
