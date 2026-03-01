'use client';

import { Target, Lightbulb } from 'lucide-react';
import styles from './MissionVision.module.scss';

interface ContentBlock {
  title: string;
  description: string;
  image: string;
  icon?: React.ElementType;
  reverse?: boolean;
}

interface MissionVisionProps {
  mission?: ContentBlock;
  vision?: ContentBlock;
}

const defaultMission: ContentBlock = {
  title: 'Our Mission',
  description: `Our mission is to deliver reliable, scalable, and future-ready technology solutions that strengthen enterprise security and efficiency. With deep expertise in identity and access management, cloud automation, and analytics, we empower businesses to protect their assets and innovate with confidence.

We are driven by a commitment to excellence and collaboration—working hand-in-hand with our clients to build systems that don't just defend but also evolve. Every solution we create at Meta Horizon reflects our core belief: true progress happens when security and innovation move together.`,
  image: '/assets/img/mission.jpg',
  icon: Target,
};

const defaultVision: ContentBlock = {
  title: 'Our Vision',
  description: `Our vision is to redefine the landscape of digital security by building intelligent, adaptive, and human-centered solutions that empower enterprises to thrive in a connected world. We believe in creating a future where technology works as a trusted partner—driving innovation while safeguarding every digital touchpoint.

We aspire to become a global leader in secure digital transformation, helping businesses embrace growth without compromise. Through trust, agility, and forward-thinking innovation, Meta Horizon envisions a digital ecosystem where organizations can operate fearlessly and achieve sustainable success.`,
  image: '/assets/img/vision.jpg',
  icon: Lightbulb,
  reverse: true,
};

export default function MissionVision({
  mission = defaultMission,
  vision = defaultVision,
}: MissionVisionProps) {
  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        {/* Mission Block */}
        <div className={`${styles.contentBlock} ${mission.reverse ? styles.reverse : ''}`}>
          <div className={styles.contentImage}>
            <img src={mission.image} alt={mission.title} />
          </div>
          <div className={styles.contentText}>
            <h2 className={styles.blockTitle}>{mission.title}</h2>
            <div className={styles.blockDescription}>
              {mission.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Block */}
        <div className={`${styles.contentBlock} ${vision.reverse ? styles.reverse : ''}`}>
          <div className={styles.contentImage}>
            <img src={vision.image} alt={vision.title} />
          </div>
          <div className={styles.contentText}>
            <h2 className={styles.blockTitle}>{vision.title}</h2>
            <div className={styles.blockDescription}>
              {vision.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
