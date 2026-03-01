'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What is Identity and Access Management (IAM)?',
    answer: 'Identity and Access Management (IAM) is a framework of policies and technologies that ensures the right people have the appropriate access to technology resources. IAM systems help organizations manage digital identities and control user access to critical information.',
  },
  {
    question: 'What is Zero Trust Security?',
    answer: 'Zero Trust is a security model that requires strict identity verification for every person and device trying to access resources on a network, regardless of whether they are sitting within or outside of the network perimeter.',
  },
  {
    question: 'How can Metahorizon help with cybersecurity?',
    answer: 'Metahorizon provides comprehensive cybersecurity solutions including SOC monitoring, penetration testing, vulnerability assessments, and incident response. Our expert team helps identify and mitigate security risks before they become threats.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including Banking & Financial Institutions, Healthcare, Insurance, Retail & E-Commerce, Telecom, and more. Our solutions are tailored to meet industry-specific compliance and security requirements.',
  },
  {
    question: 'Do you offer 24/7 support?',
    answer: 'Yes, we provide 24/7 SOC monitoring and support services to ensure your systems are protected around the clock. Our team is always available to respond to security incidents and provide assistance.',
  },
];

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs = defaultFAQs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        {title && <h2 className={styles.faqTitle}>{title}</h2>}
        {subtitle && <p className={styles.faqSubtitle}>{subtitle}</p>}
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <ChevronDown
                  className={`${styles.chevron} ${openIndex === index ? styles.open : ''}`}
                />
              </button>
              <div
                className={styles.faqAnswer}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
