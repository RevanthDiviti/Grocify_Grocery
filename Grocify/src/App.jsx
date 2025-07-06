import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Fruits from "./components/Fruits/Fruits.jsx";
import Dairy from "./components/Dairy/Dairy.jsx";
import SeaFood from "./components/SeaFood/SeaFood.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fruits",
      element: <Fruits />,
    },
    {
      path: "/dairy",
      element: <Dairy />,
    },
    {
      path: "/seafood",
      element: <SeaFood />,
    },
  ]);
  return (
    <RouterProvider router={router} />
    //   <div>
    //     <Home />
    //   </div>
  );
};

export default App;
