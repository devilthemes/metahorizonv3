'use client';

import styles from './Timeline.module.scss';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  align?: 'left' | 'right';
}

interface TimelineProps {
  title?: string;
  items?: TimelineItem[];
}

const defaultItems: TimelineItem[] = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'Established as a consulting firm with the vision to provide highly experienced technical consultants.',
    align: 'right',
  },
  {
    year: '2013',
    title: 'SailPoint Practice Launched',
    description: 'One of the first consulting companies in Dallas-Fort Worth to provide highly skilled SailPoint Consultants.',
    align: 'left',
  },
  {
    year: '2015',
    title: 'Consolidation in IAM',
    description: 'Over 50+ consultants placed throughout the US.',
    align: 'right',
  },
  {
    year: '2018',
    title: 'Expanding Beyond Borders',
    description: 'Established our global offices to provide offshore SailPoint resources in Nepal, India & Sri Lanka.',
    align: 'left',
  },
  {
    year: '2021',
    title: 'Rent-an-Expert',
    description: 'Added Rent-An-Expert to our portfolio of services which includes Professional & Managed Services.',
    align: 'right',
  },
  {
    year: '2022',
    title: 'Launching MHIITS',
    description: 'Established computer training institute in Nepal to produce qualified employee.',
    align: 'left',
  },
  {
    year: '2024',
    title: 'Meta Horizon College',
    description: 'Established College of B.Sc/IT making bridge between academics and industry.',
    align: 'right',
  },
];

export default function Timeline({
  title = 'Our Journey Through the Years',
  items = defaultItems,
}: TimelineProps) {
  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>

          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${item.align === 'left' ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
