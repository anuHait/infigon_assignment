import React from "react";

function Pricing() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-[#051139] w-full h-full items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold font-['Inter'] text-white">
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
      <p className="text-white bg-blue-700 px-3 py-2 w-fit text-sm rounded-l-md">Monthly</p>
      <p className="text-slate-700 bg-white px-4 py-2 w-fit text-sm rounded-r-md">Yearly</p>
      </div>
    </div>
  );
}

export default Pricing;
