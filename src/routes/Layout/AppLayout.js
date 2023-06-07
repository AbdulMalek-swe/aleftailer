import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            <div> </div>
            <Outlet/>
            <div> </div>
        </div>
    );
};

export default AppLayout;