import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#0d1849] w-full h-full p-8 flex flex-col items-start justify-start gap-4">
      <div className="flex flex-row items-center justify-between gap-3 font-bold text-white ">
        <Image src="/assets/logo.png" width={50} height={50} alt="image" />
        <p className="text-3xl font-clash">Orinix</p>
      </div>
      <div className="flex flex-wrap lg:flex-row item-start gap-3 lg:gap-5 lg:items-start justify-between w-full  md:w-[90%] mt-5">
        <div className="flex flex-col gap-5 items-start justify-start" >
          <div className="flex flex-row gap-3 items-start justify-start">
            <FaTwitter className="text-xl text-white bg-blue-300 p-1 rounded-full" />
            <FaFacebookF className="text-xl text-white bg-indigo-500 p-1 rounded-full" />
            <FaLinkedinIn className="text-xl text-white bg-blue-800 p-1 rounded-full" />
          </div>
          <p className="text-sm"> @2024 Orinix Reserved</p>
        </div>
        <div className="flex flex-row gap-5 md:gap-10 lg:gap-20 mt-8 lg:mt-0 mr-0 lg:mr-5 w-full lg:w-fit">
        <div className="flex flex-col gap-3">
        <p className=" text-sm sm:text-md font-semibold text-white">Product</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300 ">Landing Page</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Fatures</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Documentation</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Referal Program</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Pricing</p>
        </div>
        <div className="flex flex-col gap-3">
        <p className="text-sm sm:text-md font-semibold text-white">Services</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Documentation</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Design</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Themes</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Illustrations</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">UI Kit</p>
        </div>
        <div className="flex flex-col gap-3">
        <p className="text-sm sm:text-md font-semibold text-white">Company</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">About</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Terms</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Privacy Policy</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Careers</p>
        </div>
        <div className="flex flex-col gap-3">
        <p className="text-sm sm:text-md font-semibold text-white">More</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Documentation</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">License</p>
        <p className="text-[9.5px] sm:text-sm font-light text-gray-300">Changelog</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
