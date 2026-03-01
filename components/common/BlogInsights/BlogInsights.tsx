'use client';

import Link from 'next/link';
import blogData from '@/data/blog-posts.json';
import styles from './BlogInsights.module.scss';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  publishedAt: string;
  category?: string;
}

interface BlogInsightsProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
  viewAllHref?: string;
  limit?: number;
}

const defaultPosts: BlogPost[] = blogData.posts
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3)
  .map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    slug: post.slug,
    date: post.date,
    publishedAt: post.publishedAt,
    category: post.category,
  }));

export default function BlogInsights({
  title = 'Latest Insights',
  subtitle = 'Stay informed with expert insights on cybersecurity, IAM, and enterprise technology trends.',
  posts,
  viewAllHref = '/blog',
  limit = 3,
}: BlogInsightsProps) {
  // Use provided posts or default sorted posts, limited to the specified number
  const displayPosts = posts 
    ? posts.slice(0, limit)
    : defaultPosts.slice(0, limit);

  return (
    <section className={styles.blogInsights}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {viewAllHref && (
            <Link href={viewAllHref} className={styles.viewAllLink}>
              View all blogs
            </Link>
          )}
        </div>

        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}

        <div className={styles.postsGrid}>
          {displayPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImage}>
                <img src={post.image} alt={post.title} />
              </div>
              <div className={styles.postContent}>
                {post.category && (
                  <span className={styles.postCategory}>{post.category}</span>
                )}
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <Link href={post.slug} className={styles.readMoreLink}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
