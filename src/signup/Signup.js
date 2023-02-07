import React, { useEffect, useRef, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUp } from "../redux/actions/signUpAction";
import { useDispatch } from "react-redux";
import { authStateChanged } from "../redux/actions/AuthStateChanged";

const Signup = () => {
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (emailRef !== "" && passwordRef !== "") {
      try {
        dispatch(signUp(emailRef, passwordRef));
        navigate("/signup/cold-join");
      } catch (error) {
        setError(error.message);
      }
    }

    // dispatch({
    //   type: "REGISTER",
    //   payload: {
    //     id: (new Date).getTime(),
    //     emailRef, passwordRef
    //   }
    // })
  };

  // useEffect(() => {
  //   dispatch(authStateChanged);
  // }, [dispatch]);

  return (
    <div className="">
      <div className="sign__up__main-container">
        <div className="signup-logo">
          <h1 className="">
            <Link to="/">
              <span className="span-linked">Linked</span>{" "}
              <span className="span-in">in</span>
            </Link>
          </h1>
        </div>

        <h1 className="sign__up-title">
          Make the most of your professional life
        </h1>

        <form onSubmit={onSubmitHandler} className="sign__up-form">
          <div className="sign__up__first-input-group">
            {error && <h3 className="signup__error__appear">{error}</h3>}
            <label className="email-input">
              <div>Email</div>
            </label>
            <input
              value={emailRef}
              onChange={(e) => setEmailRef(e.target.value)}
              type="text"
              required
            />

            <label className="password-input">
              <div>Password (6 or more characters)</div>
            </label>
            <input
              value={passwordRef}
              onChange={(e) => setPasswordRef(e.target.value)}
              type="password"
              required
            />
          </div>

          <p className="sign__up__p-privacy">
            By clicking Agree & Join, you agree to the Linkedln{" "}
            <a href="#">User Agreement, </a> <a href="#">Privacy Policy, </a>and{" "}
            <a href="#">Coocie Policy. </a>
          </p>

          <button type="submit" className="sing__up-agree-join">
            Agree & Join
          </button>
          <p className="sign__up__or-element">or</p>
          <button className="sign__up__google__auth">
            Continue with Google
          </button>
          <h3 className="sign__up__already-have-account">
            Already on Linkedln? <Link to="/signin">Sign in</Link>
          </h3>
        </form>
        <p className="sign__up__get-help">
          Looking to create a page for a business? <a href="#">Get help</a>
        </p>
      </div>
      <div className="sign__up-footer">
        <div className="sign__up-footer-linked">
          Linked <span>in</span>
        </div>
        <div>2021</div>
        <div>About</div>
        <div>Accessibility</div>
        <div>User Agreement</div>
        <div>Privacy Policy</div>
        <div>Coocie Policy</div>
        <div>Copyright Policy</div>
        <div>Brand Policy</div>
        <div>Guest Controls</div>
        <div>Community Guidelines</div>
        <div>Language</div>
      </div>
    </div>
  );
};

export default Signup;
