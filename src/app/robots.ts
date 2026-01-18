import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://financialfirecalculators.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/*?*utm_*',
          '/*?*ref=*',
          '/search',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/blog/',
          '/methodology',
          '/about',
          '/faq',
          '/lean-fire-calculator',
          '/coast-fire-calculator',
          '/barista-fire-calculator',
          '/fat-fire-calculator',
          '/fire-calculator-couples',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*utm_*',
          '/*?*ref=*',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/blog/',
          '/methodology',
          '/about',
          '/faq',
          '/lean-fire-calculator',
          '/coast-fire-calculator',
          '/barista-fire-calculator',
          '/fat-fire-calculator',
          '/fire-calculator-couples',
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/blog/',
          '/methodology', 
          '/about',
          '/faq',
          '/lean-fire-calculator',
          '/coast-fire-calculator',
          '/barista-fire-calculator',
          '/fat-fire-calculator',
          '/fire-calculator-couples',
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/',
          '/blog/',
          '/methodology',
          '/about',
          '/faq',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*utm_*',
        ],
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/',
          '/blog/',
          '/methodology',
          '/about',
          '/faq',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/lean-fire-calculator',
          '/coast-fire-calculator',
          '/barista-fire-calculator',
          '/fat-fire-calculator',
          '/fire-calculator-couples',
        ],
      },
      {
        userAgent: 'Baiduspider',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}