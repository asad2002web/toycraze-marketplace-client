import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Login from "../Pages/Login/Login"
import Error from "../Pages/Error/Error"
import Register from "../Pages/Register/Register"
import Home from "../Pages/Home/Home"
import Blogs from "../Pages/Blog/Blogs"

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement: <Error></Error>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    }
])

export default Routes