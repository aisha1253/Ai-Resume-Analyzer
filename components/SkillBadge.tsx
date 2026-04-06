interface SkillBadgeProps {
  skill: string;
  type: 'matched' | 'missing';
}

export default function SkillBadge({ skill, type }: SkillBadgeProps) {
  const isMatched = type === 'matched';
  
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
        isMatched
          ? 'bg-green-50 text-green-700 border border-green-200'
          : 'bg-red-50 text-red-700 border border-red-200'
      }`}
    >
      {isMatched ? '✓' : '+'} {skill}
    </span>
  );
}
