import React, { useState, useRef, useEffect } from "react";
import { useMovieAPI } from "../../ContextApi/MovieContext";
import CarouselIndicatorsControlsInside from "./CarouselIndicatorsControlsInside";
import CarouselIndicatorTV from "./CarouselIndicatorTV";

export default function TabsLgBasicFullWidth() {
  const [currentTab, setCurrentTab] = useState(1);
  const { setmovcat } = useMovieAPI();
  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
      if (e.keyCode === 39) {
        // Right arrow key
        setCurrentTab((prevTab) => (prevTab < 2 ? prevTab + 1 : 1)); // Loop back to first tab
      } else if (e.keyCode === 37) {
        // Left arrow key
        setCurrentTab((prevTab) => (prevTab > 1 ? prevTab - 1 : 2)); // Loop back to last tab
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="max-w-full px-[150px]" aria-multiselectable="false">
      <ul
        className="flex items-center border-b border-slate-200"
        role="tablist"
        ref={wrapperRef}
      >
        <li className="flex-1" role="presentation">
          <button
            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 ${
              currentTab === 1
                ? "border-emerald-500 text-emerald-500"
                : "border-transparent text-slate-700 hover:text-emerald-500"
            }`}
            id="tab-label-1a"
            role="tab"
            aria-controls="tab-panel-1a"
            aria-selected={currentTab === 1}
            onClick={() => {
              setCurrentTab(1);
              setmovcat("movie");
            }}
          >
            <span>Movies</span>
          </button>
        </li>
        <li className="flex-1" role="presentation">
          <button
            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 ${
              currentTab === 2
                ? "border-emerald-500 text-emerald-500"
                : "border-transparent text-slate-700 hover:text-emerald-500"
            }`}
            id="tab-label-2a"
            role="tab"
            aria-controls="tab-panel-2a"
            aria-selected={currentTab === 2}
            onClick={() => {
              setCurrentTab(2);
              setmovcat("tv"); // Change category to TV shows if necessary
            }}
          >
            <span>TV Shows</span>
          </button>
        </li>
      </ul>
      <div>
        <div
          className={`px-6 py-4 ${currentTab === 1 ? "" : "hidden"}`}
          id="tab-panel-1a"
          role="tabpanel"
          aria-labelledby="tab-label-1a"
          tabIndex="-1"
        >
          <CarouselIndicatorsControlsInside />
        </div>
        <div
          className={`px-6 py-4 ${currentTab === 2 ? "" : "hidden"}`}
          id="tab-panel-2a"
          role="tabpanel"
          aria-labelledby="tab-label-2a"
          tabIndex="-1"
        >
          <CarouselIndicatorTV />
        </div>
      </div>
    </section>
  );
}
