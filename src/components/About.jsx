import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Amoeba from '../partials/Amoeba';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Code2, Download, ArrowUpRight, Fingerprint, Activity, Database, Layout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.reveal-up', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out',
      })
      .from('.scanner-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.5,
        ease: 'power4.inOut'
      }, '-=1')
      .from('.floating-metric', {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
      }, '-=0.5');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id='about' 
      ref={sectionRef}
      className='min-h-screen relative text-zinc-100 flex items-center py-24 overflow-hidden'
    >
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-1/2 left-[-2%] -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[25rem] font-black tracking-tighter leading-none">DEV</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: THE INTEL */}
          <div className='lg:col-span-7 space-y-16'>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 reveal-up">
                <div className="flex items-center gap-2 text-blue-500 font-mono text-[9px] tracking-[0.5em] uppercase">
                  <Fingerprint size={14} className="animate-pulse" />
                  Auth_Status: Admin
                </div>
                <div className="h-[1px] w-12 bg-zinc-800" />
                <div className="text-zinc-500 font-mono text-[9px] tracking-[0.5em] uppercase">
                  Stack_Verified
                </div>
              </div>

              <h1 className='reveal-up text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase'>
                Shipping <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 italic font-extralight uppercase">Excellence.</span>
              </h1>
              <div className="scanner-line h-[1px] w-full bg-gradient-to-r from-blue-600 via-zinc-500 to-transparent opacity-30" />
            </div>

            {/* DEVELOPER SPECIFIC NARRATIVE */}
            <div className='reveal-up space-y-10 max-w-xl'>
              <div className="group relative pl-8 border-l border-zinc-900 hover:border-blue-500 transition-colors duration-500">
                <Layout className="absolute -left-[12px] top-0 text-zinc-800 group-hover:text-blue-500 bg-[#030303] py-1" size={24} />
                <p className='text-lg md:text-xl font-light leading-relaxed text-zinc-400'>
                  Frontend Engineering at <span className="text-white font-medium hover:text-blue-400 transition-colors italic">TIT, Bhopal</span>. I specialize in building <span className="text-blue-400 font-mono text-sm">{"<PixelPerfect />"}</span> interfaces with <span className="text-zinc-100">React & Next.js</span>.
                </p>
              </div>

              <div className="group relative pl-8 border-l border-zinc-900 hover:border-purple-500 transition-colors duration-500">
                <Database className="absolute -left-[12px] top-0 text-zinc-800 group-hover:text-purple-500 bg-[#030303] py-1" size={24} />
                <p className='text-lg md:text-xl font-light leading-relaxed text-zinc-400'>
                  Full-stack capabilities across the <span className="text-purple-400">Node Ecosystem</span>. My focus is on <span className="text-white italic">latency optimization</span> and building robust <span className="text-white underline decoration-zinc-700 underline-offset-4">RESTful/GraphQL</span> architectures.
                </p>
              </div>
            </div>

            <div className="reveal-up flex flex-wrap gap-10 items-center">
                <motion.a
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" 
                }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/14LvvMjFJYTHTaqb8yolFd3xt6f8tLzT8/view"
                className="relative group inline-flex items-center gap-6 px-5 py-3 lg:px-10 lg:py-5 overflow-hidden rounded-2xl border border-white/10 transition-all duration-500"
              >
                {/* 1. ANIMATED GRADIENT MESH BACKGROUND */}
                <div className="absolute inset-0 bg-zinc-950 -z-20" />
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700 -z-10">
                  <div className="absolute inset-[-100%] bg-[radial-gradient(circle_at_center,#3b82f6_0%,#8b5cf6_30%,#000000_70%)] animate-[spin_8s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" />
                </div>

                {/* 2. THE BLUE-PURPLE OVERLAY (SOLID TO TRANSPARENT) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-500 -z-10" />

              
                {/* 4. BUTTON CONTENT */}
                <span className="relative flex items-center gap-3 text-white font-bold uppercase text-[8px]  lg:text-[11px] tracking-[0.4em]">
                  {/* <Fingerprint size={18} className="text-blue-400 group-hover:text-white transition-colors animate-pulse" /> */}
                  <span className="relative">
                    Download Resume
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400" />
                  </span>
                </span>

                <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -24, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4"
                  >
                    <Download size={16} className="text-white" />
                    <Download size={16} className="text-white" />
                  </motion.div>
                </div>

                {/* 5. RADIATING EDGE LIGHT (ROUNDED CORNER GLOW) */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-blue-500/50 transition-colors duration-500" />
              </motion.a>

              
            </div>
          </div>

          {/* RIGHT COLUMN: THE VISUAL CORE */}
          <div className='lg:col-span-5 mt-10 relative flex flex-col items-center justify-center'>
            
            <div className="absolute top-0 right-0 space-y-4 floating-metric hidden lg:block">
              <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md">
                <Activity size={16} className="text-blue-500 mb-2" />
                <div className="text-[10px] font-mono text-zinc-500">Lighthouse_Score</div>
                <div className="text-sm font-bold">100 / 100 / 100</div>
              </div>
            </div>

            <div className='box2 relative transform lg:scale-110'>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 border border-blue-500/20 px-4 py-1 rounded-full bg-black/50 backdrop-blur-md z-20"
              >
                <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest">Runtime_Environment: Stable</span>
              </motion.div>

              <div className="relative">
                <Amoeba />
                <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10 animate-pulse" />
              </div>

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-zinc-900/50 border border-white/5 p-8 rounded-none backdrop-blur-xl space-y-6 w-[280px] shadow-2xl">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[8px] font-mono text-zinc-500 uppercase">Dev_Performance</div>
                    <div className="text-xl font-black italic tracking-tighter">FAST_REBUILD</div>
                  </div>
                  <Terminal className="text-blue-500 opacity-30" size={32} />
                </div>
                
                <div className="relative h-1 w-full bg-zinc-800 overflow-hidden">
                  <motion.div 
                    initial={{ left: '-100%' }}
                    animate={{ left: '100%' }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;