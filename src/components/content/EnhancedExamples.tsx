'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, User, Play, BookOpen, Calculator, Target, TrendingUp, Users } from 'lucide-react';
import { EXAMPLE_PERSONAS } from '@/data/examplePersonas';
import { CalculatorInputs } from '@/types/calculator';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface EnhancedExamplesProps {
  onLoadExample: (inputs: CalculatorInputs) => void;
}

export default function EnhancedExamples({ onLoadExample }: EnhancedExamplesProps) {
  const [expandedExample, setExpandedExample] = useState<string | null>(null); // All collapsed by default

  const examples = [
    {
      id: 'freshGraduate',
      name: 'Sarah, 23 - Fresh Graduate',
      description: 'Software developer starting her FIRE journey right out of college',
      inputs: EXAMPLE_PERSONAS.freshGraduate,
      results: { fireNumber: 840000, years: 16, fireAge: 39, savingsRate: 37.8, coastFire: 152000, coastAge: 28 },
      story: `Sarah just graduated with a computer science degree and landed a $65,000/year job. She lives with roommates to keep costs low and saves aggressively. By maintaining a 38% savings rate, she'll reach financial independence at 39.`,
      strategies: [
        'House hacking with roommates to reduce housing costs',
        'Maxing out 401(k) for employer match and tax benefits',
        'Investing in low-cost index funds (VTSAX & VTIAX)',
        'Side freelancing to boost income by $500/month'
      ],
      relatedArticles: [
        { title: 'Complete FIRE Guide for Beginners', url: '/complete-fire-guide' },
        { title: 'Coast FIRE Strategy', url: '/blog/complete-guide-coast-fire' }
      ],
      insight: 'Starting at 23 with solid savings habits, Sarah will achieve Coast FIRE by 28 - meaning she could stop saving entirely and still retire at 65!',
    },
    {
      id: 'midCareer',
      name: 'Marcus, 35 - Mid-Career Professional',
      description: 'Marketing director catching up after discovering FIRE at 35',
      inputs: EXAMPLE_PERSONAS.midCareer,
      results: { fireNumber: 1650000, years: 14, fireAge: 49, savingsRate: 42.1, coastFire: 580000, coastAge: 42 },
      story: `Marcus discovered FIRE at 35 after years of lifestyle inflation. With a $110,000 salary and some existing savings, he restructured his life to save 42% of his income. His higher income compensates for the late start.`,
      strategies: [
        'Downsized from luxury apartment to modest 2-bedroom',
        'Sold expensive car, bought reliable used vehicle',
        'Meal prepping and cooking at home (saves $800/month)',
        'Negotiated 20% salary increase by switching jobs',
        'Started maxing out all tax-advantaged accounts'
      ],
      relatedArticles: [
        { title: 'FIRE for Late Starters', url: '/blog/fire-for-late-starters' },
        { title: 'Advanced FIRE Analysis', url: '/advanced-fire-analysis' }
      ],
      insight: 'Despite starting at 35, Marcus can still retire at 49. The key is his high 42% savings rate enabled by cutting unnecessary expenses.',
    },
    {
      id: 'lateStarter',
      name: 'Patricia, 45 - Late Starter',
      description: 'Proving it\'s never too late to pursue financial independence',
      inputs: EXAMPLE_PERSONAS.lateStarter,
      results: { fireNumber: 1200000, years: 13, fireAge: 58, savingsRate: 43.8, baristaFire: 600000, baristaAge: 52 },
      story: `Patricia woke up at 45 realizing she had minimal retirement savings. Through aggressive saving and smart planning, she can still retire at 58 - 7 years before traditional retirement age.`,
      strategies: [
        'Catch-up contributions to 401(k) and IRA ($7,500 extra/year)',
        'Moved to lower cost-of-living area (saved 30% on expenses)',
        'Renting out spare bedroom on Airbnb ($800/month)',
        'Planning for Barista FIRE at 52 for health insurance',
        'Factoring in Social Security at 62 to reduce FIRE number'
      ],
      relatedArticles: [
        { title: 'FIRE for Late Starters Guide', url: '/blog/fire-for-late-starters' },
        { title: 'Barista FIRE Strategy', url: '/blog/coast-fire-vs-barista-fire' },
        { title: 'Social Security & FIRE', url: '/blog/social-security-fire' }
      ],
      insight: 'Starting at 45 isn\'t too late! Patricia can achieve Barista FIRE at 52, working part-time for health insurance while her investments grow.',
    },
    {
      id: 'coupleWithKids',
      name: 'The Johnsons, 32 - Couple With Kids',
      description: 'Family of four pursuing FIRE together with smart planning',
      inputs: EXAMPLE_PERSONAS.coupleWithKids,
      results: { fireNumber: 1800000, years: 15, fireAge: 47, savingsRate: 35.7, coastFire: 420000, coastAge: 37 },
      story: `The Johnsons have two kids (ages 6 and 8) and a combined income of $140,000. They're proving that FIRE is possible with children through careful planning and teamwork.`,
      strategies: [
        'Both partners max out 401(k)s for $46,000/year tax savings',
        '529 plans for kids\' college (in-state public university)',
        'Family travel hacking for affordable vacations',
        'Teaching kids about money and frugal living',
        'Planning reduced expenses post-kids (no childcare costs)',
        'One car family with strategic location choice'
      ],
      relatedArticles: [
        { title: 'Couples FIRE Strategy Guide', url: '/blog/couples-fire-strategy' },
        { title: 'FIRE Calculator for Couples', url: '/fire-calculator-couples' }
      ],
      insight: 'With kids leaving for college when they\'re 44, the Johnsons\' expenses will drop significantly, accelerating their path to FIRE at 47.',
    },
    {
      id: 'fatFire',
      name: 'David, 38 - Fat FIRE Tech Executive',
      description: 'Senior tech executive targeting luxury retirement lifestyle',
      inputs: EXAMPLE_PERSONAS.fatFire,
      results: { fireNumber: 4100000, years: 10, fireAge: 48, savingsRate: 57.1, milestone1M: 42, milestone2M: 45 },
      story: `David is a VP of Engineering earning $280,000/year. Rather than lifestyle inflation, he maintains moderate spending while banking huge savings for a luxurious early retirement.`,
      strategies: [
        'Living on $120,000/year despite $280,000 income',
        'Maximizing all tax-deferred accounts plus mega-backdoor Roth',
        'RSUs and ESPP providing additional $50,000/year',
        'Real estate investment properties generating $2,000/month',
        'Tax-loss harvesting in taxable accounts',
        'Planning for $164,000/year retirement spending'
      ],
      relatedArticles: [
        { title: 'Lean FIRE vs Fat FIRE Comparison', url: '/blog/lean-fire-vs-fat-fire' },
        { title: 'Fat FIRE Calculator', url: '/fat-fire-calculator' },
        { title: 'Tax Optimization for FIRE', url: '/blog/fire-tax-optimization' }
      ],
      insight: 'David\'s 57% savings rate on a high income means Fat FIRE at 48 with $164,000/year spending - true financial freedom with luxury.',
    },
    {
      id: 'leanFire',
      name: 'Emma, 28 - Lean FIRE Minimalist',
      description: 'Teacher pursuing early retirement through extreme frugality',
      inputs: {
        currentAge: 28,
        retirementAge: 38,
        monthlyIncome: 3500,
        monthlyExpenses: 1500,
        currentSavings: 25000,
        advanced: EXAMPLE_PERSONAS.freshGraduate.advanced,
        currency: 'USD' as const
      },
      results: { fireNumber: 450000, years: 10, fireAge: 38, savingsRate: 57.1, coastFire: 110000, coastAge: 31 },
      story: `Emma is a public school teacher earning $42,000/year who discovered minimalism and FIRE. By living on just $18,000/year, she saves 57% of her modest income.`,
      strategies: [
        'Studio apartment in low-cost area ($600/month)',
        'Biking and public transit (no car)',
        'Cooking all meals at home, batch meal prep',
        'Free hobbies: library, hiking, community events',
        'Summer tutoring for extra income',
        'House sitting for free accommodation periods'
      ],
      relatedArticles: [
        { title: 'Lean FIRE Calculator', url: '/lean-fire-calculator' },
        { title: 'Geographic Arbitrage Strategy', url: '/blog/geographic-arbitrage-fire' }
      ],
      insight: 'Emma proves you don\'t need a six-figure income for FIRE. Her 57% savings rate on a teacher\'s salary leads to retirement at 38.',
    }
  ];

  const handleLoadExample = (inputs: CalculatorInputs) => {
    onLoadExample(inputs);
    // Scroll to calculator
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Real FIRE Success Stories & Examples
          </h2>
          <p className="text-gray-600">
            Detailed case studies showing different paths to financial independence. Each example includes strategies, timelines, and actionable insights.
          </p>
        </div>
        <Users className="h-8 w-8 text-primary-500" />
      </div>

      {/* Quick Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">Fastest FIRE</p>
          <p className="text-2xl font-bold text-blue-900">10 years</p>
          <p className="text-xs text-blue-700">Emma & David</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Highest Savings Rate</p>
          <p className="text-2xl font-bold text-green-900">57.1%</p>
          <p className="text-xs text-green-700">David & Emma</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
          <p className="text-sm text-purple-600 font-medium">Latest Starter</p>
          <p className="text-2xl font-bold text-purple-900">Age 45</p>
          <p className="text-xs text-purple-700">Patricia</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
          <p className="text-sm text-orange-600 font-medium">With Kids</p>
          <p className="text-2xl font-bold text-orange-900">Age 47</p>
          <p className="text-xs text-orange-700">The Johnsons</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {examples.map((example) => (
          <div
            key={example.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setExpandedExample(
                expandedExample === example.id ? 'all' : example.id
              )}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{example.name}</h3>
                  <p className="text-sm text-gray-600">{example.description}</p>
                </div>
              </div>
              {(expandedExample === 'all' || expandedExample === example.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            
            {(expandedExample === 'all' || expandedExample === example.id) && (
              <div className="px-4 pb-4 border-t border-gray-100">
                {/* Story Section */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Their Story
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {example.story}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">FIRE Number</p>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(example.results.fireNumber)}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Years to FIRE</p>
                    <p className="text-lg font-bold text-gray-900">{example.results.years} years</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">FIRE Age</p>
                    <p className="text-lg font-bold text-gray-900">Age {example.results.fireAge}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Savings Rate</p>
                    <p className="text-lg font-bold text-gray-900">{example.results.savingsRate}%</p>
                  </div>
                </div>

                {/* Strategies */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Key Strategies
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {example.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">•</span>
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestones */}
                {(example.results.coastFire || example.results.baristaFire) && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Alternative Milestones</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {example.results.coastFire && (
                        <div>
                          <p className="text-xs text-blue-600">Coast FIRE</p>
                          <p className="text-sm font-semibold text-blue-900">
                            {formatCurrency(example.results.coastFire)} at age {example.results.coastAge}
                          </p>
                        </div>
                      )}
                      {example.results.baristaFire && (
                        <div>
                          <p className="text-xs text-blue-600">Barista FIRE</p>
                          <p className="text-sm font-semibold text-blue-900">
                            {formatCurrency(example.results.baristaFire)} at age {example.results.baristaAge}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Insight */}
                <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-green-900">
                    <span className="font-semibold">💡 Key Insight:</span> {example.insight}
                  </p>
                </div>

                {/* Related Articles */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Learn More</h4>
                  <div className="flex flex-wrap gap-2">
                    {example.relatedArticles.map((article, idx) => (
                      <Link
                        key={idx}
                        href={article.url}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-colors"
                      >
                        <BookOpen className="h-3 w-3" />
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleLoadExample(example.inputs)}
                    className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Calculator className="h-4 w-4" />
                    Try This Example
                  </button>
                  <Link
                    href={`/${example.id === 'fatFire' ? 'fat-fire-calculator' : example.id === 'leanFire' ? 'lean-fire-calculator' : example.id === 'coupleWithKids' ? 'fire-calculator-couples' : ''}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Specialized Calculator
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
        <h3 className="font-semibold text-primary-900 mb-2">Create Your Own FIRE Story</h3>
        <p className="text-sm text-primary-700 mb-4">
          These examples show that FIRE is achievable for people in different life situations. Whether you're 23 or 45, single or married, 
          earning $42K or $280K - there's a path to financial independence for you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/complete-fire-guide"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            Read Complete FIRE Guide
          </Link>
          <Link 
            href="/fire-comparison"
            className="px-4 py-2 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium border border-primary-300"
          >
            Compare FIRE Strategies
          </Link>
        </div>
      </div>
    </div>
  );
}