'use client';

import { useState } from 'react';
import { coastFireExamples } from '@/data/coastFireExamples';
import { CoastFireInputs } from '@/types/coastFire';
import { formatCurrency } from '@/lib/formatters';
import { ChevronDown, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onLoadExample: (inputs: CoastFireInputs) => void;
}

export default function CoastFireExamples({ onLoadExample }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first example by default
  
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Coast FIRE Case Studies
      </h2>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Real-world scenarios demonstrating Coast FIRE applications across different financial situations.
      </p>
      
      <div className="space-y-4">
        {coastFireExamples.map((example, index) => (
          <div
            key={example.name}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary-100 rounded-lg">
                  <User className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{example.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{example.description}</p>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <p className="text-xs text-gray-500 mb-1">Age</p>
                        <p className="text-sm font-semibold">{example.inputs.currentAge}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <p className="text-xs text-gray-500 mb-1">Retire At</p>
                        <p className="text-sm font-semibold">{example.inputs.targetRetirementAge}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <p className="text-xs text-gray-500 mb-1">Investments</p>
                        <p className="text-sm font-semibold">{formatCurrency(example.inputs.currentInvestments, 'USD')}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <p className="text-xs text-gray-500 mb-1">Monthly Expenses</p>
                        <p className="text-sm font-semibold">{formatCurrency(example.inputs.monthlyExpenses, 'USD')}</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 rounded-lg p-3 mb-3">
                      <p className="text-primary-900 text-xs leading-relaxed">{example.insight}</p>
                    </div>
                    
                    <button
                      onClick={() => onLoadExample(example.inputs)}
                      className="flex items-center gap-1.5 text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      <span>Load Example</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}