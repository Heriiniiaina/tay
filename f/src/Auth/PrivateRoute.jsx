import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx'; 

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
console.log(user)
  if (!user) {
    return <Navigate to="/auth_user" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/auth_user" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
