import { useRef, useEffect } from "react";

export default function ThreadBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const threads = [
      { phase: 0, speed: 0.05, amplitude: 80, offsetX: 0, offsetY: 0, directionX: 1, directionY: 1 },
      { phase: Math.PI / 2, speed: 0.04, amplitude: 100, offsetX: 0, offsetY: 0, directionX: -1, directionY: 1 },
    ];

    const createThreadGradient = () => {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      // Adjusted threads to be slightly more subtle (Zinc-800/900 feel)
      grad.addColorStop(0, "#3f3f46"); 
      grad.addColorStop(1, "#18181b"); 
      return grad;
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      // Darks shifted closer to #000000 for a deeper look
      gradient.addColorStop(0, "rgba(5, 5, 5, 1)");   
      gradient.addColorStop(0.5, "rgba(10, 10, 10, 1)"); 
      gradient.addColorStop(1, "rgba(8, 8, 8, 1)");    
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawThread = (thread, time) => {
      ctx.beginPath();
      const step = 20;
      for (let i = -200; i <= canvas.width + 200; i += step) {
        const x = i + thread.offsetX;
        const y = (i * 0.5) + thread.offsetY + Math.sin((i + time * thread.speed) * 0.005 + thread.phase) * thread.amplitude;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = createThreadGradient();
      ctx.lineWidth = 1; // Slightly thinner for a cleaner look on dark bg
      ctx.globalAlpha = 0.6; // Soften the threads so they don't look harsh
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    };

    const animate = (time) => {
      drawBackground();

      threads.forEach((thread) => {
        thread.offsetX += thread.directionX * thread.speed;
        thread.offsetY += thread.directionY * thread.speed;

        if (thread.offsetX > 50 || thread.offsetX < -50) {
          thread.directionX *= -1;
        }
        if (thread.offsetY > 50 || thread.offsetY < -50) {
          thread.directionY *= -1;
        }

        drawThread(thread, time);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
}