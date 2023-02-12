import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./login/navbar/Navbar";
import Signup from "./signup/Signup";
import Main from "./login/main/Main";
import Signin from "./login/sign-in/Signin";
import Fullname from "./signup/name&lastname/Fullname";
import Country from "./signup/country&city/Country";
import Recentjob from "./signup/recentjob/Recentjob";
import AuthProvider from "./firebase/AuthContext";
import University from "./signup/university/University";
import Dashboard from "./dashboard/Dashboard";
import PrivateRoute from "./login/privateRoute/PrivateRoute";
<title>title</title>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/signup/cold-join"
            element={
              <PrivateRoute>
                <Fullname />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup/select-your-country"
            element={
              <PrivateRoute>
                <Country />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup/recent-job"
            element={
              <PrivateRoute>
                <Recentjob />
              </PrivateRoute>
            }
          />
          <Route
            path="/university"
            element={
              <PrivateRoute>
                <University />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
