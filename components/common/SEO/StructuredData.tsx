interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'WebPage' | 'EducationalOrganization';
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
}

export default function StructuredData({
  type = 'Organization',
  name = 'Metahorizon',
  description = 'Enterprise-grade Identity Access Management and cybersecurity solutions with Zero Trust principles.',
  url = 'https://metahorizon.com',
  logo = 'https://metahorizon.com/meta-horizon-logo.png',
  sameAs = [
    'https://www.facebook.com/metahorizon',
    'https://www.linkedin.com/company/metahorizon',
    'https://www.youtube.com/@metahorizon',
  ],
  address = {
    streetAddress: '1303 W Walnut Hill, Suite 340',
    addressLocality: 'Irving',
    addressRegion: 'TX',
    postalCode: '75038',
  },
  contactPoint = {
    telephone: '+1-469-496-9588',
    contactType: 'Customer Service',
    email: 'contact@metahorizon.com',
  },
}: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    logo,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
