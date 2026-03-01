'use client';

import ServiceCards from '../ServiceCards/ServiceCards';
import styles from './WhyMetaHorizon.module.scss';

interface WhyMetaHorizonProps {
  title?: string;
  subtitle?: string;
}

const whyMetaHorizonServices = [
  {
    number: '01',
    title: 'All-in-One Security Suite',
    description: 'IAM, DevOps & Multi-Channel Marketing—all faster, engages smarter, and reach customers where they are.',
    iconKey: 'shield',
  },
  {
    number: '02',
    title: 'AI-Powered Automation',
    description: 'Let AI do the heavy lifting—automate follow-ups, personalize outreach, and never miss a lead.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Affordable & Flexible',
    description: 'A new-age platform that\'s cost-effective and adaptable—built to fit your needs, not the other way around.',
    iconKey: 'target',
  },
  {
    number: '04',
    title: 'Loved by Users',
    description: 'Metahorizon redefines your experience, leaving behind complex, outdated, and costly tools — a solution that streamlines, automates, and amplifies.',
    iconKey: 'sparkles',
  },
];

export default function WhyMetaHorizon({
  title = 'Why Metahorizon?',
  subtitle = "Because your IAM should do more than just store contacts—it should drive growth, automate outreach, and never let a lead slip away.",
}: WhyMetaHorizonProps) {
  return (
    <section className={styles.whyMetaHorizon}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </div>
        <ServiceCards services={whyMetaHorizonServices} variant="twoColumns" />
      </div>
    </section>
  );
}
