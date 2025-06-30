import React from 'react';

export const HoneycombPattern: React.FC<{ opacity?: number; className?: string }> = ({ 
  opacity = 0.05, 
  className = '' 
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="honeycomb"
          x="0"
          y="0"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="28,0 56,16.5 56,49.5 28,66 0,49.5 0,16.5"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="0.5"
            opacity={opacity}
          />
          <polygon
            points="28,66 56,82.5 56,115.5 28,132 0,115.5 0,82.5"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="0.5"
            opacity={opacity}
          />
          <polygon
            points="84,33 112,49.5 112,82.5 84,99 56,82.5 56,49.5"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="0.5"
            opacity={opacity}
          />
        </pattern>
        <linearGradient id="honeycombGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" stopOpacity={opacity} />
          <stop offset="100%" stopColor="#FED7AA" stopOpacity={opacity * 0.8} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  );
};

export const HoneycombAccent: React.FC<{ 
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  size?: 'small' | 'medium' | 'large';
}> = ({ 
  position = 'bottom-left',
  size = 'small' 
}) => {
  const sizeMap = {
    small: { width: 200, height: 200, hexSize: 30 },
    medium: { width: 300, height: 300, hexSize: 35 },
    large: { width: 400, height: 400, hexSize: 40 }
  };

  const positionMap = {
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0'
  };

  const { width, height, hexSize } = sizeMap[size];
  const hexHeight = hexSize * 2;
  const hexWidth = hexSize * 1.732;
  const verticalSpacing = hexHeight * 0.75;
  const horizontalSpacing = hexWidth;

  // Create organic pattern similar to kitchen tiles
  const hexagons: React.ReactElement[] = [];
  const patterns = {
    small: [
      { row: 0, col: 0, opacity: 0.12 },
      { row: 0, col: 1, opacity: 0.10 },
      { row: 1, col: 0.5, opacity: 0.08 },
      { row: 1, col: 1.5, opacity: 0.06 },
      { row: 2, col: 1, opacity: 0.04 },
    ],
    medium: [
      { row: 0, col: 0, opacity: 0.12 },
      { row: 0, col: 1, opacity: 0.10 },
      { row: 0, col: 2, opacity: 0.08 },
      { row: 1, col: 0.5, opacity: 0.10 },
      { row: 1, col: 1.5, opacity: 0.08 },
      { row: 1, col: 2.5, opacity: 0.06 },
      { row: 2, col: 0, opacity: 0.08 },
      { row: 2, col: 1, opacity: 0.06 },
      { row: 2, col: 2, opacity: 0.04 },
    ],
    large: [
      { row: 0, col: 0, opacity: 0.12 },
      { row: 0, col: 1, opacity: 0.10 },
      { row: 0, col: 2, opacity: 0.08 },
      { row: 0, col: 3, opacity: 0.06 },
      { row: 1, col: 0.5, opacity: 0.10 },
      { row: 1, col: 1.5, opacity: 0.08 },
      { row: 1, col: 2.5, opacity: 0.06 },
      { row: 1, col: 3.5, opacity: 0.04 },
      { row: 2, col: 0, opacity: 0.08 },
      { row: 2, col: 1, opacity: 0.06 },
      { row: 2, col: 2, opacity: 0.04 },
      { row: 2, col: 3, opacity: 0.02 },
      { row: 3, col: 0.5, opacity: 0.06 },
      { row: 3, col: 1.5, opacity: 0.04 },
      { row: 3, col: 2.5, opacity: 0.02 },
    ]
  };

  const pattern = patterns[size] || patterns.small;

  pattern.forEach((hex, index) => {
    const x = hex.col * horizontalSpacing + hexSize;
    const y = hex.row * verticalSpacing + hexSize;
    
    // Create hexagon points
    const points = [
      [x, y - hexSize],
      [x + hexWidth/2, y - hexSize/2],
      [x + hexWidth/2, y + hexSize/2],
      [x, y + hexSize],
      [x - hexWidth/2, y + hexSize/2],
      [x - hexWidth/2, y - hexSize/2],
    ].map(([px, py]) => `${px},${py}`).join(' ');

    hexagons.push(
      <polygon
        key={index}
        points={points}
        fill="#FBBf24"
        opacity={hex.opacity}
      />
    );
  });

  return (
    <div className={`absolute ${positionMap[position]} pointer-events-none`} 
         style={{ width: `${width}px`, height: `${height}px` }}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: position.includes('right') ? 'scaleX(-1)' : 'none',
        }}
      >
        {hexagons}
      </svg>
    </div>
  );
};

export const HexagonFrame: React.FC<{ 
  children: React.ReactNode;
  size?: number;
  className?: string;
}> = ({ 
  children, 
  size = 200,
  className = '' 
}) => {
  // Create a unique ID for each instance to avoid conflicts
  const clipId = `hexClip-${size}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Perfect hexagon proportions
  // For a regular hexagon: height = width * 2/√3 ≈ width * 1.1547
  const hexWidth = size;
  const hexHeight = size * 1.1547;
  const containerHeight = hexHeight;
  
  // Calculate perfect hexagon points
  const points = [
    [hexWidth * 0.5, 0],                    // Top
    [hexWidth, hexHeight * 0.25],           // Top right
    [hexWidth, hexHeight * 0.75],           // Bottom right
    [hexWidth * 0.5, hexHeight],            // Bottom
    [0, hexHeight * 0.75],                  // Bottom left
    [0, hexHeight * 0.25],                  // Top left
  ].map(([x, y]) => `${x},${y}`).join(' ');
  
  return (
    <div className={`relative ${className}`} style={{ width: hexWidth, height: containerHeight }}>
      {/* Hexagon mask for the image */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${hexWidth} ${hexHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <polygon points={points} />
          </clipPath>
        </defs>
      </svg>
      
      {/* Content with hexagon clip */}
      <div 
        className="w-full h-full flex items-center justify-center overflow-hidden"
        style={{ 
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`
        }}
      >
        {children}
      </div>
      
      {/* Hexagon border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${hexWidth} ${hexHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={points}
          fill="none"
          stroke="#FBBf24"
          strokeWidth="2"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};