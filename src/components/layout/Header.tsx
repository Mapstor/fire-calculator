'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Calculator, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const calculators = [
  { href: '/', label: 'Traditional FIRE', emoji: '🔥', color: 'hover:text-orange-600' },
  { href: '/lean-fire-calculator', label: 'Lean FIRE', emoji: '🌿', color: 'hover:text-green-600' },
  { href: '/coast-fire-calculator', label: 'Coast FIRE', emoji: '⛵', color: 'hover:text-blue-600' },
  { href: '/barista-fire-calculator', label: 'Barista FIRE', emoji: '☕', color: 'hover:text-amber-600' },
  { href: '/fat-fire-calculator', label: 'Fat FIRE', emoji: '👑', color: 'hover:text-purple-600' },
  { href: '/fire-calculator-couples', label: 'Couples FIRE', emoji: '💑', color: 'hover:text-rose-600' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorDropdownOpen, setCalculatorDropdownOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              <span className="hidden sm:block">FIRE Calculator</span>
              <span className="sm:hidden">FIRE</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link 
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            
            {/* Calculators Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCalculatorDropdownOpen(!calculatorDropdownOpen)}
                onMouseEnter={() => setCalculatorDropdownOpen(true)}
                onMouseLeave={() => setCalculatorDropdownOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Calculators
                <ChevronDown className={`w-4 h-4 transition-transform ${calculatorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {calculatorDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setCalculatorDropdownOpen(true)}
                    onMouseLeave={() => setCalculatorDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {calculators.map((calc) => (
                      <Link
                        key={calc.href}
                        href={calc.href}
                        className={`flex items-center gap-2 px-4 py-2 text-sm ${
                          isActive(calc.href) 
                            ? 'bg-gray-50 text-primary-600' 
                            : `text-gray-700 hover:bg-gray-50 ${calc.color}`
                        } transition-colors`}
                      >
                        <span className="text-lg">{calc.emoji}</span>
                        {calc.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link 
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            
            <Link 
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 py-3 space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  pathname === '/' 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Calculators
                </p>
                {calculators.map((calc) => (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md ${
                      isActive(calc.href)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{calc.emoji}</span>
                    {calc.label}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Blog
              </Link>
              
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}