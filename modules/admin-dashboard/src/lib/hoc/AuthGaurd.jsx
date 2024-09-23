

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '@productize/redux';

export const AuthGuard = ({ children, requiredRole, excludedRole }) => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const currentUserRole = user?.role;
  const token = useSelector(selectCurrentToken);

  if (!token) {
    // User is not logged in
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (excludedRole && excludedRole.includes(currentUserRole)) {
    // User has a role that is explicitly excluded from this route
    return <Navigate to="/admin/home" replace />;
  }


  if (!currentUserRole || !requiredRole.includes(currentUserRole)) {
    // User is logged in but doesn't have one of the required roles
    return <Navigate to="/seller" replace />;
  }


  return children;
};