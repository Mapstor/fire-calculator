import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getPost } from "@/data/posts";

const SLUG = "sequence-of-returns-risk" as const;

export default function SequenceOfReturnsRiskPage() {
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
              href={`/blog/category/analysis`}
              className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium hover:bg-red-200"
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
            Two retirees, same FIRE number, same average lifetime market return — yet one runs out of money
            and the other dies with $5M unspent. The difference: the order in which their returns arrived.
            That asymmetry is called <strong>sequence-of-returns risk</strong>, and it&apos;s the single most
            important risk early retirees face that the simple 4% rule doesn&apos;t fully account for.
          </p>

          <h2>The simplest example</h2>
          <p>
            Imagine two portfolios, each starting with $1,000,000 and withdrawing $40,000 per year (4%
            withdrawal rate, ignoring inflation for simplicity). Both portfolios experience the same set of
            returns over 30 years — say, an average of 7% real — but in different orders.
          </p>
          <ul>
            <li>
              <strong>Portfolio A — &quot;good early&quot;:</strong> first decade returns are above-average
              (10–12%). The portfolio compounds aggressively before withdrawals make a dent. By year 30, it
              still has $3M+ even with steady withdrawals.
            </li>
            <li>
              <strong>Portfolio B — &quot;bad early&quot;:</strong> first decade returns are below-average
              (negative or low single digits). Withdrawals + losses combine to permanently shrink the base.
              The remaining decades of average returns can&apos;t catch up. Portfolio runs out around year 22.
            </li>
          </ul>
          <p>
            Same average return. Same withdrawal. Wildly different outcomes. Welcome to sequence-of-returns
            risk.
          </p>

          <h2>Why early retirement years are the most dangerous</h2>
          <p>
            The concentrated risk lives in the first 5–10 years of retirement. Here&apos;s why: in year 1,
            withdrawing $40,000 from $1M removes 4%. If the market also drops 20%, you&apos;ve lost a quarter
            of your portfolio in a single year. That damage compounds permanently — you spent $40K of money
            you could have left in the market to recover.
          </p>
          <p>
            Mathematically, the same withdrawal in year 25 is far less dangerous, because by then the
            portfolio has had decades to grow above the original principal. A 20% drop on a $3M portfolio
            (after 25 years of growth) leaves $2.4M — still plenty.
          </p>
          <p>
            Pfau&apos;s research and the Kitces &quot;safe savings rate&quot; work both highlight that
            <strong> the first decade of retirement returns&apos; sequence largely determines portfolio
            survival</strong>. This is why early retirees — who face 40+ year retirements — often use a more
            conservative initial withdrawal rate (3.3%–3.8%) than Trinity&apos;s 30-year 4%.
          </p>

          <h2>Why the 4% rule sort of handles this — and sort of doesn&apos;t</h2>
          <p>
            The 4% rule from the{" "}
            <Link href="/blog/fire-withdrawal-strategies">Trinity Study</Link> is a <em>worst-historical-case</em>
            number. It survived even bad sequences in US history (1929–58, 1966–95) at a 95%+ rate over 30
            years. So it does <em>implicitly</em> account for sequence risk — but only for 30-year retirements
            and only against historical sequences.
          </p>
          <p>
            For 50-year early retirements, the failure rate at 4% creeps up. Pfau&apos;s 2010+ research and
            Morningstar&apos;s annual SWR papers argue 3.3%–3.8% is more appropriate for forward-looking,
            long-horizon retirees. The{" "}
            <Link href="/4-percent-rule-calculator">4% rule calculator</Link> lets you toggle between
            withdrawal rates to see how much extra portfolio that conservatism requires.
          </p>

          <h2>Five mitigation strategies</h2>
          <h3>1. Lower initial withdrawal rate</h3>
          <p>
            The simplest fix: start at 3.5% instead of 4%. That single change increases your required
            portfolio by 14% (multiplier 28.6 instead of 25), but it dramatically improves portfolio survival
            in bad-sequence scenarios.
          </p>

          <h3>2. Cash buffer / 2-3 years of expenses</h3>
          <p>
            Hold 2–3 years of expenses in cash or short-term bonds. In a market crash, draw from cash
            instead of selling stocks at a discount. By the time cash runs out, the market has typically
            recovered or partially recovered. This is the simplest implementation of the &quot;bucket
            strategy.&quot;
          </p>

          <h3>3. Bond tent / glide-path allocation</h3>
          <p>
            Increase bond allocation in the years just before and at the start of retirement, then gradually
            shift back to stocks. The bond-heavy years dampen portfolio volatility during the most dangerous
            window. Pfau&apos;s research suggests a U-shaped equity glide path (high → low → high) outperforms
            a static allocation in bad-sequence scenarios.
          </p>

          <h3>4. Dynamic withdrawal (guardrails)</h3>
          <p>
            Pre-commit to spending cuts when portfolio drops below thresholds. Guyton-Klinger&apos;s
            guardrails system, for example, cuts inflation adjustments when the portfolio underperforms and
            adds them back when it outperforms. The{" "}
            <Link href="/blog/fire-withdrawal-strategies">withdrawal strategies post</Link> covers the full
            mechanics. Dynamic withdrawal historically supports a 4.5%+ initial rate vs. fixed 4%.
          </p>

          <h3>5. Flexibility / part-time income</h3>
          <p>
            Most early retirees aren&apos;t fully retired — they have side projects, consulting, or a partner
            still working. Even $10K–$20K/year of optional income, deployed during a bad market sequence,
            massively reduces portfolio drawdown. This is one reason{" "}
            <Link href="/barista-fire-calculator">Barista FIRE</Link> is structurally more resilient than full
            FIRE.
          </p>

          <h2>How calculators handle sequence risk</h2>
          <p>
            Most simple FIRE calculators (including the basic mode of ours) use deterministic compound-growth
            math: same return every year. That&apos;s fine for ballpark targets but invisible to sequence risk.
          </p>
          <p>
            Two better approaches:
          </p>
          <ul>
            <li>
              <strong>Monte Carlo simulation.</strong> Generates thousands of random return sequences from a
              historical distribution. Reports a success rate (e.g., 92% of paths survive 40 years). Our{" "}
              <Link href="/">main FIRE calculator</Link> runs 1,000-path Monte Carlo when you enable it in
              Advanced.
            </li>
            <li>
              <strong>Historical-cycle simulation.</strong> Tests your portfolio against every actual
              30/40/50-year window in market history. Tools like{" "}
              <a href="https://ficalc.app/" target="_blank" rel="noopener noreferrer">FICalc</a> and{" "}
              <a href="https://www.cfiresim.com/" target="_blank" rel="noopener noreferrer">cFIREsim</a>{" "}
              specialize in this. More conservative than Monte Carlo because real history has more
              autocorrelation than random draws.
            </li>
          </ul>

          <h2>Practical takeaway</h2>
          <p>
            If you&apos;re planning a 30-year retirement with the 4% rule, sequence risk is largely baked in.
            For early retirement (40+ years), assume the published worst-historical-case is optimistic and
            either: lower your withdrawal rate to 3.5%, hold a cash buffer, or build flexibility into spending.
            Run your numbers through Monte Carlo to see how a meaningful percentage of paths look —{" "}
            <Link href="/advanced-fire-analysis">our advanced analysis page</Link> walks through the
            interpretation.
          </p>
        </article>

        <section className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/fire-withdrawal-strategies"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Withdrawal strategies in depth</span>
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
            href="/advanced-fire-analysis"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Advanced FIRE analysis (Monte Carlo)</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog/how-long-does-1m-last"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">How long does $1M last?</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
}
