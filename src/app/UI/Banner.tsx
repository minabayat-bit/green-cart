import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center relative">
      <img className="relative px-30 p-10 " src="/bann.png" alt="" />
      <div className="absolute flex flex-col gap-10 left-1/5 top-1/3">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-gray-700 font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 ">
          Freshness You Can Trust, Savings You will Love!
        </h1>
        <div className="flex items-center">
        <button className="items-center w-fit px-4 md:px-9 py-3 bg-[#4fbf8b] rounded-md text-white text-[20px] cursor-pointer">
          Shop now
        </button>
        <a className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-[20px]">
          Explore deals <img src="/flash.svg" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
