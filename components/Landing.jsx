"use client";
import React from "react";
import Navbar from "./Navbar";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Landing = () => {

  return (
    <>
      <Navbar />
      <div className="bg-[#051139] w-full h-full flex flex-col items-center justify-center p-10 gap-6 relative">
        <div className="absolute -z-3 left-2 top-10 rounded-[100%] w-[250px] h-[200px] bg-[#1E50FF] blur-[100px] -translate-y-8"></div>

        <div className="flex flex-col">
          <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-clash text-center text-white">
            Interactive AI For A
          </div>
          <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-clash text-center text-white">
            Competitive Analysis
          </div>
          <div className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-clash text-center text-white flex flex-row gap-3 items-center">
            For Your Business
            <IoIosStar className="text-[28px] md:text-[36px] lg:text-[48px] text-amber-300" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-200 font-light text-sm">Elevate your advertising game with creatives that consistently</p>
          <p className="text-gray-200 font-light text-sm">outperform your competitors, setting your brand apart.</p>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <button className="text-white font-semibold bg-[#6A65FF] rounded-lg p-2">Join the Waitlist</button>
          <button className="text-white font-semibold border border-gray-100 rounded-lg p-2"> Know More</button>
        </div>
        <div className="relative mt-8 ">
          <div className="hidden sm:block absolute -z-5 left-0 top-0 rounded-[100%] w-[380px] h-[240px] bg-[#9C08FF] blur-[100px] "></div>
          <div className="hidden lg:block absolute -z-5 -right-0 -top-10 rounded-[100%] w-[400px] h-[440px] bg-[#1E50FF] blur-[120px] "></div>
          <div className="relative z-10">
            <Image src="/assets/landing.png" width={800} height={400} alt="image"/>
          </div>   
          
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 text-white font-semibold text-center p-2 z-20 h-16 w-full flex items-center justify-center">
        <Swiper
        modules={[Autoplay]}
        
        slidesPerView={4}
        autoplay= {
          true
        }
        
        loop={true}
        
        className="w-full items-center justify-center"
      >
        <SwiperSlide className="font-clash text-lg md:text-2xl">
        Join the waitlist
        </SwiperSlide>
        <SwiperSlide className="font-clash text-lg md:text-2xl">
        Join the waitlist
        </SwiperSlide>
        <SwiperSlide className="font-clash text-lg md:text-2xl">
        Join the waitlist
        </SwiperSlide>
        <SwiperSlide className="font-clash text-lg md:text-2xl">
        Join the waitlist
        </SwiperSlide>
        <SwiperSlide className="font-clash text-lg md:text-2xl">
        Join the waitlist
        </SwiperSlide>
        </Swiper>
              
            </div>
      </div>
    </>
  );
};

export default Landing;
