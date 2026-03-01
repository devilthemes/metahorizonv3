import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CaseStudyDetail from '@/components/common/CaseStudyDetail/CaseStudyDetail';
import BlogInsights from '@/components/common/BlogInsights/BlogInsights';
import CTA from '@/components/common/CTA/CTA';
import SEO from '@/components/common/SEO/SEO';
import caseStudiesData from '@/data/case-studies.json';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  metrics: Record<string, string>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  image: string;
  duration: string;
  year: string;
}

const caseStudies = caseStudiesData.caseStudies as unknown as CaseStudy[];

function getCaseStudy(id: string): CaseStudy | null {
  return caseStudies.find((cs) => cs.id === id) || null;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Metahorizon',
    };
  }

  return {
    title: `${caseStudy.title} Case Study | ${caseStudy.subtitle} - Metahorizon`,
    description: `Discover how Metahorizon helped ${caseStudy.client} achieve ${Object.values(caseStudy.metrics)[0]}. ${caseStudy.overview}`,
    keywords: [
      caseStudy.client,
      caseStudy.industry,
      ...caseStudy.technologies,
      'Case Study',
      'Metahorizon',
    ].join(', '),
    openGraph: {
      title: `${caseStudy.title} Case Study | Metahorizon`,
      description: caseStudy.overview,
      url: `https://metahorizon.com${caseStudy.slug}`,
      siteName: 'Metahorizon',
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <SEO
        title={`${caseStudy.title} Case Study | ${caseStudy.subtitle} - Metahorizon`}
        description={`Discover how Metahorizon helped ${caseStudy.client} transform their security and identity infrastructure.`}
        canonical={caseStudy.slug}
      />

      <CaseStudyDetail caseStudy={caseStudy} />

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
    </>
  );
}
