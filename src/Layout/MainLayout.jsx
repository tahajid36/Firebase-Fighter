import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Pages/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;