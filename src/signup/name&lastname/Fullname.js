import React, { useRef, useState } from "react";
import "./fullname.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";
import { collection, doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setFirstNameAction } from "../../redux/actions/setFirstName";
import { setLastNameAction } from "../../redux/actions/setLastNameAction";

const Fullname = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "") {
      return setError("Please enter your info");
    } else {
      dispatch({ type: "SET_FIRST_NAME", payload: firstName });
      dispatch({ type: "SET_LAST_NAME", payload: lastName });
      navigate("/signup/select-your-country");
    }
  };

  return (
    <div className="fullname__whole__container">
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
            <label className="email-input">
              <div>First name</div>
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              required
            />

            <label className="password-input">
              <div>Last name</div>
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
            />
          </div>

          <button type="submit" className="fullname__up-agree-join">
            Continue
          </button>
        </form>
      </div>
      <footer className="fullname__footer__main-container">
        <div className="fullname__footer__elements">
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
      </footer>
    </div>
  );
};

export default Fullname;
