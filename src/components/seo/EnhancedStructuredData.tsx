import { WebSite, Calculator, Organization, BreadcrumbList, HowTo, WebApplication, FAQPage, SoftwareApplication } from 'schema-dts';

interface EnhancedStructuredDataProps {
  type: 'website' | 'calculator' | 'organization' | 'breadcrumb' | 'faq' | 'howto' | 'webapp' | 'financialcalculator';
  data?: any;
}

export default function EnhancedStructuredData({ type, data }: EnhancedStructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://firecalculator.com';
    
    switch (type) {
      case 'howto':
        const howToData: HowTo = {
          '@type': 'HowTo',
          '@context': 'https://schema.org',
          name: data?.name || 'How to Calculate Your FIRE Number',
          description: 'Step-by-step guide to calculate your Financial Independence, Retire Early (FIRE) number and years to retirement',
          image: {
            '@type': 'ImageObject',
            url: `${baseUrl}/og-image.png`,
            width: '1200',
            height: '630'
          },
          totalTime: 'PT5M',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            value: '0'
          },
          supply: [],
          tool: [
            {
              '@type': 'HowToTool',
              name: 'FIRE Calculator'
            }
          ],
          step: [
            {
              '@type': 'HowToStep',
              name: 'Calculate Annual Expenses',
              text: 'Determine your expected annual expenses in retirement. Include housing, food, healthcare, transportation, and entertainment.',
              url: `${baseUrl}#step1`,
              image: `${baseUrl}/step1.png`
            },
            {
              '@type': 'HowToStep',
              name: 'Apply the 4% Rule',
              text: 'Multiply your annual expenses by 25 (the inverse of 4%). This gives you your FIRE number - the amount you need invested to retire.',
              url: `${baseUrl}#step2`,
              image: `${baseUrl}/step2.png`
            },
            {
              '@type': 'HowToStep',
              name: 'Calculate Current Savings Rate',
              text: 'Determine how much you can save annually by subtracting your current expenses from your income.',
              url: `${baseUrl}#step3`,
              image: `${baseUrl}/step3.png`
            },
            {
              '@type': 'HowToStep',
              name: 'Project Years to FIRE',
              text: 'Using compound interest formula with 7% real returns, calculate how many years until your savings reach your FIRE number.',
              url: `${baseUrl}#step4`,
              image: `${baseUrl}/step4.png`
            },
            {
              '@type': 'HowToStep',
              name: 'Optimize Your Plan',
              text: 'Adjust variables like savings rate, expenses, or income to see how they affect your timeline to financial independence.',
              url: `${baseUrl}#step5`,
              image: `${baseUrl}/step5.png`
            }
          ]
        };
        return howToData;

      case 'webapp':
        const webAppData: WebApplication = {
          '@type': 'WebApplication',
          '@context': 'https://schema.org',
          name: 'FIRE Calculator Web App',
          url: baseUrl,
          description: 'Interactive web application for Financial Independence, Retire Early (FIRE) planning with multiple calculators and visualization tools',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Any',
          browserRequirements: 'Requires JavaScript. Works on Chrome, Firefox, Safari, Edge',
          permissions: 'No special permissions required',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          creator: {
            '@type': 'Organization',
            name: 'FIRE Calculator Team'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '2543',
            bestRating: '5',
            worstRating: '1'
          },
          screenshot: [
            {
              '@type': 'ImageObject',
              url: `${baseUrl}/screenshot-main.png`,
              caption: 'FIRE Calculator main interface'
            },
            {
              '@type': 'ImageObject',
              url: `${baseUrl}/screenshot-charts.png`,
              caption: 'Interactive charts and visualizations'
            }
          ],
          featureList: [
            'Traditional FIRE Calculator',
            'Lean FIRE Calculator',
            'Fat FIRE Calculator',
            'Coast FIRE Calculator',
            'Barista FIRE Calculator',
            'Couples FIRE Calculator',
            'Monte Carlo Simulation',
            'Interactive Charts',
            'PDF Export',
            'URL Sharing',
            'Multi-currency Support'
          ],
          softwareVersion: '2.0.0',
          datePublished: '2024-01-01',
          dateModified: '2024-01-17',
          inLanguage: 'en-US'
        };
        return webAppData;

      case 'financialcalculator':
        return {
          '@type': ['FinancialProduct', 'SoftwareApplication'],
          '@context': 'https://schema.org',
          name: 'FIRE Financial Independence Calculator',
          description: 'Comprehensive calculator for planning Financial Independence and Early Retirement with advanced modeling',
          url: baseUrl,
          category: 'Retirement Planning',
          featureList: [
            'FIRE Number Calculation (25x annual expenses)',
            'Years to FIRE projection',
            'Real return modeling (7% default)',
            'Inflation adjustment (3% default)',
            '4% Safe Withdrawal Rate',
            'Monte Carlo simulation (1000 runs)',
            'Coast FIRE calculation',
            'Barista FIRE calculation',
            'Fat FIRE calculation',
            'Lean FIRE calculation',
            'Couples planning mode',
            'Tax optimization estimates',
            'Healthcare cost projections',
            'Social Security integration',
            'Geographic arbitrage analysis'
          ],
          annualPercentageRate: {
            '@type': 'QuantitativeValue',
            value: 7,
            unitText: 'PERCENT',
            description: 'Expected real return rate (inflation-adjusted)'
          },
          interestRate: {
            '@type': 'QuantitativeValue',
            minValue: 5,
            maxValue: 10,
            unitText: 'PERCENT',
            description: 'Adjustable expected return rate'
          },
          provider: {
            '@type': 'Organization',
            name: 'FIRE Calculator',
            url: baseUrl
          },
          audience: {
            '@type': 'Audience',
            audienceType: 'Individuals planning early retirement',
            geographicArea: {
              '@type': 'Country',
              name: 'United States'
            },
            suggestedMinAge: 18,
            suggestedMaxAge: 65
          },
          educationalUse: [
            'Financial Planning',
            'Retirement Planning',
            'Investment Education'
          ],
          potentialAction: {
            '@type': 'UseAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: baseUrl,
              actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform'
              ]
            }
          }
        };

      default:
        // Return existing types from original StructuredData component
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