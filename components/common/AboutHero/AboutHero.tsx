'use client';

import Link from 'next/link';
import styles from './AboutHero.module.scss';

interface AboutHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function AboutHero({
  title = 'About Metahorizon',
  subtitle,
  description = 'At Meta Horizon, we believe that security and innovation go hand in hand. For over a decade, we\'ve been helping global enterprises strengthen their digital foundations through Identity and Access Management (IAM), Cloud Solutions, and Business Intelligence services.',
  ctaText = 'Contact Us Today',
  ctaHref = '/contact-us',
}: AboutHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroWave}></div>
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        
        <p className={styles.heroDescription}>{description}</p>
        
        <Link href={ctaHref} className={styles.heroCta}>
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
