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
          ? 'bg-mint/15 text-mint border border-mint/30'
          : 'bg-blue/15 text-blue border border-blue/30'
      }`}
    >
      {isMatched ? '✓' : '+'} {skill}
    </span>
  );
}
