import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Admin from "./pages/Admin";


const allroutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "admin",
element:<Admin/>
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

function App() {
  return <RouterProvider router={allroutes} />;
}

export default App;
