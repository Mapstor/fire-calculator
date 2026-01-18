'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Crown, DollarSign, TrendingUp, Shield } from 'lucide-react';

export default function FatFireContent() {
  const [openSection, setOpenSection] = useState<string | null>('what-is');
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="prose prose-sm max-w-none">
      {/* What is Fat FIRE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('what-is')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-purple-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">What is Fat FIRE?</h2>
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
              Fat FIRE represents achieving financial independence with enough wealth to maintain 
              a luxurious lifestyle without financial constraints, typically requiring $2.5M-$10M+ in invested assets.
            </p>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Fat FIRE Thresholds:</h3>
            <ul className="space-y-2 text-xs">
              <li><strong>Entry Level:</strong> $2.5M portfolio ($100K/year spending)</li>
              <li><strong>Comfortable:</strong> $5M portfolio ($200K/year spending)</li>
              <li><strong>Premium:</strong> $7.5M portfolio ($300K/year spending)</li>
              <li><strong>Ultra Fat:</strong> $10M+ portfolio ($400K+/year spending)</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">The Math:</h3>
            <p className="text-xs bg-gray-50 p-3 rounded-lg font-mono">
              Fat FIRE Number = Annual Spending ÷ 0.035 (3.5% withdrawal rate)
            </p>
            <p className="text-xs mt-2">
              Using a conservative 3.5% withdrawal rate instead of 4% provides extra safety 
              margin for maintaining luxury spending indefinitely.
            </p>
          </div>
        )}
      </div>
      
      {/* Fat FIRE vs Other Types */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('comparison')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Fat FIRE vs Other Strategies</h2>
          </div>
          {openSection === 'comparison' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'comparison' && (
          <div className="px-6 pb-5">
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-3">
                <h3 className="text-sm font-medium text-gray-900">Lean FIRE</h3>
                <p className="text-xs text-gray-600 mt-1">
                  <strong>Target:</strong> $1M portfolio | $40K/year spending<br />
                  <strong>Lifestyle:</strong> Frugal, minimalist, budget-conscious
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3">
                <h3 className="text-sm font-medium text-gray-900">Regular FIRE</h3>
                <p className="text-xs text-gray-600 mt-1">
                  <strong>Target:</strong> $1.5M portfolio | $60K/year spending<br />
                  <strong>Lifestyle:</strong> Comfortable middle-class retirement
                </p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-3">
                <h3 className="text-sm font-medium text-gray-900">Barista FIRE</h3>
                <p className="text-xs text-gray-600 mt-1">
                  <strong>Target:</strong> $750K portfolio + part-time work<br />
                  <strong>Lifestyle:</strong> Semi-retirement with health benefits
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-3">
                <h3 className="text-sm font-medium text-gray-900">Fat FIRE</h3>
                <p className="text-xs text-gray-600 mt-1">
                  <strong>Target:</strong> $2.5M+ portfolio | $100K+/year spending<br />
                  <strong>Lifestyle:</strong> Luxury travel, dining, premium experiences
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Path to Fat FIRE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('path')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-primary-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Path to Fat FIRE</h2>
          </div>
          {openSection === 'path' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'path' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Income Requirements</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Typically requires $200K+ individual or $300K+ household income</li>
              <li>• High-paying careers: tech, finance, medicine, law, business ownership</li>
              <li>• Multiple income streams often necessary</li>
              <li>• Focus on increasing income rather than just cutting expenses</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Savings Strategy</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Target 50-70% savings rate on high income</li>
              <li>• Max out all tax-advantaged accounts (401k, IRA, HSA)</li>
              <li>• Significant taxable brokerage investments</li>
              <li>• Consider real estate and alternative investments</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Timeline Expectations</h3>
            <ul className="space-y-1.5 text-xs">
              <li>• 15-25 years typical with high income and savings rate</li>
              <li>• 10-15 years possible with very high income or business exit</li>
              <li>• Requires sustained high earnings throughout accumulation phase</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Lifestyle & Considerations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button
          onClick={() => toggleSection('lifestyle')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Lifestyle & Considerations</h2>
          </div>
          {openSection === 'lifestyle' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'lifestyle' && (
          <div className="px-6 pb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-2">What Fat FIRE Affords</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>✓ Premium healthcare without cost concerns</li>
                <li>✓ First-class travel and luxury accommodations</li>
                <li>✓ Private schools for children</li>
                <li>✓ Multiple homes or luxury residence</li>
              </ul>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>✓ Fine dining and entertainment</li>
                <li>✓ Charitable giving and legacy planning</li>
                <li>✓ Personal services (cleaning, chef, etc.)</li>
                <li>✓ Expensive hobbies without guilt</li>
              </ul>
            </div>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Important Considerations</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Lifestyle inflation can delay Fat FIRE significantly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Higher spending requires more conservative withdrawal rate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Tax optimization becomes crucial at higher wealth levels
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Estate planning and asset protection important
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}