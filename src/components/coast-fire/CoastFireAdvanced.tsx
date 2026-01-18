'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { CoastFireInputs } from '@/types/coastFire';
import InputField from '@/components/ui/InputField';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  inputs: CoastFireInputs;
  onChange: (field: keyof CoastFireInputs, value: number) => void;
}

export default function CoastFireAdvanced({ inputs, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-700">Advanced Options</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 space-y-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Adjust these assumptions to customize your calculation
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="Expected Return"
                  value={inputs.expectedReturn * 100}
                  onChange={(v) => onChange('expectedReturn', Number(v) / 100)}
                  type="percent"
                  placeholder="7"
                  suffix="%"
                  helperText="Annual investment return"
                />
                
                <InputField
                  label="Inflation Rate"
                  value={inputs.inflationRate * 100}
                  onChange={(v) => onChange('inflationRate', Number(v) / 100)}
                  type="percent"
                  placeholder="3"
                  suffix="%"
                  helperText="Expected annual inflation"
                />
                
                <InputField
                  label="Withdrawal Rate"
                  value={inputs.withdrawalRate * 100}
                  onChange={(v) => onChange('withdrawalRate', Number(v) / 100)}
                  type="percent"
                  placeholder="4"
                  suffix="%"
                  helperText="Safe withdrawal rate"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}