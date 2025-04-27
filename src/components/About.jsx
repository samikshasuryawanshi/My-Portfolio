import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const About = () => {
    useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.box',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            }
        })

        tl.to('.box', {
            scale: 2,
            rotation: 360,
            duration: 1,
        })
    })


  return (
    <div className='h-[100vh] w-full'>
       
    </div>
  )
}

export default About