import React, { useState } from "react";
import Hightlights from "./Hightlights";
import WeatherCard from "./WeatherCard";
import navIcon from "../assets/images/assistant_navigation.svg";

export default function MainPage({ weather, day }) {
  const [celcius, setCelcius] = useState(true);

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

  return (
    <div className="bg-dark w-full md:w-[72%] pb-6 md:px-32 md:pt-11 md:pb-6">
      <div className="hidden md:flex gap-3 justify-end md:mb-16">
        <div
          className={`w-10 h-10 flex items-center justify-center text-lg rounded-full ${
            celcius ? "bg-gray-200 text-darkblue" : " text-gray-200 bg-gray-300"
          }  cursor-pointer`}
          onClick={() => setCelcius(true)}
        >
          ℃
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center text-lg rounded-full cursor-pointer ${
            !celcius
              ? "bg-gray-200 text-darkblue"
              : " text-gray-200 bg-gray-300"
          }`}
          onClick={() => setCelcius(false)}
        >
          ℉
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex gap-x-5 gap-y-8 mb-14 px-11 py-[52px] md:p-0 justify-between md:gap-1">
        {cardElement}
      </div>
      <Hightlights
        navIcon={navIcon}
        humidity={weather.current.humidity}
        wind_mph={weather.current.wind_mph}
        wind_degree={weather.current.wind_degree}
        wind_dir={weather.current.wind_dir}
        vis_miles={weather.current.vis_miles}
        pressure_mb={weather.current.pressure_mb}
      />
      <footer className="text-gray-500 text-sm text-center">
        created by <strong>aytankhaligli</strong> - devChallenges.io
      </footer>
    </div>
  );
}
