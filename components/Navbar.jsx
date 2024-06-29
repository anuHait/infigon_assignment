"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className='p-4 z-20 hidden md:flex md:flex-row items-center justify-between w-full bg-[#051139]'>
        <div className='flex flex-row items-center justify-start gap-3 font-bold text-white ml-4'>
          <Image src='/assets/logo.png' width={40} height={40} alt="image"/>
          <p className='text-2xl font-clash'>Orinix</p>
        </div>
        <div className='flex flex-row gap-3 text-white'>
          <p className='text-sm font-clash font-light'>Homepage</p>
          <p className='text-sm font-clash font-light'>Features</p>
          <p className='text-sm font-clash font-light'>Use Cases</p>
          <p className='text-sm font-clash font-light'>Pricing</p>
          <p className='text-sm font-clash font-light'>Blog</p>
        </div>
        <button className='px-3 text-white font-semibold bg-[#6A65FF] py-2 rounded-lg mr-5'>Join Waitlist</button>
      </div>

      {/* Mobile */}
      <div className={`p-3 flex flex-row md:hidden items-center justify-between w-full z-50 bg-[#051139]`}>
        {isOpen ? (
          <ImCross onClick={() => setIsOpen(!isOpen)} className='text-xl text-white z-50' />
        ) : (
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl text-white z-50' />
        )}
        <div className='flex flex-row items-center justify-start gap-3 font-bold text-white ml-4'>
          <Image src='/assets/logo.png' width={20} height={20} alt="image"/>
          <p className='text-xl'>Orinix</p>
        </div>
        <button className="bg-[#6A65FF] text-white font-semibold py-2 px-3 text-sm rounded-lg">Join Waitlist</button>
      </div>

      {isOpen && (
        <div className='bg-indigo-950 md:hidden fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40'>
          <div className="flex flex-col gap-10 items-center justify-start text-white font-semibold">
            <p className='text-xl'>Homepage</p>
            <p className='text-xl'>Features</p>
            <p className='text-xl'>Use Cases</p>
            <p className='text-xl'>Pricing</p>
            <p className='text-xl'>Blog</p>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
