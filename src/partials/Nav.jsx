import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ navOpen, setopenNav }) => {
  const sections = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'Lets Connect' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setopenNav(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[10000] lg:hidden"
          />

          {/* Side Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-screen w-[100%] sm:w-[60%] bg-zinc-950 border-l border-white/10 z-[10000] lg:hidden p-10 pt-32"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500 mb-4">
                System Menu
              </p>
              
              {sections.map((section, idx) => (
                <motion.div key={section.to} variants={itemVariants}>
                  <Link
                    to={section.to}
                    smooth={true}
                    offset={-70}
                    onClick={() => setopenNav(false)}
                    className="flex items-baseline gap-4 group cursor-pointer"
                  >
                    <span className="text-xs font-mono text-blue-500">0{idx + 1}</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-200 group-hover:text-white transition-all group-hover:translate-x-3">
                      {section.name}
                    </h2>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-20 pt-10 border-t border-white/5 space-y-4">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">Social Uplink</p>
                <div className="flex gap-6 text-2xl text-zinc-400">
                  <i className="ri-github-line hover:text-white transition-colors" />
                  <i className="ri-linkedin-line hover:text-white transition-colors" />
                  <i className="ri-twitter-x-line hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Nav;