import React from "react";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
const PeopleCard = ({ image, name, content }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg flex flex-col gap-3 items-start justify-start w-fit md:w-[300px] xl:w-[400px]">
      <div className="flex flex-row items-center justify-start gap-2 w-full">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-white">{name}</h1>
          <p className="font-light text-gray-200">Community</p>
        </div>
      </div>
      <p className="w-full text-gray-200 font-light text-sm">{content}</p>

      <div className="flex flex-row gap-1.5 items-center justify-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <IoStar key={star} className="text-[#f5c518]" />
      ))}
      
      </div>
    </div>
  );
};

export default PeopleCard;
