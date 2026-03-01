"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import styles from "./ServiceDetail.module.scss";

interface ServiceDetailProps {
  title: string;
  description: string;
  overview: string;
  features: { title: string; description: string }[];
  benefits: string[];
  ctaHref?: string;
  noBackground?: boolean;
}

export default function ServiceDetail({
  title,
  description,
  overview,
  features,
  benefits,
  ctaHref = "/contact-us",
  noBackground = false,
}: ServiceDetailProps) {
  return (
    <section className={`${styles.serviceDetail} `}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionDescription}>{description}</p>

            <div className={styles.overview}>
              <h3 className={styles.subheading}>Overview</h3>
              <p>{overview}</p>
            </div>

            {/* Features */}
            <div className={styles.features}>
              <h3 className={styles.subheading}>Key Features</h3>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureCard}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.benefits}>
              <h3 className={styles.subheading}>Benefits</h3>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={20} className={styles.checkIcon} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Get Started Today</h3>
              <p className={styles.sidebarDescription}>
                Ready to transform your business? Contact our experts for a
                consultation.
              </p>
              <Link href={ctaHref} className={styles.sidebarCta}>
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
