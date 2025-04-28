import React, { useEffect, useRef, useState } from "react";
import { Noise } from "noisejs";

const noise = new Noise(Math.random());

const createPoints = (count, radius) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    points.push({
      angle,
      baseRadius: radius,
      noiseOffset: Math.random() * 1000,
    });
  }
  return points;
};

const generateSmoothPath = (points, time) => {
  const centerX = 200;
  const centerY = 200;
  const coords = points.map((point) => {
    const noiseValue = noise.perlin2(point.noiseOffset, time);
    const radius = point.baseRadius + noiseValue * 40; // wobbliness
    return {
      x: centerX + Math.cos(point.angle) * radius,
      y: centerY + Math.sin(point.angle) * radius,
    };
  });

  let d = `M ${coords[0].x} ${coords[0].y} `;

  for (let i = 0; i < coords.length; i++) {
    const p1 = coords[i];
    const p2 = coords[(i + 1) % coords.length];
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    d += `Q ${p1.x} ${p1.y} ${midX} ${midY} `;
  }

  d += "Z";
  return d;
};

const Amoeba = () => {
  const [time, setTime] = useState(0);
  const pointsRef = useRef(createPoints(40, 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.006);
    }, 16); // 60fps
    return () => clearInterval(interval);
  }, []);

  const pathData = generateSmoothPath(pointsRef.current, time);

  return (
    <div className="flex relative items-start justify-end h-[55vh] bg-transparent">
      <img className="z-9 absolute top-[35%] left-[30%] h-[30vh] " src="./profile.png" alt="svg" />

      <svg viewBox="0 0 400 400" width="400" height="400">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" /> {/* blue */}
            <stop offset="100%" stopColor="#A78BFA" /> {/* purple */}
          </linearGradient>
        </defs>

        <path
          d={pathData}
          fill="url(#gradient)"
          stroke="none"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Amoeba;
