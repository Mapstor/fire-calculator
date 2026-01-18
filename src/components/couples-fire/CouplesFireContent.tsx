'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Users, Shield, AlertTriangle } from 'lucide-react';

export default function CouplesFireContent() {
  const [openSection, setOpenSection] = useState<string | null>('advantages');
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="prose prose-sm max-w-none">
      {/* Couples FIRE Advantages */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('advantages')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-rose-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Couples FIRE Advantages</h2>
          </div>
          {openSection === 'advantages' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'advantages' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <h3 className="text-sm font-medium text-gray-900 mt-3 mb-2">Financial Synergies</h3>
            <ul className="space-y-1.5 text-xs">
              <li>• <strong>Dual Income:</strong> Two salary streams accelerate wealth building</li>
              <li>• <strong>Shared Expenses:</strong> Housing, utilities, insurance cost less per person</li>
              <li>• <strong>Tax Benefits:</strong> Joint filing often reduces overall tax burden</li>
              <li>• <strong>Risk Diversification:</strong> Two income sources provide security</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Strategic Options</h3>
            <ul className="space-y-1.5 text-xs">
              <li>• One partner can take career risks while other provides stability</li>
              <li>• Staggered retirement for health insurance continuity</li>
              <li>• Ability to max out both partners' retirement accounts</li>
              <li>• Geographic flexibility with remote work options</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Planning Strategies */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('strategies')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Planning Strategies</h2>
          </div>
          {openSection === 'strategies' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'strategies' && (
          <div className="px-6 pb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Account Optimization</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>• Max out higher earner's 401k first for tax savings</li>
              <li>• Utilize both HSAs for triple tax advantage</li>
              <li>• Coordinate employer matches strategically</li>
              <li>• Balance traditional vs Roth based on combined income</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Expense Management</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>• Create joint budget with individual "fun money" allocations</li>
              <li>• Automate savings before lifestyle inflation</li>
              <li>• Share subscription services and memberships</li>
              <li>• Optimize insurance coverage (avoid duplication)</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Communication Keys</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>• Regular financial check-ins (monthly/quarterly)</li>
              <li>• Align on retirement lifestyle expectations</li>
              <li>• Discuss risk tolerance differences openly</li>
              <li>• Plan for different retirement timing scenarios</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Risk Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('risks')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-green-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Risk Management</h2>
          </div>
          {openSection === 'risks' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'risks' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Insurance Needs</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>✓ Term life insurance for both partners</li>
              <li>✓ Disability insurance especially for higher earner</li>
              <li>✓ Umbrella policy for asset protection</li>
              <li>✓ Long-term care considerations</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Contingency Planning</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Plan for single income scenarios</li>
              <li>• Maintain individual emergency funds</li>
              <li>• Keep some accounts separate for flexibility</li>
              <li>• Document financial plans and passwords</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Legal Considerations</h3>
            <ul className="space-y-1.5 text-xs">
              <li>• Update beneficiaries on all accounts</li>
              <li>• Create wills and healthcare directives</li>
              <li>• Consider prenuptial agreements if applicable</li>
              <li>• Review state laws for property rights</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Common Challenges */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button
          onClick={() => toggleSection('challenges')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Common Challenges</h2>
          </div>
          {openSection === 'challenges' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'challenges' && (
          <div className="px-6 pb-5">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Different Risk Tolerances
                </h3>
                <p className="text-xs text-gray-600">
                  Solution: Create separate investment buckets - conservative for one, aggressive for other, 
                  balanced for joint accounts.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Unequal Contributions
                </h3>
                <p className="text-xs text-gray-600">
                  Solution: Focus on percentage contributions rather than absolute amounts. 
                  Value non-monetary contributions equally.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Career Changes or Gaps
                </h3>
                <p className="text-xs text-gray-600">
                  Solution: Build flexibility into plans. Maintain individual retirement accounts 
                  for career breaks or education.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Family Planning Impact
                </h3>
                <p className="text-xs text-gray-600">
                  Solution: Model scenarios with children, education costs, and potential income changes. 
                  Build larger emergency fund.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}