'use client';

import React from 'react';

export default function Explanation() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h4:text-lg prose-h4:font-medium prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:my-1">
        <h2>Understanding FIRE: Financial Independence, Retire Early</h2>
        
        <p>
          FIRE (Financial Independence, Retire Early) is a movement focused on extreme savings and investment 
          that allows you to retire far earlier than traditional budgets and retirement plans would permit.
        </p>
        
        <h3>How the FIRE Calculator Works</h3>
        
        <p>
          Our calculator uses the widely-accepted 4% withdrawal rule to determine your FIRE number. 
          This rule suggests you can safely withdraw 4% of your portfolio each year without depleting 
          your savings over a 30-year retirement period.
        </p>
        
        <h3>Key FIRE Concepts</h3>
        
        <h4>The 4% Rule</h4>
        <p>
          Based on the Trinity Study, this rule suggests that you can withdraw 4% of your retirement 
          portfolio annually (adjusted for inflation) with a high probability of not running out of money 
          over 30 years.
        </p>
        
        <h4>Coast FIRE</h4>
        <p>
          Coast FIRE means you have enough money saved that you don't need to save another penny and 
          can still retire at traditional retirement age. Our calculator shows when you'll reach this milestone.
        </p>
        
        <h4>Monte Carlo Simulation</h4>
        <p>
          Our Monte Carlo simulation runs 1,000 different scenarios with varying market returns to show 
          the range of possible outcomes for your FIRE journey. This helps you understand the uncertainty 
          inherent in long-term financial planning.
        </p>
        
        <h3>Tips for Achieving FIRE</h3>
        
        <ul>
          <li><strong>Increase your savings rate:</strong> Even small increases can dramatically reduce your time to FIRE</li>
          <li><strong>Reduce expenses:</strong> Lower expenses mean a lower FIRE number and higher savings rate</li>
          <li><strong>Increase income:</strong> Side hustles, career advancement, or passive income all help</li>
          <li><strong>Invest wisely:</strong> Low-cost index funds are popular among FIRE adherents</li>
          <li><strong>Track your progress:</strong> Regular check-ins keep you motivated and on track</li>
        </ul>
        
        <h3>Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div>
            <h4>What if I don't have any savings yet?</h4>
            <p>
              It's never too late to start! Even beginning with $0, consistent saving and investing 
              can lead to financial independence. The key is to start as soon as possible.
            </p>
          </div>
          
          <div>
            <h4>Is 4% withdrawal rate too conservative?</h4>
            <p>
              Some argue for higher rates (5-6%), but 4% has historical backing and provides a buffer 
              for market volatility. You can adjust this in our advanced options.
            </p>
          </div>
          
          <div>
            <h4>Should I include Social Security in my calculations?</h4>
            <p>
              It depends on your age and confidence in the system. Our calculator allows you to include 
              Social Security as additional income starting at your chosen age.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This calculator is for educational purposes only and does not constitute 
            financial advice. Market returns are not guaranteed, and past performance doesn't predict future results. 
            Consult with a qualified financial professional before making investment decisions.
          </p>
        </div>
      </article>
    </div>
  );
}