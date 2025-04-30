import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ThreadBackground from '../partials/ThreadBackground';


gsap.registerPlugin(ScrollTrigger);

const skills = [
  { label: 'HTML/CSS', percent: '90%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',tagLine:'Content Structure' },
  { label: 'JavaScript', percent: '80%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',tagLine:'Dynamic Behavior' },
  { label: 'Tailwind CSS', percent: '80%', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042' ,tagLine:'Styling Design' },
  { label: 'React.js', percent: '80%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',tagLine:'UI Components' },
  { label: 'Node.js', percent: '75%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' ,tagLine:'Server Runtime' },
  { label: 'Express.js', percent: '75%', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-909x1024-ig4gm9k7.png',tagLine:'Backend Routing' },
  { label: 'MongoDB', percent: '70%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',tagLine:'Database Management' },
  { label: 'Next.js', percent: '50%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' ,tagLine:'Fullstack Framework' },
  { label: 'Java', percent: '50%', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' ,tagLine:'Programming Language' },
  // { label: 'Power BI', percent: '30%', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532' },
];

const Skills = () => {
  const boxRef = useRef();
  const skillRefs = useRef([]);

  const addToSkillRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skillsSection',
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });

    // Animate the main heading
    tl.from(boxRef.current, {
      y: '200px',
      opacity: 0,
      duration: 0.6,
    }, '>');

    // Animate the "Technical skill's" heading
    tl.from('.technical-heading', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, '>'); // Start slightly earlier to sync with skill text

    // Animate the skill divs
    tl.from(skillRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.5"); // Sync with the "Technical skill's" heading

    // Animate the progress circles for all skills
    gsap.fromTo(
      skillRefs.current.map((el) => el.querySelector('.progress-circle')), // Target all progress circles
      { strokeDashoffset: 100 }, // Start from 100 (empty circle)
      {
        strokeDashoffset: (i) => 100 - parseInt(skills[i].percent, 10), // Animate to the target percentage
        duration: 10, // Fill in 5 seconds
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.skillsSection',
          start: 'top 100%',
          toggleActions: 'play none none none', // Trigger once when the section enters
        },
      }
    );

    tl.from('.soft-heading', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },); 
    gsap.from('.soft-skills .skills', {
      opacity: 0,
      y: 50,
      stagger: 0.2, // Stagger the animation for each soft skill
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.soft-skills',
        start: 'top 90%',
        toggleActions: 'play none none none', // Trigger once when the section enters
      },
    });
  }, []);

  return (
    <div id='skills' className="skillsSection relative overflow-hidden min-h-screen lg:p-10 p-5 text-white bg-gradient-to-b">


      <div className="h-fit w-1/2 overflow-hidden">
        <h1 ref={boxRef} className="lg:text-4xl text-2xl font-bold w-full gradient-border-skill">Skill's</h1>
      </div>

      <div>
        <h1 className="technical-heading lg:text-2xl text-lg italic mt-5 lg:ml-5 text-center lg:text-left">
          Technical skill's -
        </h1>
        <div className="flex flex-wrap lg:gap-10 gap-5 lg:px-5 lg:py-5 lg:mt-10 mt-5">
          {skills.map((skill, index) => (
            <div
              ref={addToSkillRefs}
              key={index}
              className="skills flex flex-col   cursor-pointer items-start justify-start gap-2 lg:w-fit w-fit  lg:px-5 lg:py-5 px-4 py-2 h-fit rounded-md"
            >
              <div id='skills' className="flex items-center justify-between lg:w-56 w-50">
                <img
                  src={skill.img}
                  alt={skill.label}
                  className={`lg:w-12 w-10 p-2 bg-zinc-800 rounded ${skill.label === 'Express.js' ? 'invert' : ''}`}
                />
                <div className="relative flex items-center justify-center">
                  <svg className="lg:w-14 lg:h-14 h-12 w-12 transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background Circle */}
                    <circle
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      cx="18"
                      cy="18"
                      r="15"
                    />
                    {/* Progress Circle */}
                    <circle
                      className="progress-circle text-purple-400"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      strokeLinecap="round"
                      fill="none"
                      cx="18"
                      cy="18"
                      r="15"
                    />
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#d8b4fe" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute lg:text-sm text-xs text-white">{skill.percent}</span>
                </div>
              </div>
             <div className='flex flex-col items-start justify-start lg:gap-1 gap-1'>
              <h1 className="lg:text-lg lg:mt-0 mt-[-5] text-sm">{skill.label}</h1>
              <p className='text-sm italic text-zinc-400'>{skill.tagLine}</p>
             </div>
            </div>
          ))}
        </div>
      </div>

    <div className='soft-skills lg:mt-15 mt-10 '>
      <h1 className='soft-heading italic lg:text-2xl lg:ml-5 lg:w-fit text-center text-gray-300'>Soft Skills -</h1>
      <div  className="flex flex-wrap lg:gap-5 gap-3 mb-10  lg:p-5 ">

      <div className="skills flex items-center lg:justify-center gap-4 shrink-0 w-fit h-fit px-5 py-5 bg-[#1f1f1f] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="text-3xl text-violet-400">
          <i className="ri-message-2-line"></i> {/* Communication icon */}
        </div>
        <div className="flex flex-col items-start">
          <h1 className="lg:text-xl text-sm text-center text-gray-200">Communication</h1>
          <p className="text-sm italic text-zinc-400">Clear Connector</p>
        </div>  
      </div>
    
        {/* Soft Skill 1 */}
        <div className="skills flex  items-center lg:justify-center gap-4 w-fit shrink-0 h-fit px-5 py-5 bg-[#1f1f1f] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-3xl text-violet-400">
            <i className="ri-team-line"></i>
          </div>
         <div className='flex flex-col items-start'>
            <h1 className="lg:text-xl text-sm text-center text-gray-200">Teamwork</h1>
            <p className='text-sm italic text-zinc-400'>Collaborative Spirit</p>
         </div>
        </div>

        {/* Soft Skill 2 */}
        <div className="skills flex  items-center lg:justify-center shrink-0 gap-4 w-fit h-fit px-5 py-5 bg-[#1f1f1f] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-3xl text-green-400">
            <i className="ri-time-line"></i>
          </div>
            <div>
              <h1 className="lg:text-xl text-sm text-center text-gray-200">Problem Solving</h1>
                <p className='text-sm italic text-zinc-400'>Solution Seeker</p>
            </div>
        </div>

        {/* Soft Skill 3 */}
        <div className="skills flex  items-center lg:justify-center shrink-0 gap-4 w-fit h-fit px-5 py-5 bg-[#1f1f1f] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-3xl text-yellow-400">
            <i className="ri-lightbulb-line"></i>
          </div>
         <div>
         <h1 className="lg:text-xl text-sm text-center text-gray-200">Time Management</h1>
         <p className='text-sm italic text-zinc-400'>Deadline Driver</p>
         </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Skills;
