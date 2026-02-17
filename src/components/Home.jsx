import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import CareerJourney from './CareerJourney'
import Certificates from './Certificates'
import ContactSection from './ContactSection'
import Footer from './Footer'
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
        <CareerJourney />
        <Certificates />
        <ContactSection />
      </main>
      <Footer />
    </>
  )

}

export default Home