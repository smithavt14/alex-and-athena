import React from 'react';

const StarryBackground = () => {
  const stars = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 0.5 + 0.5;
    const duration = Math.random() * 3 + 4;
    const delay = Math.random() * 3;
    const startingOpacity = Math.random() * 0.3 + 0.2;

    return (
      <circle
        key={i}
        cx={Math.random() * 100 + '%'}
        cy={Math.random() * 100 + '%'}
        r={size}
        fill="#171717"
        opacity={startingOpacity}
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
      id="starry-background"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars}
    </svg>
  );
};

export default StarryBackground;