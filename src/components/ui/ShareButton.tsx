'use client';

import { Share2, Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface Props {
  data: any;
  calculatorType: string;
}

export default function ShareButton({ data, calculatorType }: Props) {
  const [copied, setCopied] = useState(false);
  
  const handleShare = async () => {
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    
    const url = `${window.location.origin}/${calculatorType}?${params.toString()}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${calculatorType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Calculator`,
          text: 'Check out my financial independence calculation!',
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.log('Error copying to clipboard:', err);
      }
    }
  };
  
  return (
    <button
      onClick={handleShare}
      className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}