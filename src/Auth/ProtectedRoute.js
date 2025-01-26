import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/auth" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.exp);
        const currentTime = Date.now() / 1000;

        
        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token');
            return <Navigate to="/auth" />;
        }
    } catch (error) {
        localStorage.removeItem('token');
        return <Navigate to="/auth" />;
    }

    return children;
};

export default ProtectedRoute;
