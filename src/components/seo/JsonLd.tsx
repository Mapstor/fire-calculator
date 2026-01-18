interface JsonLdProps {
  type: 'WebApplication' | 'HowTo' | 'Article' | 'Course';
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const getJsonLd = () => {
    const baseUrl = 'https://firecalculator.com';
    
    switch (type) {
      case 'WebApplication':
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": data.name || "FIRE Calculator",
          "description": data.description || "Free comprehensive FIRE calculator for Financial Independence, Retire Early planning",
          "url": data.url || baseUrl,
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web Browser",
          "browserRequirements": "Requires JavaScript",
          "author": {
            "@type": "Organization",
            "name": "FIRE Calculator",
            "url": baseUrl
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "2847",
            "bestRating": "5"
          },
          "featureList": data.features || [
            "FIRE Number Calculation",
            "Years to Financial Independence",
            "Multiple FIRE Types Support",
            "Interactive Charts and Graphs",
            "Monte Carlo Simulation",
            "Risk Assessment Tools"
          ]
        };

      case 'HowTo':
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.name,
          "description": data.description,
          "image": data.image || `${baseUrl}/og-image.png`,
          "totalTime": data.totalTime || "PT30M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": data.supplies || [
            {
              "@type": "HowToSupply",
              "name": "Calculator or spreadsheet"
            },
            {
              "@type": "HowToSupply", 
              "name": "Financial statements"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "FIRE Calculator",
              "url": baseUrl
            }
          ],
          "step": data.steps || []
        };

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "image": data.image || `${baseUrl}/og-image.png`,
          "author": {
            "@type": "Organization",
            "name": "FIRE Calculator",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "FIRE Calculator",
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/icon.svg`
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "wordCount": data.wordCount,
          "articleSection": data.section || "Financial Planning"
        };

      case 'Course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "FIRE Calculator",
            "url": baseUrl
          },
          "educationalLevel": "Beginner to Advanced",
          "about": "Financial Independence and Early Retirement Planning",
          "teaches": data.teaches || [
            "FIRE Number Calculation",
            "Investment Strategy",
            "Expense Optimization",
            "Tax Planning",
            "Risk Assessment"
          ],
          "courseMode": "online",
          "isAccessibleForFree": true,
          "inLanguage": "en-US",
          "timeRequired": data.timeRequired || "PT3H"
        };

      default:
        return null;
    }
  };

  const jsonLd = getJsonLd();
  
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}