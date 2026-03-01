'use client';

import { TrendingUp, Package, Users, BarChart3, ShieldCheck, Shield, Target, Cloud, Code, Briefcase, RefreshCw, type LucideIcon } from 'lucide-react';
import styles from './UseCases.module.scss';

interface UseCase {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconKey?: string;
}

interface UseCasesProps {
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
}

const iconMap: Record<string, LucideIcon> = {
  trendingUp: TrendingUp,
  package: Package,
  users: Users,
  barChart3: BarChart3,
  shieldCheck: ShieldCheck,
  shield: Shield,
  target: Target,
  cloud: Cloud,
  code: Code,
  briefcase: Briefcase,
  refresh: RefreshCw,
};

const defaultUseCases: UseCase[] = [
  {
    title: 'Operational Optimization',
    description: 'Streamline operations and reduce costs with AI-driven process automation and predictive maintenance.',
    iconKey: 'trendingUp',
  },
  {
    title: 'Data-Driven Product Development',
    description: 'Build better products faster with insights from user behavior, market trends, and performance analytics.',
    iconKey: 'package',
  },
  {
    title: 'Customer Segmentation & Personalization',
    description: 'Deliver personalized experiences by understanding customer behavior, preferences, and purchase patterns.',
    iconKey: 'users',
  },
  {
    title: 'Sales Forecasting & Performance Tracking',
    description: 'Predict sales trends, track performance metrics, and make informed decisions with real-time analytics.',
    iconKey: 'barChart3',
  },
  {
    title: 'Fraud Detection & Security Analysis',
    description: 'Identify and prevent fraudulent activities in real-time with advanced anomaly detection and pattern recognition.',
    iconKey: 'shieldCheck',
  },
];

export default function UseCases({
  title = 'Use Cases',
  subtitle = 'Transform your business with AI-powered insights across key areas',
  useCases = defaultUseCases,
}: UseCasesProps) {
  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}

        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => {
            const IconComponent: LucideIcon = useCase.icon ?? iconMap[useCase.iconKey ?? ''] ?? TrendingUp;
            return (
              <div key={index} className={styles.useCaseCard}>
                <div className={styles.useCaseIcon}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
