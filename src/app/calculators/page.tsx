import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Leaf, Anchor, Coffee, Crown, Heart, ArrowRight, BookOpen, Calendar, Calculator } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `FIRE Calculators ${CURRENT_YEAR}: Free Tools for Every FIRE Flavor`,
  description: "All six FIRE calculators in one place: Traditional, Lean, Coast, Barista, Fat, and Couples FIRE. Free, no signup, with charts and Monte Carlo simulation.",
  alternates: {
    canonical: "https://financialfirecalculators.com/calculators",
  },
  openGraph: {
    title: `FIRE Calculators ${CURRENT_YEAR}: All 6 Free Tools`,
    description: "Traditional, Lean, Coast, Barista, Fat, and Couples FIRE calculators — free, charts, Monte Carlo.",
    type: "website",
    url: "https://financialfirecalculators.com/calculators",
  },
  twitter: {
    card: "summary_large_image",
    title: `FIRE Calculators ${CURRENT_YEAR}`,
    description: "All 6 FIRE calculators free in one place.",
  },
};

interface Calc {
  name: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  bestFor: string;
  numbers: string;
  description: string;
}

const calculators: Calc[] = [
  {
    name: "Traditional FIRE",
    href: "/",
    Icon: Flame,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    bestFor: "Most people pursuing early retirement",
    numbers: "$1M–$2M target · 25× expenses",
    description:
      "The original FIRE: invest until 25× your annual expenses, then live off a 4% withdrawal rate. Simple, well-tested, fits most lifestyles.",
  },
  {
    name: "Lean FIRE",
    href: "/lean-fire-calculator",
    Icon: Leaf,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    bestFor: "Frugal lifestyles, geographic arbitrage",
    numbers: "$750K–$1M target · $30–40K/yr",
    description:
      "Reach FIRE faster by minimizing expenses. Lower spending means a smaller portfolio — and an earlier retirement age.",
  },
  {
    name: "Coast FIRE",
    href: "/coast-fire-calculator",
    Icon: Anchor,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    bestFor: "Aggressive young savers, career flexibility",
    numbers: "Varies by age · stop saving to coast",
    description:
      "Front-load retirement savings, then stop. Compound growth carries you to a full FIRE number by traditional retirement age.",
  },
  {
    name: "Barista FIRE",
    href: "/barista-fire-calculator",
    Icon: Coffee,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    bestFor: "Career changers, healthcare bridge needs",
    numbers: "$500K–$750K + part-time work",
    description:
      "A hybrid: part-time work covers current expenses (and often health insurance) while your investments grow toward full FIRE.",
  },
  {
    name: "Fat FIRE",
    href: "/fat-fire-calculator",
    Icon: Crown,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    bestFor: "High earners, luxury lifestyle in retirement",
    numbers: "$2.5M+ target · $100K+/yr spending",
    description:
      "Early retirement without lifestyle constraints. Larger portfolio, higher target spending, more cushion against sequence-of-returns risk.",
  },
  {
    name: "Couples FIRE",
    href: "/couples-fire-calculator",
    Icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    bestFor: "Dual-income households",
    numbers: "Combined target · joint contribution limits",
    description:
      "Joint planning: combine two incomes, shared expenses, and doubled tax-advantaged contribution room into one synchronized retirement plan.",
  },
];

const supportingPages = [
  {
    href: "/savings-rate-calculator",
    label: "Savings Rate Calculator",
    description: "Years to FIRE based on your savings rate",
    Icon: Calculator,
  },
  {
    href: "/4-percent-rule-calculator",
    label: "4% Rule Calculator",
    description: "Portfolio ↔ safe withdrawal, adjustable SWR",
    Icon: Calculator,
  },
  {
    href: "/fire-number-calculator",
    label: "FIRE Number Calculator",
    description: "Quick: monthly expenses → portfolio target",
    Icon: Calculator,
  },
  {
    href: "/early-retirement-calculator",
    label: "Early Retirement Calculator",
    description: "Same engine as home, framed around retirement age",
    Icon: Calculator,
  },
  {
    href: "/financial-independence-calculator",
    label: "Financial Independence Calculator",
    description: "Same engine, framed around independence (FI without RE)",
    Icon: Calculator,
  },
  {
    href: "/fire-comparison",
    label: "Compare FIRE Types Side-by-Side",
    description: "Targets, timelines, and trade-offs across all 6 strategies",
    Icon: BookOpen,
  },
  {
    href: "/fire-calculator-by-age",
    label: "FIRE Calculator by Age",
    description: "Strategy guide for 20s, 30s, 40s, and 50s",
    Icon: Calendar,
  },
  {
    href: "/methodology",
    label: "Our Methodology",
    description: "Assumptions, formulas, and data sources",
    Icon: BookOpen,
  },
];

export default function CalculatorsHubPage() {
  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Calculators", url: "https://financialfirecalculators.com/calculators" },
    ],
  };

  // ItemList JSON-LD for search engines
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FIRE Calculators",
    description: "Free FIRE (Financial Independence, Retire Early) calculators covering all 6 major FIRE strategies.",
    itemListElement: calculators.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://financialfirecalculators.com${c.href === "/" ? "" : c.href}`,
      name: c.name + " Calculator",
    })),
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              All FIRE Calculators in One Place
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Six free calculators covering every flavor of Financial Independence, Retire Early — pick the one that matches your lifestyle and run the numbers.
            </p>
          </div>
        </section>

        {/* Calculator grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {calculators.map((c) => {
              const Icon = c.Icon;
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${c.iconBg}`}>
                      <Icon className={`w-7 h-7 ${c.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {c.name} Calculator
                      </h2>
                      <p className="text-xs text-gray-500 mb-3">
                        {c.numbers} · Best for: {c.bestFor}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {c.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 group-hover:gap-3 transition-all">
                        Open calculator
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Supporting pages */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {supportingPages.map((p) => {
              const Icon = p.Icon;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                      {p.label}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
