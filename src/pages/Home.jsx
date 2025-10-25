import React from 'react'
import HeroSection from './components/Hero'
import CaptureMemoriesSection from './components/CaptureMemory'
import Testimonial from './components/Testimonial'
import Dream from './components/Dream'
import Navbar from '../main/Navbar'
import Footer from '../main/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CaptureMemoriesSection/>
      <Dream/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
