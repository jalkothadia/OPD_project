import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
