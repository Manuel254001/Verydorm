import { Box } from '@mui/material'
import React from 'react'
import Hero from '../../components/LandingPage/Hero'


import About from '../../components/About.Services/About'
import Services from '../../components/About.Services/Services'
import Team from '../../components/Team/Team'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import Subscribe from '../../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <Box sx={{mt:11}}>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials/>
      <Contact />
      <Subscribe />
    </Box>
  )
}

export default Home
