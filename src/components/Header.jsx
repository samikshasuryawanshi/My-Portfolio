import React, { useState } from 'react';
import Nav from '../partials/Nav';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // Track the active link
  const [openNav, setopenNav] = useState(false);

  return (
    <header
      style={{
        background: "linear-gradient(to right, rgb(17, 17, 17),rgb(22, 22, 22),rgb(17, 17, 17))",
      }}
      className="h-[10vh] px-4 sm:px-5 md:px-6 lg:px-8 flex items-center text-white fixed top-0 left-0 z-[9999] shadow-2xl w-full"
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-screen">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h1>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            className="text-2xl sm:text-2xl"
            onClick={() => setopenNav(!openNav)}
          >
            <i className={`ri-${openNav ? 'close' : 'menu'}-line`}></i>
          </button>

          <Nav navOpen={openNav} />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 relative">
          <div
            className="absolute bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 transition-all duration-300 ease-in-out"
          />
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveLink('home')} // Update active link on scroll
            onClick={() => setActiveLink('home')} // Update active link on click
            className={`text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 cursor-pointer hover:text-blue-500 ${
              activeLink === 'home' ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveLink('about')} // Update active link on scroll
            onClick={() => setActiveLink('about')} // Update active link on click
            className={`text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 cursor-pointer hover:text-blue-500 ${
              activeLink === 'about' ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold' : ''
            }`}
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveLink('skills')} // Update active link on scroll
            onClick={() => setActiveLink('skills')} // Update active link on click
            className={`text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 cursor-pointer hover:text-blue-500 ${
              activeLink === 'skills' ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold' : ''
            }`}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveLink('projects')} // Update active link on scroll
            onClick={() => setActiveLink('projects')} // Update active link on click
            className={`text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 cursor-pointer hover:text-blue-500 ${
              activeLink === 'projects' ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold' : ''
            }`}
          >
            Projects
          </Link>
        </nav>

        <Link
          to="Lets Connect"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActiveLink('Lets Connect')} // Update active link on scroll
          onClick={() => setActiveLink('Lets Connect')} // Update active link on click
          className={`btn btn-secondary hidden lg:block px-4 py-1 xl:px-6 xl:py-3 cursor-pointer active:scale-95 font-semibold text-base xl:text-lg rounded-md bg-zinc-50 text-black hover:bg-zinc-200 transition-all duration-300 ${
            activeLink === 'Lets Connect' ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent' : ''
          }`}
        >
          Let's Connect
        </Link>
      </div>
    </header>
  );
};

export default Header;