import React from 'react';

const MovingThread = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden -z-10">
      <div className="relative flex w-[200%] h-full animate-wave">
        <svg
          className="w-1/2 h-full s"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6C63FF"
            fillOpacity="0.4"
            d="M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6C63FF"
            fillOpacity="0.4"
            d="M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MovingThread;
