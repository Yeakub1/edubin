import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../utility/Spinner/Spinner";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  if (loding) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
