import React from 'react';
import { CCarousel, CImage } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import img from '../assets/grainy-bg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'

const Testimonials = () => {
  return (
    <div className="bg-[#638ea6] border-2 border-white m-6 rounded-lg">
    <div id="testimonial" className="flex justify-center items-center rounded-xl mx-4 md:mx-8  mt-8 "> 
      <div className="flex flex-col rounded-xl mt-8  max-w-[1200px] w-full"> 
        <h2 className="text-5xl md:text-[5rem] font-bold text-white mb-8 text-center">Testimonials</h2>
        </div>
        </div>
    

    <CCarousel controls indicators>
        
    <CCarouselItem>
        <div className=" p-8 bg-[#638ea6] text-2xl text-black h-auto w-[300px] sm:w-[400px] md:w-auto md:max-w-[800px] mx-auto">
          <div className="flex flex-col h-full md:flex-row gap-8">
            <div className="flex justify-center">
              <img className='w-[200px] h-auto sm:w-[300px] rounded-[50%]' src={doctor1}></img>
            </div>
            <div className="vsm:text-center sm:text-center md:text-left">
              <p className='text-xl  sm:text-3xl md:text-4xl text-white font-semibold'>Ramkrishna Joshi</p>
              <p className='text-base sm:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className=" p-8 bg-[#638ea6] text-2xl text-black h-auto w-[300px] sm:w-[400px] md:w-auto md:max-w-[800px] mx-auto">
          <div className="flex flex-col h-full md:flex-row gap-8">
            <div className="flex justify-center">
              <img className='w-[200px] h-auto sm:w-[300px] rounded-[50%]' src={doctor2}></img>
            </div>
            <div className="vsm:text-center sm:text-center md:text-left">
              <p className='text-xl  sm:text-3xl md:text-4xl text-white font-semibold'>Dr. Andrew Samuale</p>
              <p className='text-base sm:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
      </CCarouselItem>
      
    </CCarousel>
    
</div>
      
    
  )
}

export default Testimonials