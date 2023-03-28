import React from 'react';
import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { useAuth } from './authentication.context';

export function RequireAuth({ children }) {
  const auth = useAuth();
  const myLocation = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: myLocation }} replace />;
  }

  if (children) {
    return children;
  }

  return <Outlet />;
}

export default RequireAuth;
