import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {       
        return <Navigate to="/auth" />;
    }

    // If authenticated, render the requested route
    return children;
};

export default ProtectedRoute;
