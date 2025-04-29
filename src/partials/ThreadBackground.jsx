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
      grad.addColorStop(0, "#4b4b56"); // Zinc-600 for thread color
      grad.addColorStop(1, "#2f2f37"); // Zinc-700 for thread color
      return grad;
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(17, 17, 17, 1)");
      gradient.addColorStop(0.5, "rgba(22, 22, 22, 1)");
      gradient.addColorStop(1, "rgba(23, 23, 23, 1)");
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
      ctx.strokeStyle = createThreadGradient(); // Use Zinc-600 to Zinc-700 for threads
      ctx.lineWidth = 1.5; // lighter thread
      ctx.stroke();
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
