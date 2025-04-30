import { image } from 'framer-motion/client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [

  {
    title:'RapidGoods - A Blinkit Clone',
    image:'./Blinkit2.png',
    link:'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-',
    videoLink:'https://github.com/samikshasuryawanshi/RapidGoods-BlinkitClone-'


  },
  {
    title: 'Hotel Booking App',
    image: 'hotelMan.png',
    link: 'https://github.com/samikshasuryawanshi/HotelManagement',
    videoLink:'https://github.com/samikshasuryawanshi/HotelManagement'

  },
  {
    title: 'Movie App',
    image: './Untitled design.png',
    link: 'https://github.com/samikshasuryawanshi/MovieApp',
    videoLink:'https://movie-app-rosy-alpha.vercel.app/'
  },
  {
    title:'DevTube - A Youtube Clone',
    image:'devtube2.png',
    link:'https://github.com/samikshasuryawanshi/DevTube',
    videoLink:'https://github.com/samikshasuryawanshi/DevTube'

  },
  {
    title: 'Brandium',
    image: './Screenshot (72).png',
    link: 'https://github.com/samikshasuryawanshi/Brandiumm',
    videoLink:'https://github.com/samikshasuryawanshi/Brandiumm'

  },
  {
    title: 'E-commerce Store',
    image: './FakeApi.png',
    link: 'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-',
    videoLink:'https://github.com/samikshasuryawanshi/E-Commerce-Fake-Api-Product-'

  }
]





const Projects = () => {
  const projectRefs = useRef([]);
  
    const addToProjectRefs = (el) => {
      if (el && !projectRefs.current.includes(el)) {
        projectRefs.current.push(el);
      }
    };


    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projectSection',
          start: 'top 100%',
          end: 'bottom 80%',
          scrub: 1,
        },
      });

      // Animate the main heading
      tl.from('.gradient-border-Project', {
        y:50,
        opacity: 0,
        duration: 0.6,
      }, '>');

      // Animate the project divs
      tl.from(projectRefs.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.5"); // Sync with the "Technical skill's" heading
    })


  return (
    <div id='projects' className='min-h-screen overflow-hidden projectSection text-white p-10 sm:p-5'>
        <h1 className='lg:text-3xl mt-10  gradient-border-Project'>My Portfolio Highlight's</h1>
         <div id='projectsDiv' className='lg:flex lg:flex-wrap   lg:gap-11 lg:mt-20 mt-10'>

            {ProjectsData.map((project, index) => (
              <div ref={addToProjectRefs} key={index} className='projects cursor-pointer lg:p-4 p-2 lg:w-[31%] w-full  lg:mt-0 mt-5  h-fit rounded-lg shadow-lg flex flex-col items-center shrink-0'>
               <div className='relative w-full h-60 overflow-hidden rounded-lg mb-4 group'>
                  {/* Image */}
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-lg backdrop:brightness-50 group-hover:brightness-75 transition duration-300' />

                  {/* Play Button */}
                  <div onClick={() => window.open(project.videoLink, '_blank')} className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                    <button
                     onClick={() => window.open(project.videoLink, '_blank')}
                      
                      className='bg-white text-black px-3 py-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform duration-300'
                    >
                      <i className="ri-play-fill text-2xl"></i>
                    </button>
                </div>
              </div>
              <div className='flex items-center justify-between w-full p-2'>
                <h2 className='lg:text-xl text-sm italic mb-2'>{project.title}</h2>
                <a href={project.link} className='bg-blue-500 lg:text-xl relative text-white px-4 py-2 hover:scale-105 duration-300 cursor-pointer rounded-lg'><i className=" ri-arrow-right-up-line"></i></a>
              </div>
          </div>
            ))}
           
        </div> 
    </div>
  )
}

export default Projects