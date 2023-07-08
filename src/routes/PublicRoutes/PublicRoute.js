import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const [cookies] = useCookies(['token']);
    const token = cookies['token'];
     if (token) {
        // return children;
        return <Navigate to="/" replace />;
      }
      return children;
};

export default PublicRoute;