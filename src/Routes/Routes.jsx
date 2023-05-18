import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Login from "../Pages/Login/Login"
import Blog from "../Pages/Blog/Blog"
import Error from "../Pages/Error/Error"
import Register from "../Pages/Register/Register"

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement: <Error></Error>,
        children : [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    }
])

export default Routes