import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '@productize/redux';
// import { selectCurrentUser } from '@productize/redux';

export const AuthGuard = ({ children, requiredRole }) => {
  const location = useLocation();
  const { user } = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  if (!token) {
    // User is not logged in
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (!user || user.role !== requiredRole) {
    // User is logged in but doesn't have the required role
    return <Navigate to="/dashboard/home" replace />;
  }

  return children;
};
