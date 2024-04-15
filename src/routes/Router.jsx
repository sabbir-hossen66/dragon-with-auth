import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/news.json')


      },
      {
        path: "/news/:id",
        element: <div>news detail pages</div>,


      },
      {
        path: "/about",
        element: <div>about section</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],

  },
]);

