import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const MovieContext = createContext();

// Custom hook to use the Movie API context
export const useMovieAPI = () => {
  return useContext(MovieContext);
};

// Function to fetch movies
const getMovie = (setMovies, movcat) => {
  const url = `https://api.themoviedb.org/3/trending/${movcat}/day?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDEzNTE3ZWExYjVjNGNhYzFlYTFkM2QxZmVjMTdlOCIsIm5iZiI6MTcyOTA0OTkyNi4yNzE4ODIsInN1YiI6IjY1NzVhYTM1ZWMzNzBjMDExZGE5ODc2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CeqA-gQauf3wFKQ34Uu60xCzBr-mNvdZ-rS0OMM5bCI",
    },
  };

  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      console.log("Fetched Movies:", json); // Log the data structure for debugging
      setMovies(json); // Update the movies state with the fetched data
    })
    .catch((err) => console.error("Error fetching movies:", err));
};

// Context Provider Component
export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movcat, setmovcat] = useState("movie");

  useEffect(() => {
    getMovie(setMovies, movcat);
    setLoading(false);
  }, [movcat]);

  // Add loading state to the context
  return (
    <MovieContext.Provider value={{ movies, loading, setmovcat }}>
      {children}
    </MovieContext.Provider>
  );
};
