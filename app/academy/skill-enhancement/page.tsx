import type { Metadata } from 'next';
import ServicesHero from '@/components/common/ServicesHero/ServicesHero';
import ServiceDetail from '@/components/common/ServiceDetail/ServiceDetail';
import ServiceCards from '@/components/common/ServiceCards/ServiceCards';
import UseCases from '@/components/common/UseCases/UseCases';
import Testimonials from '@/components/common/Testimonials/Testimonials';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import FAQ from '@/components/common/FAQ/FAQ';
import CTA from '@/components/common/CTA/CTA';
import WhyAcademy from '@/components/common/WhyAcademy/WhyAcademy';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';
import styles from './SkillEnhancement.module.scss';

export const metadata: Metadata = {
  title: 'Skill Enhancement Programs | Coding, DevOps, Cybersecurity - Metahorizon Academy',
  description: 'Continuous skill enhancement through targeted workshops, coding sessions, mentorship programs, hands-on labs, and industry events. Build practical, in-demand abilities in programming, DevOps, cybersecurity, data tools, and leadership.',
  keywords: [
    'Skill Enhancement',
    'Coding Sessions',
    'Tech Workshops',
    'DevOps Training',
    'Cybersecurity Basics',
    'Data Tools',
    'Leadership Skills',
    'Digital Transformation',
    'Mentorship Programs',
    'Hackathons',
    'Career Readiness',
    'Metahorizon Academy',
    'Professional Development',
    'Technical Skills',
    'Soft Skills Training',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Skill Enhancement Programs | Coding, DevOps, Cybersecurity - Metahorizon Academy',
    description: 'Continuous skill enhancement through targeted workshops, coding sessions, mentorship, and hands-on labs.',
    url: 'https://metahorizon.com/academy/skill-enhancement/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Academy Skill Enhancement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skill Enhancement Programs | Metahorizon Academy',
    description: 'Build practical, in-demand tech and business skills through hands-on workshops and mentorship.',
    images: ['/assets/img/meta-horizon-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://metahorizon.com/academy/skill-enhancement/',
  },
};

const skillPrograms = [
  {
    number: '01',
    title: 'Coding & Tech Sharpening Sessions',
    description: 'Regular drop-in coding labs, algorithm challenges, and language refreshers (Python, Java, JavaScript) to build quick wins and confidence. Perfect for maintaining technical edge and staying current with programming best practices.',
    iconKey: 'code',
  },
  {
    number: '02',
    title: 'Thematic Workshops & Mini Bootcamps',
    description: 'Short, intensive bursts on AI productivity tools, cybersecurity awareness, agile basics, and data storytelling. Evening and online sessions designed for immediate skill enhancement without disrupting your schedule.',
    iconKey: 'cpu',
  },
  {
    number: '03',
    title: 'Mentorship & Peer Collaboration',
    description: 'Personalized guidance from faculty and alumni, group problem-solving sessions, and feedback circles to overcome technical blocks and grow both professionally and personally. Learn from experienced practitioners.',
    iconKey: 'users',
  },
  {
    number: '04',
    title: 'Events, Hackathons & Exposure',
    description: 'Tech quizzes, hackathons, seminars, and guest talks from industry leaders. Apply skills competitively, expand your professional network, and stay current with emerging technology trends and best practices.',
    iconKey: 'trophy',
  },
  {
    number: '05',
    title: 'Soft Skills & Career Readiness',
    description: 'Communication skills for technologists, leadership training, resume and interview preparation, project management essentials. Quick sessions designed to enhance employability and support smooth career transitions.',
    iconKey: 'briefcase',
  },
  {
    number: '06',
    title: 'DevOps & Cloud Labs',
    description: 'Hands-on labs for CI/CD pipelines, containerization, infrastructure as code, and cloud platforms. Build real-world DevOps skills with guided practice on industry-standard tools and technologies.',
    iconKey: 'cloud',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Practical & Immediate',
    description: 'Hands-on sessions and workshops focused on tools and technologies you use today. Apply new skills immediately to your current work or projects.',
    iconKey: 'target',
  },
  {
    number: '02',
    title: 'Expert Driven',
    description: 'Guidance from MetaHorizon Inc. USA consulting professionals with real-world experience. Learn from practitioners who solve enterprise challenges daily.',
    iconKey: 'users',
  },
  {
    number: '03',
    title: 'Flexible & Supportive',
    description: 'Fits busy schedules with evening and online options. Mentorship and career support available for all learners at every stage of their journey.',
    iconKey: 'cloud',
  },
  {
    number: '04',
    title: 'Portfolio Building',
    description: 'Work on real projects, labs, and challenges that enhance your portfolio. Demonstrate practical skills to employers with tangible outcomes.',
    iconKey: 'briefcase',
  },
];

const targetAudience = [
  {
    title: 'Working Professionals',
    description: 'Stay competitive in your current role by continuously updating technical and leadership skills. Enhance performance and position yourself for advancement.',
    iconKey: 'briefcase',
  },
  {
    title: 'Students & Graduates',
    description: 'Supplement your degree with practical, hands-on skills that employers value. Build a strong portfolio and gain confidence before entering the job market.',
    iconKey: 'users',
  },
  {
    title: 'Career Transitioners',
    description: 'Acquire new technical skills and career readiness support for smooth transitions into technology roles. Bridge the gap between your current and desired career.',
    iconKey: 'refresh',
  },
  {
    title: 'Corporate Teams',
    description: 'Organizations seeking targeted upskilling for their workforce. Custom workshops and labs designed to address specific team skill gaps and business needs.',
    iconKey: 'target',
  },
];

const faqs = [
  {
    question: 'What skill enhancement programs do you offer?',
    answer: 'We offer six core programs: Coding & Tech Sharpening Sessions, Thematic Workshops & Mini Bootcamps, Mentorship & Peer Collaboration, Events/Hackathons, Soft Skills & Career Readiness, and DevOps & Cloud Labs. Programs cover programming, DevOps, cybersecurity, data tools, leadership, and digital transformation.',
  },
  {
    question: 'How flexible are the learning schedules?',
    answer: 'Our programs are designed for working professionals and students with busy schedules. We offer evening sessions, weekend workshops, and online options. Drop-in coding labs have flexible hours, and mentorship sessions can be scheduled at your convenience.',
  },
  {
    question: 'Do I need prior experience to join these programs?',
    answer: 'Our programs cater to various skill levels. Coding sessions offer beginner to advanced tracks. Workshops clearly indicate prerequisite knowledge. Mentorship programs are personalized to your current level. Our advisors help you choose the right starting point.',
  },
  {
    question: 'Are these programs certified?',
    answer: 'While skill enhancement programs focus on practical learning rather than formal certification, participants receive completion certificates. Many programs prepare you for industry certifications, and we offer guidance on certification pathways.',
  },
  {
    question: 'How do I access mentorship programs?',
    answer: 'Mentorship is available to all enrolled participants. After registering for any skill enhancement program, you\'ll be matched with a mentor based on your goals and background. Group mentorship sessions and one-on-one guidance are both available.',
  },
  {
    question: 'Can I participate in hackathons and events if I\'m not enrolled in a full program?',
    answer: 'Yes! Many of our events, hackathons, and guest talks are open to the broader tech community. Register individually for events that interest you. Some events may have limited capacity, so early registration is recommended.',
  },
  {
    question: 'Do you offer corporate or team skill enhancement programs?',
    answer: 'Yes, we offer customized corporate skill enhancement programs. Our team assessments identify skill gaps, and we design targeted workshops, labs, and mentorship programs for your organization. Contact us for a customized proposal and group pricing.',
  },
  {
    question: 'How do skill enhancement programs complement degree programs?',
    answer: 'Skill enhancement programs provide practical, hands-on experience that complements academic learning. They help you apply theoretical knowledge, build a stronger portfolio, and develop industry-relevant skills that make you more competitive in the job market.',
  },
];

export default function SkillEnhancementPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Skill Enhancement Programs | Coding, DevOps, Cybersecurity - MetaHorizon Academy"
        description="Continuous skill enhancement through targeted workshops, coding sessions, mentorship, and hands-on labs."
        canonical="/academy/skill-enhancement/"
      />

      <StructuredData
        type="EducationalOrganization"
        name="MetaHorizon Academy - Skill Enhancement"
        description="Continuous skill enhancement programs for professionals, students, and teams in technology and business."
      />

      <ServicesHero
        title="Skill Enhancement"
        subtitle="Stay Ahead in a Dynamic Tech World"
        description="At MetaHorizon Academy, we focus on continuous skill enhancement to keep professionals, students, and teams ahead in a dynamic tech and business world. Through targeted workshops, coding sessions, mentorship programs, hands-on labs, and industry events, we build practical, in-demand abilities."
        noBackground={true}
      />

      <ServiceDetail
        title="Continuous Learning for Career Excellence"
        description="Build practical, in-demand skills that keep you competitive in today's fast-evolving technology landscape."
        overview="MetaHorizon Academy's Skill Enhancement programs are designed for continuous learning and career growth. Powered by expert instructors from our USA-based MetaHorizon Inc. consulting practice, these flexible, high-impact opportunities deliver immediate application, portfolio growth, and long-term career advantage—whether you're supplementing a degree, advancing in your role, or transitioning to a new career."
        features={[
          {
            title: 'Hands-On Learning',
            description: 'Real projects, labs, and challenges that build practical skills.',
          },
          {
            title: 'Expert Mentorship',
            description: 'Guidance from experienced consultants and industry professionals.',
          },
          {
            title: 'Flexible Formats',
            description: 'Evening, weekend, and online options for busy schedules.',
          },
          {
            title: 'Career Support',
            description: 'Resume prep, interview coaching, and networking opportunities.',
          },
        ]}
        benefits={[
          'Immediate application of new skills to current work',
          'Portfolio growth with real-world projects',
          'Expert guidance from USA-based consulting professionals',
          'Flexible scheduling for working professionals',
          'Networking through events and hackathons',
          'Career readiness and employability enhancement',
        ]}
        noBackground={true}
      />

      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Skill Enhancement Programs</h2>
            <p className={styles.sectionSubtitle}>
              Targeted initiatives to build practical, in-demand abilities
            </p>
          </div>
          <ServiceCards services={skillPrograms} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why MetaHorizon for Skill Enhancement?</h2>
            <p className={styles.sectionSubtitle}>
              Practical learning powered by real-world expertise
            </p>
          </div>
          <ServiceCards services={benefits} variant="twoColumns" />
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Skill Enhancement Approach</h2>
            <p className={styles.sectionSubtitle}>
              A proven framework for continuous learning and career growth
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>01</div>
              <h3 className={styles.approachTitle}>Discover</h3>
              <p className={styles.approachDescription}>
                Identify skill gaps and goals through assessments, career chats, or program alignment—pinpoint areas like technical depth, soft skills, or emerging tech to target enhancement.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>02</div>
              <h3 className={styles.approachTitle}>Engage</h3>
              <p className={styles.approachDescription}>
                Join flexible workshops, sessions, events, or mentorship—hands-on, interactive format with small groups for personalized feedback and immediate practice.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>03</div>
              <h3 className={styles.approachTitle}>Apply & Build</h3>
              <p className={styles.approachDescription}>
                Work on real projects, labs, challenges, and portfolios—integrate new skills into degree work, job applications, or current roles for tangible outcomes.
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachNumber}>04</div>
              <h3 className={styles.approachTitle}>Sustain & Advance</h3>
              <p className={styles.approachDescription}>
                Access ongoing resources, alumni networks, refresher events, and career support ensuring long-term retention, continuous improvement, and pathways to certifications and jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UseCases
        title="Who Should Enroll?"
        subtitle="Our skill enhancement programs are designed for lifelong learners committed to excellence"
        useCases={targetAudience}
      />

      <WhyAcademy />

      <Testimonials />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our skill enhancement programs"
        faqs={faqs}
      />

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on skill development, technology trends, and career growth."
        viewAllHref="/blog"
      />

      <CTA
        title="Let's Build Secure Systems Together"
        ctaText="Contact Us Today"
        ctaHref="/contact-us"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />
    </div>
  );
}
