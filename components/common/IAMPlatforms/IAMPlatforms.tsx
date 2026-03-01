'use client';

import Image from 'next/image';
import styles from './IAMPlatforms.module.scss';

interface Platform {
  name: string;
  logo: string;
  description?: string;
}

interface IAMPlatformsProps {
  title?: string;
  subtitle?: string;
  platforms?: Platform[];
}

const defaultPlatforms: Platform[] = [
  {
    name: 'SailPoint',
    logo: '/assets/img/services/sailpoint.png',
    description: 'Enterprise identity governance and administration',
  },
  {
    name: 'CyberArk',
    logo: '/assets/img/services/cyberark.png',
    description: 'Privileged access management and security',
  },
  {
    name: 'PingIdentity',
    logo: '/assets/img/services/pingidentity.png',
    description: 'Identity and access management solutions',
  },
  {
    name: 'Okta',
    logo: '/assets/img/services/okta.jpg',
    description: 'Cloud-based identity and access management',
  },
  {
    name: 'MetaAuthIAM',
    logo: '/assets/img/services/metaauth.png',
    description: 'MetaHorizon\'s native IAM solution',
  },
];

export default function IAMPlatforms({
  title = 'IAM Platforms We Support',
  subtitle = 'Expert implementation and management across leading identity platforms',
  platforms = defaultPlatforms,
}: IAMPlatformsProps) {
  return (
    <section className={styles.platforms}>
      <div className={styles.container}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        
        <div className={styles.platformsGrid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              <div className={styles.platformLogo}>
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={180}
                  height={80}
                  className={styles.logoImage}
                />
              </div>
              {platform.description && (
                <p className={styles.platformDescription}>{platform.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
