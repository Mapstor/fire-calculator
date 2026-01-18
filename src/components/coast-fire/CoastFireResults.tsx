'use client';

import { CoastFireResults as ResultsType } from '@/types/coastFire';
import { motion } from 'framer-motion';
import CoastFireHero from './CoastFireHero';
import CoastFireChart from './CoastFireChart';
import CoastFireStatus from './CoastFireStatus';
import { CurrencyCode } from '@/types/calculator';

interface Props {
  results: ResultsType;
  currency: CurrencyCode;
}

export default function CoastFireResults({ results, currency }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <CoastFireHero results={results} currency={currency} />
      <CoastFireStatus results={results} currency={currency} />
      <CoastFireChart results={results} currency={currency} />
    </motion.div>
  );
}