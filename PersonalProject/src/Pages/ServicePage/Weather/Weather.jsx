import React, { useState } from "react";
import { useWeatherContext } from "../../../ContextApi/WeatherContex";
import Navbar from "../../../components/Navbar";

import { FaSun, FaCloud, FaCloudRain } from "react-icons/fa"; // Example icons
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Weather() {
  const { weatherr, setCity } = useWeatherContext();
  let [inputData, setInputData] = useState("");

  // Handle input changes
  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  // Handle the city search button click
  const handleClick = () => {
    if (inputData.trim()) {
      setCity(inputData.trim()); // Set the city with trimmed input
      setInputData(""); // Clear the input field after setting the city
    }
  };

  // Function to get the weather icon based on condition
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <FaSun className="w-16 h-16 text-yellow-500" />;
      case "Clouds":
        return <FaCloud className="w-16 h-16 text-gray-500" />;
      case "Rain":
        return <FaCloudRain className="w-16 h-16 text-blue-500" />;
      // Add more conditions as necessary
      default:
        return <FaCloud className="w-16 h-16 text-gray-500" />; // Default icon
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 min-h-screen bg-gray-50">
        <div className="relative my-6 w-[50%] m-auto">
          <input
            id="id-l15"
            type="text"
            name="id-l15"
            value={inputData}
            placeholder="Search City"
            className="relative w-full h-12 px-4 pr-12 transition-all border-b outline-none focus-visible:outline-none peer border-slate-700 text-slate-800 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={handleInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 transition-colors duration-200 hover:stroke-slate-600 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-labelledby="title-11 description-11"
            role="graphics-symbol"
            onClick={handleClick}
          >
            <title id="title-11">Search icon</title>
            <desc id="description-11">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold">Weather Information</h2>
        {weatherr && weatherr.main ? (
          <div className="bg-white p-[70px] rounded-lg shadow-md text-center mt-4">
            <div className="flex justify-center mb-8">
              {getWeatherIcon(weatherr.weather[0]?.main)}
            </div>
            <p className="text-xl mb-2">
              <strong>Location:</strong> {weatherr.name}
            </p>
            <p className="text-xl mb-2">
              <strong>Temperature:</strong> {weatherr.main.temp}°C
            </p>
            <p className="text-xl mb-2">
              <strong>Weather:</strong> {weatherr.weather[0]?.description}
            </p>
            <p className="text-xl mb-2">
              <strong>Humidity:</strong> {weatherr.main.humidity}%
            </p>
      
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            No Results Found
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
      </div>
    </>
  );
}
