import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <div>about section</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],

  },
]);

