import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";
export default function About() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0); // State to keep track of user count

  const images = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500",
    "https://images.unsplash.com/photo-1669879825881-6d4e4bde67d5?q=80&w=500",
  ];

  // Function to pick a random image from the list
  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)];



  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, index: index + 1 };

    // Update userData and increment index
    setUserData([...userData, newUser]);
    setIndex(index + 1);

    // Clear the form data
    setFormData({ username: "", email: "", message: "" });

    // Log updated userData
    console.log("Updated User Data:", [...userData, newUser]);
  };

  return (
    <div>
      <Navbar />
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Collaborate remotely, with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Atullya.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Atullya is dedicated to creating responsive, user-friendly
                websites that enhance online experiences. Specializing in HTML,
                CSS, JavaScript, and Bootstrap, we provide tailored web
                solutions that meet the unique needs of each client.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Start exploring{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Show User Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.username}
              onChange={handleInput}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <input
              type="text"
              name="message"
              id="message"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.message}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {index === 0 ? (
              <>
                <ReactLoading
                  type="spin" // or use other types like "bars", "bubbles", "cylon", etc.
                  color="#000"
                  height={"20%"}
                  width={"20%"}
                />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              "User Data:"
            )}
          </h2>

          {userData.map((v, i) => (
            <ShowUserCard key={i} udetail={v} image={getRandomImage()} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ShowUserCard({ udetail, image }) {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -window.innerHeight / 2 + 50,
        left: -window.innerWidth / 2 + 50,
        right: window.innerWidth / 2 - 50,
        bottom: window.innerHeight / 2 - 50,
      }}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.2}
      className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
      style={{
        width: "350px",
        cursor: "grab",
      }}
    >
      {/*  <!-- Image --> */}
      <figure className="p-6 pb-0">
        <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
          <img
            src={image}
            alt="user name"
            title="user name"
            width="80"
            height="80"
            className="max-w-full rounded-full"
          />
        </span>
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">
            {udetail.username}
          </h3>
          <p className=" text-slate-400">Senior Designer</p>
        </header>
      </div>
      {/*  <!-- Action base sized with lead icon buttons  --> */}
      <div className="flex justify-end gap-2 p-6 pt-0">
        <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
          <span className="order-2">Send message</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-21 desc-21"
            >
              <title id="title-21">{udetail.message}</title>
              <desc id="desc-21">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </span>
        </button>
        <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span className="order-2">Add friend</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-06 desc-06"
            >
              <title id="title-06">Icon title</title>
              <desc id="desc-06">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </span>
        </button>
      </div>
    </motion.div>
  );
}
