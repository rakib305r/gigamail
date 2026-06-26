export default function ScoreRing({ score, size = 80 }) {
  const r = size * 0.38
  const cx = size / 2
  const cy = size / 2
  const circumference = 2 * Math.PI * r
  const progress = (score / 100) * circumference
  const gap = circumference - progress

  const color = score >= 75 ? 'var(--success)' : score >= 50 ? 'var(--warning)' : 'var(--danger)'

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`Score: ${score} out of 100`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--surface-2)" strokeWidth={size * 0.08} />
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke={color}
        strokeWidth={size * 0.08}
        strokeDasharray={`${progress} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: 'stroke-dasharray 0.6s ease' }}
      />
      <text
        x={cx} y={cy}
        textAnchor="middle" dominantBaseline="central"
        fontSize={size * 0.22} fontWeight="600"
        fill="var(--text)"
        fontFamily="'Plus Jakarta Sans', sans-serif"
      >
        {score}
      </text>
    </svg>
  )
}
