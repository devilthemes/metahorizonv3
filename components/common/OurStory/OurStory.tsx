"use client";

import { Play } from "lucide-react";
import styles from "./OurStory.module.scss";

interface OurStoryProps {
  title?: string;
  paragraphs?: string[];
  videoThumbnail?: string;
  videoUrl?: string;
}

const defaultParagraphs = [
  "Founded with a mission to redefine enterprise security, Meta Horizon started as a small team of passionate technologists determined to help organizations navigate the growing challenges of cybersecurity.",
  "Over the years, we've grown into a global technology partner — serving clients across North America, Europe, and Asia, with a strong presence in Nepal and the United States.",
  "Our journey has been defined by our commitment to continuous learning and innovation. From implementing Zero Trust frameworks to optimizing cloud-native infrastructures, we've evolved alongside the fast-changing tech landscape — helping businesses stay ahead of digital threats and operational hurdles.",
  "Today, Meta Horizon stands as a trusted technology ally, empowering organizations to operate securely, transform digitally, and grow confidently in the age of connected intelligence.",
];

export default function OurStory({
  title = "Our Story",
  paragraphs = defaultParagraphs,
  videoThumbnail = "/assets/img/vid.jpg",
  videoUrl = "#",
}: OurStoryProps) {
  return (
    <section className={styles.ourStory}>
      <div className={styles.storyContainer}>
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>{title}</h2>

          <div className={styles.storyText}>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoThumbnail}>
            <img src={videoThumbnail} alt="Our Story Video" />
            <button className={styles.playButton} aria-label="Play video">
              <Play size={32} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
