'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './ServicesHero.module.scss';

interface ServicesHeroProps {
  title?: ReactNode;
  subtitle?: string;
  description?: string;
  noBackground?: boolean;
}

export default function ServicesHero({
  title = 'Our Services',
  subtitle = 'Enterprise-Grade Technology Solutions',
  description = 'We deliver comprehensive technology services to help your business thrive in the digital age. From security to cloud automation, we have the expertise you need.',
  noBackground = false,
}: ServicesHeroProps) {
  return (
    <section className={`${styles.hero} ${noBackground ? styles.noBackground : ''}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>

        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}

        <p className={styles.heroDescription}>{description}</p>

        <Link href="/contact-us" className={styles.heroCta}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
