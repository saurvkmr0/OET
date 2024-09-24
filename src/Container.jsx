import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Course from './components/Course';
import FAQ from './components/FAQ';


const Container = () => {
  return (
    <div className=''>
        <Navbar />
        <HeroSection />
        <Course />
        <FAQ />
        
    </div>
  )
}

export default Container