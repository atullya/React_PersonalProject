import React, { useState } from "react";
import { useQuoteContext } from "../../../ContextApi/QuoteContext";
import Navbar from "../../../components/Navbar";

export default function QuotesComponent() {
  const { quotes, limit, setlimit } = useQuoteContext(); // Assuming this returns the full object
 

  // Check if quotesData is defined and has a quotes array
  const quotes1 = quotes.quotes || []; // Access the quotes array

  return (
    <div className="p-4">
      <Navbar />
      <div className="flex items-center justify-center flex-col mt-10">
        <input
          type="range"
          min={3}
          max={30}
          value={limit}
          onChange={(e) => {
            setlimit(e.target.value); // Update the state when the slider changes
          }}
          className="m-auto"
        />
        <p className="mb-4">Current Length: {limit}</p>{" "}
        {/* Display the current value */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7">
        {quotes1.length > 0 ? (
          quotes1.map((quote, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <p className="text-gray-700 font-semibold">
                <strong>Author:</strong> {quote.author}
              </p>
              <p className="text-gray-800 mt-2">
                <strong>Quote:</strong> {quote.quote}{" "}
                {/* Make sure to display the quote content */}
              </p>
            </div>
          ))
        ) : (
          <p>No quotes available.</p>
        )}
      </div>
    </div>
  );
}
