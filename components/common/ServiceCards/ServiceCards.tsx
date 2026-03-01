'use client';

import { Shield, Headphones, Target, Trophy, Briefcase, Brain, Cpu, Sparkles, Cloud, Lock, Database, Users, Code, Globe, RefreshCw, TrendingUp, type LucideIcon } from 'lucide-react';
import styles from './ServiceCards.module.scss';

interface Service {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  iconKey?: string;
}

interface ServiceCardsProps {
  services?: Service[];
  variant?: 'default' | 'twoColumns';
}

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  support: Headphones,
  target: Target,
  event: Trophy,
  career: Briefcase,
  brain: Brain,
  cpu: Cpu,
  sparkles: Sparkles,
  cloud: Cloud,
  lock: Lock,
  database: Database,
  users: Users,
  code: Code,
  globe: Globe,
  refresh: RefreshCw,
  trendingUp: TrendingUp,
};

const defaultServices: Service[] = [
  { number: '01', title: 'Security', description: 'Enterprise-grade security solutions', iconKey: 'shield' },
  { number: '02', title: 'Support', description: '24/7 dedicated support', iconKey: 'support' },
  { number: '03', title: 'Target', description: 'Goal-oriented approach', iconKey: 'target' },
  { number: '04', title: 'Achievement', description: 'Proven track record', iconKey: 'event' },
  { number: '05', title: 'Career', description: 'Professional growth opportunities', iconKey: 'career' },
  { number: '06', title: 'Innovation', description: 'Cutting-edge solutions', iconKey: 'brain' },
  { number: '07', title: 'Technology', description: 'Advanced tech stack', iconKey: 'cpu' },
  { number: '08', title: 'Excellence', description: 'Commitment to quality', iconKey: 'sparkles' },
];

export default function ServiceCards({ services = defaultServices, variant = 'default' }: ServiceCardsProps) {
  return (
    <section className={styles.serviceCards}>
      <div className={styles.container}>
        <div className={`${styles.cardsGrid} ${variant === 'twoColumns' ? styles.twoColumns : ''}`}>
          {services.map((service, index) => {
            const IconComponent: LucideIcon = service.icon ?? iconMap[service.iconKey ?? ''] ?? Shield;
            
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardNumber}>{service.number}</div>
                <div className={styles.cardIcon}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
