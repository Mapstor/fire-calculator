import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://financialfirecalculators.com'),
  title: "FIRE Calculator - Financial Independence, Retire Early",
  description: "Calculate your path to financial independence with our comprehensive FIRE calculator. Find out when you can retire early based on your savings, income, and expenses.",
  keywords: "fire calculator, firecalc, fire retirement calculator, financial independence calculator, early retirement calculator, retirement planning",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "FIRE Calculator - Financial Independence, Retire Early",
    description: "Calculate your path to financial independence with our comprehensive FIRE calculator.",
    type: "website",
    locale: "en_US",
    siteName: "Financial FIRE Calculators",
    url: "https://financialfirecalculators.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FIRE Calculator - Financial Independence Retire Early"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRE Calculator - Financial Independence, Retire Early",
    description: "Calculate your path to financial independence with our comprehensive FIRE calculator.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="website" />
        <StructuredData type="organization" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SX4D6KKTKX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SX4D6KKTKX');
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google12f8c2f9c03913a3" />
        
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="57C407E8336C4915E2D28EEA649C8078" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
