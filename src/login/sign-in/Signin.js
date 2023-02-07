import React, { useContext, useRef, useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Signin = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        setError("Failed to Log in");
      });
  };
  return (
    <div>
      <div className="login__main-container">
        <div className="login__logo">
          <h1 className="">
            <Link to="/">
              <span className="login__span-linked">Linked</span>{" "}
              <span className="login__span-in">in</span>
            </Link>
          </h1>
        </div>
        <div className="login__sign-in-container">
          <div className="login__header">
            <h1>Sign in</h1>
            <p className="login__stay__updated__title">
              Stay updated on your professional world
            </p>
            {error && <p className="login__failed__to__login">{error}</p>}
          </div>

          <form onSubmit={onSubmitHandler} className="login__form">
            <div className="login__first-input-group">
              <div className="login__form__label-and-input">
                <input ref={emailRef} type="email" required />
                <span>Email</span>
              </div>

              <div className="login__form__label-and-input">
                <input ref={passwordRef} type="password" required />
                <span>Password</span>
              </div>

              <div className="login__forgot-password">
                <a href="#">Forgot password?</a>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="login__form__sign__in"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="login__sign-ins">
            <p className="login__or-element">or</p>
            <div className="login__google__auth-div">
              <button className="login__google__auth-button">
                Continue with Google
              </button>
            </div>
            <button className="login__apple__auth">Continue with Apple</button>
          </div>
        </div>{" "}
        {/* end of .login__sign-in-container */}
        <h3 className="login__already-have-account">
          New to Linkedin? <Link to="/signup">Join now</Link>
        </h3>
      </div>
      <div className="login__footer">
        <div className="login__footer-linked">
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

export default Signin;
