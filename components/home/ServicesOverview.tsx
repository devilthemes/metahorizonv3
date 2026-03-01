'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Fingerprint, Server, Cloud, Headphones, FileText, GraduationCap, BrainCircuit, Code, UserPlus, Sparkles } from 'lucide-react';
import styles from './ServicesOverview.module.scss';

interface Service {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
  href: string;
  features: string[];
  badge?: string;
}

const SERVICES: Service[] = [
  { icon: Fingerprint, title: 'Identity & Access Management', description: 'Enterprise-grade IAM solutions with Zero Trust architecture to secure your digital assets and ensure compliance.', href: '/services/identity-access-management', features: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Identity Governance', 'Privileged Access Management'] },
  { icon: Server, title: 'Managed IT Services', description: 'Comprehensive IT management with 24/7 monitoring, support, and proactive maintenance to keep your business running.', href: '/services/manage-it', features: ['24/7 Help Desk Support', 'Network Monitoring', 'Infrastructure Management', 'Disaster Recovery'] },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Accelerate your cloud journey with expert DevOps practices, automation, and cloud-native solutions.', href: '/services/devops-cloud', features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'] },
  { icon: Headphones, title: 'Support, SOC & Pentesting', description: 'Protect your business with 24/7 SOC monitoring, penetration testing, and comprehensive security assessments.', href: '/services/support-soc-pentesting', features: ['24/7 SOC Monitoring', 'Penetration Testing', 'Vulnerability Assessment', 'Incident Response'] },
  { icon: BrainCircuit, title: 'Data Science & AI/ML', description: 'Harness the power of data with advanced analytics, machine learning, and AI-driven insights.', href: '/services/data-science-ai', features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'AI Strategy'] },
  { icon: Code, title: 'Custom Software Development', description: 'Build tailored software solutions that address your unique business challenges and drive innovation.', href: '/services/custom-software', features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'] },
  { icon: UserPlus, title: 'Expert-as-a-Service', description: 'Access top-tier talent and specialized expertise on-demand to augment your team and accelerate projects.', href: '/services/expert-as-a-service', features: ['Staff Augmentation', 'Technical Consultants', 'Project-Based Experts', 'Flexible Engagement'] },
  { icon: FileText, title: 'Metahorizon Documme', description: 'AI-powered documentation platform that automatically captures, organizes, and retrieves knowledge.', href: '/products/documme', features: ['Auto-Documentation', 'AI-Powered Search', 'Meeting Summaries', 'Knowledge Base'], badge: 'Product' },
  { icon: Sparkles, title: 'Metahorizon Qvolv', description: 'Immersive AR/VR/MR solutions with AI-powered digital twins for enterprise training and collaboration.', href: '/products/qvolv', features: ['Digital Twins', 'VR Training', 'AR Collaboration', 'XR Analytics'], badge: 'Product' },
  { icon: GraduationCap, title: 'Metahorizon Academy', description: 'Upskill your team with industry-recognized certifications, leadership tracks, and professional development.', href: '/academy/professional-development', features: ['Leadership Training', 'Technical Certifications', 'Skill Enhancement', 'Degree Programs'], badge: 'Academy' },
];

const BREAKPOINTS = { lg: 1024, md: 768 };

export default function ServicesOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    setVisibleCards(width >= BREAKPOINTS.lg ? 3 : width >= BREAKPOINTS.md ? 2 : 1);
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [updateVisibleCards]);

  const maxIndex = useMemo(() => Math.max(0, SERVICES.length - visibleCards), [visibleCards]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      return newIndex > maxIndex ? 0 : newIndex;
    });
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className={styles.servicesOverview}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Services & Solutions</h2>
          <p className={styles.sectionSubtitle}>Comprehensive technology solutions to drive your business forward</p>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.navButton} ${styles.prev} ${!canGoPrev ? styles.disabled : ''}`} onClick={prevSlide} aria-label="Previous services" disabled={!canGoPrev}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carouselViewport}>
            <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
              {SERVICES.map((service, index) => (
                <div key={index} className={styles.carouselCard}>
                  <Link href={service.href} className={`${styles.serviceCard} ${service.badge ? styles.hasBadge : ''}`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}><service.icon size={32} strokeWidth={1.5} /></div>
                      {service.badge && <span className={styles.badge}>{service.badge}</span>}
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, i) => (
                        <li key={i} className={styles.featureItem}><span className={styles.checkIcon}>✓</span>{feature}</li>
                      ))}
                    </ul>
                    <span className={styles.learnMore}>Learn More<svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button className={`${styles.navButton} ${styles.next} ${!canGoNext ? styles.disabled : ''}`} onClick={nextSlide} aria-label="Next services" disabled={!canGoNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: Math.max(1, SERVICES.length - visibleCards + 1) }, (_, i) => i).map((index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
