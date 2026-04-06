'use client';

interface ScoreCardProps {
  score: number;
  level: string;
}

export default function ScoreCard({ score, level }: ScoreCardProps) {
  const barColor = score >= 70 ? 'bg-green-500' : score >= 40 ? 'bg-yellow-400' : 'bg-red-500';
  const label = score >= 70 ? 'Strong match' : score >= 40 ? 'Partial match' : 'Weak match';

  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="text-5xl font-bold text-gray-900">{score}%</div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
            {level}
          </span>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${barColor} h-3 rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
