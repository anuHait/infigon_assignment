import React from "react";
import Video from "next-video";
import getStarted from "/videos/get-started.mp4";
import Image from "next/image";
import vid from "/videos/vid.mp4";
const BestFit = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0d1849] p-12 gap-10 relative">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white font-bold text-[22px] md:text-[28px] lg:text-[40px]">
          Why Orinix would be
        </p>
        <p className="text-white font-bold text-[22px] md:text-[28px] lg:text-[40px]">
          your best fit?
        </p>
      </div>
      <p className="text-md text-gray-200 font-light">
        Watch 1 min videos to learn about Orinix
      </p>
      <div className="w-full max-w-[1000px] aspect-video rounded-[36px] overflow-hidden shadow-xl shadow-gray-900">
        <Video
          src={vid}
          className="w-full h-full"
        />
      </div>
      <div className="w-[82%] flex flex-col gap-3 lg:gap-1 md:flex-row items-center justify-center md:justify-between mt-6">
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/sidebar.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Fully Responsive</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/box.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Multiple Layouts</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/spaceship.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Faster Loading</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
      </div>
      <div className="w-[82%] flex flex-col gap-3 lg:gap-1 md:flex-row items-center justify-center md:justify-between mt-4 mb-20">
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/chat.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Super Support</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/Path.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Rich Documentation</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-52">
          <div className="p-5 bg-opacity-10 bg-slate-400 rounded-[100%] flex items-center justify-center">
            <Image
              src="/assets/loop.png"
              width={20}
              height={20}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-center text-white">Lifetime Updates</p>
          <p className="font-light text-xs text-gray-100">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestFit;
