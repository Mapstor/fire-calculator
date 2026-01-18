// Clean, honest structured data without fake reviews or made-up data
interface CleanStructuredDataProps {
  type: 'website' | 'calculator' | 'article' | 'breadcrumb' | 'faq' | 'howto' | 'webpage';
  data?: any;
}

export default function CleanStructuredData({ type, data }: CleanStructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://financialfirecalculators.com';
    
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'FIRE Calculator',
          url: baseUrl,
          description: 'Free comprehensive calculators for Financial Independence, Retire Early (FIRE) planning',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'calculator':
        return {
          '@context': 'https://schema.org',
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
          featureList: data?.features || [
            'FIRE Number Calculation',
            'Years to FIRE Projection',
            'Multiple FIRE Types Support',
            'Interactive Charts',
            'Monte Carlo Simulation'
          ]
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title,
          description: data?.description,
          url: data?.url,
          datePublished: data?.datePublished || '2024-01-01',
          dateModified: data?.dateModified || new Date().toISOString().split('T')[0],
          author: {
            '@type': 'Organization',
            name: 'FIRE Calculator'
          },
          publisher: {
            '@type': 'Organization',
            name: 'FIRE Calculator',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/icon.svg`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url
          },
          image: data?.image || `${baseUrl}/og-image.png`
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data?.items?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
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
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: data?.name || 'How to Calculate Your FIRE Number',
          description: data?.description || 'Step-by-step guide to calculate your Financial Independence number',
          totalTime: data?.totalTime || 'PT5M',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            value: '0'
          },
          step: data?.steps?.map((step: any, index: number) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text
          })) || []
        };

      case 'webpage':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: data?.title,
          description: data?.description,
          url: data?.url,
          breadcrumb: data?.breadcrumb,
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: data?.image || `${baseUrl}/og-image.png`
          },
          datePublished: data?.datePublished,
          dateModified: data?.dateModified || new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'WebSite',
            name: 'FIRE Calculator',
            url: baseUrl
          }
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