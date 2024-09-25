import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { PiDotDuotone } from "react-icons/pi";
import { PiDotBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footer flex flex-col items-center py-12 gap-2'>
        <div className="text-white flex gap-4">
            <CiFacebook className="w-12 h-12 hover:text-yellow-500" />
            <AiFillTwitterCircle className="w-12 h-12 hover:text-yellow-500" />
            <FaInstagram className="w-12 h-12 hover:text-yellow-500" />
        </div>
        <div className="flex gap-1 items-center text-white text-lg">
            <p className='hover:text-yellow-500'>About</p>
            <PiDotBold />
            <p className='hover:text-yellow-500'>Support</p>
            <PiDotBold />
            <p className='hover:text-yellow-500'>Contact</p>
        </div>
        <div className="flex gap-1 items-center text-white text-lg">
            <p className='hover:text-yellow-500'>Terms of Use</p>
            <PiDotBold />
            <p className='hover:text-yellow-500'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer