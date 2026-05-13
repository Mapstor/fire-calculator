import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getPost } from "@/data/posts";

const SLUG = "retire-by-50" as const;

export default function RetireBy50Page() {
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
              href={`/blog/category/strategy`}
              className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium hover:bg-purple-200"
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
            &quot;Retire by 50&quot; is one of the most common Google searches in the FIRE space. The honest answer
            depends almost entirely on two variables: <strong>when you start</strong> and <strong>your savings rate</strong>.
            Income matters less than people think. Below is the actual math, three worked scenarios, and the
            cases where 50 is unrealistic — plus what to do then.
          </p>

          <h2>The math, in one paragraph</h2>
          <p>
            FIRE math says you need 25× your annual expenses invested to support a 4% safe withdrawal rate
            indefinitely. To hit that target by age 50, you need a savings rate that — combined with compound
            growth — gets you from your starting balance to that 25× target before your 50th birthday. At
            7% real (inflation-adjusted) returns, the formula{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">
              n = ln((1−s)·25·r/s + 1) / ln(1+r)
            </code>{" "}
            gives years-to-FIRE from a savings rate <em>s</em>. To retire by 50, n must be ≤ (50 − your current age).
            Try the{" "}
            <Link href="/savings-rate-calculator">savings rate calculator</Link> to see your exact number.
          </p>

          <h2>Scenario 1: Starting at 25 (you have 25 years)</h2>
          <p>
            Starting at 25, you have a comfortable 25-year runway. At a 28% savings rate (saving $14K of a
            $50K take-home, for example) and 7% real returns, you reach FIRE at approximately age 49.5 — just
            inside the &quot;by 50&quot; window. At 25% you slip to age 52. At 32% you arrive at 47.5. The cushion
            of starting young means you don&apos;t need an extreme savings rate.
          </p>
          <ul>
            <li><strong>Required savings rate:</strong> ~28–32%</li>
            <li><strong>Required savings:</strong> roughly 1× your annual expenses per year</li>
            <li><strong>Lifestyle:</strong> normal middle-class — no extreme frugality required</li>
          </ul>

          <h2>Scenario 2: Starting at 30 (you have 20 years)</h2>
          <p>
            With a 20-year window the math tightens. You need a 40% savings rate at 7% real returns to retire
            at 49. At 35%, you slip to age 51.4 — close to 50 but past it. The window is narrow enough that a
            few years of low contributions early can push retirement out by a year or more on the back end.
          </p>
          <ul>
            <li><strong>Required savings rate:</strong> ~40%</li>
            <li><strong>Required savings:</strong> roughly 0.67× your annual expenses per year (you save 40¢ of every dollar earned, so 1 year of work funds 0.67 years of retirement)</li>
            <li><strong>Lifestyle:</strong> intentional — house-hacking, used cars, modest housing footprint</li>
          </ul>

          <h2>Scenario 3: Starting at 35 (you have 15 years)</h2>
          <p>
            Starting at 35, you need an aggressive 50% savings rate to retire at 50 — Sarah&apos;s persona on the
            home page. This is the classic FIRE-blog savings rate. It&apos;s achievable for high earners
            (engineers, doctors, dual-income couples) but extreme for typical incomes. At 45% you slip to age
            52, at 40% you reach 55.
          </p>
          <ul>
            <li><strong>Required savings rate:</strong> 50%</li>
            <li><strong>Required savings:</strong> $1 saved for every $1 spent — every year of work funds one year of retirement</li>
            <li><strong>Lifestyle:</strong> deliberate — minimum-viable housing, low or no car, conscious spending across every category</li>
          </ul>

          <h2>When &quot;by 50&quot; isn&apos;t realistic</h2>
          <p>
            If you&apos;re starting at 40 with little saved, retiring fully at 50 is mathematically tough — even
            70% savings rates take 8.5 years, putting retirement at 48.5 (just barely possible) but only with
            an extraordinary lifestyle. There are better targets:
          </p>
          <ul>
            <li>
              <strong>Coast FIRE by 50.</strong> Save aggressively now, then{" "}
              <Link href="/coast-fire-calculator">stop saving</Link> at 50 and let compound growth carry you to a full
              retirement at 65. The amount needed at 50 is much smaller than full FIRE.
            </li>
            <li>
              <strong>Barista FIRE by 50.</strong>{" "}
              <Link href="/barista-fire-calculator">Switch to part-time work</Link> at 50 with a smaller portfolio. Part-time
              income covers expenses; the portfolio just needs to handle the gap until traditional retirement.
            </li>
            <li>
              <strong>Lean FIRE.</strong> Lower the spending target. $35K/year of expenses needs $875K, which
              is reachable on a more modest savings rate than $80K/year of expenses (which needs $2M).
            </li>
          </ul>

          <h2>Action plan to retire by 50</h2>
          <ol>
            <li>
              <strong>Calculate your real savings rate.</strong> After-tax savings divided by after-tax income. Most
              people overestimate this — paying down a mortgage to 0% interest is technically savings but
              doesn&apos;t accelerate FIRE the same way invested-in-stocks savings does.
            </li>
            <li>
              <strong>Find your FIRE number.</strong> Multiply your expected retirement spending by 25.{" "}
              <Link href="/fire-number-calculator">Quick calculator here</Link>.
            </li>
            <li>
              <strong>Run the math at <em>your</em> savings rate.</strong> The{" "}
              <Link href="/savings-rate-calculator">savings rate calculator</Link> tells you exactly when you&apos;ll
              hit FIRE based on your current rate.
            </li>
            <li>
              <strong>Identify the biggest savings-rate lever.</strong> For most people: housing. Reducing
              housing costs from 35% of income to 20% of income often does more for the savings rate than any
              other single decision.
            </li>
            <li>
              <strong>Automate.</strong> Max out 401(k), IRA, HSA. Set up automatic transfers to taxable
              brokerage. The point of automation is to never see the money in your checking account.
            </li>
            <li>
              <strong>Re-run the math each year.</strong> Salary increases, lifestyle creep, and market returns all
              shift the timeline. An annual check-in catches drift before it adds years.
            </li>
          </ol>

          <h2>The honest version</h2>
          <p>
            Retiring by 50 is achievable for a meaningful percentage of US households — but the savings rates
            required are at the high end of what people consider &quot;normal.&quot; Starting late or with low
            income makes it harder, but Coast/Barista/Lean variants extend the path. Run your own numbers on
            the{" "}
            <Link href="/">main FIRE calculator</Link>; the math is unforgiving but transparent, and the biggest
            variable in your timeline is — almost always — your savings rate.
          </p>
        </article>

        <section className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link
            href="/savings-rate-calculator"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Savings rate → years to FIRE</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/coast-fire-calculator"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Coast FIRE alternative</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog/fire-for-late-starters"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">FIRE for late starters</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog/sequence-of-returns-risk"
            className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">Sequence-of-returns risk</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
}
