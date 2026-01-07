import React, { useEffect, useRef, useState } from "react";
import { Noise } from "noisejs";
import { motion } from "framer-motion";

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
  // Using 200/200 as the center of a 400x400 viewBox
  const centerX = 200;
  const centerY = 200;
  const coords = points.map((point) => {
    const noiseValue = noise.perlin2(point.noiseOffset, time);
    // Base radius 100 + noise (max 40) ensures we stay within the 400x400 box (200 + 140 < 400)
    const radius = point.baseRadius + noiseValue * 40; 
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
  const pointsRef = useRef(createPoints(30, 100)); // Fewer points = smoother mobile performance
  const requestRef = useRef();

  const animate = () => {
    setTime((t) => t + 0.008);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const pathData = generateSmoothPath(pointsRef.current, time);

  return (
    /* RESPONSIVE WRAPPER:
       Mobile: h-[40vh]
       Desktop: max-w-[450px] aspect-square
    */
    <div className="relative flex justify-center items-center w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-square mx-auto">
      
      {/* PROFILE IMAGE: Scaled to fit inside the 100-radius blob */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 w-[55%] h-[55%] flex justify-center items-center pointer-events-none"
      >
        <img 
          className="w-full h-full object-contain drop-shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-500" 
          src="./profile.png" 
          alt="profile" 
        />
      </motion.div>

      {/* SVG: Uses preserveAspectRatio to prevent stretching bugs */}
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full filter drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="amoebaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          
          {/* Blur filter for organic liquid effect */}
          <filter id="liquid-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d={pathData}
          fill="url(#amoebaGrad)"
          filter="url(#liquid-glow)"
          className="opacity-90"
        />
      </svg>

      {/* Background ambient glow that scales with the container */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full -z-10 animate-pulse" />
    </div>
  );
};

export default Amoeba;