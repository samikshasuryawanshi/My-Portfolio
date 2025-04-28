import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import MovingThread from '../partials/MovingThread'

const Hero = () => {
  return (
    <div id='home' className='h-screen relative  text-white w-full p-5 lg:p-10 flex flex-col justify-center items-center'>
      <MovingThread />

      {/* Hero Title Section */}
      <div className='overflow-hidden w-full flex flex-col items-center lg:items-center lg:flex-row lg:gap-8'>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl lg:text-[8vh] text-center lg:text-left font-bold lg:ml-[10vh]'
        >
          Hello, I'm{' '}
          <span className='italic font-light bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Samiksha
          </span>{' '}
          <span className='hidden lg:inline-block'>-</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='text-sm lg:text-2xl flex items-center justify-center lg:justify-end font-medium mt-4 lg:mt-2'
        >
          <span>
            <Typewriter
              words={['Innovate', 'Develop', 'Deliver']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </span>
        </motion.div>
      </div>

      {/* Description Section */}
      <div className='overflow-hidden w-full flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-10 gap-5 lg:px-[10vh]'>
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className='text-base lg:text-lg italic font-light text-center lg:text-left lg:w-1/2'
        >
          A passionate web developer with a love for creating beautiful, user-friendly websites and applications. With a strong background in both frontend and backend development, I bring ideas to life through clean design and efficient code. Welcome to my portfolio!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className='text-3xl lg:text-[10vh] text-center lg:text-left font-light mt-5 lg:mt-0'
        >
          A{' '}
          <span className='italic bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Developer
          </span>
        </motion.h1>
      </div>

      {/* Closing Statement */}
      <div className='overflow-hidden w-full flex justify-center lg:justify-end mt-8 lg:px-[10vh]'>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className='text-lg lg:text-[8vh] text-center lg:text-right'
        >
          <span className='italic lg:font-light lg:bg-gradient-to-r lg:from-blue-500 lg:to-purple-600 lg:bg-clip-text lg:text-transparent'>
            Crafting
          </span>{' '}
          Meaningful Experiences
          <span className='lg:font-light lg:bg-gradient-to-r lg:from-blue-500 lg:to-purple-600 lg:bg-clip-text lg:text-transparent'>
            !
          </span>
        </motion.h1>
      </div>
    </div>
  )
}

export default Hero