import React from "react";
import lightCloud from "../assets/images/LightCloud.png";

export default function WeatherCard() {
  return (
    <div className="flex flex-col items-center bg-midnight py-5 px-6 ">
      <p className="font-medium mb-3 text-gray-200">Tomorrow</p>
      <img src={lightCloud} alt="" className="h-[62px] mb-8" />
      <div className="flex gap-4 font-medium">
        <p className="text-gray-200">16°C</p>
        <p className="text-gray-500">11°C</p>
      </div>
    </div>
  );
}
