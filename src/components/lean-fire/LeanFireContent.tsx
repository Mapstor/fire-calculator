'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf, TrendingDown, MapPin, AlertTriangle } from 'lucide-react';

export default function LeanFireContent() {
  const [openSection, setOpenSection] = useState<string | null>('what-is');
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="prose prose-sm max-w-none">
      {/* What is Lean FIRE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('what-is')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-green-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">What is Lean FIRE?</h2>
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
              Lean FIRE is achieving financial independence with minimal expenses, typically 
              living on $40,000 or less per year, requiring around $1 million or less in invested assets.
            </p>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Core Principles:</h3>
            <ul className="space-y-2 text-xs">
              <li><strong>Minimalism:</strong> Focus on needs vs wants, intentional consumption</li>
              <li><strong>Frugality:</strong> Maximize value from every dollar spent</li>
              <li><strong>Simplicity:</strong> Reduce complexity and overhead in life</li>
              <li><strong>Sustainability:</strong> Live below means indefinitely</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">The Numbers:</h3>
            <p className="text-xs bg-gray-50 p-3 rounded-lg font-mono">
              Lean FIRE Number = Annual Expenses × 25<br/>
              $40,000/year × 25 = $1,000,000
            </p>
            <p className="text-xs mt-2">
              With the 4% rule, $1M provides $40K annual income indefinitely, 
              adjusted for inflation.
            </p>
          </div>
        )}
      </div>
      
      {/* Lean Living Strategies */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('strategies')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Lean Living Strategies</h2>
          </div>
          {openSection === 'strategies' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'strategies' && (
          <div className="px-6 pb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Housing (30-35% of budget)</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>• House hacking or roommates to split costs</li>
              <li>• Smaller living spaces (studio/1BR apartments)</li>
              <li>• Consider mobile homes or tiny houses</li>
              <li>• Move to lower cost of living areas</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Transportation (10-15% of budget)</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>• Use public transit, bike, or walk</li>
              <li>• Buy used reliable vehicles, pay cash</li>
              <li>• Car sharing for occasional needs</li>
              <li>• Live in walkable neighborhoods</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Food (15-20% of budget)</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>• Cook at home, meal prep weekly</li>
              <li>• Buy in bulk, shop sales</li>
              <li>• Grow your own vegetables</li>
              <li>• Limit dining out to special occasions</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Entertainment (5-10% of budget)</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>• Free activities: hiking, libraries, parks</li>
              <li>• Home entertainment vs going out</li>
              <li>• Community events and free festivals</li>
              <li>• Skill-based hobbies that save money</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Geographic Arbitrage */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <button
          onClick={() => toggleSection('geo-arbitrage')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Geographic Arbitrage</h2>
          </div>
          {openSection === 'geo-arbitrage' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'geo-arbitrage' && (
          <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Domestic Options</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Southeast: Tennessee, North Carolina, Georgia</li>
              <li>• Midwest: Ohio, Michigan, Indiana</li>
              <li>• Southwest: New Mexico, Arizona (outside major cities)</li>
              <li>• Rural areas and small towns nationwide</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">International Options</h3>
            <ul className="space-y-1.5 text-xs mb-4">
              <li>• Latin America: Mexico, Costa Rica, Ecuador</li>
              <li>• Southeast Asia: Thailand, Vietnam, Malaysia</li>
              <li>• Eastern Europe: Portugal, Czech Republic, Poland</li>
              <li>• Consider visa requirements and healthcare access</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Cost Savings Potential</h3>
            <div className="bg-blue-50 rounded-lg p-3">
              <ul className="space-y-1.5 text-xs text-blue-800">
                <li>• 20-30% savings: Move from high to medium COL area</li>
                <li>• 30-50% savings: Move to low COL area domestically</li>
                <li>• 50-70% savings: Move to developing countries</li>
                <li>• Factor in travel costs to visit family/friends</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Risks & Considerations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button
          onClick={() => toggleSection('risks')}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-semibold text-gray-900 m-0">Risks & Considerations</h2>
          </div>
          {openSection === 'risks' ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        {openSection === 'risks' && (
          <div className="px-6 pb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Potential Challenges</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Limited budget flexibility for unexpected expenses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Healthcare costs can derail lean budgets
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Lifestyle may feel restrictive long-term
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">⚠</span>
                Social pressures and lifestyle inflation risks
              </li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Risk Mitigation</h3>
            <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
              <li>✓ Maintain 12+ month emergency fund</li>
              <li>✓ Consider part-time work flexibility</li>
              <li>✓ Build multiple income streams</li>
              <li>✓ Stay healthy to minimize medical costs</li>
              <li>✓ Develop DIY and self-sufficiency skills</li>
              <li>✓ Build strong social support network</li>
            </ul>
            
            <h3 className="text-sm font-medium text-gray-900 mb-2">Success Factors</h3>
            <div className="bg-green-50 rounded-lg p-3">
              <ul className="space-y-1.5 text-xs text-green-800">
                <li>• Genuine enjoyment of simple pleasures</li>
                <li>• Strong motivation beyond just money</li>
                <li>• Flexibility to adjust spending as needed</li>
                <li>• Community of like-minded individuals</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}