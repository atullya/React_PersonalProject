import React from "react";
import MovieNavbar from "../../components/MovieComponent/MovieNavbar";
import MovieHero from "../../components/MovieComponent/MovieHero";
import {
  MovieContextProvider,
  useMovieAPI,
} from "../../ContextApi/MovieContext";
import TabsLgBasicFullWidth from "../../components/MovieComponent/TabsLgBasicFullWidth";

export default function MovieHome() {
  const { movies } = useMovieAPI;
  console.log(movies);
  return (
    <>
      <MovieContextProvider>
        <MovieNavbar />
        <MovieHero />
        <TabsLgBasicFullWidth />
      </MovieContextProvider>
    </>
  );
}
