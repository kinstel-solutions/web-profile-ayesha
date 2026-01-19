import React from 'react';

// Hexagon Pattern SVG
export const HexagonPattern = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
          <polygon points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87" 
                   fill="none" 
                   stroke="#d4af37" 
                   strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

// Geometric Triangles
export const TrianglePattern = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="triangles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 60 L30 0 L60 60 Z" fill="none" stroke="#d4af37" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#triangles)" />
    </svg>
  </div>
);

// Radial Gradient Overlay
export const RadialGoldGradient = ({ opacity = 0.15 }: { opacity?: number }) => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, ${opacity}) 0%, transparent 70%)`,
    }}
  />
);

// Corner Ornaments (Gold Accents)
export const CornerOrnaments = () => (
  <>
    {/* Top Left */}
    <div className="absolute top-0 left-0 w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M 0 0 L 100 0 L 0 100 Z" fill="url(#goldGradient)" opacity="0.3"/>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4e4c1" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-32 h-32 rotate-180">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M 0 0 L 100 0 L 0 100 Z" fill="url(#goldGradient2)" opacity="0.3"/>
        <defs>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4e4c1" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </>
);

// Diagonal Lines Pattern
export const DiagonalLines = ({ direction = 'right' }: { direction?: 'left' | 'right' }) => {
  const angle = direction === 'right' ? '45deg' : '-45deg';
  return (
    <div 
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage: `repeating-linear-gradient(
          ${angle},
          transparent,
          transparent 15px,
          #d4af37 15px,
          #d4af37 16px
        )`
      }}
    />
  );
};

// Large Gold Circle Decoration
export const CircleDecoration = ({ 
  size = 400, 
  top, 
  left, 
  right, 
  bottom,
  opacity = 0.1 
}: { 
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}) => (
  <div 
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, rgba(212, 175, 55, ${opacity}) 0%, transparent 70%)`,
      top,
      left,
      right,
      bottom,
      transform: 'translate(-50%, -50%)',
    }}
  />
);

// Grid Pattern
export const GridPattern = () => (
  <div className="absolute inset-0 pattern-grid pointer-events-none opacity-30" />
);

// Dot Pattern
export const DotPattern = () => (
  <div className="absolute inset-0 pattern-dots pointer-events-none opacity-40" />
);
