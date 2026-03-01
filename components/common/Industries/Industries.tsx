"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Industries.module.scss";

interface IndustryFeature {
  text: string;
}

interface Industry {
  id: string;
  name: string;
  image: string;
  title: string;
  features: IndustryFeature[];
  ctaText?: string;
  ctaHref?: string;
}

interface IndustriesProps {
  title?: string;
  industries?: Industry[];
}

const defaultIndustries: Industry[] = [
  {
    id: "banking",
    name: "Banking & Financial Institutions",
    image: "/assets/img/industries/banking.jpg",
    title: "Banking & Financial Institutions",
    features: [
      { text: "Secure customer onboarding & transactions" },
      { text: "Automate compliance and audit trails" },
      { text: "Prevent fraud with privileged access control" },
    ],
    ctaText: "Optimize Banking Security",
    ctaHref: "/services/identity-access-management",
  },
  {
    id: "insurance",
    name: "Insurance",
    image: "/assets/img/industries/insurance.jpg",
    title: "Insurance",
    features: [
      { text: "Streamline policy management" },
      { text: "Secure claims processing" },
      { text: "Regulatory compliance automation" },
    ],
    ctaText: "Learn More",
    ctaHref: "/services",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/img/industries/healthcare.jpg",
    title: "Healthcare",
    features: [
      { text: "HIPAA compliant access management" },
      { text: "Secure patient data handling" },
      { text: "Role-based access for medical staff" },
    ],
    ctaText: "Learn More",
    ctaHref: "/services",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    image: "/assets/img/industries/retail.jpg",
    title: "Retail & E-Commerce",
    features: [
      { text: "Secure online transactions" },
      { text: "Customer data protection" },
      { text: "Inventory management security" },
    ],
    ctaText: "Learn More",
    ctaHref: "/services",
  },
  {
    id: "telecom",
    name: "Telecom",
    image: "/assets/img/industries/telecom.jpg",
    title: "Telecom",
    features: [
      { text: "Network infrastructure security" },
      { text: "Customer data privacy" },
      { text: "Compliance with telecom regulations" },
    ],
    ctaText: "Learn More",
    ctaHref: "/services",
  },
];

export default function Industries({
  title = "Industries We Serve",
  industries = defaultIndustries,
}: IndustriesProps) {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]?.id ?? '');

  const activeIndustryData =
    industries.find((ind) => ind.id === activeIndustry) ?? industries[0];

  if (!activeIndustryData) return null;

  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.industryTabs}>
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`${styles.tab} ${activeIndustry === industry.id ? styles.active : ""}`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div className={styles.industryContent}>
          <div className={styles.industryImage}>
            <img src={activeIndustryData.image} alt={activeIndustryData.name} />
          </div>
          <div className={styles.industryInfo}>
            <h3 className={styles.industryTitle}>{activeIndustryData.title}</h3>
            <ul className={styles.featureList}>
              {activeIndustryData.features.map((feature, index) => (
                <li key={index}>
                  <Check size={18} className={styles.checkIcon} />
                  {feature.text}
                </li>
              ))}
            </ul>
            {activeIndustryData.ctaText && (
              <a href={activeIndustryData.ctaHref} className={styles.ctaButton}>
                {activeIndustryData.ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
