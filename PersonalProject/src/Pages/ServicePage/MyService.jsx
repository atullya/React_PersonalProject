import React from "react";
import { NavLink } from "react-router-dom";
import Quote from "../../assets/Image/Quote.png"
import Weather from "../../assets/Image/Weather.png"
import Image from "../../assets/Image/Image.png"
import todo from "../../assets/Image/todo.png"
export default function MyService() {
  return (
    <div>
      <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold"> MY PROJECTS</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Here are some of my projects.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Quote}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h1
                  rel="noopener noreferrer"
                  className="text-xl tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Quote Generator
                </h1>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Here is a Random Quote Generator
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <NavLink to={"/quote"}>
                    <button
                      type="button"
                      className="relative px-8 py-4 ml-4 overflow-hidden font-semibold text-[17px] rounded bg-gray-800 text-gray-50"
                    >
                      Try It!!
                      <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">
                        New
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Weather}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h1
                  rel="noopener noreferrer"
                  className="text-xl tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Weather App
                </h1>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Here is a Simple Weather App
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <NavLink to={"/weather"}>
                    <button
                      type="button"
                      className="relative px-8 py-4 ml-4 overflow-hidden font-semibold text-[17px] rounded bg-gray-800 text-gray-50"
                    >
                      Try It!!
                    </button>
                  </NavLink>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Image}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h1
                  rel="noopener noreferrer"
                  className="text-xl tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                 Image Search App
                </h1>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                 A Simple Image Search App
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <NavLink to={"/image"}>
                    <button
                      type="button"
                      className="relative px-8 py-4 ml-4 overflow-hidden font-semibold text-[17px] rounded bg-gray-800 text-gray-50"
                    >
                      Try It!!
                    </button>
                  </NavLink>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={todo}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h1
                  rel="noopener noreferrer"
                  className="text-xl tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                To Do App
                </h1>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                 A Simple To Do Application
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <NavLink to={"/todo"}>
                    <button
                      type="button"
                      className="relative px-8 py-4 ml-4 overflow-hidden font-semibold text-[17px] rounded bg-gray-800 text-gray-50"
                    >
                      Try It!!
                    </button>
                  </NavLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
