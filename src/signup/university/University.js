import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./university.css";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { useSelector } from "react-redux";

const University = () => {
  const firstNameAction = useSelector((state) => state.register.firstName);
  const lastNameAction = useSelector((state) => state.register.lastName);
  const countryNameAction = useSelector((state) => state.register.countryName);
  const jobNameAction = useSelector((state) => state.register.jobName);
  const [universityName, setUniversityName] = useState();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state) => state.register.currentUser.user.uid
  );

  console.log(currentUser && currentUser);
  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const ref = doc(db, "userInfo", currentUser);
      const docRef = await setDoc(ref, {
        firstNameAction,
        lastNameAction,
        countryNameAction,
        universityName,
        jobNameAction,
      });
      navigate("/dashboard");
      console.log("congrats new user created successfully");
    } catch (e) {
      console.error("error is here bruh: ", e);
    }
  };

  return (
    <div className="">
      <div className="signup-logo">
        <h1 className="">
          <Link to="/">
            <span className="span-linked">Linked</span>{" "}
            <span className="span-in">in</span>
          </Link>
        </h1>
      </div>

      <div className="country__title-div">
        <h2 className="">This will help people to know about you</h2>
      </div>

      <form className="sign__up-form">
        <div className="university__form-div">
          <label className="password-input">
            <div>University</div>
          </label>
          <input
            onChange={(e) => setUniversityName(e.target.value)}
            type="text"
            required
          />
        </div>

        <button onClick={onClickHandler} className="fullname__up-agree-join">
          Next
        </button>
      </form>
    </div>
  );
};
export default University;
