import React from 'react'
import Testimonial from './components/Testimonial'
import Dream from './components/Dream'
import Navbar from '../main/Navbar'
import Footer from '../main/Footer'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
