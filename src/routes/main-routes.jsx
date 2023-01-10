import { useRoutes, Navigate, } from "react-router-dom";
import * as React from 'react';
import Home from "../views/Home";
import Shopping from "../views/Shopping";
import Cart from "../views/Cart.tsx";

const MainRoutes = () => {
    // Check if user is currently logged in, if not redirect to login page
    return useRoutes([
        {
            path: '/cart',
            element: <Cart />
        },
        {
            path: '/shopping',
            element: <Shopping />
        },
        {
            path: '/',
            // Important: If user is not logged in, redirect to Login page
            element: <Home />
        }
    ])
}
 
export default MainRoutes;