import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../Components/Pages/Home";
import AboutUs from "../Components/Pages/AboutUs";
import Profile from "../Components/Pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/profile',
                element: <Profile/>
            }
        ]
        
    }
])