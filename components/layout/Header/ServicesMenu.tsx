"use client";

import Link from "next/link";
import {
  BarChart3,
  Cloud,
  Code,
  Users,
  ShieldCheck,
  X,
} from "lucide-react";
import styles from "./ServicesMenu.module.scss";

const services = [
  {
    name: "Support & SOC & Pentesting",
    description: "Comprehensive security operations and penetration testing services.",
    href: "/services/support-soc-pentesting",
    icon: ShieldCheck,
  },
  {
    name: "Identity & Access Management",
    description: "Secure Access, Simplified Management",
    href: "/services/identity-access-management",
    icon: Users,
  },
  {
    name: "Data Science, AI/ML & Advanced Analytics",
    description: "Unlocking Insights Through AI, ML, and Analytics",
    href: "/services/data-science-ai",
    icon: BarChart3,
  },
  {
    name: "DevOps & Cloud Automation",
    description: "Accelerating Delivery with DevOps and Cloud Automation",
    href: "/services/devops-cloud",
    icon: Cloud,
  },
  {
    name: "Custom Software Development",
    description: "Tailored solutions with cutting-edge technologies",
    href: "/services/custom-software",
    icon: Code,
  },
  {
    name: "Expert-as-a-Service (EaaS) & Staffing",
    description: "Providing On-Demand Expertise and Flexible Staffing Solutions",
    href: "/services/expert-as-a-service",
    icon: Users,
  },
  {
    name: "Manage IT Services",
    description: "Optimizing IT Operations for Efficiency and Reliability",
    href: "/services/manage-it",
    icon: BarChart3,
  },
];

const iamPartners = [
  {
    name: "MetaAuthIAM",
    logo: "/assets/img/services/metaauth.png",
    href: "https://metaauthiam.com",
    external: true,
  },
  {
    name: "Okta",
    logo: "/assets/img/services/okta.jpg",
    href: "/partners/okta",
    external: false,
  },
  {
    name: "PingIdentity",
    logo: "/assets/img/services/pingidentity.png",
    href: "/partners/pingidentity",
    external: false,
  },
  {
    name: "CyberArk",
    logo: "/assets/img/services/cyberark.png",
    href: "/partners/cyberark",
    external: false,
  },
  {
    name: "SailPoint",
    logo: "/assets/img/services/sailpoint.png",
    href: "/partners/sailpoint",
    external: false,
  },
];

interface ServicesMenuProps {
  onClose?: () => void;
}

export default function ServicesMenu({ onClose }: ServicesMenuProps) {
  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className={styles.servicesMenu}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={styles.closeButton}
        aria-label="Close menu"
      >
        <X className={styles.closeIcon} />
      </button>

      <div className={styles.menuContent}>
        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className={styles.serviceCard}
                  onClick={handleLinkClick}
                >
                  <div className={styles.serviceIcon}>
                    <Icon className={styles.iconSvg} size={24} strokeWidth={1.5} />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4 className={styles.serviceName}>{service.name}</h4>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Identity & Access Management Partners Section */}
        <div className={styles.partnersSection}>
          <h3 className={styles.sectionTitle}>Identity & Access Management</h3>
          <div className={styles.partnersGrid}>
            {iamPartners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className={styles.partnerCard}
                target={partner.external ? "_blank" : undefined}
                rel={partner.external ? "noopener noreferrer" : undefined}
                onClick={handleLinkClick}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={styles.partnerLogo}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
