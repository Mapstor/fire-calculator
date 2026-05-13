import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight, Check, X } from "lucide-react";
import { getPost } from "@/data/posts";

const SLUG = "fire-vs-traditional-retirement" as const;

export default function FireVsTraditionalRetirementPage() {
  const post = getPost(SLUG);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <Link href="/blog/category/comparison" className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium hover:bg-blue-200">
              {post.category}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-lg max-w-none prose-a:text-primary-600">
          <p className="text-lg leading-relaxed">
            FIRE and traditional retirement use the same compound-growth math but produce very different
            outcomes. The split happens at one variable — your savings rate — and propagates into every
            other planning question: how much you need invested, when you can stop working, how you bridge
            healthcare, when Social Security kicks in, and how you handle market downturns. Side-by-side:
          </p>

          <h2>The headline comparison</h2>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 text-left">
                  <th className="py-3 pr-4 font-semibold">Dimension</th>
                  <th className="py-3 px-3 font-semibold text-emerald-700">FIRE</th>
                  <th className="py-3 px-3 font-semibold text-blue-700">Traditional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Typical savings rate</td>
                  <td className="py-2.5 px-3 text-gray-900">25–60%</td>
                  <td className="py-2.5 px-3 text-gray-900">10–15% (often less)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Retirement age</td>
                  <td className="py-2.5 px-3 text-gray-900">35–55</td>
                  <td className="py-2.5 px-3 text-gray-900">62–70</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Retirement length</td>
                  <td className="py-2.5 px-3 text-gray-900">35–60 years</td>
                  <td className="py-2.5 px-3 text-gray-900">15–25 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Portfolio target (vs expenses)</td>
                  <td className="py-2.5 px-3 text-gray-900">25–30× expenses</td>
                  <td className="py-2.5 px-3 text-gray-900">15–20× expenses</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Safe withdrawal rate</td>
                  <td className="py-2.5 px-3 text-gray-900">3.3–4.0%</td>
                  <td className="py-2.5 px-3 text-gray-900">4.0–5.0%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Healthcare strategy</td>
                  <td className="py-2.5 px-3 text-gray-900">ACA + HSA + (sometimes) Barista FIRE</td>
                  <td className="py-2.5 px-3 text-gray-900">Medicare at 65</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Social Security role</td>
                  <td className="py-2.5 px-3 text-gray-900">Optional bonus at 67</td>
                  <td className="py-2.5 px-3 text-gray-900">Core income source</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Sequence-of-returns risk</td>
                  <td className="py-2.5 px-3 text-gray-900">High — long horizon, more bad-sequence exposure</td>
                  <td className="py-2.5 px-3 text-gray-900">Moderate — 30 years, well-studied</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">Account access age</td>
                  <td className="py-2.5 px-3 text-gray-900">Bridge needed before 59½</td>
                  <td className="py-2.5 px-3 text-gray-900">Mostly aligned with retirement age</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Where the difference comes from</h2>
          <p>
            One number — savings rate — drives everything else. A traditional saver puts away 10% and
            spends 90%; that builds 1× expenses per decade. A FIRE saver puts away 50% and spends 50%; that
            builds 5× expenses per decade. Same compound math, very different timelines.
          </p>
          <p>
            Run the comparison at 7% real return:
          </p>
          <ul>
            <li><strong>10% savings rate:</strong> ~51 years to FIRE — i.e., never retire early</li>
            <li><strong>15% savings rate:</strong> ~43 years — traditional retirement around 65</li>
            <li><strong>25% savings rate:</strong> ~32 years — retire around 57</li>
            <li><strong>40% savings rate:</strong> ~22 years — retire in late 40s</li>
            <li><strong>50% savings rate:</strong> ~17 years — retire in early-to-mid 40s</li>
          </ul>
          <p>
            See the full table in our <Link href="/savings-rate-calculator">savings rate calculator</Link>.
          </p>

          <h2>Where FIRE wins</h2>
          <ul>
            <li><Check className="inline w-4 h-4 text-emerald-600 mr-1" /><strong>Optionality.</strong> Reaching FIRE means work becomes optional, not required. That decision power is the actual product, more than the absence of a job.</li>
            <li><Check className="inline w-4 h-4 text-emerald-600 mr-1" /><strong>Compound runway.</strong> Reaching FI at 40 means the portfolio compounds for another 25+ years before traditional retirement age. The math gets less risky over time, not more.</li>
            <li><Check className="inline w-4 h-4 text-emerald-600 mr-1" /><strong>Health benefit.</strong> Stress and sedentary work accumulate. Retiring 20 years earlier yields meaningful health improvements for many people.</li>
            <li><Check className="inline w-4 h-4 text-emerald-600 mr-1" /><strong>Lower lifetime spending.</strong> Living on 50% of income for 15 years builds the lifestyle muscle of low spending — which carries into retirement and reduces sequence-of-returns risk.</li>
          </ul>

          <h2>Where traditional retirement wins</h2>
          <ul>
            <li><Check className="inline w-4 h-4 text-blue-600 mr-1" /><strong>Lifestyle continuity.</strong> Working until 65 lets you spend more during peak earning years — bigger house, more travel, expensive hobbies.</li>
            <li><Check className="inline w-4 h-4 text-blue-600 mr-1" /><strong>Healthcare alignment.</strong> Retire at 65, Medicare kicks in immediately. No ACA gymnastics or Barista FIRE workaround.</li>
            <li><Check className="inline w-4 h-4 text-blue-600 mr-1" /><strong>Social Security at full retirement age.</strong> Claiming at 67 vs 62 means meaningfully higher monthly benefits, often a core part of traditional retirement income.</li>
            <li><Check className="inline w-4 h-4 text-blue-600 mr-1" /><strong>Shorter sequence-risk window.</strong> A 25-year retirement is much more forgiving than a 50-year one — the 4% rule is built for it.</li>
            <li><Check className="inline w-4 h-4 text-blue-600 mr-1" /><strong>Career identity preserved.</strong> If your job is meaningful or central to your identity, retiring at 40 can create a void that money doesn&apos;t fill.</li>
          </ul>

          <h2>Common misconceptions about each</h2>
          <h3>About FIRE</h3>
          <ul>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;FIRE means deprivation.&quot;</strong> Lean FIRE is one variant. Traditional FIRE looks like normal middle-class life. Fat FIRE includes luxury.</li>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;You need a six-figure income.&quot;</strong> Savings rate matters more than income. A teacher saving 50% reaches FIRE at the same time as a doctor saving 50%.</li>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;The 4% rule is broken.&quot;</strong> The rule is a 30-year SWR. For 50-year retirements use 3.3-3.8%. Not broken — just being applied to a longer horizon.</li>
          </ul>

          <h3>About traditional retirement</h3>
          <ul>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;Social Security will cover me.&quot;</strong> Average SS retirement benefit is ~$2,000/month. That covers basic groceries, not a comfortable retirement.</li>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;A 401(k) match is enough.&quot;</strong> A 5% match on top of 5% employee contribution is 10% savings — which delivers retirement at 65, not earlier.</li>
            <li><X className="inline w-4 h-4 text-red-500 mr-1" /><strong>&quot;I&apos;ll spend less in retirement.&quot;</strong> Most retirees spend the same or more — healthcare, travel, and helping family often expand to fill freed-up time.</li>
          </ul>

          <h2>Which path is right?</h2>
          <p>
            FIRE makes sense if: you have above-average income, you can sustain a 25%+ savings rate without
            misery, you have a clear sense of what you&apos;d do with the time, and you&apos;re comfortable with
            longer-horizon market risk. Traditional retirement makes sense if: you genuinely enjoy your
            career, your spending naturally aligns with what 10-15% savings can support, and you value
            lifestyle continuity over time freedom.
          </p>
          <p>
            Most actually-pulled-off &quot;FIRE&quot; cases land in the middle: someone retires from corporate work
            at 50, takes a few years off, then drifts back into part-time consulting or a meaningful
            second career. The point isn&apos;t never working again — it&apos;s having the choice.
          </p>
        </article>

        <section className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link href="/savings-rate-calculator" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Run the savings-rate math</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/financial-independence-calculator" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Financial Independence Calculator</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/blog/retire-by-50" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Can you retire by 50?</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/fire-comparison" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Compare FIRE flavors side-by-side</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
}
