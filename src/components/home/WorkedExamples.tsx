import { Sparkles, Calculator, TrendingUp } from "lucide-react";

/**
 * Pre-rendered worked examples shown as static SSR HTML on the home page.
 * Each persona's math is verified at 7% real return:
 *   FV = PV·(1+r)^n + PMT·((1+r)^n − 1)/r
 * solving for n:
 *   u = (FV·r + PMT) / (PV·r + PMT); n = ln(u) / ln(1+r)
 *
 * Important: the visible numbers below are real outputs of the formula,
 * not illustrative round numbers. Crawlers index them as concrete answers
 * to long-tail FIRE queries.
 */

interface Example {
  name: string;
  badge: string;
  inputs: {
    age: number;
    salary: number;
    savingsRate: number;
    currentSavings: number;
  };
  outputs: {
    annualSavings: number;
    annualExpenses: number;
    fireNumber: number;
    yearsToFire: string;
    retireAge: number;
  };
  notes: string;
}

const examples: Example[] = [
  {
    name: "Sarah, 25 — early starter",
    badge: "Starting from $0",
    inputs: { age: 25, salary: 55000, savingsRate: 50, currentSavings: 0 },
    outputs: {
      annualSavings: 27500,
      annualExpenses: 27500,
      fireNumber: 687500,
      yearsToFire: "~15",
      retireAge: 40,
    },
    notes:
      "A 25-year-old earning $55K and saving 50% of it reaches FIRE at age 40 with $687K invested — even starting from zero. Time and savings rate are the dominant variables.",
  },
  {
    name: "Marcus, 30 — typical FIRE journey",
    badge: "Mid-career, mid-income",
    inputs: { age: 30, salary: 80000, savingsRate: 40, currentSavings: 50000 },
    outputs: {
      annualSavings: 32000,
      annualExpenses: 48000,
      fireNumber: 1200000,
      yearsToFire: "~17.5",
      retireAge: 48,
    },
    notes:
      "A 30-year-old earning $80K with $50K already invested, saving 40% per year, reaches a $1.2M FIRE number at about age 48. This is the typical trajectory for an engaged FIRE pursuer.",
  },
  {
    name: "Linda, 40 — late starter, higher income",
    badge: "Catching up on later start",
    inputs: { age: 40, salary: 120000, savingsRate: 35, currentSavings: 200000 },
    outputs: {
      annualSavings: 42000,
      annualExpenses: 78000,
      fireNumber: 1950000,
      yearsToFire: "~17",
      retireAge: 57,
    },
    notes:
      "Starting later doesn't kill FIRE — it just shifts the retirement age. Linda hits a $1.95M FIRE number at 57 by saving 35% on a $120K salary. A higher savings rate would pull retirement earlier.",
  },
];

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

export default function WorkedExamples() {
  return (
    <section
      aria-labelledby="worked-examples-heading"
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
    >
      <div className="flex items-start gap-3 mb-2">
        <Sparkles className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
        <div>
          <h2
            id="worked-examples-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Three worked FIRE examples
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Real outputs from the formula{" "}
            <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
              FV = PV·(1+r)<sup>n</sup> + PMT·((1+r)<sup>n</sup>−1)/r
            </code>{" "}
            at 7% real (inflation-adjusted) return.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {examples.map((ex) => (
          <article
            key={ex.name}
            className="border border-gray-200 rounded-lg p-5 bg-gradient-to-br from-gray-50 to-white"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                {ex.badge}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              {ex.name}
            </h3>

            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
              <Calculator className="inline w-3 h-3 mr-1" />
              Inputs
            </div>
            <ul className="text-sm text-gray-700 space-y-0.5 mb-4">
              <li>Age: {ex.inputs.age}</li>
              <li>Salary: ${ex.inputs.salary.toLocaleString()}/yr</li>
              <li>Savings rate: {ex.inputs.savingsRate}%</li>
              <li>Current savings: {fmt(ex.inputs.currentSavings)}</li>
            </ul>

            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              Outputs
            </div>
            <ul className="text-sm text-gray-800 space-y-0.5 mb-3">
              <li>
                Annual savings:{" "}
                <strong>{fmt(ex.outputs.annualSavings)}</strong>
              </li>
              <li>
                Annual expenses:{" "}
                <strong>{fmt(ex.outputs.annualExpenses)}</strong>
              </li>
              <li>
                FIRE number:{" "}
                <strong className="text-primary-700">
                  {fmt(ex.outputs.fireNumber)}
                </strong>
              </li>
              <li>
                Years to FIRE: <strong>{ex.outputs.yearsToFire}</strong>
              </li>
              <li>
                Retirement age:{" "}
                <strong className="text-emerald-700">
                  {ex.outputs.retireAge}
                </strong>
              </li>
            </ul>

            <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
              {ex.notes}
            </p>
          </article>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6 leading-relaxed">
        These are deterministic projections, not predictions. Actual outcomes
        depend on market sequence-of-returns, real inflation, taxes, and
        spending changes. Use the calculator above for your own numbers, and
        run Monte Carlo via Advanced options to see the range of likely
        outcomes.
      </p>
    </section>
  );
}
