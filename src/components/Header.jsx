import React, { useState, useEffect } from 'react'
import Nav from '../partials/Nav'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [openNav, setopenNav] = useState(false)

  return (
    <header
      style={{
        background:"linear-gradient(to right, rgb(17, 17, 17),rgb(22, 22, 22),rgb(17, 17, 17))",
      }}
      className='h-[10vh] px-4 sm:px-5 md:px-6 lg:px-8 flex items-center text-white fixed top-0 left-0 z-10 shadow-2xl w-full'>
      
      <div className='flex items-center justify-between w-full mx-auto max-w-screen'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>

      {/* Mobile Menu Button */}
      <div className='block lg:hidden'>
        <button 
          className='text-2xl sm:text-2xl' 
          onClick={() => setopenNav(!openNav)}
        >
          <i className={`ri-${openNav ? 'close' : 'menu'}-line`}></i>
        </button>
     
         <Nav navOpen={openNav} />
      </div>

      <nav className='hidden lg:flex items-center justify-center gap-6 xl:gap-10 relative'>
        <div 
          className='absolute bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 transition-all duration-300 ease-in-out'
          
        />
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 ${
              isActive 
                ? 'text-white  bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600' 
                : 'hover:text-blue-500'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 ${
              isActive 
                ? 'text-white  bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600' 
                : 'hover:text-blue-500'
            }`
          }
        >
          About Me
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => 
            `text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 ${
              isActive 
                ? 'text-white  bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600' 
                : 'hover:text-blue-500'
            }`
          }
        >
          Skills
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `text-base xl:text-lg px-4 py-2 rounded-md transition-all duration-300 relative z-10 ${
              isActive 
                ? 'text-white  bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600' 
                : 'hover:text-blue-500'
            }`
          }
        >
          Projects
        </NavLink>
      </nav>

       <a href='#contact' className='btn btn-secondary hidden lg:block px-4 py-1 xl:px-6 xl:py-3 cursor-pointer active:scale-95 font-semibold text-base xl:text-lg rounded-md bg-zinc-50 text-black hover:bg-zinc-200 transition-all duration-300'>
       Let's Connect
      </a>
    </div>
   </header>

  )
}

export default Header