import React from 'react'
import PraAni from '../Component/PraAni'
import Images1st from '../Component/Images1st'
import Show from '../Slide/Show.jsx'
import TestimonialSlider from '../Testimonial/Testimonial.jsx'
import WeddingHeroSection from '../Component/Welcom.jsx'

const Home = () => {
  return (
    <div className='lg:mt-24 mt-16'>
      <Images1st />
      <WeddingHeroSection />
      <Show/>
      <PraAni />
      <TestimonialSlider/>
      
    </div>
  )
}

export default Home
