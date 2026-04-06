'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, FileText, Target, Sparkles, Upload, Zap, CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#fafafa] border-b border-gray-200 py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <Sparkles size={14} className="text-amber-500" />
            AI-powered resume analysis just got even better
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            Match your resume to any job description instantly
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <Sparkles size={14} className="text-amber-500" />
            Get actionable suggestions to land your dream job
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            Free to use • No sign-up required
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <Sparkles size={14} className="text-amber-500" />
            AI-powered resume analysis just got even better
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            Match your resume to any job description instantly
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <Sparkles size={14} className="text-amber-500" />
            Get actionable suggestions to land your dream job
            <ArrowRight size={14} className="text-gray-400" />
          </span>
          <span className="mx-8 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            Free to use • No sign-up required
            <ArrowRight size={14} className="text-gray-400" />
          </span>
        </div>
      </div>

      {/* Navigation Bar - HEX Style */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            {/* Left Nav Links */}
            <div className="flex items-center gap-1">
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('features')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Features
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'features' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('features')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Capabilities</div>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Smart Analysis</div>
                      <div className="text-xs text-gray-500">AI-powered resume parsing</div>
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Skill Matching</div>
                      <div className="text-xs text-gray-500">Compare with job requirements</div>
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Suggestions</div>
                      <div className="text-xs text-gray-500">Actionable improvements</div>
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Solutions
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'solutions' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">For</div>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Job Seekers</div>
                      <div className="text-xs text-gray-500">Land your dream role</div>
                    </button>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Career Changers</div>
                      <div className="text-xs text-gray-500">Transition to new fields</div>
                    </button>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-900">Fresh Graduates</div>
                      <div className="text-xs text-gray-500">Start your career right</div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('benefits')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Benefits
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex items-center gap-2 px-8">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <FileText className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">RESUME</span>
            </div>

            {/* Right Nav Links */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                How it Works
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Pricing
              </button>

              <button
                onClick={() => router.push('/analyze')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Analyze
              </button>
            </div>

            {/* CTA Button - HEX Style */}
            <button
              onClick={() => router.push('/analyze')}
              className="ml-4 px-5 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-8">
            <Sparkles size={16} className="text-amber-500" />
            Powered by Gemini AI
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Land Your Dream Job with
            <span className="block text-gray-600 mt-2">
              AI-Powered Resume Analysis
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Upload or paste your resume and get instant AI-powered insights on how well it matches any job description.
            Discover missing skills and get actionable suggestions.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push('/analyze')}
              className="px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              Get started for free
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Request a demo
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Free to use • No sign-up required
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Three simple steps to optimize your resume and land more interviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
              <Upload className="text-gray-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1. Upload Your Resume
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Paste your resume text or upload PDF/Word files. We'll extract and analyze the content instantly.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
              <Target className="text-gray-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              2. Add Job Description
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Paste the job description you're interested in. Our AI will compare it with your resume.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
              <Zap className="text-gray-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              3. Get AI Insights
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive a match score, matched skills, missing skills, and actionable improvement suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-[#fafafa] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Use AI Resume Analyzer?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to stand out in the job market
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <CheckCircle className="text-gray-700 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Smart Skill Matching
                </h3>
                <p className="text-gray-600 text-sm">
                  Identifies both matched and missing skills between your resume and job requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <CheckCircle className="text-gray-700 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Actionable Suggestions
                </h3>
                <p className="text-gray-600 text-sm">
                  Get specific recommendations to improve your resume and increase match scores.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <CheckCircle className="text-gray-700 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Experience Level Detection
                </h3>
                <p className="text-gray-600 text-sm">
                  Automatically determines if you're a Junior, Mid, or Senior level candidate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <CheckCircle className="text-gray-700 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Privacy First
                </h3>
                <p className="text-gray-600 text-sm">
                  Your data is processed securely and never stored. Complete privacy guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Start for free, upgrade when you need more
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-2">Free</div>
            <div className="text-4xl font-bold text-gray-900 mb-4">$0</div>
            <p className="text-gray-600 text-sm mb-6">Perfect for getting started</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle size={16} className="text-gray-700" />
                5 resume analyses per month
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle size={16} className="text-gray-700" />
                Basic skill matching
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle size={16} className="text-gray-700" />
                Match score & suggestions
              </li>
            </ul>
            <button
              onClick={() => router.push('/analyze')}
              className="w-full px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              Get started
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <div className="text-sm font-medium text-gray-400 mb-2">Pro</div>
            <div className="text-4xl font-bold mb-4">$9<span className="text-lg font-normal text-gray-400">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">For serious job seekers</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle size={16} className="text-gray-400" />
                Unlimited resume analyses
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle size={16} className="text-gray-400" />
                Advanced skill insights
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle size={16} className="text-gray-400" />
                Priority processing
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle size={16} className="text-gray-400" />
                Export detailed reports
              </li>
            </ul>
            <button
              onClick={() => router.push('/analyze')}
              className="w-full px-4 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your Resume?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Start analyzing your resume against any job description in seconds.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => router.push('/analyze')}
            className="px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            Get started for free
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Learn more
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
                <FileText className="text-white" size={14} />
              </div>
              <span className="text-sm font-semibold text-gray-900">RESUME</span>
            </div>
            <p className="text-gray-500 text-sm">
              Built with Next.js, Gemini AI, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
