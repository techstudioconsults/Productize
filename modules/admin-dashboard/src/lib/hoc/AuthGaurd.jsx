import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '@productize/redux';

export const AuthGuard = ({ children, requiredRole }) => {
  const location = useLocation();
  const user  = useSelector(selectCurrentUser);
  console.log(user);
  const currentUser = user?.role
  
  const token = useSelector(selectCurrentToken);

  if (!token) {
    // User is not logged in
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (!currentUser || !requiredRole.includes(currentUser)) {
    // User is logged in but doesn't have one of the required roles
    return <Navigate to="/seller" replace />;
  }

  return children;
};
