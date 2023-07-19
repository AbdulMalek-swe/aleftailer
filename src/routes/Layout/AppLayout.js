import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
 
import Home from 'pages/Home/Home';
import  { MainFooter } from './Footer';

const AppLayout = () => {
    const {pathname} = useLocation()
    return (
        <div>
            <nav className='z-50'>
            {
                pathname==='/' ? <Home/> :   <Navbar/>
            }
            
            </nav>
            
            <Outlet/>
            <footer>
            <MainFooter/>
            </footer>
          
        </div>
    );
};

export default AppLayout;