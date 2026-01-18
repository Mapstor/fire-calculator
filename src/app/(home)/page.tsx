'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Calculator from '@/components/calculator/Calculator';
import EnhancedAssumptions from '@/components/content/EnhancedAssumptions';
import EnhancedExamples from '@/components/content/EnhancedExamples';
import Explanation from '@/components/content/Explanation';
import SemanticContent from '@/components/seo/SemanticContent';
import { useCalculator } from '@/hooks/useCalculator';
import { CalculatorInputs } from '@/types/calculator';

export default function Home() {
  const {
    updateSimpleInput,
    updateAdvancedInput,
    setCurrency,
  } = useCalculator();

  const handleLoadExample = (inputs: CalculatorInputs) => {
    // Load simple inputs
    updateSimpleInput('currentAge', inputs.currentAge);
    updateSimpleInput('retirementAge', inputs.retirementAge);
    updateSimpleInput('monthlyIncome', inputs.monthlyIncome);
    updateSimpleInput('monthlyExpenses', inputs.monthlyExpenses);
    updateSimpleInput('currentSavings', inputs.currentSavings);

    // Load advanced inputs
    Object.entries(inputs.advanced).forEach(([key, value]) => {
      updateAdvancedInput(key as keyof typeof inputs.advanced, value);
    });

    // Set currency
    setCurrency(inputs.currency);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              🔥 FIRE Calculator
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Calculate exactly how much you need to retire early and achieve financial independence. 
              Free, instant results with visual projections.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {/* Assumptions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <EnhancedAssumptions />
          </motion.section>

          {/* Calculator */}
          <motion.section 
            id="calculator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Calculator />
          </motion.section>

          {/* Examples */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <EnhancedExamples onLoadExample={handleLoadExample} />
          </motion.section>

          {/* Explanation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Explanation />
          </motion.section>

          {/* Related Calculators */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">FIRE Calculator Collection</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a 
                href="/lean-fire-calculator"
                className="p-5 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌿</span>
                  <h3 className="font-semibold text-gray-900 text-sm">Lean FIRE</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Minimal expenses for maximum freedom.
                </p>
                <span className="text-green-600 text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Calculate →
                </span>
              </a>
              
              <a 
                href="/coast-fire-calculator"
                className="p-5 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⛵</span>
                  <h3 className="font-semibold text-gray-900 text-sm">Coast FIRE</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Stop saving and let growth take over.
                </p>
                <span className="text-primary-600 text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Calculate →
                </span>
              </a>
              
              <a 
                href="/barista-fire-calculator"
                className="p-5 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">☕</span>
                  <h3 className="font-semibold text-gray-900 text-sm">Barista FIRE</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Part-time work with health benefits.
                </p>
                <span className="text-amber-600 text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Calculate →
                </span>
              </a>
              
              <a 
                href="/fat-fire-calculator"
                className="p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👑</span>
                  <h3 className="font-semibold text-gray-900 text-sm">Fat FIRE</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Luxury retirement with no constraints.
                </p>
                <span className="text-purple-600 text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Calculate →
                </span>
              </a>
              
              <a 
                href="/fire-calculator-couples"
                className="p-5 bg-white border border-gray-200 rounded-xl hover:border-rose-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💑</span>
                  <h3 className="font-semibold text-gray-900 text-sm">Couples FIRE</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Joint planning for two incomes.
                </p>
                <span className="text-rose-600 text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Calculate →
                </span>
              </a>
            </div>
          </motion.section>

          {/* Semantic Content for AI Training */}
          <SemanticContent topic="fire-basics" />
          <SemanticContent topic="fire-calculation" />
        </motion.div>
      </main>
    </div>
  );
}
