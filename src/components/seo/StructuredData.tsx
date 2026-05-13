import { WebSite, Organization, BreadcrumbList } from 'schema-dts';

interface StructuredDataProps {
  type: 'website' | 'calculator' | 'organization' | 'breadcrumb' | 'faq' | 'howto';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://financialfirecalculators.com';
    
    switch (type) {
      case 'website':
        const websiteData: WebSite = {
          '@type': 'WebSite',
          name: 'Financial FIRE Calculators',
          url: baseUrl,
          description: 'Free comprehensive calculators for Financial Independence, Retire Early (FIRE) planning',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            }
          } as any
        };
        return websiteData;

      case 'organization':
        const orgData: Organization = {
          '@type': 'Organization',
          name: 'Financial FIRE Calculators',
          url: baseUrl,
          logo: `${baseUrl}/icon.svg`,
          description: 'Free comprehensive calculators for Financial Independence, Retire Early (FIRE) planning',
          foundingDate: '2024',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@financialfirecalculators.com',
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
            name: 'Financial FIRE Calculators'
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

      case 'howto':
        return {
          '@type': 'HowTo',
          name: data?.name || 'How to use this calculator',
          description: data?.description,
          step: data?.steps?.map((s: any, idx: number) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: s.name,
            text: s.text,
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