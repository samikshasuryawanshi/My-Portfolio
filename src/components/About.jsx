import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Amoeba from '../partials/Amoeba';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutSection',
        start: 'top 120%', // Trigger when .box1 enters the viewport
        end: 'bottom 100%',
        scrub: 1, // Smooth animation on scroll
      },
    });

    tl.from('.box1', {
      left: '-200px',
      opacity: 0,
      duration: 0.4,
    }, '<'); // Start immediately

    tl.from('.box2', {
      right: '-200px',
      opacity: 0,
      duration: 0.4,
    }, '<'); // Start 0.2 seconds after the previous animation
  }, []);

  return (
    <div id='about' className='lg:h-[90vh] h-[150vh] overflow-hidden aboutSection relative text-zinc-50 w-full '>
      {/* Animated Box */}
      <div className='box1 p-5 absolute lg:left-15 lg:top-15 top-5 left-2 shadow-2xl rounded-lg lg:w-1/2 w-full h-[75vh]  lg:h-[75vh] '>
          <h1 className='lg:text-3xl w-1/2 gradient-border'>About Me</h1>

          <div className='flex flex-col justify-start items-start h-fit lg:p-5 p-5'>
            <h1 className='lg:text-lg text-sm'>Hey!,There-</h1>
            <p className='lg:text-lg text-sm italic lg:mt-1 font-light'>I'm an Engineering student at Technocrats Institute of Technology, Bhopal, with a relentless drive for web development. I don’t just build websites — I craft immersive digital experiences that leave a lasting impact.</p>
            <p className='lg:text-lg text-sm italic mt-1 font-light'>I specialize in cutting-edge technologies like React.js, Node.js, MongoDB, Next.js, JavaScript, Java, and Tailwind CSS to create high-performance, user-first solutions. With a foundation in clean code and pixel-perfect design, I turn ideas into dynamic, engaging digital products that not only function but connect with users on a deeper level.</p>
            <p className='lg:text-lg text-sm italic mt-1 font-light'>Always learning. Always evolving. Always ready to break the rules and build something unforgettable.</p>
          
           

            
            <a id='cv' href='https://drive.google.com/file/d/14LvvMjFJYTHTaqb8yolFd3xt6f8tLzT8/view' className=' lg:text-xl  lg:py-3 lg:px-4  py-1 px-2 lg:mt-10 mt-5 text-white  text-sm flex items-center gap-2 cursor-pointer  shrink-0'>Download CV<i className=" bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-full ri-download-2-line"></i></a>
              
    
            
        </div>
      </div>

      {/* Amoeba Section */}
      <div className='box2 absolute lg:top-[5%] top-[78vh] lg:right-15 w-full lg:w-1/3 h-[70vh] lg:h-[55vh] lg:flex flex-col justify-start items-start'>
        <Amoeba />
         
          <div className="contact-cta lg:mt-2 mt-5 text-center">
              <h1 className="lg:text-2xl text-lg italic text-gray-300">
                Want to work together or have a question?
              </h1>
              <a
                 id='connect'
                href="#Lets Connect"
                className="mt-5 inline-block relative z-1 overflow-hidden cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full text-lg font-semibold "
              >
                Reach Out
              </a>
          </div>
      </div>
    </div>
  );
};

export default About;