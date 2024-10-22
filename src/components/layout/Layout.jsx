import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';

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
