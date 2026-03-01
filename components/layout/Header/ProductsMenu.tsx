"use client";

import Link from "next/link";
import {
  FlaskConical,
  FileText,
  Boxes,
  TrendingUp,
  Users,
  Award,
  BadgeCheck,
  Zap,
  X,
} from "lucide-react";
import styles from "./ProductsMenu.module.scss";

const products = [
  {
    name: "MetaAuthIAM",
    description:
      "Redefine your business's Identity Access with MetaAuthIAM, a solution designed for Seamless & Secure Access Management.",
    href: "https://metaauthiam.com",
    icon: "/assets/img/metaauthiamicon.png",
    external: true,
  },
  {
    name: "Metahorizon Documme",
    description:
      "Metahorizon Documme uses AI to turn conversations and workflows into structured, searchable documentation automatically.",
    href: "/products/documme",
    icon: "/assets/img/docummeicon.png",
    external: false,
  },
  {
    name: "Metahorizon Qvolv",
    description:
      "Metahorizon Qvolv combines AI and XR technologies to deliver immersive experiences for training, collaboration, and performance.",
    href: "/products/qvolv",
    icon: "/assets/img/qvolv.png",
    external: false,
  },
];

const academyLinks = [
  {
    name: "Professional Development & Upskilling",
    href: "/academy/professional-development",
    icon: TrendingUp,
  },
  {
    name: "Leadership Professional Skills Tracks",
    href: "/academy/leadership",
    icon: Users,
  },
  {
    name: "Start with Degree and Diploma",
    href: "/academy/degree-diploma",
    icon: Award,
  },
  {
    name: "Global Technical Certifications",
    href: "/academy/global-certifications",
    icon: BadgeCheck,
  },
  {
    name: "Skill Enhancement",
    href: "/academy/skill-enhancement",
    icon: Zap,
  },
];

interface ProductsMenuProps {
  onClose?: () => void;
}

export default function ProductsMenu({ onClose }: ProductsMenuProps) {
  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className={styles.productsMenu}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={styles.closeButton}
        aria-label="Close menu"
      >
        <X className={styles.closeIcon} />
      </button>

      <div className={styles.menuContent}>
        {/* Metahorizon Product Labs Section */}
        <div className={styles.productsSection}>
          <h3 className={styles.sectionTitle}>Metahorizon Product Labs</h3>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={styles.productCard}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
                onClick={handleLinkClick}
              >
                <div className={styles.productIcon}>
                  <img
                    src={product.icon}
                    className={styles.iconSvg}
                    alt={product.name}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>{product.name}</h4>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Metahorizon Academy Section */}
        <div className={styles.academySection}>
          <h3 className={styles.sectionTitle}>Metahorizon Academy</h3>
          <div className={styles.academyGrid}>
            {academyLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.academyLink}
                  onClick={handleLinkClick}
                >
                  <Icon
                    className={styles.academyIcon}
                    size={20}
                    strokeWidth={1.5}
                  />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
