'use client';

interface ScoreCardProps {
  score: number;
  level: string;
}

export default function ScoreCard({ score, level }: ScoreCardProps) {
  const barColor = score >= 70 ? 'bg-mint' : score >= 40 ? 'bg-blue' : 'bg-red-400';
  const label = score >= 70 ? 'Strong match' : score >= 40 ? 'Partial match' : 'Weak match';

  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="text-5xl font-bold text-white">{score}%</div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue/20 text-blue border border-blue/30 mb-2">
            {level}
          </span>
          <p className="text-sm text-white/60">{label}</p>
        </div>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3">
        <div
          className={`${barColor} h-3 rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
