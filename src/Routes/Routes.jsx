import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blog/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/Home/ToysCategories/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import PrivateRoute from "./PrivateRoute";

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
        // loader: () => fetch("https://toy-craze-marketplace-server.vercel.app/allToys"),
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-craze-marketplace-server-asad2002web-gmailcom.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-craze-marketplace-server-asad2002web-gmailcom.vercel.app/allToys/${params.id}`
          ),
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
