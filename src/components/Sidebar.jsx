import React from "react";
import myLocation from "../assets/images/my-location.svg";
import location from "../assets/images/location.svg";
import lightRain from "../assets/images/LightRain.png";
import heavyCloud from "../assets/images/heavyCloud.png";
import heavyRain from "../assets/images/heavyRain.png";
import shower from "../assets/images/shower.png";
import sleet from "../assets/images/sleet.png";
import snow from "../assets/images/snow.png";

export default function Sidebar() {
  return (
    <div className="h-[810px] md:h-[1023px] w-full md:w-[28%] bg-midnight bg-cloud bg-no-repeat bg-mobile md:bg-auto bg-[center_top_4rem] md:bg-[center_top_8rem] bg-blend-soft-light flex flex-col items-center">
      <div className="flex justify-between items-center px-3 py-4 w-full md:py-11">
        <div className="text-gray-200 bg-gray-400 px-5 py-3 shadow-sm">
          Seach for places
        </div>
        <div className="bg-gray-400 p-3 rounded-full ">
          <img src={myLocation} alt="my location icon" />
        </div>
      </div>
      <div className="mt-16 w-[150px] md:w-[202px]">
        <img src={shower} alt="shower" className="w-full" />
      </div>
      <p className="text-[144px] text-gray-200">
        15<span className="text-5xl text-gray-500">℃</span>
      </p>
      <p className="text-gray-500 text-4xl font-semibold">Shower</p>
      <div className="flex justify-between text-lg text-gray-600 gap-4 mt-12 font-medium">
        <p>Today</p>
        <p>•</p>
        <p>Fri, 5 Jun</p>
      </div>
      <div className="flex items-center text-lg text-gray-600 gap-2 mt-8 font-semibold">
        <img src={location} alt="location icon" />
        <p>Helsinki</p>
      </div>
    </div>
  );
}
