import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../Components/Pages/Home";
import AboutUs from "../Components/Pages/AboutUs";
import Profile from "../Components/Pages/Profile";
import SignIn from "../Components/Pages/SignIn";
import SignUp from "../Components/Pages/SignUp";

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
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/signin',
                element: <SignIn/>
            }
        ]
        
    }
])