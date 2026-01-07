import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaJava 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const technicalSkills = [
  { label: 'HTML/CSS', percent: 95, icon: <FaHtml5 />, color: '#ff4d00' },
  { label: 'JavaScript', percent: 85, icon: <FaJsSquare />, color: '#f7df1e' },
  { label: 'React.js', percent: 85, icon: <FaReact />, color: '#00d8ff' },
  { label: 'Next.js', percent: 80, icon: <SiNextdotjs />, color: '#ffffff' },
  { label: 'Tailwind', percent: 90, icon: <SiTailwindcss />, color: '#00b4d8' },
  { label: 'Node.js', percent: 75, icon: <FaNodeJs />, color: '#539e43' },
  { label: 'MongoDB', percent: 70, icon: <SiMongodb />, color: '#13aa52' },
  { label: 'Java Core', percent: 65, icon: <FaJava />, color: '#ed8b00' },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Animation
      gsap.from(".reveal-title", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out"
      });

      // 2. Power-up Progress Bars
      gsap.from(".progress-fill", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
        },
        width: 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.1
      });

      // 3. Card Entrance
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='skills' ref={containerRef} className="relative min-h-screen py-24 px-6 lg:px-20 bg-transparent overflow-hidden text-white">
      
      {/* 1. HEADER: CYBER TYPOGRAPHY */}
      <div className="skills-header mb-32 relative">
        <div className="overflow-hidden">
          <h1 className="reveal-title text-7xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none opacity-5 select-none">
            Expertise
          </h1>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <h2 className="reveal-title text-4xl lg:text-7xl font-bold uppercase flex items-center gap-4">
            Tech <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent italic">Arsenal.</span>
          </h2>
          <div className="h-1 w-24 bg-blue-500 mt-2 rounded-full" />
        </div>
      </div>

      {/* 2. GRID: DATA MODULES */}
      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="skill-card group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div 
              className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
              style={{ background: skill.color }}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <span 
                  className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Efficiency</div>
                  <div className="text-lg font-black font-mono">{skill.percent}%</div>
                </div>
              </div>

              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-zinc-300 group-hover:text-white">
                {skill.label}
              </h3>

              {/* Enhanced Progress Bar */}
              <div className="h-[6px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
                <div 
                  className="progress-fill h-full rounded-full relative"
                  style={{ 
                    width: `${skill.percent}%`, 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}`
                  }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. SOFT ASSETS */}
      <div className="soft-skills">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-blue-500 font-bold">Soft_Capabilities</span>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>
        
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Communication', icon: 'ri-chat-smile-3-line', color: 'blue' },
            { name: 'Problem Solving', icon: 'ri-lightbulb-flash-line', color: 'purple' },
            { name: 'Teamwork', icon: 'ri-team-line', color: 'indigo' },
            { name: 'Leadership', icon: 'ri-command-line', color: 'cyan' },
          ].map((soft, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              className="flex items-center gap-4 px-8 py-4 border border-zinc-800 rounded-xl bg-zinc-950/40 cursor-default"
            >
              <i className={`${soft.icon} text-xl text-${soft.color}-400`} />
              <span className="text-xs font-bold uppercase tracking-widest">{soft.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-10 rounded-full" /> */}
    </section>
  );
};

export default Skills;