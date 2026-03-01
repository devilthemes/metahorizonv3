'use client';

import Link from 'next/link';
import { ShieldCheck, Users, BarChart3, Cloud, Code, Briefcase, Server } from 'lucide-react';
import styles from './ServicesGrid.module.scss';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'support-soc-pentesting',
    title: 'Support & SOC & Pentesting',
    description: 'Comprehensive security operations center support and penetration testing services to identify and mitigate vulnerabilities.',
    icon: ShieldCheck,
    href: '/services/support-soc-pentesting',
    features: ['24/7 SOC Support', 'Penetration Testing', 'Vulnerability Assessment', 'Threat Detection'],
  },
  {
    id: 'identity-access-management',
    title: 'Identity & Access Management',
    description: 'Enterprise-grade IAM solutions with Zero Trust principles to secure your digital assets and manage user access.',
    icon: Users,
    href: '/services/identity-access-management',
    features: ['Zero Trust Architecture', 'Single Sign-On', 'Multi-Factor Authentication', 'Access Governance'],
  },
  {
    id: 'data-science-ai',
    title: 'Data Science, AI/ML & Advanced Analytics',
    description: 'Transform your data into actionable insights with advanced analytics, artificial intelligence, and machine learning solutions.',
    icon: BarChart3,
    href: '/services/data-science-ai',
    features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Business Intelligence'],
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Automation',
    description: 'Accelerate delivery with modern DevOps practices and cloud automation strategies for scalable infrastructure.',
    icon: Cloud,
    href: '/services/devops-cloud',
    features: ['CI/CD Pipeline', 'Cloud Migration', 'Infrastructure as Code', 'Container Orchestration'],
  },
  {
    id: 'custom-software',
    title: 'Custom Application Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.',
    icon: Code,
    href: '/services/custom-software',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization'],
  },
  {
    id: 'expert-as-a-service',
    title: 'Expert as a Service (EaaS) & Staffing',
    description: 'On-demand expertise and flexible staffing solutions to augment your team with skilled professionals.',
    icon: Briefcase,
    href: '/services/expert-as-a-service',
    features: ['Technical Consulting', 'Staff Augmentation', 'Project-Based Experts', 'Training & Upskilling'],
  },
  {
    id: 'manage-it',
    title: 'Manage IT Services',
    description: 'Comprehensive IT management services to optimize operations, reduce costs, and improve efficiency.',
    icon: Server,
    href: '/services/manage-it',
    features: ['IT Infrastructure Management', 'Help Desk Support', 'Network Monitoring', 'Disaster Recovery'],
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link href={service.href} className={styles.serviceLink}>
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
