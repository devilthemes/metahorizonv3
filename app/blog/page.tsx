import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/SEO/StructuredData';
import blogData from '@/data/blog-posts.json';
import styles from './Blog.module.scss';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorName?: string;
  image: string;
  category?: string;
  tags?: string[];
  readTime?: string;
}

interface BlogData {
  posts: BlogPost[];
}

const blogPosts: BlogPost[] = blogData.posts;

export const metadata: Metadata = {
  title: 'Blog | Latest Insights on IAM, Cloud & Cybersecurity - Metahorizon',
  description: 'Stay updated with the latest trends, expert takes, and real-world solutions from Metahorizon\'s specialists. We simplify complex topics in enterprise security and cloud innovation.',
  keywords: [
    'Metahorizon Blog',
    'IAM Blog',
    'Cybersecurity Blog',
    'Cloud Security Blog',
    'Technology Insights',
    'Enterprise Security',
    'Zero Trust Security',
    'DevOps Blog',
    'AI/ML Insights',
    'Tech Trends',
    'Security Trends',
    'Metahorizon',
  ],
  authors: [{ name: 'Metahorizon' }],
  openGraph: {
    title: 'Blog | Latest Insights on IAM, Cloud & Cybersecurity - Metahorizon',
    description: 'Stay updated with the latest trends, expert takes, and real-world solutions from Metahorizon\'s specialists.',
    url: 'https://metahorizon.com/blog/',
    siteName: 'Metahorizon',
    images: [
      {
        url: '/assets/img/meta-horizon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Metahorizon Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Metahorizon',
    description: 'Latest insights on IAM, cloud security, and cybersecurity.',
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
    canonical: 'https://metahorizon.com/blog/',
  },
};

export default function BlogPage() {
  return (
    <div className={styles.pageContainer}>
      <SEO
        title="Blog | Latest Insights on IAM, Cloud & Cybersecurity - Metahorizon"
        description="Stay updated with the latest trends, expert takes, and real-world solutions from Metahorizon's specialists."
        canonical="/blog/"
      />

      <StructuredData
        type="Organization"
        name="Metahorizon"
        description="Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles."
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Blog</h1>
          <p className={styles.heroDescription}>
            Stay updated with the latest trends, expert takes, and real-world solutions from Metahorizon's specialists. We simplify complex topics in enterprise security and cloud innovation — so you can stay informed, secure, and ahead.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <Link href={post.slug} className={styles.postLink}>
                  <div className={styles.postImageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.postImage}
                    />
                  </div>
                  <div className={styles.postContent}>
                    {post.category && (
                      <span className={styles.postCategory}>{post.category}</span>
                    )}
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <User size={16} />
                        <span>{post.authorName || post.author}</span>
                      </div>
                    </div>
                    <div className={styles.readMore}>
                      Read more <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogInsights
        title="Latest Insights"
        subtitle="Stay informed with expert insights on cybersecurity, IAM, and enterprise technology trends."
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
