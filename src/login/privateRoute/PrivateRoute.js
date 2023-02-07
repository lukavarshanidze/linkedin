import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";

const PrivateRoute = ({ children }) => {
  const currentUSer = true;
  return currentUSer ? children : <Navigate to="/" />;
};

export default PrivateRoute;
