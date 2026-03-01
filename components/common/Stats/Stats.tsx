'use client';

import styles from './Stats.module.scss';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  title?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Expert Professionals' },
];

export default function Stats({
  title = 'Trusted by Businesses Worldwide',
  stats = defaultStats,
}: StatsProps) {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {title && <h2 className={styles.statsTitle}>{title}</h2>}

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
