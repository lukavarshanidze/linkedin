import React from "react";
import "./navbar.css";
import discover from "./icons/discover.svg";
import people from "./icons/people.svg";
import learning from "./icons/learning.svg";
import jobs from "./icons/jobs.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        Linked <span className="span-in-word">in</span>
      </div>

      <div className="navbar-display col">
        <ul>
          <li className="li discover">
            <a href="#">
              <img src={discover} />
              <span>Discover</span>
            </a>
          </li>

          <li className="li people">
            <a href="#">
              <img src={people} />
              <span>People</span>
            </a>
          </li>

          <li className="li learning">
            <a href="#">
              <img src={learning} />
              <span>Learning</span>
            </a>
          </li>

          <li className="li jobs">
            <a href="#">
              <img src={jobs} />
              <span>Jobs</span>
            </a>
          </li>
        </ul>

        <div className="navbar__buttons">
          <p className="join-now-li-element">Join now</p>
          <p className="sign-in-li-element">
            <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
      {/* <img src={discover}/>
<img src={people}/>
<img src={learning}/>
<img src={jobs}/> */}
    </div>
  );
};

export default Navbar;
