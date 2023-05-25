import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blog/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "http://localhost:4000/allToys"
          ),
      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
