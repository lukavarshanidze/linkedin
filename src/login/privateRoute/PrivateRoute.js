import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";

const PrivateRoute = ({ children }) => {
  var currentUSer = useSelector((state) => state.register.isAuthenticated);
  console.log("kurent", currentUSer && currentUSer);
  return currentUSer ? children : <Navigate to="/" />;
};

export default PrivateRoute;
