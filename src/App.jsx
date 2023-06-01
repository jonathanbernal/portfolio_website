import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import HeroHeader from './components/HeroHeader.jsx'

import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroHeader />
      {/* <FeaturedProjects /> */}
      <Footer />
    </>
  )
}

export default App
