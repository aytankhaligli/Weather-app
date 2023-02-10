import React from "react";
import WeatherCard from "./WeatherCard";
import navIcon from "../assets/images/assistant_navigation.svg";

export default function Weathers({ weather, day, celcius }) {
  const cardElement = weather.forecast.forecastday.map((el, i) => (
    <WeatherCard
      key={i}
      id={i}
      icon={el.day.condition.icon}
      tempMax={el.day.maxtemp_c}
      tempMin={el.day.mintemp_c}
      tempMaxF={el.day.maxtemp_f}
      tempMinF={el.day.mintemp_f}
      date={el.date}
      day={day}
      celcius={celcius}
    />
  ));
  const humidtyWidth = weather.current.humidity + 100 + "px";

  return (
    <div>
      <div className="grid grid-cols-2 md:flex gap-x-7 gap-y-8 mb-14 px-[54px] py-[52px] md:p-0 justify-between md:gap-1">
        {cardElement}
      </div>

      <div className=" mb-24 px-6 md:p-0">
        <h1 className="text-gray-200 text-2xl font-bold mb-8">
          Today’s Hightlights
        </h1>

        <div className="flex flex-col gap-8  md:grid md:grid-cols-2 md:gap-12">
          <div className="bg-midnight flex flex-col items-center justify-center  h-[204px]">
            <h1 className="font-medium text-gray-200 mb-3 md:mb-0">
              Wind status
            </h1>
            <div className="text-gray-200 flex items-center mb-6 md:mb-4">
              <p className="text-[64px] font-bold">
                {weather.current.wind_mph}
              </p>
              <p className="text-4xl font-medium">mph</p>
            </div>
            <div className="flex items-center gap-2 ">
              <img
                src={navIcon}
                alt="assistan navigation icon"
                style={{ transform: `rotate(${weather.current.wind_degree})` }}
              />
              <p className="text-gray-200 text-sm">
                {weather.current.wind_dir}
              </p>
            </div>
          </div>

          <div className="bg-midnight flex flex-col items-center justify-center  h-[204px]">
            <h1 className="font-medium text-gray-200 ">Humidity</h1>
            <div className="text-gray-200 flex items-center ">
              <div className="flex items-center mt-5">
                <p className="text-[64px] font-bold">
                  {weather.current.humidity}
                </p>
                <p className="text-4xl font-normal">%</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2  text-xs text-gray-500 justify-between font-bold">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className=" w-[229px] h-2 rounded-full bg-gray-200 ">
                <div
                  className="h-2 rounded-full bg-yellow"
                  style={{ width: `${humidtyWidth}` }}
                ></div>
              </div>
              <p className="text-end text-xs text-gray-500 font-bold">%</p>
            </div>
          </div>

          <div className="bg-midnight flex flex-col items-center justify-around h-[159px]">
            <h1 className="font-medium text-gray-200 mb-3 md:-mb-4">
              Visibility
            </h1>
            <div className="text-gray-200 flex items-center ">
              <p className="text-[64px] font-bold">
                {weather.current.vis_miles}
              </p>
              <p className="ml-3 text-4xl font-normal">miles</p>
            </div>
          </div>

          <div className="bg-midnight flex flex-col items-center justify-center  h-[159px]">
            <h1 className="font-medium text-gray-200 mb-3">Air Pressure</h1>
            <div className="text-gray-200 flex items-center ">
              <p className="text-[64px] font-bold">
                {weather.current.pressure_mb}
              </p>
              <p className="ml-3 text-4xl font-normal">mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
