import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin, GraduationCap, Briefcase, Rocket, ChevronDown,
    Calendar, Award, Sparkles, TrendingUp, ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        id: 1,
        title: 'Zintrix Technologies',
        subtitle: 'Co-Founder',
        duration: '2025 - Present',
        description: 'Co-founded a technology startup focused on delivering innovative digital solutions, web development services, and SaaS products.',
        tags: ['Startup', 'Leadership', 'Full-Stack', 'SaaS'],
        icon: Rocket,
        color: 'amber',
        emoji: '🚀',
        details: 'Leading the technical vision and architecture. Building a team of developers and designers to create cutting-edge products. Focused on scaling the business and establishing a strong market presence.',
    },
    {
        id: 2,
        title: 'Shiksha Salahkar',
        subtitle: 'Full Stack Intern',
        duration: 'Dec 2025 - Mar 2026',
        description: 'Working on real-world projects involving frontend development, API integrations, and responsive UI design for education technology platforms.',
        tags: ['React', 'MongoDB', 'UI/UX', 'Node.js'],
        icon: Briefcase,
        color: 'cyan',
        emoji: '💼',
        details: 'Contributing to production-level codebases, collaborating with cross-functional teams, and improving user-facing features. Gained experience in agile workflows and version control best practices.',
    },
    {
        id: 3,
        title: 'Technocrats Institute of Technology',
        subtitle: 'B.Tech in Computer Science',
        duration: '2022 - 2026',
        description: 'Pursuing a degree in Computer Science & Engineering, specializing in full-stack development, data structures, and modern web technologies.',
        tags: [],
        icon: Award,
        color: 'purple',
        emoji: '🏛️',
        details: 'Built multiple projects, participated in hackathons, and gained expertise in the MERN stack. Focused on building scalable and performant web applications.',
    },
    {
        id: 4,
        title: 'Excellence School, Chhindwara',
        subtitle: 'Higher Secondary (12th)',
        duration: '2020 - 2022',
        description: 'Completed higher secondary education with a strong foundation in Mathematics and Science, laying the groundwork for a career in technology.',
        tags: [],
        icon: GraduationCap,
        color: 'blue',
        emoji: '🎓',
        details: 'Developed a passion for problem-solving and logical thinking. Actively participated in science exhibitions and tech workshops that sparked the journey into software development.',
    },
];

const colorMap = {
    blue: {
        dot: 'bg-blue-500',
        icon: 'text-blue-400',
        iconBg: 'bg-blue-500/10',
        tag: 'bg-blue-500/10 text-blue-300 border-blue-500/15',
        borderHover: 'group-hover:border-blue-500/30',
        gradient: 'from-blue-500/10 via-blue-400/5 to-transparent',
        accentLine: 'from-blue-500 to-blue-400',
        number: 'text-blue-500/20',
    },
    purple: {
        dot: 'bg-purple-500',
        icon: 'text-purple-400',
        iconBg: 'bg-purple-500/10',
        tag: 'bg-purple-500/10 text-purple-300 border-purple-500/15',
        borderHover: 'group-hover:border-purple-500/30',
        gradient: 'from-purple-500/10 via-purple-400/5 to-transparent',
        accentLine: 'from-purple-500 to-purple-400',
        number: 'text-purple-500/20',
    },
    cyan: {
        dot: 'bg-cyan-500',
        icon: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10',
        tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
        borderHover: 'group-hover:border-cyan-500/30',
        gradient: 'from-cyan-500/10 via-cyan-400/5 to-transparent',
        accentLine: 'from-cyan-500 to-cyan-400',
        number: 'text-cyan-500/20',
    },
    amber: {
        dot: 'bg-amber-500',
        icon: 'text-amber-400',
        iconBg: 'bg-amber-500/10',
        tag: 'bg-amber-500/10 text-amber-300 border-amber-500/15',
        borderHover: 'group-hover:border-amber-500/30',
        gradient: 'from-amber-500/10 via-amber-400/5 to-transparent',
        accentLine: 'from-amber-500 to-amber-400',
        number: 'text-amber-500/20',
    },
};

/* ── Zig-Zag SVG path that connects milestones ── */
const ZigZagPath = ({ progressRef, glowRef }) => {
    const pathD = `
    M 50 0
    C 50 80, 85 100, 85 140
    C 85 180, 15 220, 15 260
    C 15 300, 85 340, 85 380
    C 85 420, 15 460, 15 500
    C 15 540, 50 560, 50 600
  `;

    return (
        <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full hidden lg:block"
            width="100"
            viewBox="0 0 100 600"
            preserveAspectRatio="none"
            fill="none"
            style={{ height: '100%' }}
        >
            {/* Dashed background track */}
            <path
                d={pathD}
                stroke="rgba(63,63,70,0.3)"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
            />
            {/* Animated gradient progress */}
            <path
                ref={progressRef}
                d={pathD}
                stroke="url(#zigzagGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                style={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
            />

            <defs>
                <linearGradient id="zigzagGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="30%" stopColor="#06b6d4" />
                    <stop offset="60%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const MilestoneCard = ({ milestone, index, isExpanded, onToggle, total }) => {
    const isLeft = index % 2 === 0;
    const IconComponent = milestone.icon;
    const c = colorMap[milestone.color];


    return (
        <div className={`milestone-item relative flex items-start w-full ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Card */}
            <div className={`w-full lg:w-[44%] ${isLeft ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'}`}>
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className={`group relative bg-zinc-950/60 border border-white/[0.04] ${c.borderHover} rounded-2xl p-5 sm:p-6 lg:p-8 backdrop-blur-2xl transition-all duration-700 cursor-pointer overflow-hidden`}
                    onClick={onToggle}
                >
                    {/* Large background number */}
                    <div className={`absolute -top-4 sm:-top-6 ${isLeft ? '-right-2 sm:-right-3' : '-left-2 sm:-left-3'} text-[5rem] sm:text-[7rem] lg:text-[10rem] font-black leading-none select-none pointer-events-none ${c.number} opacity-20`}>
                        0{milestone.id}
                    </div>

                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.accentLine} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />

                    {/* Side accent — points toward center timeline */}
                    <div className={`absolute top-8 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-8 h-[1px] bg-gradient-to-r ${isLeft ? c.accentLine : c.accentLine} opacity-0 group-hover:opacity-30 transition-opacity duration-700 hidden lg:block`} />

                    {/* Hover gradient wash */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                    {/* Floating particles on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <motion.div
                            animate={{ y: [-2, 2, -2], rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            <Sparkles size={14} className={`${c.icon} opacity-40`} />
                        </motion.div>
                    </div>

                    <div className="relative z-10">
                        {/* Emoji + Duration badge row */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{milestone.emoji}</span>
                                <div className={`flex items-center gap-1.5 ${c.iconBg} border border-white/5 px-3 py-1.5 rounded-full`}>
                                    <Calendar size={10} className={c.icon} />
                                    <span className={`text-[10px] font-mono tracking-wider ${c.icon}`}>{milestone.duration}</span>
                                </div>
                            </div>
                            <motion.button
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 group-hover:bg-white/[0.06] transition-all duration-300"
                            >
                                <ChevronDown size={16} />
                            </motion.button>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-lg sm:text-xl lg:text-[1.4rem] font-black tracking-tight text-white mb-1.5 leading-tight">
                            {milestone.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                            <IconComponent size={14} className={c.icon} />
                            <p className={`text-sm font-semibold ${c.icon}`}>
                                {milestone.subtitle}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[13px] text-zinc-400 leading-relaxed mb-5 max-w-md">
                            {milestone.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {milestone.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`text-[9px] font-mono font-medium px-2.5 py-1 rounded-md border ${c.tag} transition-all duration-300 hover:scale-105`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Expandable Details */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-5 mt-5 border-t border-white/[0.04]">
                                        <div className="flex items-start gap-3">
                                            <div className={`mt-1 w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b ${c.accentLine} opacity-40 shrink-0`} />
                                            <p className="text-[13px] text-zinc-400 leading-relaxed">
                                                {milestone.details}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* CENTER ZIG-ZAG DOT — Desktop */}
            <div className={`hidden lg:flex absolute top-8 z-20 flex-col items-center`}
                style={{
                    left: index % 2 === 0 ? '47%' : '53%',
                    transform: 'translateX(-50%)',
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.4 }}
                    className="relative"
                >
                    {/* Ring */}
                    <div className={`w-7 h-7 rounded-full border-[3px] border-zinc-950 ${c.dot} relative`}>
                        <div className="absolute inset-[3px] rounded-full bg-white/30" />
                    </div>
                </motion.div>
            </div>

            {/* MOBILE timeline dot */}
            <div className="lg:hidden absolute -left-[7px] top-8 sm:top-10 z-20">
                <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${c.dot} border-[3px] border-zinc-950`} />
            </div>
        </div>
    );
};

const CareerJourney = () => {
    const sectionRef = useRef(null);
    const zigzagPathRef = useRef(null);

    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate SVG zig-zag path draw on scroll
            if (zigzagPathRef.current) {
                const pathLength = zigzagPathRef.current.getTotalLength();
                zigzagPathRef.current.style.strokeDasharray = pathLength;
                zigzagPathRef.current.style.strokeDashoffset = pathLength;

                gsap.to(zigzagPathRef.current, {
                    strokeDashoffset: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 45%',
                        end: 'bottom 35%',
                        scrub: 0.6,
                    },
                });
            }


            // Section header reveals
            gsap.from('.career-header-reveal', {
                y: 70,
                opacity: 0,
                stagger: 0.12,
                duration: 1.4,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section
            id="career"
            ref={sectionRef}
            className="relative min-h-screen text-zinc-100 py-24 lg:py-36 overflow-hidden"
        >
            {/* ── Decorative background elements ── */}
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />


            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* ── Section Header with Watermark ── */}
                <div className="mb-20 lg:mb-32 relative">
                    {/* Watermark — like Skills section */}
                    <div className="overflow-hidden">
                        <h1 className="career-header-reveal text-6xl sm:text-7xl lg:text-[15rem] font-black uppercase tracking-tighter leading-none opacity-5 select-none pointer-events-none">
                            Journey
                        </h1>
                    </div>

                    {/* Actual heading overlaid on watermark */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 space-y-6 w-full">
                        <div className="flex items-center gap-3 sm:gap-6 career-header-reveal">
                            <div className="flex items-center gap-2 text-amber-500 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">
                               
                                My Path
                            </div>
                            <div className="h-[1px] flex-1 sm:flex-none sm:w-12 bg-zinc-800" />
                           
                        </div>

                        <h2 className="career-header-reveal text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-normal leading-[0.85] uppercase">
                            Career 
                           
                        </h2>

                        
                    </div>
                </div>

                {/* ── Zig-Zag Timeline ── */}
                <div className="relative">
                    {/* SVG zig-zag path (desktop) */}
                    <ZigZagPath progressRef={zigzagPathRef} />

                    {/* Mobile straight line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1.5px] sm:w-[2px] lg:hidden">
                        <div className="absolute inset-0 border-l-[1.5px] sm:border-l-2 border-dashed border-zinc-800/60" />
                        <div className="absolute inset-0 origin-top bg-gradient-to-b from-amber-500 via-cyan-500 to-blue-500 rounded-full" />
                    </div>

                    {/* Milestone Cards */}
                    <div className="relative pl-6 sm:pl-8 lg:pl-0 space-y-8 sm:space-y-10 lg:space-y-28">
                        {milestones.map((milestone, index) => (
                            <MilestoneCard
                                key={milestone.id}
                                milestone={milestone}
                                index={index}
                                total={milestones.length}
                                isExpanded={expandedId === milestone.id}
                                onToggle={() => toggleExpand(milestone.id)}
                            />
                        ))}
                    </div>

                    {/* Start marker (bottom — represents beginning of journey) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="absolute -bottom-8 left-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-3"
                    >
                        <div className="relative">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 border-4 border-zinc-950" />
                        </div>
                        <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="text-[8px] font-mono text-zinc-500 tracking-[0.4em] uppercase flex items-center gap-1"
                        >
                            Where it began
                            <ArrowRight size={10} className="rotate-90" />
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
