'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Coffee, Heart, Clock, TrendingUp } from 'lucide-react';

export default function BaristaFireContent() {
  const [openSection, setOpenSection] = useState<string | null>('what-is');
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="prose prose-sm max-w-none">
      {/* What is Barista FIRE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('what-is')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Coffee className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">What is Barista FIRE?</h2>
          </div>
          {openSection === 'what-is' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'what-is' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">
              Barista FIRE is a hybrid retirement strategy where you achieve partial financial independence 
              and transition to part-time work that provides health insurance and supplemental income.
            </p>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Key Components:</h3>
            <ul className="space-y-2 text-xs">
              <li><strong>Lower savings target:</strong> Typically 50-70% of full FIRE number</li>
              <li><strong>Part-time income:</strong> Covers gap between portfolio income and expenses</li>
              <li><strong>Health insurance:</strong> Often the primary benefit of part-time work</li>
              <li><strong>Flexibility:</strong> Choose work you enjoy without financial pressure</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">The Math Behind It:</h3>
            <p className="text-xs bg-gray-50 p-3 rounded-lg font-mono">
              Barista FIRE Number = (Annual Expenses - Part-Time Income) × 25
            </p>
            <p className="text-xs mt-2">
              Instead of saving 25× your annual expenses, you only need 25× the gap between 
              expenses and part-time income.
            </p>
          </div>
        )}
      </div>
      
      {/* Benefits & Trade-offs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('benefits')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-green-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Benefits & Trade-offs</h2>
          </div>
          {openSection === 'benefits' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'benefits' && (
          <div className="px-6 pb-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Benefits</h3>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Achieve freedom 5-15 years earlier than full FIRE
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Maintain health insurance coverage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Social interaction and purpose through work
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Portfolio continues growing during part-time years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Lower stress with financial cushion
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Trade-offs</h3>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Still tied to employment for benefits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Limited job flexibility for insurance needs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Part-time positions may be competitive
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Income requirements limit location flexibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    May need to work in different field
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Implementation Strategy */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('strategy')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Implementation Strategy</h2>
          </div>
          {openSection === 'strategy' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'strategy' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Phase 1: Accumulation (Current - Barista Start)</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Maximize savings rate and investment contributions</li>
              <li>• Research part-time opportunities with benefits</li>
              <li>• Build skills for desired part-time work</li>
              <li>• Calculate and track progress to Barista FIRE number</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Phase 2: Barista Phase (Part-Time Work)</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Transition to part-time role with health benefits</li>
              <li>• Use income to cover expenses, let portfolio grow</li>
              <li>• Monitor portfolio growth toward full FIRE</li>
              <li>• Maintain flexibility to adjust work hours if needed</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Phase 3: Full Retirement</h3>
            <ul className="space-y-1.5 text-xs">
              <li>• Portfolio reaches full FIRE number</li>
              <li>• Transition to Medicare or private insurance</li>
              <li>• Begin sustainable portfolio withdrawals</li>
              <li>• Complete freedom from employment requirements</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Common Questions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button
          onClick={() => toggleSection('faq')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Common Questions</h2>
          </div>
          {openSection === 'faq' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'faq' && (
          <div className="px-6 pb-5">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Why is it called "Barista" FIRE?
                </h3>
                <p className="text-xs text-gray-600">
                  The term originated from Starbucks baristas who receive health insurance even 
                  working part-time (20+ hours/week). It now refers to any part-time work with benefits.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  What companies offer health insurance for part-time workers?
                </h3>
                <p className="text-xs text-gray-600">
                  Starbucks, UPS, Costco, Trader Joe's, REI, Whole Foods, and many others offer 
                  health benefits to part-time employees working 20-30 hours per week.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  How does Barista FIRE differ from Coast FIRE?
                </h3>
                <p className="text-xs text-gray-600">
                  Coast FIRE: You stop saving entirely, work covers all expenses.
                  Barista FIRE: Work part-time for benefits and partial income, portfolio covers the gap.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  What if I can't find part-time work with benefits?
                </h3>
                <p className="text-xs text-gray-600">
                  Consider freelancing with higher income to cover private insurance, ACA marketplace 
                  plans, health sharing ministries, or working until Medicare eligibility.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}