import React from "react";
import Weathers from "./Weathers";

export default function MainPage() {
  return (
    <div className="bg-dark w-full md:w-[72%] pb-6 md:px-40 md:pt-11 md:pb-6">
      <div className="hidden md:flex gap-3 justify-end md:mb-16">
        <div className="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 text-darkblue">
          ℃
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-lg rounded-full text-gray-200 bg-gray-300">
          ℉
        </div>
      </div>
      <Weathers />
      <footer className="text-gray-500 text-sm text-center">
        created by <strong>aytankhaligli</strong> - devChallenges.io
      </footer>
    </div>
  );
}
