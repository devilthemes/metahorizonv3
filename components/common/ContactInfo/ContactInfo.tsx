'use client';

import { MapPin, Mail, Phone } from 'lucide-react';
import styles from './ContactInfo.module.scss';

interface ContactLocation {
  company: string;
  address?: string;
  email?: string;
  phone?: string;
}

interface ContactInfoProps {
  title?: string;
  locations: ContactLocation[];
}

export default function ContactInfo({
  title = 'Contact Information',
  locations,
}: ContactInfoProps) {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.infoTitle}>{title}</h3>
      
      <div className={styles.locationsList}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationItem}>
            <h4 className={styles.companyName}>{location.company}</h4>
            
            <div className={styles.contactDetails}>
              {location.address && (
                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Office</span>
                    <p className={styles.detailText}>{location.address}</p>
                  </div>
                </div>
              )}

              {location.email && (
                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Email</span>
                    <a href={`mailto:${location.email}`} className={styles.detailLink}>
                      {location.email}
                    </a>
                  </div>
                </div>
              )}

              {location.phone && (
                <div className={styles.contactDetail}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Phone</span>
                    <a href={`tel:${location.phone}`} className={styles.detailLink}>
                      {location.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
