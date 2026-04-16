'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAnalyze } from '@/hooks/useAnalyze';
import ScoreCard from '@/components/ScoreCard';
import SkillBadge from '@/components/SkillBadge';
import { Loader2, Upload, FileText, X, ArrowLeft } from 'lucide-react';
import { extractTextFromFile } from '@/lib/fileParser';

export default function Home() {
  const router = useRouter();
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { result, loading, error, analyze, reset } = useAnalyze();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['.pdf', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValidType = validTypes.some(ext => fileName.endsWith(ext));
    
    if (!isValidType) {
      alert('Please upload a PDF or Word (.docx) file');
      return;
    }

    setIsExtracting(true);
    setUploadedFile(file);

    try {
      const extractedText = await extractTextFromFile(file);
      setResumeText(extractedText);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to extract text from file');
      setUploadedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } finally {
      setIsExtracting(false);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    setResumeText('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analyze(resumeText, jobDescription);
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-navy sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <FileText size={24} />
            <span className="text-xl font-semibold">SkillSync AI</span>
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium border border-white/10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white text-center">
              Analyze Your Resume
            </h1>
            <p className="text-white/60 mt-2 text-center">
              Paste or upload your resume and a job description — Gemini AI will analyze the match
            </p>
          </div>

          {/* FORM SECTION - show only when result is null */}
        {result === null && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Your Resume
                  </label>
                  
                  {/* File Upload Section */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        disabled={isExtracting}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm font-medium border ${
                          uploadedFile
                            ? 'bg-mint/10 text-mint border-mint'
                            : 'bg-navy text-white border-mint/40 hover:border-mint hover:bg-mint/10'
                        }`}
                      >
                        {isExtracting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Extracting...
                          </>
                        ) : (
                          <>
                            <Upload size={16} />
                            {uploadedFile ? 'File Loaded' : 'Upload Resume'}
                          </>
                        )}
                      </label>
                      {uploadedFile && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-mint/10 text-mint rounded-lg text-sm border border-mint/30">
                          <FileText size={14} />
                          <span className="max-w-[150px] truncate">{uploadedFile.name}</span>
                          <button
                            type="button"
                            onClick={clearFile}
                            className="text-mint hover:text-mint/80"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-white/40 mt-1">
                      Supported formats: PDF, Word (.docx)
                    </p>
                  </div>

                  {/* Text Area */}
                  <textarea
                    rows={12}
                    placeholder="Paste your full resume text here or upload a file..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none focus:ring-2 focus:ring-mint/40 focus:border-mint/40 resize-none placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Job Description
                  </label>
                  <textarea
                    rows={12}
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none focus:ring-2 focus:ring-mint/40 focus:border-mint/40 resize-none placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 border-t border-white/10"></div>
                <span className="text-white/40 text-sm">or paste manually</span>
                <div className="flex-1 border-t border-white/10"></div>
              </div>

              {/* Error display */}
              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mt-2">
                  {error}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-mint text-navy rounded-xl py-3 text-sm font-semibold hover:bg-mint/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-medium text-white mb-3">
                  Matched Skills ({result.matchedSkills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.matchedSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="matched" />
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-medium text-white mb-3">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-medium text-white mb-3">
                AI Suggestions to Improve
              </h3>
              <ol className="space-y-2">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex gap-3 text-sm text-white/70">
                    <span className="text-mint font-medium">
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
              className="w-full border border-white/10 rounded-xl py-3 text-sm text-white/60 hover:bg-white/5 transition-colors"
            >
              ← Analyze Another Resume
            </button>
          </div>
        )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-white/30 text-sm">
            Built with Next.js, Gemini AI, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
