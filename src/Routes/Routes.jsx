import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>
    }
])

export default Routes