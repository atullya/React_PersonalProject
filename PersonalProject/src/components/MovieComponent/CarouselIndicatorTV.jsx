import React, { useEffect, useState } from "react";
// import Glide from "@glidejs/glide";
import { useMovieAPI } from "../../ContextApi/MovieContext";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";
// export default function CarouselIndicatorTV() {
//   const { movies } = useMovieAPI();
//   const [slider, setSlider] = useState(null);

//   useEffect(() => {
//     if (movies && movies.results && movies.results.length > 0) {
//       const glideInstance = new Glide(".glide-03", {
//         type: "carousel",
//         focusAt: "center",
//         perView: 3,
//         autoplay: 3000,
//         animationDuration: 700,
//         gap: 24,
//         classNames: {
//           nav: {
//             active: "[&>*]:bg-wuiSlate-700",
//           },
//         },
//         breakpoints: {
//           1024: {
//             perView: 2,
//           },
//           640: {
//             perView: 1,
//           },
//         },
//       });

//       glideInstance.mount();
//       setSlider(glideInstance);

//       return () => {
//         glideInstance.destroy();
//       };
//     }
//   }, [movies]);

//   if (!movies || !movies.results || movies.results.length === 0) {
//     return <div>No movies found.</div>;
//   }

//   const handlePrevClick = () => {
//     if (slider) {
//       slider.go("<"); // Go to previous slide
//     }
//   };

//   const handleNextClick = () => {
//     if (slider) {
//       slider.go(">"); // Go to next slide
//     }
//   };

//   return (
//     <div className="glide-03 relative w-full">
//       <div className="overflow-hidden" data-glide-el="track">
//         <ul className="flex w-full" style={{ gap: "24px" }}>
//           {movies.results.slice(1, 10).map((movie, index) => (
//             <li
//               key={index}
//               className="glide__slide"
//               style={{ flex: "0 0 calc(100% / 3)" }}
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title || movie.name}
//                 className="m-auto max-h-full w-full max-w-full"
//               />
//               <h3>{movie.title || `Movie ID: ${movie.id}`}</h3>
//               <h2>{movie.name}</h2>
//               <h2>{movie.original_name}</h2>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div
//         className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
//         data-glide-el="controls"
//       >
//         {/* Previous Button */}
//         <button
//           className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//           onClick={handlePrevClick}
//           aria-label="prev slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>
//         </button>
//         {/* Next Button */}
//         <button
//           className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//           onClick={handleNextClick}
//           aria-label="next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Controls */}
//       <div
//         className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
//         data-glide-el="controls"
//       >
//         <button
//           className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//           data-glide-dir="<"
//           aria-label="prev slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <title>prev slide</title>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>
//         </button>
//         <button
//           className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//           data-glide-dir=">"
//           aria-label="next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <title>next slide</title>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Indicators */}
//       <div
//         className="absolute bottom-0 flex w-full items-center justify-center gap-2"
//         data-glide-el="controls[nav]"
//       >
//         {movies.results.slice(1, 15).map((_, index) => (
//           <button
//             key={index}
//             className="group p-4"
//             data-glide-dir={`=${index}`}
//             aria-label={`goto slide ${index + 1}`}
//           >
//             <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function CarouselIndicatorTV() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}
