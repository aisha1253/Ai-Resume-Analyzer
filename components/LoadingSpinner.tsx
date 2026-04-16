'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-mint animate-spin" />
      <p className="text-sm text-white/50">Analyzing with Gemini AI...</p>
    </div>
  );
}
