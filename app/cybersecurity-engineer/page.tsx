import type { Metadata } from 'next';
import SEO from '@/components/common/SEO/SEO';
import CTA from '@/components/common/CTA/CTA';
import styles from './JobPosting.module.scss';

export const metadata: Metadata = {
  title: 'Cybersecurity Engineer - Metahorizon Inc.',
  description: 'Join Metahorizon as a Cybersecurity Engineer. Implement and maintain security solutions, conduct risk assessments, and protect enterprise infrastructure. Bachelor\'s degree in Computer Science + 2 years experience required.',
  keywords: [
    'Cybersecurity Engineer',
    'Security Engineer',
    'SOC',
    'Penetration Testing',
    'Zero Trust',
    'IAM',
    'Security Assessment',
    'Incident Response',
    'Metahorizon careers',
    'IT jobs',
    'Texas jobs',
    'Cybersecurity jobs',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Cybersecurity Engineer - Metahorizon Inc.',
    description: 'Implement and maintain security solutions, conduct risk assessments, and protect enterprise infrastructure.',
    url: 'https://metahorizon.com/cybersecurity-engineer',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon - Cybersecurity Engineer Position',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Engineer - Metahorizon Inc.',
    description: 'Protect enterprise infrastructure with Zero Trust security. Join our cybersecurity team.',
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
    canonical: 'https://metahorizon.com/cybersecurity-engineer',
  },
};

const jobSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Cybersecurity Engineer',
  description: 'Implement and maintain enterprise security solutions, conduct risk assessments, monitor security events, and respond to incidents. Protect critical infrastructure using Zero Trust architecture and industry best practices.',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Metahorizon Inc.',
    value: 'CYBERSEC-ENGINEER-2026',
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
      value: 125000,
      unitText: 'YEAR',
    },
  },
  skills: 'SIEM, Penetration Testing, Risk Assessment, Incident Response, Zero Trust, IAM, Network Security, Cloud Security',
  educationRequirements: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Bachelor\'s Degree',
    educationalLevel: 'Bachelor\'s degree in Computer Science, Cybersecurity, Information Technology or closely related',
  },
  experienceRequirements: {
    '@type': 'OccupationalExperienceRequirements',
    minimumMonthsOfExperience: 24,
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'United States',
  },
  workHours: 'Full-time',
  travelRequirements: 'Travel to various unanticipated worksites throughout the U.S. required.',
};

export default function CybersecurityEngineerJob() {
  return (
    <div className={styles.jobPostingPage}>
      <SEO
        title="Cybersecurity Engineer - Metahorizon Inc."
        description="Implement and maintain security solutions, conduct risk assessments, and protect enterprise infrastructure. Bachelor's degree + 2 years experience required."
        canonical="/cybersecurity-engineer"
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
            <h1 className={styles.jobTitle}>CYBERSECURITY ENGINEER</h1>
            <div className={styles.jobMeta}>
              <span className={styles.location}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Irving, TX 75038
              </span>
              <span className={styles.salary}>$125,000.00/year</span>
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
                  <p>
                    Implement and maintain enterprise security solutions, conduct risk assessments, monitor security events, and respond to incidents. Protect critical infrastructure using Zero Trust architecture and industry best practices.
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Responsibilities</h2>
                <ul className={styles.responsibilityList}>
                  <li>Design, implement, and maintain security solutions including firewalls, IDS/IPS, SIEM, and endpoint protection systems.</li>
                  <li>Conduct regular risk assessments, vulnerability scans, and security audits to identify potential threats and weaknesses.</li>
                  <li>Monitor security events and alerts, investigate incidents, and coordinate response efforts to minimize impact.</li>
                  <li>Implement and enforce Zero Trust security architecture across enterprise infrastructure.</li>
                  <li>Manage Identity and Access Management (IAM) solutions including SSO, MFA, and privileged access management.</li>
                  <li>Perform penetration testing and security assessments on applications, networks, and systems.</li>
                  <li>Develop and maintain security policies, procedures, and documentation.</li>
                  <li>Collaborate with IT teams to ensure security best practices are integrated into all projects and initiatives.</li>
                  <li>Provide security awareness training to employees and stakeholders.</li>
                  <li>Stay current with emerging security threats, technologies, and industry trends.</li>
                  <li>Travel to various unanticipated worksites throughout the U.S. required.</li>
                </ul>
              </div>

              {/* Qualifications */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Qualifications</h2>
                <div className={styles.qualificationsContent}>
                  <p className={styles.education}>
                    <strong>Education:</strong> Bachelor&apos;s degree in Computer Science, Cybersecurity, Information Technology or closely related
                  </p>
                  <p className={styles.experience}>
                    <strong>Experience:</strong> 2 years in cybersecurity or related role
                  </p>
                </div>
              </div>

              {/* Required Skills */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Required Skills</h2>
                <div className={styles.skillsGrid}>
                  <span className={styles.skillTag}>SIEM Tools</span>
                  <span className={styles.skillTag}>Penetration Testing</span>
                  <span className={styles.skillTag}>Risk Assessment</span>
                  <span className={styles.skillTag}>Incident Response</span>
                  <span className={styles.skillTag}>Zero Trust Architecture</span>
                  <span className={styles.skillTag}>IAM Solutions</span>
                  <span className={styles.skillTag}>Network Security</span>
                  <span className={styles.skillTag}>Cloud Security (AWS/Azure/GCP)</span>
                </div>
              </div>

              {/* Preferred Certifications */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Preferred Certifications</h2>
                <div className={styles.skillsGrid}>
                  <span className={styles.skillTag}>CISSP</span>
                  <span className={styles.skillTag}>CEH</span>
                  <span className={styles.skillTag}>Security+</span>
                  <span className={styles.skillTag}>OSCP</span>
                  <span className={styles.skillTag}>CISM</span>
                </div>
              </div>

              {/* Salary */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Salary & Benefits</h2>
                <div className={styles.salaryBlock}>
                  <p className={styles.salaryAmount}>
                    <strong>Salary:</strong> $125,000.00/year
                  </p>
                  <p className={styles.salaryType}>Full-time position</p>
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
                    <span className={styles.overviewValue}>$125,000.00/year</span>
                  </div>
                  <div className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>Experience</span>
                    <span className={styles.overviewValue}>2 years</span>
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
                  Submit your application to:
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
