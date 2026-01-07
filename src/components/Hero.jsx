import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import MovingThread from '../partials/MovingThread';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const revealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.div 
      id='home' 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-screen relative text-zinc-100 w-full px-6 lg:px-24 flex flex-col justify-center bg-transparent overflow-hidden'
    >
      <MovingThread />

      {/* 1. LAYER: TOP IDENTIFIER */}
      <div className="overflow-hidden lg:mb-12 mb-10 lg:mt-10 mt-20">
        <motion.div variants={revealVariants} className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-blue-500 font-bold">
            Protocol_01 // Interface_Active
          </span>
        </motion.div>
      </div>

      {/* 2. LAYER: MAIN TITLE BLOCK */}
      <div className="relative z-10">
        <div className="overflow-hidden">
          <motion.h1 
            variants={revealVariants}
            className='text-6xl md:text-8xl lg:text-[15vh] font-black uppercase tracking-tighter leading-[0.85]'
          >
            I  AM <br />
            <span className='italic font-extralight bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent'>
              SAMIKSHA
            </span>
          </motion.h1>
        </div>
      </div>

      {/* 3. LAYER: ASYMMETRIC CONTENT & DYNAMIC WATERMARK */}
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center relative'>
        
        {/* Left Side: Description */}
        <div className="lg:col-span-5 overflow-hidden z-10">
          <motion.div variants={revealVariants} className="border-l-2 border-blue-500/30 pl-8 space-y-6">
            <p className='text-base lg:text-xl font-light leading-relaxed text-zinc-400 max-w-md'>
              Crafting high-performance digital environments. Specializing in the 
              <span className="text-white"> MERN ecosystem</span> to bridge the gap between clean engineering and human design.
            </p>
            
            <div className='text-blue-500 font-mono text-sm tracking-widest flex items-center gap-2'>
              <span className="animate-pulse">●</span> 
              DEPLOYING_EXCELLENCE.EXE
            </div>
          </motion.div>
        </div>

        {/* The "Legendary" Background Typewriter - Replacing Static Developer/Typo Text */}
        <motion.div 
          variants={revealVariants}
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-right hidden lg:block"
        >
          <h2 className="text-[11vw] font-black uppercase tracking-tighter text-white opacity-[0.03] leading-none">
            <Typewriter
              words={['DEVELOPER', 'DESIGNER', 'ENGINEER', 'CREATIVE']}
              loop={true}
              cursor={false}
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </h2>
        </motion.div>
      </div>

      {/* 4. LAYER: ACTIONS */}
      <div className="overflow-hidden mt-24 relative z-10">
        <motion.div variants={revealVariants} className='flex flex-col md:flex-row gap-10 items-center justify-between w-full'>
          <div className="flex gap-6 items-center">
            <motion.a 
              whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-700 shadow-2xl shadow-blue-500/20"
            >
              Initialize_Projects
            </motion.a>
            
            <div className="hidden md:block h-[1px] w-24 bg-zinc-800" />
          </div>

          <div className="flex flex-col items-end gap-2 group cursor-pointer">
             <span className="text-[9px] font-mono text-zinc-100 uppercase tracking-[0.4em] group-hover:text-blue-500 transition-colors">Scroll_Down_To_Analyze</span>
             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[2px] h-16 bg-gradient-to-b from-blue-500 to-transparent"
             />
          </div>
        </motion.div>
      </div>

      {/* Subtle Glow Polish */}
      {/* <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full -z-10" /> */}
    </motion.div>
  );
};

export default Hero;