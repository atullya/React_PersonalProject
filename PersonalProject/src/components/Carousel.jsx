import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function CarouselIndicatorsControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  );
}
// import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";

// export default function SliderIndicatorsControlsInside() {
//   useEffect(() => {
//     const slider = new Glide(".glide-03", {
//       type: "slider",
//       focusAt: "center",
//       perView: 1,
//       autoplay: 2000,
//       animationDuration: 700,
//       gap: 0,
//       classes: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//     }).mount();

//     return () => {
//       slider.destroy();
//     };
//   }, []);

//   return (
//     <>
//       {/*<!-- Component: Slider with indicators & controls inside --> */}
//       <div className="relative glide-03">
//         {/*    <!-- Slides --> */}
//         <div className="overflow-hidden" data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] h-auto relative flex w-full overflow-hidden p-0">
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/image-05.jpg"
//                 className="w-full max-w-full  m-auto"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/image-01.jpg"
//                 className="w-full max-w-full  m-auto"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/image-02.jpg"
//                 className="w-full max-w-full  m-auto"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/image-03.jpg"
//                 className="w-full max-w-full  m-auto"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/image-04.jpg"
//                 className="w-full max-w-full  m-auto"
//               />
//             </li>
//           </ul>
//         </div>
//         {/*    <!-- Controls --> */}
//         <div
//           className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
//           data-glide-el="controls"
//         >
//           <button
//             className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir="<"
//             aria-label="prev slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <title>prev slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//               />
//             </svg>
//           </button>
//           <button
//             className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir=">"
//             aria-label="next slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <title>next slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </button>
//         </div>
//         {/*    <!-- Indicators --> */}
//         <div
//           className="absolute bottom-0 flex items-center justify-center w-full gap-2"
//           data-glide-el="controls[nav]"
//         >
//           <button
//             className="p-4 group"
//             data-glide-dir="=0"
//             aria-label="goto slide 1"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=1"
//             aria-label="goto slide 2"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=2"
//             aria-label="goto slide 3"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=3"
//             aria-label="goto slide 4"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//         </div>
//       </div>
//       {/*<!-- End Slider with indicators & controls inside --> */}
//     </>
//   );
// }
