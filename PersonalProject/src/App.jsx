import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
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
import ToDo from "./Pages/ServicePage/ToDo/ToDo";
import { ToDoContextProvider } from "./ContextApi/ToDoContext";

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
      path: "services",
      element: <Service />,
    },
    {
      path: "movies",
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
      path: "todo",
      element: <ToDo />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <ProductProvider>
      <QuoteContextProvider>
        <WeatherContextProvider>
          <ImageContextProvider>
            <ToDoContextProvider>
              <RouterProvider router={allRoutes} />
            </ToDoContextProvider>
          </ImageContextProvider>
        </WeatherContextProvider>
      </QuoteContextProvider>
    </ProductProvider>
  );
}

export default App;
