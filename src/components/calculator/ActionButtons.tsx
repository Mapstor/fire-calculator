'use client';

import React, { useState } from 'react';
import { Share2, Download, Link as LinkIcon, BookOpen, TrendingUp, Shield, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { CalculatorResults, CurrencyCode } from '@/types/calculator';
import { useUrlParams } from '@/hooks/useUrlParams';
import Toast from '@/components/ui/Toast';
import { cn } from '@/lib/utils';

interface ActionButtonsProps {
  results: CalculatorResults;
  currency: CurrencyCode;
}

export default function ActionButtons({ results }: ActionButtonsProps) {
  const { getShareableUrl } = useUrlParams();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handleShareResults = async () => {
    const url = getShareableUrl(results.inputs);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My FIRE Calculator Results',
          text: `I'll reach financial independence in ${results.fire.yearsToFire} years with a FIRE number of ${results.fire.fireNumber.toLocaleString()}!`,
          url: url,
        });
        showToastMessage('Results shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(url);
      showToastMessage('Link copied to clipboard!');
    }
  };

  const handleCopyLink = async () => {
    const url = getShareableUrl(results.inputs);
    
    try {
      await navigator.clipboard.writeText(url);
      showToastMessage('Link copied to clipboard!');
    } catch (error) {
      console.error('Error copying link:', error);
      showToastMessage('Error copying link');
    }
  };

  const handleDownloadPDF = () => {
    // For now, we'll show a placeholder message
    // In a real implementation, we would use libraries like html2canvas and jspdf
    showToastMessage('PDF download coming soon!');
    
    // TODO: Implement PDF generation
    // const element = document.getElementById('results-section');
    // html2canvas(element).then(canvas => {
    //   const pdf = new jsPDF();
    //   const imgData = canvas.toDataURL('image/png');
    //   pdf.addImage(imgData, 'PNG', 10, 10);
    //   pdf.save('fire-calculator-results.pdf');
    // });
  };

  const buttonClass = cn(
    "flex items-center gap-2 px-4 py-2",
    "bg-gray-100 hover:bg-gray-200 text-gray-700",
    "rounded-lg font-medium transition-colors",
    "border border-gray-200"
  );

  // Get age-based recommendations
  const getRecommendedArticles = () => {
    const currentAge = results.inputs.currentAge;
    const yearsToFire = results.fire.yearsToFire;
    
    let articles = [];
    
    // Core strategy articles based on timeline
    if (yearsToFire >= 15) {
      articles.push({
        title: "Complete Guide to Coast FIRE",
        href: "/blog/complete-guide-coast-fire",
        icon: TrendingUp,
        description: "Front-load your savings to coast to FIRE"
      });
    }
    
    if (yearsToFire <= 10) {
      articles.push({
        title: "FIRE for Late Starters",
        href: "/blog/fire-for-late-starters",
        icon: DollarSign,
        description: "Accelerated strategies for achieving FIRE after 40"
      });
    }
    
    // Always relevant core articles
    articles.push({
      title: "Emergency Funds for FIRE",
      href: "/blog/emergency-funds-fire",
      icon: Shield,
      description: "Build resilient safety nets for your FIRE journey"
    });
    
    articles.push({
      title: "FIRE Investment Portfolio",
      href: "/blog/fire-investment-portfolio", 
      icon: BookOpen,
      description: "Optimize your asset allocation strategy"
    });
    
    // Age-specific recommendations
    if (currentAge < 40) {
      articles.push({
        title: "Side Hustles for FIRE",
        href: "/blog/side-hustles-fire",
        icon: Users,
        description: "Income streams to accelerate your timeline"
      });
    }
    
    return articles.slice(0, 3); // Limit to 3 most relevant
  };

  const recommendedArticles = getRecommendedArticles();

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Share Your Results
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShareResults}
            className={buttonClass}
          >
            <Share2 className="h-4 w-4" />
            <span>Share Results</span>
          </button>
          
          <button
            onClick={handleCopyLink}
            className={buttonClass}
          >
            <LinkIcon className="h-4 w-4" />
            <span>Copy Link</span>
          </button>
          
          <button
            onClick={handleDownloadPDF}
            className={buttonClass}
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-3">
          Share your personalized FIRE plan with others or save it for later reference.
        </p>
      </div>

      {/* Related Resources Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📚 Recommended Reading for Your FIRE Journey
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {recommendedArticles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-blue-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <article.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link 
            href="/blog"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View all FIRE guides →
          </Link>
        </div>
      </div>
      
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}