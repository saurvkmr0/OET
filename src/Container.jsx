import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Course from './components/Course';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



const Container = () => {
  return (
    <div className=''>
        <Navbar />
        <HeroSection />
        <Course />
        <Testimonials />
        <FAQ />
        <Footer />
        
    </div>
  )
}

export default Container