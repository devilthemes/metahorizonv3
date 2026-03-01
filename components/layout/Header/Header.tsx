"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  Wrench,
} from "lucide-react";
import ProductsMenu from "./ProductsMenu";
import ServicesMenu from "./ServicesMenu";
import styles from "./Header.module.scss";

interface NavItem {
  label: string;
  href: string;
  children?: NavSection[];
  hasRichMenu?: boolean;
}

interface NavSection {
  title: string;
  icon?: React.ElementType | null;
  items: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Products",
    href: "/products",
    hasRichMenu: true,
    children: [
      {
        title: "Metahorizon Product Labs",
        icon: FlaskConical,
        items: [
          { label: "MetaAuthIAM", href: "/products/metaauthiam" },
          { label: "Metahorizon Documme", href: "/products/documme" },
          { label: "Metahorizon Qvolv", href: "/products/qvolv" },
        ],
      },
      {
        title: "Metahorizon Academy",
        icon: GraduationCap,
        items: [
          {
            label: "Professional Development & Upskilling",
            href: "/academy/professional-development",
          },
          {
            label: "Leadership Professional Skills Tracks",
            href: "/academy/leadership",
          },
          {
            label: "Start with Degree and Diploma",
            href: "/academy/degree-diploma",
          },
          {
            label: "Global Technical Certifications",
            href: "/academy/global-certifications",
          },
          { label: "Skill Enhancement", href: "/academy/skill-enhancement" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        title: "Services",
        icon: Wrench,
        items: [
          {
            label: "Support & SOC & Pentesting",
            href: "/services/support-soc-pentesting",
          },
          {
            label: "Identity & Access Management",
            href: "/services/identity-access-management",
          },
          {
            label: "Data Science, AI/ML & Advanced Analytics",
            href: "/services/data-science-ai",
          },
          {
            label: "DevOps & Cloud Automation",
            href: "/services/devops-cloud",
          },
          {
            label: "Custom Software Development",
            href: "/services/custom-software",
          },
          {
            label: "Expert-as-a-Service (EaaS) & Staffing",
            href: "/services/expert-as-a-service",
          },
          { label: "Manage IT Services", href: "/services/manage-it" },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleDropdown = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (isMobileMenuOpen) {
      // Mobile: toggle the dropdown
      setMobileDropdown(mobileDropdown === index ? null : index);
    } else {
      // Desktop/Tablet: toggle the dropdown
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobileMenuOpen) {
      setHoveredDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) {
      setHoveredDropdown(null);
    }
  };

  const isDropdownOpen = (index: number) => {
    if (isMobileMenuOpen) {
      return mobileDropdown === index;
    }
    return activeDropdown === index || hoveredDropdown === index;
  };

  const renderDropdownContent = (item: NavItem, isMobile: boolean = false) => {
    const handleClose = () => {
      setHoveredDropdown(null);
      setActiveDropdown(null);
      setMobileDropdown(null);
      if (isMobile) {
        closeMobileMenu();
      }
    };

    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile) {
        setMobileDropdown(null);
      } else {
        setHoveredDropdown(null);
        setActiveDropdown(null);
      }
    };

    if (item.hasRichMenu) {
      return (
        <>
          <button
            className={styles.closeDropdown}
            onClick={handleToggle}
            aria-label="Close menu"
          >
            <ChevronDown className={styles.closeDropdownIcon} size={20} />
            Back
          </button>
          <ProductsMenu onClose={handleClose} />
        </>
      );
    }
    if (item.label === "Services") {
      return (
        <>
          <button
            className={styles.closeDropdown}
            onClick={handleToggle}
            aria-label="Close menu"
          >
            <ChevronDown className={styles.closeDropdownIcon} size={20} />
            Back
          </button>
          <ServicesMenu onClose={handleClose} />
        </>
      );
    }
    return item.children?.map((section, sectionIndex) => {
      const IconComponent = section.icon;
      return (
        <div key={sectionIndex} className={styles.dropdownSection}>
          <span className={styles.dropdownTitle}>
            {IconComponent && (
              <IconComponent
                className={styles.dropdownIcon}
                size={18}
                strokeWidth={1.5}
              />
            )}
            {section.title}
          </span>
          <ul className={styles.dropdownSubmenu}>
            {section.items.map((subItem) => (
              <li key={subItem.href}>
                <Link href={subItem.href} onClick={handleClose}>
                  <ChevronRight
                    className={styles.submenuIcon}
                    size={16}
                    strokeWidth={1.5}
                  />
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.siteLogo}>
            <img
              src="/assets/img/meta-horizon-logo.png"
              alt="Metahorizon"
              width="150"
              height="40"
            />
          </Link>

          <nav
            className={`${styles.mainNavigation} ${isMobileMenuOpen ? styles.active : ""}`}
            aria-label="Main Navigation"
          >
            <ul className={styles.navMenu}>
              {navItems.map((item, index) => {
                const isOpen = isDropdownOpen(index);
                return (
                  <li
                    key={item.href}
                    className={`${styles.navItem} ${item.children ? styles.hasDropdown : ""} ${isOpen ? styles.active : ""}`}
                    onMouseEnter={() => item.children && handleMouseEnter(index)}
                    onMouseLeave={() => item.children && handleMouseLeave()}
                  >
                    {item.children ? (
                      <>
                        <button
                          className={styles.navLink}
                          onClick={(e) => toggleDropdown(index, e)}
                          aria-expanded={isOpen}
                        >
                          {item.label}
                          <ChevronDown
                            className={`${styles.dropdownArrow} ${isOpen ? styles.active : ""}`}
                            size={16}
                            strokeWidth={2}
                          />
                        </button>
                        <div
                          className={`${styles.dropdownMenu} ${item.hasRichMenu || item.label === "Services" ? styles.richMenu : ""}`}
                          data-open={isOpen}
                        >
                          {renderDropdownContent(item, isMobileMenuOpen)}
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href="/request-demo"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.mobileCta}`}
              onClick={closeMobileMenu}
            >
              Request a Demo
            </Link>
          </nav>

          <div className={styles.headerCta}>
            <Link
              href="/request-demo"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={closeMobileMenu}
            >
              Request a Demo
            </Link>
          </div>

          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      <main id="main-content" className={styles.mainContent}>
        {/* Page content */}
      </main>
    </>
  );
}
