import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
 
import Home from 'pages/Home/Home';
import  Footer from './Footer';

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
            <Footer/>
            </footer>
          
        </div>
    );
};

export default AppLayout;