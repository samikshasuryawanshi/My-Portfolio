import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ContactSection from './ContactSection'
import ThreadBackground from '../partials/ThreadBackground'

const Home = () => {
  return (
    <>
      <Header />
     <main>
      <ThreadBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
     </main>
    </>
  )
    
}

export default Home