'use client';

import { useState } from 'react';
import { Shield, Users, Key, Server, Database, Cloud, Cpu, Lock, Activity, ShieldCheck, Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './OktaCapabilities.module.scss';

interface CapabilityCategory {
  title: string;
  icon: React.ElementType;
  capabilities: Capability[];
}

interface Capability {
  name: string;
  description: string;
}

interface PlatformCard {
  name: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  href: string;
}

const capabilityCategories: CapabilityCategory[] = [
  {
    title: 'Identity & Access Management',
    icon: Shield,
    capabilities: [
      { name: 'Single Sign-On (SSO)', description: 'One identity, one login for all business apps' },
      { name: 'Adaptive MFA', description: 'Context-driven authentication with risk scoring' },
      { name: 'Device Access', description: 'Secure access from any device, anywhere' },
      { name: 'API Access Management', description: 'Centralized authorization for APIs' },
    ],
  },
  {
    title: 'Lifecycle Management',
    icon: Users,
    capabilities: [
      { name: 'Automated Onboarding', description: 'Streamline new hire provisioning' },
      { name: 'Role Changes', description: 'Dynamic access management for transitions' },
      { name: 'Offboarding', description: 'Automated deprovisioning and access removal' },
      { name: 'HR System Integration', description: 'Sync with Workday, SAP SuccessFactors, and more' },
    ],
  },
  {
    title: 'Identity Governance',
    icon: ShieldCheck,
    capabilities: [
      { name: 'Access Requests', description: 'Self-service access with approval workflows' },
      { name: 'Access Reviews', description: 'Automated certification campaigns' },
      { name: 'Compliance Reporting', description: 'Audit trails for SOC 2, HIPAA, GDPR' },
      { name: 'Policy Enforcement', description: 'Automated governance policies' },
    ],
  },
  {
    title: 'Universal Directory',
    icon: Database,
    capabilities: [
      { name: 'Centralized User Store', description: 'Single source of truth for all identities' },
      { name: 'Multi-Source Sync', description: 'Connect AD, LDAP, HR systems, and apps' },
      { name: 'Profile Management', description: 'Unified identity profiles with attributes' },
      { name: 'Group Management', description: 'Dynamic groups and role-based access' },
    ],
  },
  {
    title: 'Privileged Access',
    icon: Key,
    capabilities: [
      { name: 'Privileged Access Management', description: 'Secure admin and privileged accounts' },
      { name: 'Just-in-Time Access', description: 'Time-limited privileged access grants' },
      { name: 'Session Recording', description: 'Audit and record privileged sessions' },
      { name: 'Credential Vaulting', description: 'Secure storage for sensitive credentials' },
    ],
  },
  {
    title: 'Integration & Gateway',
    icon: Globe,
    capabilities: [
      { name: 'Okta Integration Network', description: '7,000+ pre-built integrations' },
      { name: 'Access Gateway', description: 'Bridge on-prem and cloud applications' },
      { name: 'Secure Partner Access', description: 'Extend access to external partners' },
      { name: 'Custom Integrations', description: 'Build with Okta APIs and SDKs' },
    ],
  },
];

const platforms: PlatformCard[] = [
  {
    name: 'OKTA',
    tagline: 'Identity Security Fabric',
    icon: Cloud,
    description: 'Secure all of your identities within an identity security fabric. Okta provides comprehensive workforce identity with SSO, MFA, lifecycle management, and governance. Protect employees, contractors, and partners with Zero Trust security.',
    href: '/contact-us',
  },
  {
    name: 'AUTH0',
    tagline: 'Customer Identity Cloud',
    icon: Zap,
    description: 'Ship amazing experiences with enterprise-grade customer identity. Auth0 enables seamless customer authentication, user management, and personalized experiences. Build secure, frictionless journeys for millions of users.',
    href: '/contact-us',
  },
];

export default function OktaCapabilities() {
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedPlatform(expandedPlatform === index ? null : index);
  };

  return (
    <section className={styles.oktaCapabilities}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Okta Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive Okta implementation and optimization services across all identity domains
          </p>
        </div>

        <div className={styles.platformBanner}>
          <div className={styles.platformContent}>
            <Cloud className={styles.platformIcon} size={48} strokeWidth={1.5} />
            <p className={styles.platformText}>
              <strong>Our platforms secure all types of identity</strong> — from AI agents to your customers, employees, and partners.
            </p>
          </div>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilityCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className={styles.capabilityCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>
                <ul className={styles.capabilityList}>
                  {category.capabilities.map((capability, index) => (
                    <li key={index} className={styles.capabilityItem}>
                      <div className={styles.capabilityName}>{capability.name}</div>
                      <div className={styles.capabilityDescription}>{capability.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.platformsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Okta Platforms</h2>
            <p className={styles.sectionSubtitle}>
              Two powerful platforms for all your identity needs
            </p>
          </div>
          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              const isExpanded = expandedPlatform === index;
              return (
                <div key={index} className={styles.platformCard}>
                  <div className={styles.platformCardHeader}>
                    <div className={styles.platformCardIcon}>
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.platformCardTitle}>{platform.name}</h3>
                    <span className={styles.platformTagline}>{platform.tagline}</span>
                  </div>
                  
                  <div className={`${styles.platformCardDescription} ${isExpanded ? styles.expanded : ''}`}>
                    {platform.description}
                  </div>
                  
                  <button
                    onClick={() => toggleExpand(index)}
                    className={styles.expandButton}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less' : 'Learn more'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  <a href={platform.href} className={styles.platformCardCta}>
                    Contact us →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
