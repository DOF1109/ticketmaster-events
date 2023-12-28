import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../views/Home/Home'
import Detail from '../views/Detail/Detail'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    }
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes