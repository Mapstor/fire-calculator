import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getPost } from "@/data/posts";

const SLUG = "how-long-does-1m-last" as const;

interface DurationCell {
  spend: number;
  durations: { portfolio: number; years: string }[];
}

/**
 * How long does X portfolio last at Y annual spending under the 4% rule conventions?
 *
 * For a constant inflation-adjusted withdrawal at real return r and starting balance P,
 * the portfolio is depleted in:
 *   n = ln(W / (W − P·r)) / ln(1 + r)   when W > P·r (portfolio shrinks)
 *   ∞                                   when W ≤ P·r (sustainable indefinitely)
 *
 * At 5% real return, "≤ P·r" is equivalent to spending ≤ 5% of P (the safe rate becomes 5%).
 */

const PORTFOLIOS = [1_000_000, 2_000_000, 3_000_000, 5_000_000];
const SPEND_LEVELS = [40000, 60000, 80000, 100000, 150000];
const REAL_RETURN = 0.05; // conservative assumption for this table

function yearsToDeplete(portfolio: number, annualSpend: number, r: number): string {
  const sustainable = portfolio * r;
  if (annualSpend <= sustainable) return "indefinite";
  const n = Math.log(annualSpend / (annualSpend - portfolio * r)) / Math.log(1 + r);
  return `${n.toFixed(0)} yrs`;
}

const grid: DurationCell[] = SPEND_LEVELS.map((spend) => ({
  spend,
  durations: PORTFOLIOS.map((p) => ({
    portfolio: p,
    years: yearsToDeplete(p, spend, REAL_RETURN),
  })),
}));

function fmtPortfolio(n: number): string {
  return `$${(n / 1_000_000).toFixed(0)}M`;
}

export default function HowLongDoes1MLastPage() {
  const post = getPost(SLUG);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <Link
              href={`/blog/category/planning`}
              className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium hover:bg-emerald-200"
            >
              {post.category}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-a:text-primary-600">
          <p className="text-lg leading-relaxed">
            The Trinity Study&apos;s 4% answer says &quot;30+ years&quot; — but that&apos;s for a $1M portfolio
            spending exactly $40K/year. What about $1M spending $60K? Or $3M spending $80K? Below is the math
            and a complete table for portfolios from $1M to $5M at typical spending levels.
          </p>

          <h2>The math, in one paragraph</h2>
          <p>
            For a constant inflation-adjusted withdrawal <em>W</em> from a portfolio <em>P</em> earning real
            return <em>r</em>, the portfolio depletes in roughly{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">
              n = ln(W / (W − P·r)) / ln(1 + r)
            </code>{" "}
            years. If <em>W</em> ≤ <em>P·r</em>, the math says &quot;indefinite&quot; — your portfolio earns
            more than you withdraw and your principal is never touched. The table below assumes a 5% real
            return (more conservative than the historical 7% real for stocks-only).
          </p>

          <h2>Table: how long each portfolio lasts at each spending level</h2>
          <p className="text-sm text-gray-600">
            Assumes 5% real (inflation-adjusted) return, constant inflation-adjusted withdrawals, no taxes
            modeled. &quot;Indefinite&quot; means withdrawal is at or below the portfolio&apos;s real growth.
          </p>
          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 pr-4 font-semibold">Annual spending</th>
                  {PORTFOLIOS.map((p) => (
                    <th key={p} className="text-right py-3 px-3 font-semibold">
                      {fmtPortfolio(p)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grid.map((row) => (
                  <tr key={row.spend} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-700 font-medium">
                      ${row.spend.toLocaleString()}/yr
                    </td>
                    {row.durations.map((d) => (
                      <td
                        key={d.portfolio}
                        className={`py-2 px-3 text-right ${
                          d.years === "indefinite"
                            ? "text-emerald-700 font-semibold"
                            : "text-gray-900"
                        }`}
                      >
                        {d.years}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The headline numbers</h2>
          <ul>
            <li>
              <strong>$1M lasts:</strong> indefinitely at $40K/year, ~25 years at $60K, ~14 years at $80K,
              ~10 years at $100K.
            </li>
            <li>
              <strong>$2M lasts:</strong> indefinitely at $80K/year, ~25 years at $120K, ~14 years at $160K.
            </li>
            <li>
              <strong>$5M lasts:</strong> indefinitely at any spending level up to $250K/year (5% of $5M).
              Above that, depletes proportionally.
            </li>
          </ul>

          <h2>The real-world caveats</h2>
          <p>
            The table above is the deterministic compound-interest answer. Three things can shorten it
            substantially:
          </p>
          <ul>
            <li>
              <strong>Sequence-of-returns risk.</strong> Bad market returns in the first decade of
              retirement permanently shrink the portfolio. Two retirees with the same lifetime average
              return can have wildly different durations — see our{" "}
              <Link href="/blog/sequence-of-returns-risk">sequence-of-returns post</Link>.
            </li>
            <li>
              <strong>Higher real spending.</strong> &quot;Inflation-adjusted&quot; assumes your spending
              tracks CPI. Healthcare in early retirement often outpaces CPI by 2-3 percentage points.
              Lifestyle inflation (the &quot;creep&quot;) can also push real spending up unintentionally.
            </li>
            <li>
              <strong>Lower real returns going forward.</strong> Recent valuation-aware research (Pfau,
              Morningstar) argues for 4-5% real returns instead of the historical 7% — putting the &quot;safe
              forever&quot; level closer to 4% withdrawal rather than 5%.
            </li>
          </ul>

          <h2>Want a more conservative estimate?</h2>
          <p>
            For a 50+ year early retirement, divide the table&apos;s &quot;indefinite&quot; threshold by 1.25
            — i.e., treat 4% as the safe rate instead of 5%. So $1M is &quot;indefinite&quot; at $40K/year;
            $2M at $80K/year; $5M at $200K/year. The conservative path uses our{" "}
            <Link href="/4-percent-rule-calculator">4% rule calculator</Link> with the 3.5% slider for
            additional cushion.
          </p>

          <h2>The honest answer</h2>
          <p>
            How long $1M lasts depends mostly on <em>how much you spend</em>. The math is unforgiving above
            the safe-withdrawal threshold and forgiving below it. If you want $1M to last forever, find a
            way to live on $40-50K/year. If you want to spend $80K/year, plan for a $2M portfolio or expect
            to deplete a $1M portfolio in about 14 years.
          </p>
        </article>

        <section className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link
            href="/fire-number-calculator"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Find your FIRE number</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/4-percent-rule-calculator"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">4% rule calculator</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog/sequence-of-returns-risk"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Sequence-of-returns risk</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog/fire-withdrawal-strategies"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Withdrawal strategies in depth</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
}
