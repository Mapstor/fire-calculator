import type { Metadata } from "next";
import { Shield, Eye, Lock, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - FIRE Calculator Data Protection & User Privacy",
  description: "Our commitment to protecting your financial privacy. Learn how we handle data, cookies, and your personal information in our FIRE calculators.",
  keywords: "privacy policy, data protection, financial privacy, cookies, personal information",
  openGraph: {
    title: "Privacy Policy - FIRE Calculator Data Protection & User Privacy",
    description: "Our commitment to protecting your financial privacy and personal data.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 mb-6 max-w-3xl mx-auto">
              Your financial privacy is our priority. We don't collect, store, or share your personal data.
            </p>
            <p className="text-sm text-indigo-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Data Collection */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Collection</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">What We DON'T Collect</h3>
                <ul className="space-y-2 text-base text-green-700">
                  <li>✓ Your financial data (income, expenses, savings amounts)</li>
                  <li>✓ Personal identification information (name, address, phone)</li>
                  <li>✓ Account numbers or financial institution details</li>
                  <li>✓ Social Security numbers or tax information</li>
                  <li>✓ Email addresses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Our Calculators Work</h3>
                <p className="text-base text-gray-700 mb-4">
                  All FIRE calculations are performed entirely within your web browser using JavaScript. 
                  Your financial inputs never leave your device or get transmitted to our servers.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Local Browser Storage</h4>
                  <p className="text-sm text-gray-600">
                    Calculator inputs may be saved in your browser's local storage for convenience. 
                    This data remains on your device and can be cleared by deleting your browser data.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Anonymous Usage Analytics</h3>
                <p className="text-base text-gray-700 mb-3">
                  We may collect anonymous usage statistics to improve our calculators:
                </p>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Which calculator pages are visited most frequently</li>
                  <li>• General geographic regions (country/state level only)</li>
                  <li>• Device types and browser information</li>
                  <li>• Technical performance and error reporting</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  This data is aggregated and cannot be linked to individual users or their financial information.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies Only</h3>
                <p className="text-base text-gray-700 mb-4">
                  We use minimal cookies necessary for website functionality:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Functional Cookies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Remember calculator preferences</li>
                      <li>• Save currency selection</li>
                      <li>• Maintain session state</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Performance Cookies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Anonymous page load times</li>
                      <li>• Error tracking (no personal data)</li>
                      <li>• Basic usage statistics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">What We Don't Use</h3>
                <ul className="space-y-2 text-base text-red-700">
                  <li>✗ Advertising or marketing cookies</li>
                  <li>✗ Social media tracking pixels</li>
                  <li>✗ Third-party analytics that collect personal data</li>
                  <li>✗ Cross-site tracking or fingerprinting</li>
                  <li>✗ Retargeting or behavioral advertising cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                <p className="text-base text-gray-700 mb-3">
                  You can control cookies through your browser settings:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Block all cookies (may affect calculator functionality)</li>
                  <li>• Delete existing cookies to reset preferences</li>
                  <li>• Use incognito/private browsing mode</li>
                  <li>• Configure cookie preferences per website</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Hosting & Security</h3>
                <p className="text-base text-gray-700 mb-4">
                  Our website is hosted on secure cloud infrastructure that may process basic technical data:
                </p>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• <strong>SSL/TLS Encryption:</strong> All connections are encrypted in transit</li>
                  <li>• <strong>CDN Services:</strong> Content delivery networks for faster page loading</li>
                  <li>• <strong>DNS Services:</strong> Domain name resolution for website access</li>
                  <li>• <strong>Security Monitoring:</strong> Automated protection against malicious traffic</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Financial Service Integration</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-base text-blue-800">
                    We do not integrate with banks, investment platforms, or other financial services. 
                    Our calculators are standalone tools that do not connect to external financial accounts or APIs.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">External Links</h3>
                <p className="text-base text-gray-700">
                  Our website may contain links to external resources. These third-party websites have their own 
                  privacy policies and are not covered by this policy. We recommend reviewing their privacy practices 
                  before providing any personal information.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Form Data</h3>
                <p className="text-base text-gray-700 mb-3">
                  When you contact us through email or contact forms, we collect:
                </p>
                <ul className="text-base text-gray-700 space-y-1">
                  <li>• Information you voluntarily provide in your message</li>
                  <li>• Email address for response purposes</li>
                  <li>• Technical details if reporting bugs or issues</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Contact information is used solely to respond to your inquiry and is not shared with third parties.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights & Control */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights & Data Control</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Minimization</h3>
                  <p className="text-base text-gray-700">
                    We practice data minimization - collecting only the minimum information necessary 
                    for our services to function effectively.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Control</h3>
                  <p className="text-base text-gray-700">
                    Since calculations are performed locally, you maintain complete control over 
                    your financial data at all times.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Deletion</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-base text-gray-700 mb-3">
                    To completely remove any locally stored data:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clear your browser's local storage and cookies</li>
                    <li>• Use incognito/private browsing mode</li>
                    <li>• Contact us to remove any email correspondence</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to Privacy Policy</h3>
                <p className="text-base text-gray-700">
                  We may update this privacy policy to reflect changes in our practices or legal requirements. 
                  Material changes will be prominently displayed on our website. Continued use of our calculators 
                  after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>

          {/* Contact for Privacy Questions */}
          <section className="bg-indigo-50 rounded-xl border border-indigo-200 p-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Privacy Questions</h2>
            <p className="text-base text-indigo-800 mb-4">
              If you have questions about this privacy policy or how we handle your data, please contact us:
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-base text-gray-900">
                <strong>Email:</strong> <a href="mailto:privacy@firecalculator.com" className="text-indigo-600 hover:text-indigo-700">privacy@firecalculator.com</a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                We will respond to privacy-related inquiries within 48 hours.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}