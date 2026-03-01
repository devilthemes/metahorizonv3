'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Building2, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import styles from './CaseStudyDetail.module.scss';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  metrics: Record<string, string>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  image: string;
  duration: string;
  year: string;
}

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <article className={styles.caseStudy}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/case-studies" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>

          <div className={styles.headerContent}>
            <span className={styles.industry}>{caseStudy.industry}</span>
            <h1 className={styles.title}>{caseStudy.title}</h1>
            <p className={styles.subtitle}>{caseStudy.subtitle}</p>
            
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <Building2 size={18} />
                <span>{caseStudy.client}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={18} />
                <span>{caseStudy.year}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={18} />
                <span>{caseStudy.duration}</span>
              </div>
            </div>
          </div>

          <div className={styles.featuredImage}>
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1200}
              height={630}
              className={styles.featuredImage}
              priority
            />
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.sectionContent}>{caseStudy.overview}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenge</h2>
              <p className={styles.sectionContent}>{caseStudy.challenge}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Solution</h2>
              <p className={styles.sectionContent}>{caseStudy.solution}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <div className={styles.technologiesGrid}>
                {caseStudy.technologies.map((tech) => (
                  <div key={tech} className={styles.technologyTag}>
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Results & Outcomes</h2>
              <ul className={styles.resultsList}>
                {caseStudy.results.map((result, index) => (
                  <li key={index} className={styles.resultItem}>
                    <CheckCircle size={20} className={styles.resultIcon} />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Metrics</h2>
              <div className={styles.metricsGrid}>
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div key={key} className={styles.metricCard}>
                    <span className={styles.metricValue}>{value}</span>
                    <span className={styles.metricLabel}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
