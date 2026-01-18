import type { Metadata } from "next";
import { Mail, MessageSquare, Bug, Lightbulb, Heart, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact FIRE Calculator - Support, Feedback & Bug Reports",
  description: "Contact FIRE Calculator for support, feature requests, bug reports, or general feedback. We're here to help improve your financial planning experience.",
  keywords: "contact fire calculator, support, feedback, bug reports, help, customer service",
  openGraph: {
    title: "Contact FIRE Calculator - Support, Feedback & Bug Reports",
    description: "Contact us for support, feedback, and feature requests for our FIRE calculators.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-rose-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-rose-100 mb-6 max-w-3xl mx-auto">
              We're here to help improve your FIRE planning experience. Send us your feedback, questions, or bug reports.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Contact Options */}
          <section className="grid md:grid-cols-2 gap-8">
            
            {/* Bug Reports & Technical Issues */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bug className="w-8 h-8 text-red-600" />
                <h2 className="text-xl font-bold text-gray-900">Bug Reports & Technical Issues</h2>
              </div>
              <div className="space-y-4">
                <p className="text-base text-gray-700">
                  Found a calculation error or technical problem? Help us improve our calculators by reporting issues.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Incorrect calculation results</li>
                  <li>• Website functionality problems</li>
                  <li>• Browser compatibility issues</li>
                  <li>• Mobile device problems</li>
                  <li>• Performance or loading issues</li>
                </ul>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800 mb-3">
                    <strong>Include in your report:</strong>
                  </p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>• Specific steps to reproduce the issue</li>
                    <li>• Your browser and device information</li>
                    <li>• Calculator inputs that caused the problem</li>
                    <li>• Screenshots if applicable</li>
                  </ul>
                </div>
                <div className="text-center pt-4">
                  <a 
                    href="mailto:bugs@financialfirecalculators.com?subject=Bug Report"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Bug className="w-4 h-4" />
                    Report Bug
                  </a>
                </div>
              </div>
            </div>

            {/* Feature Requests */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">Feature Requests</h2>
              </div>
              <div className="space-y-4">
                <p className="text-base text-gray-700">
                  Have ideas for new calculators or features? We'd love to hear your suggestions for improving our tools.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• New calculator types or variants</li>
                  <li>• Additional input fields or options</li>
                  <li>• Visualization improvements</li>
                  <li>• Export or sharing features</li>
                  <li>• User interface enhancements</li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>We prioritize features based on:</strong> Community demand, implementation feasibility, 
                    and alignment with our educational mission.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <a 
                    href="mailto:features@financialfirecalculators.com?subject=Feature Request"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Suggest Feature
                  </a>
                </div>
              </div>
            </div>

          </section>

          {/* General Contact */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">General Questions & Feedback</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Can Help With</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Questions about our methodology</li>
                  <li>• Clarification on calculator assumptions</li>
                  <li>• General feedback about user experience</li>
                  <li>• Partnership or collaboration inquiries</li>
                  <li>• Media requests and interviews</li>
                  <li>• Academic research collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Times</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Bug Reports:</strong> 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Feature Requests:</strong> 1-3 business days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>General Inquiries:</strong> 2-5 business days</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <a 
                href="mailto:hello@financialfirecalculators.com?subject=General Inquiry"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Send General Message
              </a>
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Share Your FIRE Journey</h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Reached your FIRE goals or made significant progress? We'd love to hear about your journey 
                and how our calculators helped along the way.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Success Stories</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Achieved financial independence</li>
                    <li>• Reached Coast FIRE milestone</li>
                    <li>• Successfully transitioned to retirement</li>
                    <li>• Major savings or income improvements</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">How We Use Stories</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Inspire others in the FIRE community</li>
                    <li>• Improve calculator features and examples</li>
                    <li>• Validate our calculation methodologies</li>
                    <li>• Educational content (with permission)</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-4">
                <a 
                  href="mailto:stories@financialfirecalculators.com?subject=My FIRE Journey"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Share Your Story
                </a>
              </div>
            </div>
          </section>

          {/* Important Disclaimers */}
          <section className="bg-amber-50 rounded-xl border border-amber-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-amber-600" />
              <h2 className="text-2xl font-bold text-amber-900">What We Can't Help With</h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-amber-800 mb-4">
                We're committed to helping improve our calculators, but there are some things we cannot provide:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">No Personal Financial Advice</h3>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• Specific investment recommendations</li>
                    <li>• Personal financial planning guidance</li>
                    <li>• Tax strategy advice</li>
                    <li>• Asset allocation suggestions</li>
                    <li>• Individual retirement timing decisions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Third-Party Support</h3>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• Brokerage account issues</li>
                    <li>• Bank or financial institution problems</li>
                    <li>• Tax preparation assistance</li>
                    <li>• Legal or estate planning questions</li>
                    <li>• Insurance claims or coverage issues</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-100 p-4 rounded-lg mt-4">
                <p className="text-sm text-amber-800">
                  <strong>For personalized financial advice:</strong> Please consult qualified financial advisors, 
                  tax professionals, or legal counsel who can assess your individual circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* Social & Community */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect with the FIRE Community</h2>
            <div className="text-center space-y-4">
              <p className="text-base text-gray-700">
                While we focus on building great calculators, the FIRE community is where you'll find ongoing support, 
                discussions, and shared experiences from people on similar journeys.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Reddit Communities</h3>
                  <p className="text-sm text-gray-600">r/financialindependence, r/leanfire, r/fatfire</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">FIRE Blogs & Forums</h3>
                  <p className="text-sm text-gray-600">Bogleheads, FIRE forums, personal finance blogs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Local Groups</h3>
                  <p className="text-sm text-gray-600">Meetups, FI groups, investment clubs</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}