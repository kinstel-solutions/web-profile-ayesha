import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 100, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagonal border */}
      <path
        d="M100 10 L170 50 L170 130 L100 170 L30 130 L30 50 Z"
        stroke="#d4af37"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
      
      {/* Inner hexagonal shape */}
      <path
        d="M100 25 L160 57.5 L160 122.5 L100 155 L40 122.5 L40 57.5 Z"
        fill="url(#logoGradient)"
        opacity="0.15"
      />
      
      {/* Stylized "A" and "E" integration */}
      {/* Letter A - left side */}
      <path
        d="M70 130 L85 70 L100 70 L85 130 L70 130 Z"
        fill="#d4af37"
      />
      <path
        d="M85 70 L100 70 L115 130 L100 130 L85 70 Z"
        fill="#f4e4c1"
      />
      <rect x="75" y="100" width="35" height="5" fill="#d4af37" />
      
      {/* Letter E - right side stylized */}
      <rect x="110" y="70" width="30" height="8" fill="#f4e4c1" />
      <rect x="110" y="70" width="8" height="60" fill="#d4af37" />
      <rect x="110" y="96" width="25" height="6" fill="#d4af37" />
      <rect x="110" y="122" width="30" height="8" fill="#f4e4c1" />
      
      {/* Gear element - representing mechanical/engineering */}
      <g transform="translate(100, 100)">
        <circle r="15" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const radian = (angle * Math.PI) / 180;
          const x1 = Math.cos(radian) * 12;
          const y1 = Math.sin(radian) * 12;
          const x2 = Math.cos(radian) * 18;
          const y2 = Math.sin(radian) * 18;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#d4af37"
              strokeWidth="2"
              opacity="0.3"
            />
          );
        })}
        <circle r="5" fill="#d4af37" opacity="0.3" />
      </g>
      
      {/* Corner accents */}
      <circle cx="100" cy="15" r="3" fill="#d4af37" />
      <circle cx="165" cy="52" r="2" fill="#f4e4c1" opacity="0.6" />
      <circle cx="165" cy="128" r="2" fill="#f4e4c1" opacity="0.6" />
      <circle cx="100" cy="165" r="3" fill="#d4af37" />
      <circle cx="35" cy="128" r="2" fill="#f4e4c1" opacity="0.6" />
      <circle cx="35" cy="52" r="2" fill="#f4e4c1" opacity="0.6" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4e4c1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
