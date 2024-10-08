import React from 'react';

const StarryBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 0.5 + 0.5; // 0.5 - 1.0 size
    const duration = Math.random() * 3 + 4; // 4-7 seconds duration
    const delay = Math.random() * 3; // Spread out initial delay
    const startingOpacity = Math.random() * 0.3 + 0.2; // 0.2-0.5 opacity

    return (
      <circle
        key={i}
        cx={Math.random() * 100 + '%'}
        cy={Math.random() * 100 + '%'}
        r={size}
        fill="#fff"
        opacity={startingOpacity} // Start with minimum opacity
      >
        <animate
          attributeName="opacity"
          values={`${startingOpacity}; ${0}; ${1}; ${startingOpacity}`}
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`-${delay}s`}
        />
      </circle>
    );
  });

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars}
    </svg>
  );
};

export default StarryBackground;