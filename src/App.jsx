import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroHeader from './components/HeroHeader.jsx'
import FeaturedProjects from './components/FeaturedProjects'

import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroHeader />
      <FeaturedProjects />
      <Footer />
    </>
  )
}

export default App