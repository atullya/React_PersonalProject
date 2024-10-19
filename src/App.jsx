import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service"; // Ensure this is correctly imported
import Error from "./Pages/Error";
import { ProductProvider } from "./ContextApi/ProductContext";
import ProductDetail from "./Pages/ProductDetail";
import AddtoCart from "./AddtoCart";
import MovieHome from "./Pages/Movie/MovieHome";
import "flowbite/dist/flowbite.min.css";
import "flowbite";
import Quote from "./Pages/ServicePage/QuoteGenerator/Quote";
import { QuoteContextProvider } from "./ContextApi/QuoteContext";
import Weather from "./Pages/ServicePage/Weather/Weather";
import { WeatherContextProvider } from "./ContextApi/WeatherContex";
import ImageSearch from "./Pages/ServicePage/ImageSearch/ImageSearch";
import { ImageContextProvider } from "./ContextApi/ImageContext";

function App() {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "services", // Correct route name
      element: <Service />,
    },
    {
      path: "movies", // Correct route name
      element: <MovieHome />,
    },

    {
      path: "addtocart",
      element: <AddtoCart />,
    },
    {
      path: "about1/:id",
      element: <ProductDetail />,
    },
    //service
    {
      path: "quote",
      element: <Quote />,
    },
    {
      path: "weather",
      element: <Weather />,
    },
    {
      path: "image",
      element: <ImageSearch />,
    },
    {
      path: "*",
      element: <Error />, // Redirect unmatched routes to Error page
    },
  ]);

  return (
    <ProductProvider>
      <QuoteContextProvider>
        <WeatherContextProvider>
          <ImageContextProvider>
            <RouterProvider router={allRoutes}>
              {/* <Navbar /> Move Navbar inside RouterProvider if needed */}
            </RouterProvider>
          </ImageContextProvider>
        </WeatherContextProvider>
      </QuoteContextProvider>
    </ProductProvider>
  );
}

export default App;
