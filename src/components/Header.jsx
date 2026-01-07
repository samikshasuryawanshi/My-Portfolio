import React, { useState, useEffect } from 'react';
import Nav from '../partials/Nav';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [openNav, setopenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About Me', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <header
      className={`fixed  top-0 left-0 w-full z-[9999] transition-all duration-500 px-4 lg:py-4 py-4 sm:px-10  ${
        isScrolled 
          ? "lg:h-[10vh] h-[10vh] bg-black/60 backdrop-blur-xl shadow-3xl" 
          : "lg:h-[10vh] h-[10vh] bg-transparent"
      } flex items-center text-white`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* LOGO ANIMATION */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent lg:italic ">
            Portfolio
          </span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-500"
          >
            _
          </motion.span>
        </motion.h1>

        {/* DESKTOP NAVBAR */}
        <nav className="hidden lg:flex items-center bg-zinc-900/40 border border-white/5 p-1.5 rounded-full relative">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onSetActive={() => setActiveLink(link.to)}
              className="relative px-6 py-2 text-sm font-bold uppercase tracking-widest cursor-pointer z-10"
            >
              <span className={`transition-colors duration-300 ${activeLink === link.to ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}>
                {link.name}
              </span>
              
              {/* LIQUID PILL INDICATOR */}
              {activeLink === link.to && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CONNECT BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="Lets Connect"
            smooth={true}
            className="hidden lg:flex items-center gap-2 group px-6 py-2.5 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest transition-all duration-500 cursor-pointer overflow-hidden relative"
          >
            <span className="relative z-10">Initiate Connection</span>
            <motion.div 
              whileHover={{ x: 5 }}
              className="relative z-10"
            >
              <i className="ri-arrow-right-up-line text-lg" />
            </motion.div>
          </Link>
        </motion.div>

        {/* MOBILE MENU TOGGLE */}
        <div className="block lg:hidden relative z-[10001]">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/10"
            onClick={() => setopenNav(!openNav)}
          >
            <i className={`ri-${openNav ? 'close' : 'menu-4'}-fill`}></i>
          </motion.button>
        </div>
      </div>

      <Nav navOpen={openNav} setopenNav={setopenNav} />
    </header>
  );
};

export default Header;