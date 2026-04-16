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
    <div className="min-h-screen bg-navy">
      {/* Top Announcement Bar */}
      <div className="bg-white/3 border-b border-white/10 py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <Sparkles size={14} className="text-mint" />
            AI-powered resume analysis just got even better
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <span className="text-mint">✦</span>
            Match your resume to any job description instantly
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <Sparkles size={14} className="text-mint" />
            Get actionable suggestions to land your dream job
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <span className="text-mint">✦</span>
            Free to use • No sign-up required
            <ArrowRight size={14} className="text-white/30" />
          </span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <Sparkles size={14} className="text-mint" />
            AI-powered resume analysis just got even better
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <span className="text-mint">✦</span>
            Match your resume to any job description instantly
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <Sparkles size={14} className="text-mint" />
            Get actionable suggestions to land your dream job
            <ArrowRight size={14} className="text-white/30" />
          </span>
          <span className="mx-8 text-sm text-white/60 flex items-center gap-2">
            <span className="text-mint">✦</span>
            Free to use • No sign-up required
            <ArrowRight size={14} className="text-white/30" />
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-navy sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            {/* Left Nav Links */}
            <div className="flex items-center gap-1">
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('features')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  Features
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'features' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('features')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-navy rounded-xl shadow-xl border border-white/10 py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">Capabilities</div>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Smart Analysis</div>
                      <div className="text-xs text-white/50">AI-powered resume parsing</div>
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Skill Matching</div>
                      <div className="text-xs text-white/50">Compare with job requirements</div>
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Suggestions</div>
                      <div className="text-xs text-white/50">Actionable improvements</div>
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  Solutions
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'solutions' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-navy rounded-xl shadow-xl border border-white/10 py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">For</div>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Job Seekers</div>
                      <div className="text-xs text-white/50">Land your dream role</div>
                    </button>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Career Changers</div>
                      <div className="text-xs text-white/50">Transition to new fields</div>
                    </button>
                    <button onClick={() => scrollToSection('benefits')} className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors">
                      <div className="text-sm font-medium text-white">Fresh Graduates</div>
                      <div className="text-xs text-white/50">Start your career right</div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('benefits')}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Benefits
              </button>
            </div>

            {/* Center Logo */}
            <div className="px-8">
              <span className="text-xl font-bold text-white tracking-tight">SkillSync</span>
            </div>

            {/* Right Nav Links */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                How it Works
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Pricing
              </button>

              <button
                onClick={() => router.push('/analyze')}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Analyze
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => router.push('/analyze')}
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-navy bg-mint rounded-lg hover:bg-mint/90 transition-all duration-200"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Land Your Dream Job
            <span className="block">with AI-Powered Resume Analysis</span>
          </h1>

          <p className="text-base text-white/50 mb-6 max-w-xl mx-auto">
            Get instant AI insights on how well your resume matches any job description.
          </p>

          <button
            onClick={() => router.push('/analyze')}
            className="px-6 py-3 text-sm font-semibold text-navy bg-mint rounded-full hover:bg-mint/90 transition-all duration-200 mb-8"
          >
            Get Started
          </button>

          <div className="max-w-4xl mx-auto relative group">
            {/* Left shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-mint/20 to-transparent pointer-events-none rounded-l-xl z-10"></div>
            {/* Right shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-mint/20 to-transparent pointer-events-none rounded-r-xl z-10"></div>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-mint/30 via-blue/30 to-mint/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="/resume.png" 
              alt="Resume Analysis Dashboard" 
              className="relative w-full h-auto rounded-xl border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-mint/20"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/3 border-y border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-sm text-white/40">Resumes Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">85%</div>
              <div className="text-sm text-white/40">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/40">Industries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-white/40 text-center mb-12 max-w-2xl mx-auto">
          Three simple steps to optimize your resume and land more interviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="text-6xl font-bold text-white/10 mb-4">01</div>
            <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-5">
              <Upload className="text-mint" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Upload Your Resume
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Paste your resume text or upload PDF/Word files. We'll extract and analyze the content instantly.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="text-6xl font-bold text-white/10 mb-4">02</div>
            <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-5">
              <Target className="text-mint" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Add Job Description
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Paste the job description you're interested in. Our AI will compare it with your resume.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="text-6xl font-bold text-white/10 mb-4">03</div>
            <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-5">
              <Zap className="text-mint" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Get AI Insights
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Receive a match score, matched skills, missing skills, and actionable improvement suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="bg-white/3 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Use SkillSync AI?
          </h2>
          <p className="text-white/40 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to stand out in the job market
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-navy p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-mint" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Smart Skill Matching
                </h3>
                <p className="text-white/50 text-sm">
                  Identifies both matched and missing skills between your resume and job requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-navy p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-mint" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Actionable Suggestions
                </h3>
                <p className="text-white/50 text-sm">
                  Get specific recommendations to improve your resume and increase match scores.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-navy p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-mint" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Experience Level Detection
                </h3>
                <p className="text-white/50 text-sm">
                  Automatically determines if you're a Junior, Mid, or Senior level candidate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-navy p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-mint" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Privacy First
                </h3>
                <p className="text-white/50 text-sm">
                  Your data is processed securely and never stored. Complete privacy guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-white/40 text-center mb-12 max-w-2xl mx-auto">
          Start for free, upgrade when you need more
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="text-sm font-medium text-white/50 mb-2">Free</div>
            <div className="text-4xl font-bold text-white mb-4">$0</div>
            <p className="text-white/50 text-sm mb-6">Perfect for getting started</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <CheckCircle size={16} className="text-mint" />
                5 resume analyses per month
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <CheckCircle size={16} className="text-mint" />
                Basic skill matching
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <CheckCircle size={16} className="text-mint" />
                Match score & suggestions
              </li>
            </ul>
            <button
              onClick={() => router.push('/analyze')}
              className="w-full px-4 py-2.5 text-sm font-semibold text-navy bg-mint rounded-lg hover:bg-mint/90 transition-all duration-200"
            >
              Get started
            </button>
          </div>

          <div className="bg-mint rounded-xl p-8 text-navy">
            <div className="text-sm font-medium text-navy/60 mb-2">Pro</div>
            <div className="text-4xl font-bold mb-4">$9<span className="text-lg font-normal text-navy/60">/mo</span></div>
            <p className="text-navy/60 text-sm mb-6">For serious job seekers</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-navy/80">
                <CheckCircle size={16} className="text-navy" />
                Unlimited resume analyses
              </li>
              <li className="flex items-center gap-3 text-sm text-navy/80">
                <CheckCircle size={16} className="text-navy" />
                Advanced skill insights
              </li>
              <li className="flex items-center gap-3 text-sm text-navy/80">
                <CheckCircle size={16} className="text-navy" />
                Priority processing
              </li>
              <li className="flex items-center gap-3 text-sm text-navy/80">
                <CheckCircle size={16} className="text-navy" />
                Export detailed reports
              </li>
            </ul>
            <button
              onClick={() => router.push('/analyze')}
              className="w-full px-4 py-2.5 text-sm font-semibold text-mint bg-navy rounded-lg hover:bg-navy/90 transition-colors"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Optimize Your Resume?
        </h2>
        <p className="text-lg text-white/40 mb-8">
          Start analyzing your resume against any job description in seconds.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => router.push('/analyze')}
            className="px-6 py-3 text-base font-semibold text-navy bg-mint rounded-lg hover:bg-mint/90 transition-all duration-200"
          >
            Get started for free
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="px-6 py-3 text-base font-medium text-white/70 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            Learn more
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy">
        <div className="w-full">
          <div className="flex items-center justify-center overflow-hidden">
            <span className="text-[8rem] md:text-[14rem] font-normal text-mint/30 tracking-wide leading-none" style={{ fontFamily: 'Georgia, serif' }}>SkillSync AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
