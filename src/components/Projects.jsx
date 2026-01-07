import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Code2, Play, ExternalLink, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    title: 'RapidGoods - Blinkit Clone',
    image: './Blinkit2.png',
    link: 'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-',
    videoLink: 'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-',
    tech: 'MERN Stack'
  },
  {
    title: 'NutriThy - Recipe AI App',
    image: './nutrithy.png',
    link: 'https://github.com/RishabhTomar9/Nutrithy',
    videoLink: 'https://nutrithy.web.app/',
    tech: 'React / AI API'
  },
  {
    title: 'VibeDrip - Spotify Clone',
    image: './vibedrip.png',
    link: 'https://github.com/samikshasuryawanshi/VibeDrip-SpotifyClone',
    videoLink: 'https://vibedrip-sc.web.app/',
    tech: 'React / Firebase'
  },
  {
    title: 'Movie App',
    image: './Untitled design.png',
    link: 'https://github.com/samikshasuryawanshi/MovieApp',
    videoLink: 'https://movie-app-rosy-alpha.vercel.app/',
    tech: 'Next.js'
  },
  {
    title: 'Brandium',
    image: './Screenshot (72).png',
    link: 'https://github.com/samikshasuryawanshi/Brandiumm',
    videoLink: 'https://brandiumm.vercel.app/',
    tech: 'UI/UX'
  },
  {
    title: 'E-commerce Store',
    image: './FakeApi.png',
    link: 'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-',
    videoLink: 'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-',
    tech: 'REST API'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.from(".reveal-up", {
        scrollTrigger: {
          trigger: ".project-header",
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      });

      // 2. Project Card Stagger
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out"
      });

      // 3. NEW: Background Text Parallax Animation
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2, // Smooth follow
        },
        x: -200, // Moves left as you scroll down
        ease: "none"
      });

      // 4. NEW: Protocol Watermark Animation
      gsap.from(".protocol-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          scrub: 1,
        },
        x: 300,
        opacity: 0,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id='projects' 
      ref={containerRef} 
      className='min-h-screen relative overflow-hidden projectSection text-white lg:p-20 p-6 bg-transparent'
    >
      {/* --- BACKGROUND TEXT LAYERS --- */}
      
      {/* 1. Main Parallax Watermark */}
      <div 
        ref={bgTextRef}
        className="absolute top-[10%] left-[10%] whitespace-nowrap opacity-[0.03] text-[25vw] font-black pointer-events-none select-none -z-10 leading-none"
      >
        WORKS // 2026
      </div>


      {/* --- CONTENT SECTION --- */}

      <div className="project-header mb-20">
        <div className="flex items-center gap-4 mb-4">
          <Code2 className="text-blue-500 animate-pulse" size={20} />
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">Archive_System.v2</span>
        </div>
        <div className="overflow-hidden">
          <h1 className='reveal-up lg:text-8xl text-4xl font-black uppercase tracking-tighter leading-none'>
            Project <br /> <span className="text-zinc-700 italic font-light">Showcase.</span>
          </h1>
        </div>
      </div>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className='project-card group relative flex flex-col bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm'
          >
            <div className="relative w-full h-72 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out' 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  onClick={() => window.open(project.videoLink, '_blank')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play size={24} fill="black" />
                </motion.button>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 border border-white/10 rounded-full backdrop-blur-md">
                <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-300">{project.tech}</span>
              </div>
            </div>

            <div className='p-6 flex flex-col gap-4 flex-grow'>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h2 className='text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors'>
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Box size={10} className="text-zinc-600" />
                    <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em]">Deployment_Stable</span>
                  </div>
                </div>
                <motion.a 
                  href={project.link} 
                  target="_blank"
                  whileHover={{ rotate: 45, backgroundColor: '#3b82f6' }}
                  className='bg-zinc-800/50 p-3 rounded-xl border border-white/5'
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
              <div className="h-[1px] w-full bg-zinc-800 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-1/2"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;