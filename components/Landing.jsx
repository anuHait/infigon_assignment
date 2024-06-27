import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import { IoIosStar } from "react-icons/io";

const Landing = () => {
  return (
    <>
    <Navbar />
    <div className='bg-[#051139] w-full h-full flex flex-col items-center justify-center p-10 gap-8'>
      <div className='flex flex-col'>
      <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-['Inter'] text-center text-white">
          Interactive AI For A
        </div>
        <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-['Inter'] text-center text-white">
          Competitive Analysis
        </div>
        <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-['Inter'] text-center text-white flex flex-row gap-3 items-center">
          For Your Business
          <IoIosStar className='text-[28px] md:text-[36px] lg:text-[48px] text-amber-300'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing
