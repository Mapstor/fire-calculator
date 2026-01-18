import type { Metadata } from "next";
import { FileText, AlertTriangle, Scale, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - FIRE Calculator Usage Terms & Conditions",
  description: "Terms of service for FIRE Calculator. Educational use disclaimers, liability limitations, and usage guidelines for our financial planning tools.",
  keywords: "terms of service, fire calculator terms, disclaimers, liability, educational use, financial advice",
  openGraph: {
    title: "Terms of Service - FIRE Calculator Usage Terms & Conditions",
    description: "Terms of service and usage guidelines for our FIRE calculators.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-6 max-w-3xl mx-auto">
              Usage terms, disclaimers, and legal guidelines for our FIRE calculators
            </p>
            <p className="text-sm text-gray-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Educational Purpose */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">Educational Purpose & Disclaimers</h2>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Important Notice</h3>
              <p className="text-base text-amber-800 font-medium">
                FIRE Calculator is provided for educational and informational purposes only. 
                It is NOT intended as financial, investment, tax, or legal advice.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculator Limitations</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• <strong>Estimates Only:</strong> All calculations provide estimates based on assumptions and historical data</li>
                  <li>• <strong>No Guarantees:</strong> Past performance does not guarantee future results</li>
                  <li>• <strong>Individual Circumstances:</strong> Your actual results may vary significantly from projections</li>
                  <li>• <strong>Market Risk:</strong> Investment returns are subject to market volatility and economic changes</li>
                  <li>• <strong>Inflation Impact:</strong> Future purchasing power may differ from current estimates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Not Financial Advice</h3>
                <p className="text-base text-gray-700 mb-4">
                  We are not licensed financial advisors, and our calculators do not constitute personalized 
                  financial planning advice. The tools provide general information that may not be suitable for 
                  your specific financial situation, risk tolerance, or investment objectives.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-base text-blue-800">
                    <strong>Always consult qualified professionals:</strong> Before making investment decisions, 
                    seek advice from licensed financial advisors, tax professionals, or legal counsel who can 
                    assess your individual circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Acceptable Use Policy</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>✓ Personal financial planning and education</li>
                  <li>✓ Academic research and educational purposes</li>
                  <li>✓ General exploration of FIRE concepts and strategies</li>
                  <li>✓ Sharing results for discussion in financial communities</li>
                  <li>✓ Using calculators as starting points for professional consultations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>✗ Providing financial advice to others based solely on calculator results</li>
                  <li>✗ Commercial redistribution or resale of calculator functionality</li>
                  <li>✗ Attempting to reverse engineer or copy our calculation methods</li>
                  <li>✗ Using results to make investment guarantees or promises to clients</li>
                  <li>✗ Automated scraping or bulk data extraction from our website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Attribution Requirements</h3>
                <p className="text-base text-gray-700 mb-3">
                  If you share or reference our calculator results:
                </p>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Include attribution to "FIRE Calculator" with a link to our website</li>
                  <li>• Clearly state that results are estimates for educational purposes</li>
                  <li>• Include disclaimers about seeking professional financial advice</li>
                  <li>• Do not present results as guaranteed financial outcomes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">No Warranties</h3>
                <p className="text-base text-red-800">
                  FIRE Calculator is provided "as is" without warranties of any kind, either express or implied. 
                  We make no representations about the accuracy, completeness, or reliability of the calculations, 
                  content, or functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Damages</h3>
                <p className="text-base text-gray-700 mb-4">
                  To the maximum extent permitted by law, we shall not be liable for any direct, indirect, 
                  incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Use or inability to use our calculators</li>
                  <li>• Investment decisions based on calculator results</li>
                  <li>• Financial losses or missed investment opportunities</li>
                  <li>• Errors, omissions, or inaccuracies in calculations</li>
                  <li>• Technical issues or website downtime</li>
                  <li>• Changes to financial markets or regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibility</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-base text-gray-700">
                    Users assume full responsibility for verifying calculator results, seeking professional advice, 
                    and making informed financial decisions. You acknowledge that financial planning involves risks 
                    and that no calculator can account for all variables affecting your financial future.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property & Use License</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Content</h3>
                <p className="text-base text-gray-700 mb-4">
                  The FIRE Calculator website, including its design, functionality, content, and calculation 
                  methodologies, is protected by copyright and other intellectual property laws.
                </p>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Website design and user interface elements</li>
                  <li>• Educational content and explanations</li>
                  <li>• Calculation algorithms and formulas</li>
                  <li>• Branding, logos, and visual elements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Use License</h3>
                <p className="text-base text-gray-700 mb-3">
                  We grant you a limited, non-exclusive, non-transferable license to:
                </p>
                <ul className="space-y-1 text-base text-gray-700 mb-4">
                  <li>• Access and use our calculators for personal purposes</li>
                  <li>• Print or save calculator results for your records</li>
                  <li>• Share results with your financial advisors</li>
                  <li>• Reference our methodology in academic or educational contexts</li>
                </ul>
                <p className="text-sm text-gray-600">
                  This license is revocable and may be terminated if you violate these terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrictions</h3>
                <p className="text-base text-gray-700 mb-3">
                  Without written permission, you may not:
                </p>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Copy, modify, or redistribute our calculator code</li>
                  <li>• Create derivative works based on our calculators</li>
                  <li>• Use our content for commercial purposes</li>
                  <li>• Remove or alter copyright notices or attributions</li>
                  <li>• Incorporate our calculators into other websites or applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Changes & Termination */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes & Termination</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Changes</h3>
                <p className="text-base text-gray-700">
                  We reserve the right to modify, suspend, or discontinue any aspect of our service at any time 
                  without notice. This includes calculator functionality, website features, and availability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Terms Updates</h3>
                <p className="text-base text-gray-700 mb-3">
                  We may update these Terms of Service to reflect changes in our practices, legal requirements, 
                  or service offerings. Material changes will be prominently displayed on our website.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Continued use of our calculators after terms changes constitutes acceptance of the updated terms.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination</h3>
                <p className="text-base text-gray-700">
                  We may terminate or restrict your access to our services at any time for violation of these 
                  terms or for any other reason at our discretion.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-gray-100 rounded-xl border border-gray-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law & Disputes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Jurisdiction</h3>
                <p className="text-base text-gray-700">
                  These Terms of Service are governed by and construed in accordance with applicable laws. 
                  Any disputes shall be resolved in the appropriate courts having jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
                <p className="text-base text-gray-700">
                  If any provision of these terms is found to be unenforceable, the remaining provisions 
                  shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact for Legal Questions</h3>
                <p className="text-base text-gray-700">
                  For questions about these Terms of Service: 
                  <a href="mailto:legal@firecalculator.com" className="text-blue-600 hover:text-blue-700 ml-1">
                    legal@firecalculator.com
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}