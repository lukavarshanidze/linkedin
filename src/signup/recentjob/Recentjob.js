import React, { useState } from "react";
import "./recentjob.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jobNameAction } from "../../redux/actions/setJobNameAction";

const Recentjob = () => {
  const [jobName, setJobName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const continueClickHandler = () => {
    dispatch(jobNameAction(jobName));
    navigate("/university");
  };

  const studentHandleClick = () => {
    navigate("/university");
  };

  return (
    <div className="">
      <div className="">
        <div className="signup-logo">
          <h1 className="">
            <Link to="/">
              <span className="span-linked">Linked</span>{" "}
              <span className="span-in">in</span>
            </Link>
          </h1>
        </div>

        <h2 className="recent__job__title">
          Your profile helps you discover new people and <br /> opportunities
        </h2>

        <form className="sign__up-form">
          <div className="sign__up__first-input-group">
            <label className="email-input">
              <div>Most recent job title</div>
            </label>
            <input onChange={(e) => setJobName(e.target.value)} type="text" />

            {jobName && (
              <div className="recentjob__after__type">
                <label className="email-input">
                  <div>Employment type</div>
                </label>
                <select className="recentjob__select__otpions">
                  <option>Select one</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Self-employed</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                </select>

                <label className="email-input">
                  <div>Most recent company</div>
                </label>
                <input type="text" />
              </div>
            )}
          </div>

          <button
            onClick={studentHandleClick}
            className="fullname__up-agree-join"
          >
            I'm a student
          </button>
          <button
            onClick={continueClickHandler}
            className="fullname__up-agree-join"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recentjob;
