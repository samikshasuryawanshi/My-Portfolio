import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award, ExternalLink, X, Calendar, Building2,
    Fingerprint, ShieldCheck, Sparkles, BadgeCheck, FileCheck2,
    Trophy, Star, Medal, Crown, Flame, Target, Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const certificates = [
    { id: 1, title: 'Frontend Development', organization: 'Sheryians Coding School', date: 'January 2024', credentialUrl: 'https://drive.google.com/file/d/1-V4in9N_f2-9ie3irb3ceMB_AeGdTsqg/view?usp=drive_link', color: 'blue', icon: '' },
    { id: 2, title: 'Backend Development', organization: 'Sheryians Coding School', date: 'August 2024', credentialUrl: 'https://drive.google.com/file/d/16SSanrwWSwVwV1dZTC1yLoAmqDXFK9rU/view?usp=drive_link', color: 'purple', icon: '' },
    { id: 3, title: 'AWS - Academy Cloud Foundation', organization: 'AWS', date: 'May 2025', credentialUrl: 'https://drive.google.com/file/d/16FGf56jnuU1_IleKBjf8-uoQgGqaIOo7/view?usp=drive_link', color: 'cyan', icon: '' },
];

const badges = [
    { id: 1, title: 'Firebase Studio Developer Community', platform: 'Firebase', earnedDate: 'July 2025', icon: 'https://res.cloudinary.com/dvkzdok8c/image/upload/v1753700985/badge_1_e5tguo.svg', color: 'amber', description: 'Firebase Studio helps you build and ship full-stack traditional and AI-infused apps. Get started quickly right from your browser, increase efficiency with AI assistance throughout the SDLC, and test and iterate to ship high-quality and secure apps.' },
    { id: 2, title: 'Gemini For Data scientists and Analysts', platform: 'Google Cloud', earnedDate: 'July 2025', icon: 'https://cdn.qwiklabs.com/tIzdSNJ3KLuWI77WZgEXriUp5wU6gC4az2ZDUGP03cw%3D', color: 'amber', description: 'Gemini is a powerful AI language model that can help you with a wide range of tasks, from writing code to generating content.' },
    { id: 3, title: 'AWS - Academy Cloud Foundation', platform: 'AWS', earnedDate: 'July 2025', icon: 'https://res.cloudinary.com/dvkzdok8c/image/upload/v1753702767/aws-academy-graduate-aws-academy-cloud-foundations_vrpczx.png', color: 'cyan', description: 'AWS Academy Cloud Foundation is a comprehensive training program that covers the fundamentals of cloud computing and provides hands-on experience with AWS services.' },
];

const hallOfFame = [
    { id: 1, title: 'Frontend Hackathon Winner', event: 'College Hackathon', date: '2024', icon: Trophy, color: 'amber', description: 'Won the frontend hackathon by building a standout web application under time pressure.', credentialUrl: 'https://drive.google.com/file/d/1bApEyrL2UGhqrJyCID9PFuVCZqZYGYeE/view?usp=drive_link', image: '' },
    { id: 2, title: 'Gemified Internship', event: 'Gemified', date: '2025', icon: Star, color: 'cyan', description: 'Completed an internship at Gemified, gaining hands-on experience in real-world software development.', credentialUrl: 'https://drive.google.com/file/d/1gVo56-OZGyciFuei2KknFTMVMbPqUYNb/view?usp=drive_link', image: '' },
];

const colorMap = {
    blue: {
        border: 'hover:border-blue-500/20', icon: 'text-blue-400',
        iconBg: 'bg-blue-500/10 border-blue-500/15', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/15',
        btnHover: 'hover:border-blue-500/30 hover:bg-blue-500/[0.06]', btnActiveGrad: 'from-blue-600 to-blue-500',
        accentLine: 'from-blue-500 to-transparent', dotColor: 'bg-blue-500',
        solid: 'bg-blue-500', solidText: 'text-blue-400',
    },
    purple: {
        border: 'hover:border-purple-500/20', icon: 'text-purple-400',
        iconBg: 'bg-purple-500/10 border-purple-500/15', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/15',
        btnHover: 'hover:border-purple-500/30 hover:bg-purple-500/[0.06]', btnActiveGrad: 'from-purple-600 to-purple-500',
        accentLine: 'from-purple-500 to-transparent', dotColor: 'bg-purple-500',
        solid: 'bg-purple-500', solidText: 'text-purple-400',
    },
    cyan: {
        border: 'hover:border-cyan-500/20', icon: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10 border-cyan-500/15', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
        btnHover: 'hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]', btnActiveGrad: 'from-cyan-600 to-cyan-500',
        accentLine: 'from-cyan-500 to-transparent', dotColor: 'bg-cyan-500',
        solid: 'bg-cyan-500', solidText: 'text-cyan-400',
    },
    amber: {
        border: 'hover:border-amber-500/20', icon: 'text-amber-400',
        iconBg: 'bg-amber-500/10 border-amber-500/15', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/15',
        btnHover: 'hover:border-amber-500/30 hover:bg-amber-500/[0.06]', btnActiveGrad: 'from-amber-600 to-amber-500',
        accentLine: 'from-amber-500 to-transparent', dotColor: 'bg-amber-500',
        solid: 'bg-amber-500', solidText: 'text-amber-400',
    },
};

/* ── Sub-section heading ── */
const SectionDivider = ({ icon: Icon, title, subtitle, count, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 sm:mb-12"
    >
        <div className="flex items-center gap-3 sm:gap-4 mb-3">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${colorMap[color]?.iconBg || 'bg-white/5'} border flex items-center justify-center`}>
                <Icon size={20} className={colorMap[color]?.icon || 'text-zinc-400'} />
            </div>
            <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">{title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">{subtitle}</p>
            </div>
            <div className="ml-auto">
                <span className="text-[10px] sm:text-xs font-mono text-zinc-600 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
                    {count}
                </span>
            </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent" />
    </motion.div>
);

/* ═══════════════════════════════════════════
   CERTIFICATE CARD
   ═══════════════════════════════════════════ */

const CertificateCard = ({ cert, index, onView }) => {
    const c = colorMap[cert.color];
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] ${c.border} rounded-2xl sm:rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
            onClick={() => onView(cert)}
        >
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.accentLine} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

            <div className="relative z-10 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5">
                {/* Top row */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="text-2xl sm:text-3xl">{cert.icon}</span>
                        <div className={`text-[8px] sm:text-[9px] font-mono px-2 sm:px-2.5 py-1 rounded-md border ${c.badge} flex items-center gap-1`}>
                            <ShieldCheck size={9} /> Verified
                        </div>
                    </div>
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center ${c.icon} opacity-30 group-hover:opacity-70 transition-all duration-500`}>
                        <Award size={15} />
                    </div>
                </div>

                {/* Title & Org */}
                <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm">
                        <Building2 size={13} /><span className="font-medium">{cert.organization}</span>
                    </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-600 tracking-wider">
                    <Calendar size={12} /> {cert.date}
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04]" />

                {/* CTA */}
                <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 rounded-xl border border-white/[0.06] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white ${c.btnHover} transition-all duration-500 relative overflow-hidden`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ExternalLink size={13} /> Open Credential
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                </a>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════
   BADGE CARD
   ═══════════════════════════════════════════ */

const BadgeCard = ({ badge, index }) => {
    const c = colorMap[badge.color];
    const isImageIcon = typeof badge.icon === 'string';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] ${c.border} rounded-2xl transition-all duration-500 overflow-hidden`}
        >
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.accentLine} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

            <div className="relative z-10 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden`}>
                        {isImageIcon ? (
                            <img src={badge.icon} alt={badge.title} className="w-8 h-8 sm:w-14 sm:h-14 object-contain" />
                        ) : (
                            <badge.icon size={24} className={c.icon} />
                        )}
                    </div>
                    <div className={`text-[8px] sm:text-[9px] font-mono px-2 sm:px-2.5 py-1 rounded-md border ${c.badge} flex items-center gap-1`}>
                        <BadgeCheck size={9} /> Earned
                    </div>
                </div>

                {/* Title & Platform */}
                <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">{badge.title}</h3>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm">
                        <Building2 size={13} /><span className="font-medium">{badge.platform}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{badge.description}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-600 tracking-wider">
                    <Calendar size={12} /> {badge.earnedDate}
                </div>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════
   HALL OF FAME CARD
   ═══════════════════════════════════════════ */

const HallOfFameCard = ({ item, index }) => {
    const c = colorMap[item.color];
    const IconComp = item.icon;
    const isImageIcon = typeof item.icon === 'string';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] ${c.border} rounded-2xl transition-all duration-500 overflow-hidden`}
        >
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.accentLine} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

            {/* Rank ribbon */}
            <div className={`absolute top-5 -right-8 rotate-45 px-10 py-1 text-[8px] font-mono font-bold uppercase tracking-widest text-black ${c.solid} z-20`}>
                #{index + 1}
            </div>

            {/* Image area */}
            {item.image && (
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                </div>
            )}

            <div className="relative z-10 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${c.iconBg} border flex items-center justify-center shrink-0 overflow-hidden`}>
                        {isImageIcon ? (
                            <img src={item.icon} alt={item.title} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                        ) : (
                            <IconComp size={24} className={c.icon} />
                        )}
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">{item.title}</h3>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm mt-1">
                            <Building2 size={13} /><span className="font-medium truncate">{item.event}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-600 tracking-wider">
                        <Calendar size={12} /> {item.date}
                    </div>
                    <div className={`text-[8px] sm:text-[9px] font-mono px-2 sm:px-2.5 py-1 rounded-md border ${c.badge} flex items-center gap-1`}>
                        <Trophy size={9} /> Achievement
                    </div>
                </div>

                {/* Credential link */}
                <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04]" />
                <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 rounded-xl border border-white/[0.06] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white ${c.btnHover} transition-all duration-500 relative overflow-hidden`}
                >
                    <ExternalLink size={13} /> Open Credential
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                </a>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════
   CREDENTIAL MODAL
   ═══════════════════════════════════════════ */

const CredentialModal = ({ cert, onClose }) => {
    if (!cert) return null;
    const c = colorMap[cert.color];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-lg" />
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full sm:max-w-md bg-zinc-950/95 backdrop-blur-2xl border border-white/[0.06] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r ${c.accentLine} opacity-60`} />

                {/* Mobile drag handle */}
                <div className="sm:hidden flex justify-center pt-3 pb-1">
                    <div className="w-10 h-1 rounded-full bg-zinc-700" />
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-7">
                    <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-all">
                        <X size={16} />
                    </button>

                    <div className="flex items-center gap-4">
                        <span className="text-4xl sm:text-5xl">{cert.icon}</span>
                        <div className={`text-[9px] sm:text-[10px] font-mono px-3 py-1.5 rounded-lg border ${c.badge} flex items-center gap-1.5`}>
                            <BadgeCheck size={12} /> Verified
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">{cert.title}</h3>
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            <Building2 size={14} /><span className="font-medium">{cert.organization}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1.5"><Calendar size={12} />{cert.date}</span>
                        <span className={`flex items-center gap-1.5 ${c.icon}`}><FileCheck2 size={12} />Valid</span>
                    </div>

                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                    <motion.a
                        href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold uppercase text-[11px] tracking-[0.2em] text-white bg-gradient-to-r ${c.btnActiveGrad} transition-all duration-300 relative overflow-hidden`}
                    >
                        <motion.span animate={{ x: ['-200%', '200%'] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <ExternalLink size={16} className="relative z-10" /><span className="relative z-10">Open Credential</span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

const Certificates = () => {
    const sectionRef = useRef(null);
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.milestone-header-reveal', {
                y: 60, opacity: 0, stagger: 0.1, duration: 1.2, ease: 'expo.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="certificates" ref={sectionRef} className="relative text-zinc-100 py-16 sm:py-24 lg:py-36 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">

                {/* ── Section Header ── */}
                <div className="mb-12 sm:mb-16 lg:mb-24 space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-4 sm:gap-6 milestone-header-reveal">
                        <div className="flex items-center gap-2 text-purple-400 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">
                            <Fingerprint size={14} /> Milestones
                        </div>
                        <div className="h-[1px] flex-1 bg-zinc-800/60" />
                    </div>

                    <h2 className="milestone-header-reveal text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                        My{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                            Milestones
                        </span>
                    </h2>

                    <p className="milestone-header-reveal text-sm sm:text-base lg:text-lg text-zinc-500 max-w-xl leading-relaxed">
                        Every certificate earned, badge unlocked, and achievement won along the way.
                    </p>
                </div>

                {/* ── 1. Certificates ── */}
                <div className="mb-16 sm:mb-24">
                    <SectionDivider
                        icon={Award}
                        title="Certificates"
                        subtitle="Courses completed and skills verified"
                        count={`${certificates.length} earned`}
                        color="blue"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {certificates.map((cert, i) => (
                            <CertificateCard key={cert.id} cert={cert} index={i} onView={setSelectedCert} />
                        ))}
                    </div>
                </div>

                {/* ── 2. Badges ── */}
                <div className="mb-16 sm:mb-24">
                    <SectionDivider
                        icon={Medal}
                        title="Badges"
                        subtitle="Earned badges"
                        count={`${badges.length} earned`}
                        color="amber"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {badges.map((badge, i) => (
                            <BadgeCard key={badge.id} badge={badge} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── 3. Hall of Fame ── */}
                <div className="mb-10 sm:mb-16">
                    <SectionDivider
                        icon={Trophy}
                        title="Hall of Fame"
                        subtitle="Competitions"
                        count={`${hallOfFame.length} achievements`}
                        color="purple"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                        {hallOfFame.map((item, i) => (
                            <HallOfFameCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── Bottom summary ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 sm:mt-16 flex flex-wrap hidden sm:block items-center justify-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase"
                >
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500/50" />{certificates.length} Certificates</span>
                    <div className="hidden sm:block h-3 w-[1px] bg-zinc-800" />
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500/50" />{badges.length} Badges</span>
                    <div className="hidden sm:block h-3 w-[1px] bg-zinc-800" />
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500/50" />{hallOfFame.length} Achievements</span>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && <CredentialModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
