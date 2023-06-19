import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
 
import Home from 'pages/Home/Home';

const AppLayout = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname==='/' ? <Home/>: <Navbar/>
            }
            
            <Outlet/>
            <div> sdfsd</div>
        </div>
    );
};

export default AppLayout;