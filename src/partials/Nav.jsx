import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Nav = ({ navOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);

  const sections = ['home', 'about', 'skills', 'projects', 'Lets Connect'];

  return (
    navOpen && (
      <div className='lg:hidden z-[9999] absolute top-[11vh] right-2 transform duration-200 rounded-md w-1/2 bg-[rgb(21,21,21)] shadow-lg'>
        <nav ref={navRef} className='flex flex-col items-center py-4 px-2 gap-4 relative'>
          <div
            className='absolute bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 transition-all duration-300 ease-in-out opacity-90'
            style={{
              height: '45px',
              width: 'calc(100% - 16px)',
              top: `${activeIndex * 56 + 15}px`,
              borderRadius: '0.375rem',
              left: '8px',
            }}
          />
          {sections.map((section, index) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset for fixed headers
              className={`text-md sm:text-xl px-4 w-full text-center py-2 rounded-md transition-all duration-300 relative z-10 cursor-pointer ${
                activeIndex === index ? 'text-white font-medium' : 'hover:text-blue-500'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    )
  );
};

export default Nav;