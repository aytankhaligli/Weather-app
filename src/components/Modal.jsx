import React, { useState } from "react";
import searchIcon from "../assets/images/search.svg";
import closeIcon from "../assets/images/close.svg";
import navigateNextIcon from "../assets/images/navigate_next.svg";

export default function Modal({
  inputData,
  setInputData,
  setCity,
  setIsSearching,
  setOpenModal,
}) {
  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const handleClick = () => {
    setCity(inputData);
    setIsSearching(true);
    setOpenModal(false);
  };

  return (
    <div className="h-screen md:h-[1023px] w-full md:w-[28%] bg-midnight  flex flex-col items-start pt-5 md:px-12 px-3 ">
      <div className="relative w-full">
        <div
          className="absolute right-0 top-0  w-6 h-6 cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <img src={closeIcon} alt="close icon" />
        </div>
      </div>
      <div className="flex items-center mt-20 gap-3 mb-12 justify-between w-full">
        <div className="relative w-full">
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute top-1/4 left-4"
          />
          <input
            className="border border-solid bg-midnight border-gray-200 w-full h-12 pl-12 focus:outline placeholder:text-gray-700 text-gray-200"
            placeholder="search location"
            value={inputData}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          className="bg-lightblue px-5 h-12 text-gray-200 font-semibold"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div
        className="h-16 w-full flex justify-between px-3 items-center hover:border hover:border-gray-700 mb-12 text-gray-200 cursor-pointer  transition-all duration-300"
        onClick={() => setInputData("london")}
      >
        London
        <img src={navigateNextIcon} alt="navigate next icon" />
      </div>

      <div
        className="h-16 w-full flex justify-between px-3 items-center hover:border hover:border-gray-700 mb-12 text-gray-200 cursor-pointer transition-all duration-300"
        onClick={() => setInputData("barcelona")}
      >
        Barcelona
        <img src={navigateNextIcon} alt="navigate next icon" />
      </div>

      <div
        className="h-16 w-full flex justify-between px-3 items-center hover:border hover:border-gray-700 mb-12 text-gray-200 cursor-pointer transition-all duration-300"
        onClick={() => setInputData("longbeach")}
      >
        Long Beach
        <img src={navigateNextIcon} alt="navigate next icon" />
      </div>
    </div>
  );
}
