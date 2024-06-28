import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { TbNorthStar } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { BsFillPentagonFill } from "react-icons/bs";
import { TbOvalVerticalFilled } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiFlutter } from "react-icons/si";
import { BsFillHexagonFill } from "react-icons/bs";
import { FaCubes } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa6";
import { GiFoxHead } from "react-icons/gi";
import { PiTriangleDashedFill } from "react-icons/pi";

function Software() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-[#051139] w-full h-full items-center justify-center relative overflow-hidden">
      <div className="absolute z-0 left-2 top-0 rounded-[100%] w-[380px] h-[340px] bg-[#1E50FF] blur-[100px] -translate-y-8"></div>
      <div className="absolute z-0 right-12 -bottom-0 rounded-[100%] w-[380px] h-[350px] bg-[#9C08FF] blur-[120px] translate-y-8"></div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <PiStarFourFill className="text-gray-100 text-2xl absolute p-1.5 rounded-full shadow-md bg-gray-200 bg-opacity-10 -left-16" />
        <PiStarFourFill className="text-gray-200 text-2xl absolute p-1.5 rounded-full shadow-md bg-gray-200 bg-opacity-10 top-2 -right-16" />

        <p className="text-white font-bold font-clash text-[22px] md:text-[28px] lg:text-[40px]">
          Useful Software
        </p>
        <p className="text-white font-bold font-clash text-[22px] md:text-[28px] lg:text-[40px]">
          that We assist.
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6 md:gap-8 mt-20 relative z-10">
        {[<FaPython />, <FaSquare />, <TbBrandJavascript />, <IoLogoFigma />, <BsFillPentagonFill />, <TbOvalVerticalFilled />, <VscVscode />].map((icon, index) => (
          <div key={index} className="text-xl md:text-4xl text-gray-300">
            {icon}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6 md:gap-8 mb-24 mt-4 relative z-10">
        {[<GiFoxHead />, <PiTriangleDashedFill />, <VscVscode />, <PiStarFourFill />, <FaCubes />, <BsFillHexagonFill />, <SiFlutter />].map((icon, index) => (
          <div key={index} className="text-xl md:text-4xl text-gray-300">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Software;
