import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import MovingThread from '../partials/MovingThread';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const revealVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { value: '10+', label: 'Projects' },
    { value: '2026', label: 'Grad Year' },
  ];

  return (
    <motion.div
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen relative text-zinc-100 w-full overflow-hidden flex flex-col"
    >
      <MovingThread />

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] sm:text-[18vw] lg:text-[14vw] font-black uppercase tracking-tighter leading-none opacity-[0.02] whitespace-nowrap">
          Samiksha
        </h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative z-10">

        {/* Top eyebrow */}
        <div className="overflow-hidden mb-8 sm:mb-10 lg:mb-14 mt-20 lg:mt-10">
          <motion.div variants={revealVariants} className="flex items-center gap-4">
            <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.5em] text-blue-400 font-bold">
              Hello, Welcome
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
          </motion.div>
        </div>

        {/* Title */}
        <div className="relative z-10 mb-10 sm:mb-12">
          <div className="overflow-hidden">
            <motion.h1
              variants={revealVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[13vh] font-black uppercase tracking-tighter leading-[0.85]"
            >
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Samiksha
              </span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.div variants={revealVariants}>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-700 leading-none">
                MERN Stack Developer.
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">

          {/* Left: Bio */}
          <div className="lg:col-span-5 overflow-hidden z-10">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-zinc-400 max-w-lg">
                I build websites and web apps that look great and work smoothly. I love working with the{' '}
                <span className="text-white font-medium">MERN stack</span> to turn ideas into real, usable products.
              </p>

              {/* Status badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Open to Work
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats cards */}
          <div className="lg:col-span-7 z-10">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] hover:border-blue-500/20 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 transition-all duration-500 overflow-hidden min-w-[120px] sm:min-w-[140px]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Background typewriter */}
          {/* <motion.div
            variants={revealVariants}
            className="absolute right-0 top-[50%] -translate-y-1/2 pointer-events-none select-none text-right hidden lg:block -z-10"
          >
            <h2 className="text-[11vw] font-black uppercase tracking-tighter text-white opacity-[0.08] leading-none">
              <Typewriter
                words={['DEVELOPER', 'DESIGNER', 'ENGINEER', 'CREATIVE']}
                loop={true}
                cursor={false}
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </h2>
          </motion.div> */}
        </div>

        {/* Bottom bar */}
        <div className="overflow-hidden mt-14 sm:mt-20 lg:mt-24 relative z-10">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
            <div className="flex gap-4 sm:gap-6 items-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-10 sm:px-12 py-4 sm:py-5 bg-white text-black text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-500 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/25"
              >
                View My Work
              </motion.a>

              <Link
               
                to="Lets Connect"
                className="px-10 cursor-pointer sm:px-12 py-4 sm:py-5 bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.04] text-zinc-400 hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Lets Connect</span>
                <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
              </Link>

              <div className="hidden md:block h-[1px] w-16 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <div className="flex flex-col items-end gap-2 group cursor-pointer">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em] group-hover:text-blue-400 transition-colors duration-300">
                Scroll Down
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-[1.5px] h-12 sm:h-16 bg-gradient-to-b from-blue-500/60 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;