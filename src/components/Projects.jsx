import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Fingerprint, Sparkles, Calendar, ArrowUpRight, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    title: 'RapidGoods',
    subtitle: 'Blinkit Clone',
    image: './Blinkit2.png',
    github: 'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-',
    live: 'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'blue',
    description: 'A full-stack grocery delivery app inspired by Blinkit, with real-time order tracking, product search, and a smooth checkout flow.',
  },
  {
    title: 'NutriThy',
    subtitle: 'AI Recipe Finder',
    image: './nutrithy.png',
    github: 'https://github.com/RishabhTomar9/Nutrithy',
    live: 'https://nutrithy.web.app/',
    tech: ['React', 'AI API', 'Firebase'],
    color: 'purple',
    description: 'An AI-powered recipe app that suggests meals based on ingredients you have, with nutritional breakdowns and step-by-step guides.',
  },
  {
    title: 'VibeDrip',
    subtitle: 'Spotify Clone',
    image: './vibedrip.png',
    github: 'https://github.com/samikshasuryawanshi/VibeDrip-SpotifyClone',
    live: 'https://vibedrip-sc.web.app/',
    tech: ['React', 'Firebase', 'Spotify API'],
    color: 'cyan',
    description: 'A music streaming app with playlist management, search, and playback controls — built to feel like the real thing.',
  },
  {
    title: 'MovieHub',
    subtitle: 'Movie Discovery App',
    image: './Untitled design.png',
    github: 'https://github.com/samikshasuryawanshi/MovieApp',
    live: 'https://movie-app-rosy-alpha.vercel.app/',
    tech: ['Next.js', 'TMDB API'],
    color: 'amber',
    description: 'A movie discovery platform with trending lists, search, detailed pages, and responsive design powered by the TMDB API.',
  },
  {
    title: 'Brandium',
    subtitle: 'Agency Landing Page',
    image: './Screenshot (72).png',
    github: 'https://github.com/samikshasuryawanshi/Brandiumm',
    live: 'https://brandiumm.vercel.app/',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    color: 'purple',
    description: 'A sleek, modern agency landing page with smooth animations, responsive layouts, and a premium visual identity.',
  },
  {
    title: 'ShopEase',
    subtitle: 'E-Commerce Store',
    image: './FakeApi.png',
    github: 'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-',
    live: 'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-',
    tech: ['React', 'REST API', 'Tailwind'],
    color: 'cyan',
    description: 'A clean e-commerce storefront with product listings, cart functionality, and dynamic filtering using a REST API.',
  },
];

const colorMap = {
  blue: {
    border: 'hover:border-blue-500/20',
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/15',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/15',
    btnHover: 'hover:border-blue-500/30 hover:bg-blue-500/[0.06]',
    accentLine: 'from-blue-500 to-transparent',
    solid: 'bg-blue-500',
    solidText: 'text-blue-400',
  },
  purple: {
    border: 'hover:border-purple-500/20',
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/15',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/15',
    btnHover: 'hover:border-purple-500/30 hover:bg-purple-500/[0.06]',
    accentLine: 'from-purple-500 to-transparent',
    solid: 'bg-purple-500',
    solidText: 'text-purple-400',
  },
  cyan: {
    border: 'hover:border-cyan-500/20',
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/15',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
    btnHover: 'hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]',
    accentLine: 'from-cyan-500 to-transparent',
    solid: 'bg-cyan-500',
    solidText: 'text-cyan-400',
  },
  amber: {
    border: 'hover:border-amber-500/20',
    icon: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/15',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/15',
    btnHover: 'hover:border-amber-500/30 hover:bg-amber-500/[0.06]',
    accentLine: 'from-amber-500 to-transparent',
    solid: 'bg-amber-500',
    solidText: 'text-amber-400',
  },
};

const ProjectCard = ({ project, index }) => {
  const c = colorMap[project.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] ${c.border} rounded-2xl transition-all duration-500 overflow-hidden`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.accentLine} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

      {/* Floating sparkle on hover */}
      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Sparkles size={14} className={`${c.icon} opacity-40`} />
        </motion.div>
      </div>

      {/* Image */}
      <div className="relative w-full h-44 sm:h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Live preview CTA on hover */}
        {project.live && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-md text-black w-12 h-12 rounded-full flex items-center justify-center shadow-2xl"
            >
              <ArrowUpRight size={20} />
            </motion.a>
          </div>
        )}

        {/* Project number badge */}
        <div className="absolute top-3 right-3">
          <div className={`text-[8px] sm:text-[9px] font-mono px-2 sm:px-2.5 py-1 rounded-md border backdrop-blur-md ${c.badge} flex items-center gap-1`}>
            <Code2 size={9} /> #{String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="relative z-10 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5">
        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm">
            <Layers size={13} />
            <span className="font-medium">{project.subtitle}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-[8px] sm:text-[9px] font-mono font-medium px-2 sm:px-2.5 py-1 rounded-md border ${c.badge} transition-all duration-300 hover:scale-105`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04]" />

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 rounded-xl border border-white/[0.06] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white ${c.btnHover} transition-all duration-500 relative overflow-hidden`}
          >
            <Github size={13} /> Source Code
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 rounded-xl border border-white/[0.06] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white ${c.btnHover} transition-all duration-500 relative overflow-hidden`}
            >
              <ExternalLink size={13} /> Live Demo
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-header-reveal', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative text-zinc-100 py-16 sm:py-24 lg:py-36 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-15 relative z-10">

        {/* ── Section Header with Watermark ── */}
        <div className="mb-12 sm:mb-16 lg:mb-24 relative">
          {/* Watermark */}
          <div className="overflow-hidden">
            <h1 className="project-header-reveal text-6xl sm:text-7xl lg:text-[15rem] font-black uppercase tracking-tighter leading-none opacity-5 select-none pointer-events-none">
              Projects
            </h1>
          </div>

          {/* Heading over watermark */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 space-y-4 sm:space-y-6 w-full">
            <div className="flex items-center gap-4 sm:gap-6 project-header-reveal">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">
                <Fingerprint size={14} /> My Work
              </div>
              <div className="h-[1px] flex-1 bg-zinc-800/60" />
            </div>

            <h2 className="project-header-reveal text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Projects
              </span>
            </h2>

            <p className="project-header-reveal text-sm sm:text-base lg:text-lg text-zinc-500 max-w-xl leading-relaxed">
              A collection of projects I've built — from full-stack apps to polished landing pages.
            </p>
          </div>
        </div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {ProjectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* ── Bottom summary (matching Certificates) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            {ProjectsData.filter(p => p.color === 'blue').length} Full-Stack
          </span>
          <div className="hidden sm:block h-3 w-[1px] bg-zinc-800" />
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
            {ProjectsData.filter(p => p.color === 'purple').length} UI/Frontend
          </span>
          <div className="hidden sm:block h-3 w-[1px] bg-zinc-800" />
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
            {ProjectsData.filter(p => p.color === 'cyan').length} API-Driven
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;