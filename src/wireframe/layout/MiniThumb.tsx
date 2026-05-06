import React from "react";

interface MiniThumbProps {
  color: string;
  variant?: number;
}

// Decorative SVG thumbnail rendered behind project cards / detail covers.
export const MiniThumb: React.FC<MiniThumbProps> = ({ color, variant = 0 }) => {
  const v = ((variant % 4) + 4) % 4;
  const id = `mg${v}-${color.replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={id}>
          <stop offset="0%"   stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="var(--bg-elevated)" />
      <circle cx="100" cy="80" r="80" fill={`url(#${id})`} />
      <g transform={`translate(100, 80) rotate(${v * 15})`}>
        {v === 0 && (
          <>
            <polygon points="0,-40 35,-12 22,30 -22,30 -35,-12" stroke={color} strokeWidth="1.2" fill="none" />
            <ellipse cx="0" cy="0" rx="60" ry="22" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="4" fill={color} />
          </>
        )}
        {v === 1 && (
          <>
            <rect x="-30" y="-30" width="60" height="60" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(15)" />
            <rect x="-22" y="-22" width="44" height="44" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="6" fill={color} opacity="0.7" />
          </>
        )}
        {v === 2 && (
          <>
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={i} x1="-40" y1={-21 + i * 7} x2="40" y2={-21 + i * 7 + 4}
                stroke={color} strokeWidth="0.8" opacity={0.3 + i * 0.1} />
            ))}
            <circle cx="0" cy="0" r="5" fill={color} />
          </>
        )}
        {v === 3 && (
          <>
            <circle cx="0" cy="0" r="40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="25" stroke={color} strokeWidth="1.2" fill="none" />
            <circle cx="0" cy="0" r="10" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.3" />
          </>
        )}
      </g>
      {Array.from({ length: 20 }).map((_, i) => {
        const x = ((i * 37) % 180) + 10;
        const y = ((i * 53) % 180) + 10;
        return <circle key={i} cx={x} cy={y} r={0.8} fill={color} opacity={0.4} />;
      })}
    </svg>
  );
};

export default MiniThumb;
