import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ContactSection from './ContactSection'

const Home = () => {
  return (
    <>
      <Header />
     <main>
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