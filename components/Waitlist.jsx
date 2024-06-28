import React from "react";
import Image from "next/image";
function Waitlist() {
  return (
    <div className="flex p-8 bg-[#051139] w-full h-full items-center justify-center">
      <div className="bg-[#515DEF] w-[88%] p-6 flex flex-col-reverse sm:flex-row gap-6 rounded-3xl items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-[16px] md:text-[20px] lg:text-[28px] font-bold font-clash">
            Explore Free Version now!
          </h1>
          <p className="text-slate-200 leading-6">
            Search all the open positions on the web. Get your own personalized
            dashboard for lifetime
          </p>
          <div className="flex flex-row gap-3 items-center justify-start font-medium">
            <button className="bg-slate-100 text-black p-3 rounded-lg text-xs sm:text-sm">
              Join Waitlist
            </button>
            <button className="border-2 border-white p-3 text-white text-xs sm:text-sm rounded-lg">
              Contact
            </button>
          </div>
        </div>
        <Image src="/assets/work.png" height={250} width={250} alt="image"/>
      </div>
    </div>
  );
}

export default Waitlist;
