import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe';
import ContactME from './components/ContactMe';
import Footer from './components/Footer';
import './index.css'


function App() {
  
 

  return (
    <>
    <Nav />
    <Hero />
    <Skills />
    <AboutMe />
    <ContactME />
    <Footer />
    </>
  )
}

export default App
