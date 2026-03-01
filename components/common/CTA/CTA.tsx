'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.scss';

interface CTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  description?: string;
}

export default function CTA({
  title = "Let's Build Secure Systems Together",
  subtitle,
  ctaText = 'Contact Us Today',
  ctaHref = '/contact-us',
  description = 'Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles.',
}: CTAProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        
        <Link href={ctaHref} className={styles.ctaButton}>
          {ctaText}
          <ArrowRight size={20} />
        </Link>
        
        {description && <p className={styles.ctaDescription}>{description}</p>}
      </div>
    </section>
  );
}
