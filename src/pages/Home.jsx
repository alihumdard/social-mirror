import React from 'react'
import HeroSection from './components/Hero'
import CaptureMemoriesSection from './components/CaptureMemory'
import Testimonial from './components/Testimonial'
import Dream from './components/Dream'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CaptureMemoriesSection/>
      <Dream/>
      <Testimonial/>
    </div>
  )
}

export default Home
