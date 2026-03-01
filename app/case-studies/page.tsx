import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, TrendingUp } from 'lucide-react';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import caseStudiesData from '@/data/case-studies.json';
import styles from './CaseStudies.module.scss';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  overview: string;
  results: string[];
  metrics: Record<string, string>;
  image: string;
  year: string;
}

const caseStudies = caseStudiesData.caseStudies as unknown as CaseStudy[];

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories - Metahorizon',
  description: 'Explore how Metahorizon has helped leading organizations transform their security, IAM, and cloud infrastructure. Real results from StateFarm, Gap, Capital One, and more.',
  keywords: [
    'Case Studies',
    'Client Success',
    'IAM Case Studies',
    'Cybersecurity Success Stories',
    'Cloud Transformation',
    'Zero Trust Implementation',
    'StateFarm',
    'Gap Inc',
    'Capital One',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Case Studies | Client Success Stories - Metahorizon',
    description: 'Explore how Metahorizon has helped leading organizations transform their security and cloud infrastructure.',
    url: 'https://metahorizon.com/case-studies/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Metahorizon',
    description: 'Real results from leading organizations transformed by Metahorizon.',
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
    canonical: 'https://metahorizon.com/case-studies/',
  },
};

export default function CaseStudiesPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Case Studies | Client Success Stories - Metahorizon"
        description="Explore how Metahorizon has helped leading organizations transform their security, IAM, and cloud infrastructure."
        canonical="/case-studies/"
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Case Studies</h1>
          <p className={styles.heroDescription}>
            Discover how leading organizations across industries have transformed their security, identity, and cloud infrastructure with Metahorizon. Real challenges, real solutions, real results.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <Building2 size={32} className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Enterprise Clients</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <TrendingUp size={32} className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>90%</span>
                <span className={styles.statLabel}>Average Security Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={caseStudy.slug}
                className={styles.caseStudyCard}
              >
                <div className={styles.caseStudyImage}>
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={600}
                    height={400}
                    className={styles.caseStudyImage}
                  />
                  <span className={styles.caseStudyYear}>{caseStudy.year}</span>
                </div>
                <div className={styles.caseStudyContent}>
                  <span className={styles.caseStudyIndustry}>{caseStudy.industry}</span>
                  <h2 className={styles.caseStudyTitle}>{caseStudy.title}</h2>
                  <p className={styles.caseStudySubtitle}>{caseStudy.subtitle}</p>
                  <p className={styles.caseStudyOverview}>{caseStudy.overview}</p>
                  
                  <div className={styles.caseStudyMetrics}>
                    {Object.entries(caseStudy.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className={styles.metric}>
                        <span className={styles.metricValue}>{value}</span>
                        <span className={styles.metricLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.caseStudyFooter}>
                    <span className={styles.readMore}>
                      Read Case Study <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's Build Secure Systems Together"
        ctaText="Contact Us Today"
        ctaHref="/contact-us"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />
    </div>
  );
}
