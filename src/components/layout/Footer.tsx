import Link from 'next/link';
import { TrendingUp, Github, Twitter, Mail, Heart } from 'lucide-react';

const calculatorLinks = [
  { href: '/', label: 'Traditional FIRE' },
  { href: '/lean-fire-calculator', label: 'Lean FIRE' },
  { href: '/coast-fire-calculator', label: 'Coast FIRE' },
  { href: '/barista-fire-calculator', label: 'Barista FIRE' },
  { href: '/fat-fire-calculator', label: 'Fat FIRE' },
  { href: '/fire-calculator-couples', label: 'Couples FIRE' },
];


const aboutLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/methodology', label: 'Our Methodology' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-primary-400" />
              <span className="text-xl font-bold">FIRE Calculator</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Free, comprehensive calculators to help you achieve Financial Independence and Retire Early. 
              Plan your path to freedom with confidence.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@financialfirecalculators.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Calculators Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Calculators
            </h3>
            <ul className="space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              About
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-xs">
              © {currentYear} FIRE Calculator. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500" /> for the FIRE community
            </p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes only. 
              Consult a qualified financial advisor for personalized advice. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}