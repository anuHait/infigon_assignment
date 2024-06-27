
"use client";
import React from "react";
import PeopleCard from "./PeopleCard";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0d1849] p-12 gap-10 relative">
    <div className="absolute -z-1  right-12 top-10 rounded-[100%] w-[300px] h-[300px]  bg-gray-400 blur-[160px]"></div>


      <div className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold font-['Inter'] mt-10">
        What people are saying about Circle
      </div>

      <div className="w-full hidden lg:flex items-center mb-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={
            {delay: 3000,
            pauseOnMouseEnter: true}

          }
          className="w-full items-center justify-center"
        >
          <SwiperSlide >
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>



      <div className="w-full flex lg:hidden items-center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={true}
          className="w-full items-center justify-center "
        >
          <SwiperSlide >
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCard
              image="/assets/doggo.png"
              name={"Leslie Alexander"}
              content={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
