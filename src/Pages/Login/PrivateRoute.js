import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    let location = useLocation();
  const loggedIn = localStorage.getItem("login");
  if (!loggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;