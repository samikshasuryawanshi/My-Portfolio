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
    <div id='about' className='lg:h-[90vh] h-[140vh] overflow-hidden aboutSection relative text-zinc-50 w-full '>
      {/* Animated Box */}
      <div className='box1 p-5 absolute lg:left-15 lg:top-15 top-5 left-2 shadow-2xl rounded-lg lg:w-1/2 w-full h-[75vh]  lg:h-[75vh] '>
          <h1 className='lg:text-3xl w-1/2 gradient-border'>About Me</h1>

          <div className='flex flex-col justify-start items-start h-fit lg:p-5 p-5'>
            <h1 className='lg:text-lg text-sm'>Hey!,There-</h1>
            <p className='lg:text-lg text-sm italic lg:mt-1 font-light'>I'm an Engineering student at Technocrats Institute of Technology, Bhopal, with a relentless drive for web development. I don’t just build websites — I craft immersive digital experiences that leave a lasting impact.</p>
            <p className='lg:text-lg text-sm italic mt-1 font-light'>I specialize in cutting-edge technologies like React.js, Node.js, MongoDB, Next.js, JavaScript, Java, and Tailwind CSS to create high-performance, user-first solutions. With a foundation in clean code and pixel-perfect design, I turn ideas into dynamic, engaging digital products that not only function but connect with users on a deeper level.</p>
            <p className='lg:text-lg text-sm italic mt-1 font-light'>Always learning. Always evolving. Always ready to break the rules and build something unforgettable.</p>
          
            <a href='https://drive.google.com/file/d/14LvvMjFJYTHTaqb8yolFd3xt6f8tLzT8/view' className='lg:px-5 lg:py-2 lg:text-xl rounded lg:py-2 lg:px-4 py-1 px-2 lg:mt-10 mt-5 text-white bg-gradient-to-r from-blue-500 to-purple-600 text-sm flex items-center gap-2 cursor-pointer'>Download CV<i class="ri-download-2-line"></i></a>
            
        </div>
      </div>

      {/* Amoeba Section */}
      <div className='box2 absolute lg:top-[10%] top-[70vh]  lg:right-15 w-full lg:w-1/3 h-[70vh] lg:h-[55vh] lg:flex flex-col justify-start items-start'>
        <Amoeba />
          <div className='upperCase lg:mt-5 mt[-5%] w-full h-fit lg:px-10 lg:py-5 rounded flex lg:items-start lg:justify-start lg:gap-10 gap-5 p-5'>
  
            <div className='flex gap-3 justify-center lg:w-3/4 w-full lg:text-4xl text-3xl cursor-pointer'>
              <a id='linkedin' className='p-3 flex items-center justify-center' href="https://www.linkedin.com/in/samiksha-suryawanshi83/ "><i  class="ri-linkedin-box-fill"></i></a>
              <a id='github' className='p-3 flex items-center justify-center' href="https://github.com/samikshasuryawanshi"><i class="ri-github-fill"></i></a>
              <a id='leetcode'  className='p-3 flex items-center justify-center'href="https://leetcode.com/u/samiksha_12_/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" class="w-8" />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;