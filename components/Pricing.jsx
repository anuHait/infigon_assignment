import React from "react";
import { TiTick } from "react-icons/ti";

function Pricing() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-[#051139] w-full h-full items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold font-clash text-white">
          Pricing Plans
        </div>
        <div className="flex flex-col items-center font-light leading-relaxed text-center text-slate-200 text-xs md:text-md ">
          <p>
            Coca landing page UI Kit no credit card required. All plans come
            with
          </p>
          <p>a free, 14 day trial of our Premium features.</p>
        </div>
      </div>
      <div className="flex rounded-md font-medium">
        <p className="text-white bg-blue-500 px-3 py-2 w-fit text-sm rounded-l-md">
          Monthly
        </p>
        <p className="text-slate-700 bg-white px-4 py-2 w-fit text-sm rounded-r-md">
          Yearly
        </p>
      </div>
      <div className="w-[95%] lg:w-[90%] flex flex-col lg:flex-row gap-8 lg:gap-5 items-center mt-10 justify-center">
      {/*Card1 */}
        <div className="bg-indigo-950 rounded-[26px] border border-slate-200 p-5 flex flex-col items-start justify-start gap-4 w-72">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-200 font-light text-sm">SILVER</p>
            <p>
              <span className="font-bold text-white  md:text-2xl lg:text-4xl">
                $50
              </span>
              <span className="text-gray-100">/month</span>
            </p>
            <div className="h-0.5  bg-gray-200 rounded w-full "></div>
          </div>
          <div className="flex flex-col gap-2 w-full items-start justify-start">
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              No Discount
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Basic Support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Ads Banner Free
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Design Style{" "}
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Component Library
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              All limited links
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Own analytics platform
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Chat support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Optimize hashtags
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Unlimited users
            </div>
          </div>
          <button className="bg-white rounded-md text-blue-700 px-3 py-2 font-medium">Choose Plan</button>
        </div>
        {/*Card2 */}
        <div className="bg-blue-600 rounded-[26px] shadow relative p-5 flex flex-col items-start justify-start gap-4 w-80">
        <div className="bg-amber-200 border-4 border-white p-3 text-xs text-black text-center font-medium rounded-[32px] absolute -top-6 left-24">MOST POPULAR</div>
          <div className="flex flex-col gap-2 w-full mt-5">
            <p className="text-gray-200 font-light text-sm">GOLD</p>
            <p>
              <span className="font-bold text-white  md:text-2xl lg:text-4xl">
                $100
              </span>
              <span className="text-gray-100">/month</span>
            </p>
            <div className="h-0.5  bg-gray-200 rounded w-full "></div>
          </div>
          <div className="flex flex-col gap-2 w-full items-start justify-start">
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              No Discount
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Basic Support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Ads Banner Free
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Design Style{" "}
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Component Library
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              All limited links
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Own analytics platform
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Chat support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Optimize hashtags
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Unlimited users
            </div>
          </div>
          <button className="bg-white rounded-md text-blue-700 px-3 py-2 mb-4">Choose Plan</button>
        </div>




        {/*Card 3 */}
        <div className="bg-indigo-950 rounded-[26px] border border-slate-200 p-5 flex flex-col items-start justify-start gap-4 w-72">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-200 font-light text-sm">PREMIUM</p>
            <p>
              <span className="font-bold text-white  md:text-2xl lg:text-4xl">
                $150
              </span>
              <span className="text-gray-100">/month</span>
            </p>
            <div className="h-0.5  bg-gray-200 rounded w-full "></div>
          </div>
          <div className="flex flex-col gap-2 w-full items-start justify-start">
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              No Discount
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Basic Support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Ads Banner Free
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Design Style{" "}
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Component Library
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              All limited links
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Own analytics platform
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Chat support
            </div>
            <div className="flex flex-row gap-1 items-center justify-start text-sm text-gray-100">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Optimize hashtags
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <TiTick className="text-white m-3 rounded-full bg-blue-400 text-xl" />
              Unlimited users
            </div>
          </div>
          <button className="bg-white rounded-md text-blue-700 px-3 py-2">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
