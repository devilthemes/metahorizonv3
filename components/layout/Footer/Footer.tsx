"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Container>
          <Row className="g-4">
            {/* Company Info Column */}
            <Col lg={4} md={6}>
              <div className={styles.footerColumn}>
                <Link href="/" className={styles.logo}>
                  <img
                    src="/assets/img/meta-horizon-logo.png"
                    alt="Metahorizon"
                    width="150"
                    height="40"
                  />
                </Link>
                <p className={styles.companyDescription}>
                  Enterprise-grade Identity Access Management and cybersecurity
                  solutions with Zero Trust principles.
                </p>
              </div>
            </Col>

            {/* Quick Links Column */}
            <Col lg={2} md={6}>
              <div className={styles.footerColumn}>
                <h3 className={styles.footerHeading}>Quick Links</h3>
                <ul className={styles.footerLinks}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="/request-demo">Request Demo</Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Solutions Column */}
            <Col lg={4} md={6}>
              <div className={styles.footerColumn}>
                <h3 className={styles.footerHeading}>Solutions</h3>
                <ul className={styles.footerLinks}>
                  <li>
                    <Link href="/services/support-soc-pentesting">
                      Support & SOC & Pentesting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/identity-access-management">
                      Identity & Access Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/data-science-ai">
                      Data Science, AI/ML & Advanced Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devops-cloud">
                      DevOps & Cloud Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/custom-software">
                      Custom Application Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/expert-as-a-service">
                      Expert as a Service
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Contact Column */}
            <Col lg={2} md={6}>
              <div className={styles.footerColumn}>
                <h3 className={styles.footerHeading}>Contact</h3>
                <ul className={styles.contactInfo}>
                  <li>
                    <MapPin size={18} strokeWidth={1.5} className={styles.contactIcon} />
                    <span>
                      1303 W Walnut Hill, Suite 340 Irving, Texas 75038
                    </span>
                  </li>
                  <li>
                    <Phone size={18} strokeWidth={1.5} className={styles.contactIcon} />
                    <a href="tel:+14694969588">+1 (469) 496-9588</a>
                  </li>
                  <li>
                    <Mail size={18} strokeWidth={1.5} className={styles.contactIcon} />
                    <a href="mailto:contact@metahorizon.com">
                      contact@metahorizon.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <Container>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <p className={styles.copyright}>
                © {currentYear} Metahorizon Inc. All Rights Reserved.
              </p>
            </Col>
            <Col md={6}>
              <ul className={styles.legalLinks}>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Partner Logos */}
          <Row className="justify-content-center mb-4">
            <Col className="d-flex flex-wrap justify-content-center gap-4">
              <div className={styles.partnerLogo}>
                <img
                  src="/assets/img/partners/security-bulwark.png"
                  alt="Security Bulwark"
                  width="120"
                  height="40"
                />
              </div>
              <div className={styles.partnerLogo}>
                <img
                  src="/assets/img/partners/decision-trust.png"
                  alt="Decision Trust"
                  width="120"
                  height="40"
                />
              </div>
              <div className={styles.partnerLogo}>
                <img
                  src="/assets/img/partners/metahorizon-college.png"
                  alt="Metahorizon College"
                  width="120"
                  height="40"
                />
              </div>
              <div className={styles.partnerLogo}>
                <img
                  src="/assets/img/partners/softntek.png"
                  alt="SOFTNTEK"
                  width="120"
                  height="40"
                />
              </div>
            </Col>
          </Row>

          {/* Social Media Links */}
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/profile.php?id=61585496597518"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img
                    src="/assets/img/social/facebook.svg"
                    alt="Facebook"
                    width="24"
                    height="24"
                    title="Facebook"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/metahorizon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/assets/img/social/linkedin.svg"
                    alt="LinkedIn"
                    width="24"
                    height="24"
                    title="LinkedIn"
                  />
                </a>
                <a
                  href="https://youtube.com/@metahorizon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <img
                    src="/assets/img/social/youtube.svg"
                    alt="YouTube"
                    width="24"
                    height="24"
                    title="YouTube"
                  />
                </a>
              </div>
            </Col>
          </Row>

          {/* Ariba Network Badge */}
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className={styles.aribaBadge}>
                <a
                  href="https://ariba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/ariba-network.jpg"
                    alt="Find us on Ariba Network"
                    width="180"
                    height="50"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
