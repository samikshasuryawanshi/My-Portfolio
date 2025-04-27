import { a, div, label, link } from 'framer-motion/client'
import { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = ({navOpen}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    switch(path) {
      case '/':
        setActiveIndex(0)
        break
      case '/about':
        setActiveIndex(1)
        break
      case '/skills':
        setActiveIndex(2)
        break
      case '/projects':
        setActiveIndex(3)
        break
      default:
        setActiveIndex(0)
    }
  }, [location])

  return (
    navOpen && (
      <div className='lg:hidden absolute top-[11vh] right-2 transform duration-200 rounded-md w-1/2 bg-[rgb(21,21,21)] shadow-lg'>
        <nav ref={navRef} className='flex flex-col items-center py-4 px-2 gap-4 relative'>
          <div 
            className='absolute bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 transition-all duration-300 ease-in-out opacity-90'
            style={{
              height: '45px',
              width: 'calc(100% - 16px)',
              top: `${activeIndex * 56 + 15}px`,
              borderRadius: '0.375rem',
              left: '8px'
            }}
          />
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-md sm:text-xl px-4 w-full text-center py-2 rounded-md transition-all duration-300 relative z-10 ${
                isActive 
                  ? 'text-white font-medium' 
                  : 'hover:text-blue-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="#about" 
            className={({ isActive }) => 
              `text-md sm:text-xl px-4 w-full text-center py-2 rounded-md transition-all duration-300 relative z-10 ${
                isActive 
                  ? 'text-white font-medium' 
                  : 'hover:text-blue-500'
              }`
            }
          >
            About Me
          </NavLink>
          <NavLink 
            to="#skills" 
            className={({ isActive }) => 
              `text-md sm:text-xl px-4 w-full text-center py-2 rounded-md transition-all duration-300 relative z-10 ${
                isActive 
                  ? 'text-white font-medium' 
                  : 'hover:text-blue-500'
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink 
            to="#projects" 
            className={({ isActive }) => 
              `text-md sm:text-xl px-4 w-full text-center py-2 rounded-md transition-all duration-300 relative z-10 ${
                isActive 
                  ? 'text-white font-medium' 
                  : 'hover:text-blue-500'
              }`
            }
          >
            Projects
          </NavLink>
          <button className='cursor-pointer text-md sm:text-xl relative z-10'>
           Let's Connect
          </button>
        </nav>
      </div>
    )
  )
}

export default Nav