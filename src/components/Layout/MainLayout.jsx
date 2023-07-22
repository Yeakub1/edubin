import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;