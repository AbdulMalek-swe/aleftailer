import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            <div>this is name</div>
            <Outlet/>
            <div>goto mosque</div>
        </div>
    );
};

export default AppLayout;