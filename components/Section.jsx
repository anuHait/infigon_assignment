import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Section = () => {
  return (
    <div className="bg-[#051139] w-full h-full flex flex-col lg:flex-row items-center justify-center p-28 gap-16 ">
      <Image src="/assets/landing2.png" width={500} height={500} />
      <div className="flex flex-col gap-2 items-start justify-start">
        <div className="flex flex-col ">
          <div className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold font-clash text-white">
            Help You find the Best
          </div>
          <div className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold font-clash text-white">
            Analysis For Your Business
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start  mt-6">
          <div className="flex flex-row gap-3 items-center">
            <FaCircleCheck className="text-white text-[40px] rounded-lg bg-[#6A65FF] p-3" />
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-lg">Trusted and Acccurate</h1>
              <p className="font-light text-xs md:text-sm tracking-light w-full md:w-80 text-gray-200">
                Amet minim mollit non deserunt ullamco est sit dolor do amet
                sint.Velit officia consequat duis{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <FaBuilding className="text-white text-[40px] rounded-lg bg-[#6A65FF] p-3" />
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-lg">Hired by Top Company</h1>
              <p className="font-light text-xs md:text-sm tracking-light w-full md:w-80 text-gray-200">
                Amet minim mollit non deserunt ullamco est sit dolor do amet
                sint.Velit officia consequat duis{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <HiMiniShoppingBag className="text-white text-[40px] rounded-lg bg-[#6A65FF] p-3" />
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-lg">Various Categories</h1>
              <p className="font-light  text-xs md:text-sm tracking-light w-full md:w-80 text-gray-200">
                Amet minim mollit non deserunt ullamco est sit dolor do amet
                sint.Velit officia consequat duis{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
