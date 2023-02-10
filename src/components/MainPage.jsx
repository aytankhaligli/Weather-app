import React, { useState } from "react";
import Weathers from "./Weathers";

export default function MainPage({ weather, day }) {
  const [celcius, setCelcius] = useState(true);

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
      <Weathers weather={weather} day={day} celcius={celcius} />
      <footer className="text-gray-500 text-sm text-center">
        created by <strong>aytankhaligli</strong> - devChallenges.io
      </footer>
    </div>
  );
}
