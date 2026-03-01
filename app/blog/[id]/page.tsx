import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import blogData from '@/data/blog-posts.json';
import styles from './BlogPost.module.scss';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: string;
  author: string;
  authorName: string;
  authorImage: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
}

interface BlogData {
  posts: BlogPost[];
}

const posts: BlogPost[] = blogData.posts;

function getBlogPost(id: string): BlogPost | null {
  return posts.find((post) => post.id === id) || null;
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

function getRelatedPosts(currentId: string, limit: number = 3): BlogPost[] {
  return posts
    .filter((post) => post.id !== currentId)
    .slice(0, limit);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Metahorizon',
    };
  }

  return {
    title: `${post.title} | Metahorizon Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'Metahorizon', 'Blog', post.category].join(', '),
    openGraph: {
      title: `${post.title} | Metahorizon Blog`,
      description: post.excerpt,
      url: `https://metahorizon.com${post.slug}`,
      siteName: 'Metahorizon',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.authorName],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Metahorizon Blog`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(id);

  return (
    <div className={styles.pageContainer}>
      <SEO
        title={`${post.title} | Metahorizon Blog`}
        description={post.excerpt}
        canonical={post.slug}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <div className={styles.headerContent}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <Image
                    src={post.authorImage}
                    alt={post.authorName}
                    width={40}
                    height={40}
                    className={styles.authorImage}
                  />
                  <div className={styles.metaContent}>
                    <span className={styles.metaLabel}>By</span>
                    <span className={styles.metaValue}>{post.authorName}</span>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className={styles.featuredImage}>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className={styles.featuredImage}
                priority
              />
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.mainContent}>
              <div 
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className={styles.tags}>
                <Tag size={18} />
                <div className={styles.tagsList}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.share}>
                <span>Share this post:</span>
                <button className={styles.shareButton} aria-label="Share">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <aside className={styles.relatedPosts}>
                <h2 className={styles.relatedTitle}>Related Posts</h2>
                <div className={styles.relatedGrid}>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={relatedPost.slug}
                      className={styles.relatedCard}
                    >
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                        className={styles.relatedImage}
                      />
                      <h3 className={styles.relatedTitle}>{relatedPost.title}</h3>
                      <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                      <span className={styles.relatedDate}>{relatedPost.date}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>

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
