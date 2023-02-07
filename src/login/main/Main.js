import React, { useEffect, useRef, useState } from "react";
import "./signin.css";
import googleSvg from "./google.svg";
import screen from "./scr.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/signInAction";
import { authStateChanged } from "../../redux/actions/AuthStateChanged";

const Main = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(email);
  console.log(password);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(authStateChanged);
      signIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <div className="display-flex-two-sections">
        <div className="col">
          <form onSubmit={onSubmitHandler}>
            <h1 className="sign-in-h1">
              {" "}
              Welcome to your professional community
            </h1>
            {error && <p>{error}</p>}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="first-input"
              type="email"
              placeholder="Email or phone number"
            />
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="second-input"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="forgot-password">Forgot password?</p>
            <button type="submit" className="sign-in-button">
              Sign in
            </button>
            <p className="p-element-or">or</p>
            <div className="display-flex-button-and-image">
              <img className="google-svg" src={googleSvg} />
              <button className="sign-in-with-google-button">
                Sign in with Google
              </button>
            </div>
            <div>
              <button className="new-to-linkedin-join">
                <Link to="signup">New to LinkedIn? Join now</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <img className="screen-image" src={screen} />
        </div>
      </div>
    </div>
  );
};

export default Main;
