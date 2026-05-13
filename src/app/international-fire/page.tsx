import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight, AlertTriangle, BookOpen } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `International FIRE ${CURRENT_YEAR}: UK, Canada, Australia & Beyond`,
  description: "How FIRE planning translates outside the US: UK ISAs, Canadian RRSPs and TFSAs, Australian Super. Plus how much of our calculator math transfers to your country.",
  alternates: {
    canonical: "https://financialfirecalculators.com/international-fire",
  },
  openGraph: {
    title: `International FIRE ${CURRENT_YEAR}: UK, Canada, Australia & Beyond`,
    description: "FIRE planning outside the US: ISA, RRSP, TFSA, Super. What transfers and what doesn't.",
    type: "article",
    url: "https://financialfirecalculators.com/international-fire",
  },
};

interface Region {
  name: string;
  flag: string;
  retirementAccounts: { name: string; description: string; usCounterpart: string }[];
  swrNote: string;
  taxNote: string;
  resources: { label: string; url: string }[];
}

const regions: Region[] = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    retirementAccounts: [
      {
        name: "ISA (Individual Savings Account)",
        description: "Annual £20,000 contribution limit. Tax-free growth and withdrawals. Comparable to a Roth IRA but with much higher annual limits.",
        usCounterpart: "Roth IRA (with Roth 401(k)-level limits)",
      },
      {
        name: "SIPP (Self-Invested Personal Pension)",
        description: "Tax-deferred contributions. £60,000 annual limit. Cannot access until age 55-58 (rising to 57+ from 2028). 25% tax-free withdrawal at access age.",
        usCounterpart: "Traditional 401(k) / IRA hybrid",
      },
      {
        name: "Workplace Pension",
        description: "Employer-matched, tax-deferred. Combined with auto-enrolment minimums, similar in spirit to a US 401(k) match.",
        usCounterpart: "401(k) with employer match",
      },
    ],
    swrNote: "UK FIRE practitioners often use the same 4% rule, but historically UK markets have shown higher SWR sensitivity than US markets. Many use 3.5% as a conservative anchor.",
    taxNote: "ISA + SIPP combination is uniquely powerful for FIRE — ISA covers the bridge years (any age), SIPP handles age 55+. Pension lifetime allowance and tax-free lump sum rules have changed multiple times in the last decade — check current HMRC guidance.",
    resources: [
      { label: "MoneySavingExpert pension guides", url: "https://www.moneysavingexpert.com/savings/pensions/" },
      { label: "Monevator — UK investing site with strong FIRE coverage", url: "https://monevator.com/" },
      { label: "GOV.UK pension allowances", url: "https://www.gov.uk/tax-on-your-private-pension" },
    ],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    retirementAccounts: [
      {
        name: "RRSP (Registered Retirement Savings Plan)",
        description: "Tax-deferred contributions. Annual limit is 18% of prior-year earned income, up to a max (~$32K CAD for 2026). Withdrawals taxed as income.",
        usCounterpart: "Traditional 401(k) / IRA",
      },
      {
        name: "TFSA (Tax-Free Savings Account)",
        description: "After-tax contributions, tax-free growth and withdrawals. Annual limit ~$7,000 CAD. Unused contribution room carries forward indefinitely.",
        usCounterpart: "Roth IRA",
      },
      {
        name: "FHSA (First Home Savings Account)",
        description: "Hybrid: tax-deductible contributions (like RRSP) + tax-free withdrawals if used for first home (like TFSA). $8,000/year limit, $40,000 lifetime.",
        usCounterpart: "No US equivalent",
      },
    ],
    swrNote: "Canadian FIRE community typically uses 4% as a starting point, with a more conservative 3.5% favored for early retirement given lower forward equity premiums and CPP integration questions.",
    taxNote: "CPP and OAS provide meaningful retirement income that needs to be modeled separately. RRSP-to-TFSA conversion strategies (similar to US Roth conversion ladders) are common in early retirement years to manage marginal tax rates.",
    resources: [
      { label: "Canadian Couch Potato — index investing primer", url: "https://canadiancouchpotato.com/" },
      { label: "Million Dollar Journey — Canadian FIRE blog", url: "https://milliondollarjourney.com/" },
      { label: "CRA — RRSP/TFSA contribution rules", url: "https://www.canada.ca/en/revenue-agency.html" },
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    retirementAccounts: [
      {
        name: "Superannuation (Super)",
        description: "Compulsory employer contribution (~11.5% of salary, rising to 12% by mid-decade). Tax-advantaged growth at 15%. Cannot access until preservation age (60+ for most).",
        usCounterpart: "Mandatory 401(k)-style retirement system",
      },
      {
        name: "Salary sacrifice / concessional contributions",
        description: "Voluntary pre-tax contributions to Super. Annual cap ~$30,000 AUD. Effective tax rate of 15% on contributions vs marginal rate on salary.",
        usCounterpart: "Pre-tax 401(k) contributions (with limits)",
      },
      {
        name: "Non-concessional contributions",
        description: "After-tax contributions to Super. Annual cap ~$120,000 AUD. Tax-free withdrawals after 60.",
        usCounterpart: "After-tax 401(k) / Mega Backdoor Roth",
      },
    ],
    swrNote: "Australian FIRE planners often need a larger taxable-account portfolio than US counterparts because Super is locked until 60. The taxable bridge funds the years between retirement and Super access.",
    taxNote: "Franking credits on Australian dividends create a unique optimization layer — high-dividend portfolios can be remarkably tax-efficient for low-income retirees. Capital gains tax discount of 50% on assets held > 12 months.",
    resources: [
      { label: "ATO — Super contribution rules", url: "https://www.ato.gov.au/individuals-and-families/super/" },
      { label: "Aussie Firebug — long-running Australian FIRE blog", url: "https://www.aussiefirebug.com/" },
      { label: "Strong Money Australia", url: "https://strongmoneyaustralia.com/" },
    ],
  },
];

export default function InternationalFirePage() {
  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "International FIRE", url: "https://financialfirecalculators.com/international-fire" },
    ],
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                International FIRE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              FIRE outside the US: UK, Canada, Australia
            </h1>
            <p className="text-base sm:text-lg text-primary-100 max-w-3xl leading-relaxed">
              The FIRE math is universal — but the account types, tax treatments, and pension systems differ significantly outside the US. Here&apos;s what transfers cleanly, what needs adjustment, and where to find region-specific guidance.
            </p>
          </div>
        </section>

        {/* Whats portable */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What&apos;s portable across countries</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>The 4% rule (with caveats).</strong> Trinity-style safe-withdrawal-rate analysis was done on US data, but the underlying principle — &quot;you need ~25× your annual expenses invested&quot; — applies to any developed market. Many UK/EU/AU FIRE practitioners use a slightly more conservative 3.5% to account for lower historical equity premiums outside the US.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>The savings rate framework.</strong> Mr. Money Mustache&apos;s{" "}
                  <Link href="/savings-rate-calculator">&quot;shockingly simple math&quot;</Link>{" "}
                  works in any currency. Savings rate alone determines time-to-FIRE.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">✓</span>
                <span>
                  <strong>Compound growth + global index investing.</strong> A globally diversified index portfolio (VWRL, VT, etc.) works the same regardless of where you live.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">What needs adjusting</h3>
                <ul className="space-y-1 text-sm text-amber-900">
                  <li>• Account types and contribution limits (covered per country below)</li>
                  <li>• Tax treatment in retirement (capital gains, dividend, social-security-like programs)</li>
                  <li>• Healthcare cost modeling (US-specific: ACA, Medicare; not relevant in UK/CA/AU)</li>
                  <li>• Inflation assumption (3% target is US-centric; eurozone often closer to 2%)</li>
                  <li>• Currency exposure if invested in foreign markets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regions */}
          {regions.map((r) => (
            <section
              key={r.name}
              id={r.name.toLowerCase().replace(/\s+/g, "-")}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 scroll-mt-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{r.flag}</span>
                {r.name}
              </h2>

              <h3 className="font-semibold text-gray-900 mb-3 mt-2">Tax-advantaged retirement accounts</h3>
              <div className="space-y-3 mb-5">
                {r.retirementAccounts.map((acc) => (
                  <div
                    key={acc.name}
                    className="border border-gray-200 rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white"
                  >
                    <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                      <h4 className="font-semibold text-gray-900">{acc.name}</h4>
                      <span className="text-xs text-gray-500">
                        ≈ US: {acc.usCounterpart}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{acc.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Withdrawal rate note</h4>
                  <p className="text-xs text-blue-900 leading-relaxed">{r.swrNote}</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-emerald-900 mb-1">Tax planning note</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">{r.taxNote}</p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">Region-specific resources</h3>
              <ul className="space-y-1.5">
                {r.resources.map((res) => (
                  <li key={res.url}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      {res.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* How to use US calculators */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Using our calculators if you&apos;re not in the US</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The calculators on this site default to US assumptions: 7% real return (S&P 500), 3% inflation, 4% safe withdrawal rate, USD currency. To adapt them for your country:
            </p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>1. Switch the currency selector.</strong> All calc pages let you pick GBP, EUR, AUD, CAD, JPY, CHF for display purposes (math is currency-neutral).
              </li>
              <li>
                <strong>2. Adjust the real return assumption</strong> in Advanced Options. UK/EU equity historical real returns have been closer to 5% than 7% — try 5% if you want a more conservative projection.
              </li>
              <li>
                <strong>3. Treat the SWR as a starting point.</strong> Use the{" "}
                <Link href="/4-percent-rule-calculator">4% rule calculator</Link> at 3.5% if you&apos;re outside the US — empirically, non-US markets have shown higher sensitivity to sequence risk.
              </li>
              <li>
                <strong>4. Map your accounts.</strong> Use the country sections above to understand which of your accounts behaves like a Roth IRA, Traditional 401(k), or HSA.
              </li>
              <li>
                <strong>5. Check region-specific resources</strong> for tax optimization, social-security-like benefits, and healthcare planning, which our US-focused content does not cover.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">The framework is universal</h2>
            <p className="text-sm text-primary-100 mb-4 leading-relaxed">
              FIRE math doesn&apos;t care about your passport. The savings rate, the 25× rule, and compound growth work the same anywhere — what changes is the implementation through your country&apos;s tax-advantaged account system.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/savings-rate-calculator"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors"
              >
                Run the savings-rate math
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/fire-glossary"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-white/20 transition-colors"
              >
                FIRE glossary
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
