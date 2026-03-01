'use client';

import { Lock, Heart, Rocket, Trophy } from 'lucide-react';
import styles from './Values.module.scss';

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ValuesProps {
  title?: string;
  subtitle?: string;
  values?: Value[];
}

const defaultValues: Value[] = [
  {
    title: 'Security First',
    description: 'We build with protection in mind — ensuring every solution upholds the highest standards of safety and reliability.',
    icon: Lock,
  },
  {
    title: 'Integrity & Collaboration',
    description: 'We believe in transparent partnerships where honesty, teamwork, and respect drive every interaction.',
    icon: Heart,
  },
  {
    title: 'Innovation & Growth',
    description: 'We constantly push boundaries, blending creativity with technology to deliver smarter, future-ready solutions.',
    icon: Rocket,
  },
  {
    title: 'Customer Success',
    description: 'Your success is our ultimate goal. We measure our growth by the value and impact we create for your business.',
    icon: Trophy,
  },
];

export default function Values({
  title = 'Our Values',
  subtitle = 'At Meta Horizon, we combine technology and trust to empower businesses in their digital journey.',
  values = defaultValues,
}: ValuesProps) {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
