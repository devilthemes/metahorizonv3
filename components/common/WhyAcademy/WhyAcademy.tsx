'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import styles from './WhyAcademy.module.scss';

interface WhyAcademyProps {
  title?: string;
  subtitle?: string;
}

const benefits = [
  {
    title: 'Practical & Hands On',
    description: 'Targeted bootcamps with real tools, case studies, and projects not just theory.',
  },
  {
    title: 'Career Accelerating',
    description: 'Resume boosts, mock interviews, networking intros, and access to our international placement network.',
  },
  {
    title: 'Flexible & Accessible',
    description: 'Evening/weekend/online options designed for working professionals and recent grads in.',
  },
];

export default function WhyAcademy({
  title = 'Why Metahorizon Academy?',
  subtitle,
}: WhyAcademyProps) {
  return (
    <section className={styles.whyAcademy}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <CheckCircle size={24} strokeWidth={2} />
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <Image
              src="/assets/img/plan.jpg"
              alt="MetaHorizon Academy - Collaborative Learning"
              width={600}
              height={600}
              className={styles.academyImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
