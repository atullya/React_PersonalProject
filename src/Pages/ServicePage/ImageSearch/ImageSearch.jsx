import React, { useState } from "react";
import { useImageContextApi } from "../../../ContextApi/ImageContext";
import Navbar from "../../../components/Navbar";
import ImageGallary from "./ImageGallary";

export default function ImageSearch() {
  const { allImages, setSearchImage } = useImageContextApi();
  console.log("My Images", allImages);
  let [inputData, setInputData] = useState("");
  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    if (inputData.trim()) {
      setSearchImage(inputData.trim()); // Set the city with trimmed input
      setInputData(""); // Clear the input field after setting the city
    }
  };
  return (
    <div>
      <Navbar />

      <div className="relative w-[50%] m-auto mt-8">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          value={inputData}
          placeholder="Search Image..."
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          onChange={handleInput}
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <ImageGallary allImages={allImages} />
    </div>
  );
}
