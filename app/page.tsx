'use client';

import { useState } from 'react';
import { useAnalyze } from '@/hooks/useAnalyze';
import ScoreCard from '@/components/ScoreCard';
import SkillBadge from '@/components/SkillBadge';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const { result, loading, error, analyze, reset } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analyze(resumeText, jobDescription);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            AI Resume Analyzer
          </h1>
          <p className="text-gray-500 mt-2 text-center">
            Paste your resume and a job description — Gemini AI will analyze the match
          </p>
        </div>

        {/* FORM SECTION - show only when result is null */}
        {result === null && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Resume
                  </label>
                  <textarea
                    rows={12}
                    placeholder="Paste your full resume text here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                  </label>
                  <textarea
                    rows={12}
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                  />
                </div>
              </div>

              {/* Error display */}
              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 mt-2">
                  {error}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Resume →'
                )}
              </button>
            </form>
          </>
        )}

        {/* RESULTS SECTION - show only when result is not null */}
        {result !== null && (
          <div className="space-y-5">
            {/* ScoreCard */}
            <ScoreCard score={result.matchScore} level={result.experienceLevel} />

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Matched Skills */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Matched Skills ({result.matchedSkills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.matchedSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="matched" />
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Missing Skills ({result.missingSkills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="missing" />
                  ))}
                </div>
              </div>
            </div>

            {/* Suggestions card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                AI Suggestions to Improve
              </h3>
              <ol className="space-y-2">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-600">
                    <span className="text-blue-600 font-medium">
                      {index + 1}.
                    </span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Reset button */}
            <button
              onClick={reset}
              className="w-full border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            >
              ← Analyze Another Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
