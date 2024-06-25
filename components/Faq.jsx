import React from 'react';

function Faq() {
  return (
    <div className='bg-[#0d1849] w-full h-full text-white flex flex-col items-center justify-center p-10 md:p-16 gap-10'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <div className="text-[22px] md:text-[28px] lg:text-[40px] font-semibold font-['Inter']">
          Frequently Asked Questions
        </div>
        <p className='text-slate-200 text-xs md:text-md lg:text-lg font-light'>
          Create custom landing pages with Omega that converts.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-16 mb-8 w-[80%]'>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='flex flex-col gap-3 items-start justify-start'>
              <h1 className='font-semibold text-md md:text-lg'>What’s gonna be your question?</h1>
              <p className='font-light text-slate-300 text-xs sm:text-sm'>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.</p>
            </div>
          ))
        }
      </div>
        <p className='text-center flex gap-2 font-normal text-sm'>
        <span className='text-slate-200'>Didn't find your answer?</span>
        <span className='text-blue-600'>Contact us here</span>
        </p>
    </div>
  );
}

export default Faq;
