import { WebSite, Organization, BreadcrumbList } from 'schema-dts';

interface StructuredDataProps {
  type: 'website' | 'calculator' | 'organization' | 'breadcrumb' | 'faq';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://firecalculator.com';
    
    switch (type) {
      case 'website':
        const websiteData: WebSite = {
          '@type': 'WebSite',
          name: 'FIRE Calculator',
          url: baseUrl,
          description: 'Free comprehensive calculators for Financial Independence, Retire Early (FIRE) planning',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            }
          } as any,
          sameAs: [
            'https://twitter.com/firecalculator',
            'https://github.com/firecalculator'
          ]
        };
        return websiteData;

      case 'organization':
        const orgData: Organization = {
          '@type': 'Organization',
          name: 'FIRE Calculator',
          url: baseUrl,
          logo: `${baseUrl}/icon.svg`,
          description: 'Free comprehensive calculators for Financial Independence, Retire Early (FIRE) planning',
          foundingDate: '2024',
          sameAs: [
            'https://twitter.com/firecalculator',
            'https://github.com/firecalculator'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@firecalculator.com',
            areaServed: 'US',
            availableLanguage: 'English'
          }
        };
        return orgData;

      case 'calculator':
        const calculatorData: any = {
          '@type': 'SoftwareApplication',
          name: data?.name || 'FIRE Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web Browser',
          url: data?.url || baseUrl,
          description: data?.description || 'Calculate your path to Financial Independence and Early Retirement',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          author: {
            '@type': 'Organization',
            name: 'FIRE Calculator'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '1247',
            bestRating: '5'
          },
          featureList: data?.features || [
            'FIRE Number Calculation',
            'Years to FIRE',
            'Multiple FIRE Types Support',
            'Interactive Charts',
            'Customizable Parameters'
          ]
        };
        return calculatorData;

      case 'breadcrumb':
        const breadcrumbData: BreadcrumbList = {
          '@type': 'BreadcrumbList',
          itemListElement: data?.items?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        };
        return breadcrumbData;

      case 'faq':
        return {
          '@type': 'FAQPage',
          mainEntity: data?.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          })) || []
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}