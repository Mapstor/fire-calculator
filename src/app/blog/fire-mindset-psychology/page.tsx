"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, Heart, Target, Shield, Users, TrendingUp, 
  ChevronRight, Calculator, AlertCircle, CheckCircle,
  Lightbulb, BookOpen, Activity, Zap, Clock, ArrowRight, Rocket
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

export default function FireMindsetPsychologyPage() {
  const [currentPhase, setCurrentPhase] = useState('accumulation');
  const [stressLevel, setStressLevel] = useState(5);
  const [preparationScore, setPreparationScore] = useState(0);

  // Mindset evolution data
  const mindsetEvolution = [
    { month: 'Month 1', traditional: 85, fire: 15, confidence: 20 },
    { month: 'Month 3', traditional: 75, fire: 25, confidence: 35 },
    { month: 'Month 6', traditional: 60, fire: 40, confidence: 50 },
    { month: 'Year 1', traditional: 45, fire: 55, confidence: 65 },
    { month: 'Year 2', traditional: 30, fire: 70, confidence: 75 },
    { month: 'Year 3', traditional: 20, fire: 80, confidence: 85 },
    { month: 'Year 5', traditional: 10, fire: 90, confidence: 95 },
  ];

  // Psychological phases
  const psychPhases = [
    { phase: 'Discovery', excitement: 95, anxiety: 20, clarity: 30 },
    { phase: 'Learning', excitement: 80, anxiety: 40, clarity: 50 },
    { phase: 'Commitment', excitement: 70, anxiety: 60, clarity: 65 },
    { phase: 'Grind', excitement: 50, anxiety: 70, clarity: 75 },
    { phase: 'Progress', excitement: 65, anxiety: 50, clarity: 85 },
    { phase: 'Nearing', excitement: 85, anxiety: 65, clarity: 90 },
    { phase: 'Achieved', excitement: 90, anxiety: 30, clarity: 95 },
  ];

  // Resilience factors
  const resilienceFactors = [
    { factor: 'Purpose Clarity', score: 85 },
    { factor: 'Support System', score: 70 },
    { factor: 'Flexibility', score: 75 },
    { factor: 'Stress Management', score: 65 },
    { factor: 'Growth Mindset', score: 90 },
    { factor: 'Self-Compassion', score: 60 },
  ];

  // Common challenges and solutions
  const challenges = [
    {
      challenge: "Social Isolation",
      frequency: 78,
      impact: "High",
      solution: "Build FIRE community, find like-minded friends, join online forums"
    },
    {
      challenge: "Lifestyle Creep",
      frequency: 65,
      impact: "Medium",
      solution: "Regular budget reviews, value-based spending, mindful consumption"
    },
    {
      challenge: "Comparison Trap",
      frequency: 82,
      impact: "High",
      solution: "Focus on personal journey, celebrate small wins, limit social media"
    },
    {
      challenge: "Burnout",
      frequency: 71,
      impact: "High",
      solution: "Balance intensity with sustainability, take breaks, practice self-care"
    },
    {
      challenge: "Identity Crisis",
      frequency: 55,
      impact: "Medium",
      solution: "Develop interests beyond work, explore purpose, gradual transition"
    },
  ];

  // Mental preparation checklist
  const mentalChecklist = [
    { area: 'Purpose & Values', items: [
      'Defined personal why for FIRE',
      'Aligned goals with core values',
      'Created vision board or written manifesto',
      'Shared goals with partner/family'
    ]},
    { area: 'Identity Development', items: [
      'Explored interests beyond work',
      'Built non-work social connections',
      'Developed hobbies and passions',
      'Practiced introducing self without job title'
    ]},
    { area: 'Stress Management', items: [
      'Established meditation/mindfulness practice',
      'Developed exercise routine',
      'Created support network',
      'Learned stress reduction techniques'
    ]},
    { area: 'Relationship Preparation', items: [
      'Discussed FIRE with partner/family',
      'Set boundaries with non-supportive people',
      'Built FIRE community connections',
      'Prepared for lifestyle differences'
    ]},
  ];

  // Calculate mental preparation score
  const calculatePreparationScore = () => {
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const totalItems = document.querySelectorAll('input[type="checkbox"]').length;
    setPreparationScore(Math.round((checkedItems / totalItems) * 100));
  };

  // Happiness curve data
  const happinessCurve = [
    { stage: 'Traditional Job', happiness: 45, fulfillment: 30, stress: 75 },
    { stage: 'FIRE Discovery', happiness: 60, fulfillment: 50, stress: 65 },
    { stage: 'Active Pursuit', happiness: 55, fulfillment: 60, stress: 70 },
    { stage: 'Mid-Journey', happiness: 65, fulfillment: 70, stress: 60 },
    { stage: 'Final Push', happiness: 60, fulfillment: 75, stress: 65 },
    { stage: 'FIRE Achieved', happiness: 80, fulfillment: 85, stress: 35 },
    { stage: 'Post-FIRE Adjustment', happiness: 75, fulfillment: 80, stress: 40 },
    { stage: 'New Normal', happiness: 85, fulfillment: 90, stress: 30 },
  ];

  // Mindset shifts comparison
  const mindsetShifts = [
    { aspect: 'Time Perspective', traditional: 30, fire: 90 },
    { aspect: 'Risk Tolerance', traditional: 40, fire: 75 },
    { aspect: 'Delayed Gratification', traditional: 35, fire: 85 },
    { aspect: 'Resource Optimization', traditional: 45, fire: 90 },
    { aspect: 'Life Design', traditional: 25, fire: 95 },
    { aspect: 'Value Consciousness', traditional: 40, fire: 88 },
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Mindset
            </span>
            <span className="text-sm text-white/80">15 min read</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            FIRE Mindset & Psychology: Mental Preparation for Early Retirement
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Master the psychological transformation required for FIRE success. Learn to navigate identity shifts, 
            manage stress, build resilience, and prepare mentally for the journey to financial independence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Brain className="w-5 h-5" />
              <span className="font-medium">Psychology Guide</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Mental Health</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Resilience Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The FIRE Journey is 90% Mental
            </h2>
            <p className="text-gray-700 mb-4">
              While FIRE calculations and strategies dominate discussions, the psychological transformation 
              is often the most challenging aspect. Success requires rewiring decades of conditioning about 
              work, money, identity, and purpose.
            </p>
            <p className="text-gray-700">
              This guide addresses the mental challenges, emotional phases, and psychological preparation 
              needed for a successful transition to financial independence and early retirement.
            </p>
          </div>
        </section>

        {/* Mindset Evolution Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The FIRE Mindset Evolution
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={mindsetEvolution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="traditional" stackId="1" stroke="#94a3b8" fill="#cbd5e1" name="Traditional Mindset" />
                <Area type="monotone" dataKey="fire" stackId="1" stroke="#4f46e5" fill="#6366f1" name="FIRE Mindset" />
                <Line type="monotone" dataKey="confidence" stroke="#10b981" strokeWidth={2} name="Confidence Level" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Discovery Phase</h3>
              <p className="text-sm text-gray-600">
                Initial excitement mixed with skepticism. Traditional beliefs still dominate thinking.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Transition Phase</h3>
              <p className="text-sm text-gray-600">
                Active mindset rewiring. Challenging societal norms and building new frameworks.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Integration Phase</h3>
              <p className="text-sm text-gray-600">
                FIRE mindset becomes natural. High confidence in unconventional choices.
              </p>
            </div>
          </div>
        </section>

        {/* Psychological Phases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Psychological Phases of FIRE
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={psychPhases}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="excitement" stroke="#f59e0b" strokeWidth={2} name="Excitement" />
                <Line type="monotone" dataKey="anxiety" stroke="#ef4444" strokeWidth={2} name="Anxiety" />
                <Line type="monotone" dataKey="clarity" stroke="#10b981" strokeWidth={2} name="Clarity" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Discovery & Excitement</h3>
              <p className="text-gray-700 mb-2">
                The "aha" moment when FIRE seems possible. High excitement, endless research, 
                and sharing with everyone (often met with skepticism).
              </p>
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-sm text-amber-800">
                  <strong>Key Challenge:</strong> Avoiding over-optimization and maintaining realistic expectations.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 2: The Grind</h3>
              <p className="text-gray-700 mb-2">
                Years 2-5 where initial excitement fades. Anxiety peaks as sacrifices feel heavy 
                and progress seems slow. Many abandon FIRE here.
              </p>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-sm text-red-800">
                  <strong>Key Challenge:</strong> Maintaining motivation through the "boring middle."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Momentum & Clarity</h3>
              <p className="text-gray-700 mb-2">
                Compound growth becomes visible. Habits are established. The path is clear, 
                and confidence grows as the goal approaches.
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  <strong>Key Challenge:</strong> Avoiding "one more year" syndrome and preparing for transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Stress Assessment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FIRE Journey Stress Assessment
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Stress Level (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={stressLevel}
                onChange={(e) => setStressLevel(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Low</span>
                <span className="font-semibold text-lg text-indigo-600">{stressLevel}</span>
                <span>High</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border-2 ${stressLevel <= 3 ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                <h3 className="font-semibold text-gray-900 mb-2">Low Stress (1-3)</h3>
                <p className="text-sm text-gray-600">
                  Well-balanced approach. Continue current strategies and help others on their journey.
                </p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${stressLevel >= 4 && stressLevel <= 6 ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'}`}>
                <h3 className="font-semibold text-gray-900 mb-2">Moderate Stress (4-6)</h3>
                <p className="text-sm text-gray-600">
                  Normal for FIRE journey. Focus on stress management and maintain perspective.
                </p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${stressLevel >= 7 && stressLevel <= 8 ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
                <h3 className="font-semibold text-gray-900 mb-2">High Stress (7-8)</h3>
                <p className="text-sm text-gray-600">
                  Consider adjusting timeline or approach. Prioritize mental health over speed.
                </p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${stressLevel >= 9 ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                <h3 className="font-semibold text-gray-900 mb-2">Critical Stress (9-10)</h3>
                <p className="text-sm text-gray-600">
                  Immediate action needed. Consider professional support and major adjustments.
                </p>
              </div>
            </div>

            {stressLevel >= 7 && (
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">Recommended Actions:</h4>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Re-evaluate your FIRE timeline for sustainability</li>
                  <li>• Increase self-care and recreational activities</li>
                  <li>• Connect with FIRE community for support</li>
                  <li>• Consider Coast FIRE or Barista FIRE alternatives</li>
                  <li>• Seek professional counseling if needed</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Identity Transformation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Navigating Identity Transformation
          </h2>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              The Work-Identity Challenge
            </h3>
            <p className="text-gray-700 mb-4">
              Most people derive significant identity from their careers. "What do you do?" is often 
              the first question in social settings. FIRE requires building identity beyond occupation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Traditional Identity</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• "I am a software engineer"</li>
                  <li>• "I work at Company X"</li>
                  <li>• Status from job title</li>
                  <li>• Purpose from employer mission</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">FIRE Identity</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• "I pursue multiple interests"</li>
                  <li>• "I design my own life"</li>
                  <li>• Status from personal values</li>
                  <li>• Purpose from chosen activities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Building Multi-Dimensional Identity</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Develop hobbies and interests unrelated to career</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Volunteer and contribute to causes you care about</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build relationships outside work circles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Practice introducing yourself without mentioning work</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Psychological Challenges
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={challenges}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="challenge" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Frequency (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="frequency" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{item.challenge}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${item.frequency}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{item.frequency}%</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resilience Building */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Building FIRE Resilience
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={resilienceFactors}>
                <PolarGrid />
                <PolarAngleAxis dataKey="factor" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Resilience Score" dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Purpose Clarity</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Understanding your "why" provides motivation during difficult times.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Write a personal FIRE manifesto</li>
                  <li>• Visualize your ideal post-FIRE life</li>
                  <li>• Connect goals to core values</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Support System</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Building connections with like-minded individuals reduces isolation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Join local FIRE meetups</li>
                  <li>• Engage in online communities</li>
                  <li>• Find an accountability partner</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Growth Mindset</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Viewing challenges as opportunities accelerates progress.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Embrace learning from setbacks</li>
                  <li>• Celebrate small victories</li>
                  <li>• Focus on progress over perfection</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Self-Compassion</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Being kind to yourself prevents burnout and maintains sustainability.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Allow for balance and fun</li>
                  <li>• Forgive financial mistakes</li>
                  <li>• Adjust plans when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Preparation Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mental Preparation Checklist
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Preparation Score</h3>
                <div className="text-2xl font-bold text-indigo-600">{preparationScore}%</div>
              </div>
              <div className="bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${preparationScore}%` }}
                ></div>
              </div>
            </div>

            {mentalChecklist.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">{section.area}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <label key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        onChange={calculatePreparationScore}
                        className="w-4 h-4 text-indigo-600 rounded"
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {preparationScore > 0 && (
              <div className={`p-4 rounded-lg ${
                preparationScore >= 75 ? 'bg-green-50 border border-green-200' :
                preparationScore >= 50 ? 'bg-yellow-50 border border-yellow-200' :
                'bg-red-50 border border-red-200'
              }`}>
                <p className={`text-sm font-medium ${
                  preparationScore >= 75 ? 'text-green-800' :
                  preparationScore >= 50 ? 'text-yellow-800' :
                  'text-red-800'
                }`}>
                  {preparationScore >= 75 ? 'Excellent preparation! You\'re mentally ready for FIRE.' :
                   preparationScore >= 50 ? 'Good progress. Focus on unchecked areas for better preparation.' :
                   'More preparation needed. Each area contributes to long-term success.'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Happiness and Fulfillment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Happiness Curve of FIRE
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={happinessCurve}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="stage" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="happiness" stroke="#10b981" strokeWidth={2} name="Happiness" />
                <Line type="monotone" dataKey="fulfillment" stroke="#6366f1" strokeWidth={2} name="Fulfillment" />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">The Dip is Normal</h4>
                  <p className="text-sm text-gray-600">
                    Happiness often dips during intense saving years but rebounds strongly post-FIRE.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Fulfillment Grows</h4>
                  <p className="text-sm text-gray-600">
                    Living aligned with values increases fulfillment even during challenging phases.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Stress Reduction</h4>
                  <p className="text-sm text-gray-600">
                    Financial security dramatically reduces life stress, improving overall well-being.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Post-FIRE Adjustment</h4>
                  <p className="text-sm text-gray-600">
                    Expect 6-12 months of adjustment as you adapt to newfound freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mindset Shifts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Critical Mindset Shifts for FIRE Success
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mindsetShifts} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="aspect" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="traditional" fill="#cbd5e1" name="Traditional Thinking" />
                <Bar dataKey="fire" fill="#6366f1" name="FIRE Mindset" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">From Scarcity to Abundance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Recognize money as a tool, not the goal</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Focus on having "enough" vs. maximizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Share knowledge and help others</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">From Consumer to Creator</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Find joy in creating vs. consuming</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Value experiences over possessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Build skills instead of buying solutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">From External to Internal</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Define success by personal standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Stop comparing to others' timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Find validation from within</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">From Fixed to Flexible</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Embrace uncertainty and change</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Adjust plans based on new information</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>See multiple paths to success</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practical Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Practical Mental Health Strategies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <Activity className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Daily Practices</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 10-minute morning meditation</li>
                <li>• Gratitude journaling</li>
                <li>• Regular exercise routine</li>
                <li>• Limit financial news consumption</li>
                <li>• Connect with one supportive person</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Weekly Rituals</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Review progress without judgment</li>
                <li>• Plan one non-FIRE activity</li>
                <li>• Connect with FIRE community</li>
                <li>• Practice a creative hobby</li>
                <li>• Celebrate one win</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <Zap className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Monthly Resets</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reassess stress levels</li>
                <li>• Adjust goals if needed</li>
                <li>• Plan a mini-adventure</li>
                <li>• Review and update "why"</li>
                <li>• Schedule self-care time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Start Your Mental Preparation Today</h2>
            <p className="text-indigo-100 mb-6">
              Success in FIRE isn't just about the numbers—it's about building the mental resilience 
              and psychological flexibility to thrive on this unconventional path.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/coast-fire-calculator"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Try Coast FIRE Calculator
              </Link>
              <Link 
                href="/blog/fire-for-late-starters"
                className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-400 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read Late Starter Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/fire-for-late-starters" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Rocket className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  FIRE for Late Starters
                </h3>
                <p className="text-sm text-gray-600">
                  Starting your FIRE journey after 40? Learn accelerated strategies.
                </p>
              </div>
            </Link>

            <Link href="/blog/coast-fire-vs-barista-fire" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Coast vs Barista FIRE
                </h3>
                <p className="text-sm text-gray-600">
                  Compare semi-retirement strategies for better work-life balance.
                </p>
              </div>
            </Link>

            <Link href="/blog/couples-fire-strategy" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Heart className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Couples FIRE Strategy
                </h3>
                <p className="text-sm text-gray-600">
                  Navigate FIRE as a couple with aligned goals and strategies.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}