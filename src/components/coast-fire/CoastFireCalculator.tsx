'use client';

import { useRef } from 'react';
import { useCoastFireCalculator } from '@/hooks/useCoastFireCalculator';
import CoastFireInputs from './CoastFireInputs';
import CoastFireAdvanced from './CoastFireAdvanced';
import CoastFireResults from './CoastFireResults';
import CoastFireExamples from './CoastFireExamples';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Flame, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoastFireCalculator() {
  const {
    inputs,
    results,
    isCalculating,
    hasCalculated,
    currency,
    updateInput,
    calculate,
    reset,
    setCurrency,
    loadExample,
  } = useCoastFireCalculator();
  
  const resultsRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  
  const handleCalculate = () => {
    calculate();
    // Scroll to results after calculation
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 600);
  };
  
  const handleLoadExample = (exampleInputs: any) => {
    loadExample(exampleInputs);
    // Scroll to calculator
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="space-y-8" ref={calculatorRef}>
        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <CoastFireInputs
            inputs={inputs}
            onChange={updateInput}
            currency={currency}
            onCurrencyChange={setCurrency}
          />
          
          <div className="mt-6">
            <CoastFireAdvanced inputs={inputs} onChange={updateInput} />
          </div>
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={handleCalculate}
              disabled={isCalculating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isCalculating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Calculating...</span>
                </>
              ) : (
                <>
                  <Flame className="w-5 h-5" />
                  <span>Calculate Coast FIRE Number</span>
                </>
              )}
            </motion.button>
            
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
        
        {/* Results Section */}
        <div ref={resultsRef}>
          {hasCalculated && results && (
            <CoastFireResults results={results} currency={currency} />
          )}
        </div>
      </div>
      
      {/* Examples Section */}
      <CoastFireExamples onLoadExample={handleLoadExample} />
    </>
  );
}