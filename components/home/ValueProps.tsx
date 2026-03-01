'use client';

import { Shield, Zap, Users, TrendingUp, Lock, Cloud } from 'lucide-react';
import styles from './ValueProps.module.scss';

interface ValueProp {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Zero Trust security frameworks and IAM solutions that protect your critical assets.',
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Fast deployment with minimal disruption to your existing operations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with deep expertise in cybersecurity and cloud technologies.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Grow your infrastructure confidently with solutions that scale with your business.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'Meet industry regulations with built-in compliance for HIPAA, SOC 2, and more.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Modern cloud-first architecture for flexibility and reduced infrastructure costs.',
  },
];

export default function ValueProps() {
  return (
    <section className={styles.valueProps}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Why Choose Metahorizon</h2>
          <p className={styles.sectionSubtitle}>
            Trusted by enterprises worldwide for innovative technology solutions
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {valueProps.map((prop, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <prop.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{prop.title}</h3>
              <p className={styles.cardDescription}>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
