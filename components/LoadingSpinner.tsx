'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-gray-800 animate-spin" />
      <p className="text-sm text-gray-500">Analyzing with Gemini AI...</p>
    </div>
  );
}
