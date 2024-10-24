import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';

export default function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isProductDetailsPage = location.pathname.startsWith('/products/') || location.pathname.startsWith('/addcart');

    return (
        <div>
            {!isProductDetailsPage && <Navbar />}
            {isHomePage && <Hero />}
            <Outlet />
        </div>
    );
}
