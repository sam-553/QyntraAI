import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import AiTools from '../components/AiTools'
import TestimonialPage from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <AiTools/>
      <TestimonialPage/>
      <Plan/>
      <Footer/>
   
    </div>
  )
}

export default Home