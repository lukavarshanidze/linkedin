import React, { useEffect, useState } from "react";
import "./dashboard.styles.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  Firestore,
  FieldValue,
  getDoc,
} from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import linkedinlogo from "./icons/linkedinlogo.svg";
import searchicon from "./icons/searchlogo.svg";
import homelogo from "./icons/homelogo.svg";
import networklogo from "./icons/networklogo.svg";
import messagelogo from "./icons/messagelogo.svg";
import jobslogo from "./icons/jobslogo.svg";
import notificationlogo from "./icons/notificationlogo.svg";
import userPhoto from "./icons/user.png";
import workLogo from "./icons/worklogo.svg";
import downarrowsvg from "./icons/downarrowsvg.svg";

const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState();
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.register.currentUser.user.uid
  );

  // console.log(currentUser && currentUser.user);
  const docRef = doc(db, "userInfo", currentUser);

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, {
  //     name: newName,
  //     age: Number(newAge),
  //   });
  // };

  // const updateUser = async (id, age) => {
  //   const newFields = { age: age + 1 };
  //   const userDoc = doc(db, "users", id);
  //   await updateDoc(userDoc, newFields);
  // };

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // };
  useEffect(() => {
    const getDocFun = async () => {
      try {
        const getDocsRef = await getDoc(docRef);
        setUsers(getDocsRef.data());
      } catch (error) {
        console.log(error.message);
      }
    };
    getDocFun();
  }, []);

  const signOutHandler = async () => {
    try {
      await signOut(auth).then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  {
    /* <h1>this is the header</h1>
      <div>
        <img src="../" />
      </div>
      <p>salka: {users.firstNameAction}</p>
      <p>lastName: {users.lastNameAction}</p>
      <p>country: {users.countryNameAction}</p>
      <p>university: {users.universityName}</p>
      <p>jobName: {users.jobName && users.jobName}</p>
      <p>letsgo</p>
      <button onClick={signOutHandler}>sign out</button> */
  }
  return (
    <div className="dashboard__header__navbar">
      <div className="dashboard__linkedin-logo">
        <img className="dashboad__linkedin-logo-img" src={linkedinlogo} />

        <div className="dashboard__feed-navbar-search">
          <img className="dashboard__linkeding-search-img" src={searchicon} />
          <input placeholder="Search" />
        </div>

        <nav>
          <ul className="dashboard__header-ul-list">
            <li>
              <img src={homelogo} />
              <p>Home</p>
            </li>
            <li>
              <img src={networklogo} />
              <p>My Network</p>
            </li>
            <li>
              <img src={jobslogo} />
              <p>Jobs</p>
            </li>
            <li>
              <img src={messagelogo} />
              <p>Messaging</p>
            </li>
            <li>
              <img src={notificationlogo} />
              <p>Notifications</p>
            </li>
            <li
              onClick={() => setHidden((current) => !current)}
              className="userPhoto-li-element"
            >
              <img src={userPhoto} />
              <div className="dashboard__arrow-svg-flex">
                <p>Me</p>
                <img src={downarrowsvg} />
              </div>
              {hidden && (
                <div className="dash_container">
                  <div className="dash_popup-img-name">
                    <img src={userPhoto} />
                    <div className="dash_fullname">
                      <h3>
                        {users.firstNameAction + " " + users.lastNameAction}{" "}
                      </h3>
                      <p className="dash_tire">--</p>
                    </div>
                  </div>
                  <p className="dash_view-profile">View Profile</p>
                  <p className="dash_border_bottom"></p>

                  <div className="dash_starting-at-account-el">
                    <h4 className="dash_account-h">Account</h4>

                    <div className="dash_flex-icon-and-premium">
                      <p>icon</p>
                      <div>
                        <p>Try Premium for Free</p>
                      </div>
                    </div>
                    <p>Settings & Privacy</p>
                    <p>Help</p>
                    <p>Language</p>
                    <p className="dash_border_bottom"></p>
                    <h4>Manage</h4>
                    <p>Posts & Activity</p>
                    <p>Job Posting Account</p>
                    <p className="dash_border_bottom"></p>
                    <a onClick={signOutHandler}>Sign out</a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <img src={workLogo} />
              <div className="dashboard__arrow-svg-flex">
                <p>Work</p>
                <img src={downarrowsvg} />
              </div>
            </li>
            <li className="dashboard__premium-message">
              <p>Get Hired Faster, Try Premium Free</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;

//this is to post something on feed at Timestamp - anu yvelastvis ert dros

// useEffect(() => {
//   onSnapshot(usersCollectionRef, (snapshot) => {
//     setPost(
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }))
//     );
//   });
// }, []);

// const sendPost = (e) => {
//   e.preventDefault();
//   addDoc(usersCollectionRef, {
//     name: "luka varshanidze",
//     description: "this is a test",
//     message: input,
//     timestamp: serverTimestamp(),
//   });
//   setInput("");
// };

// {post &&
//   post.map(({ id, data: { name, description, message } }) => {
//     return (
//       <div key={id}>
//         <p>name: {name}</p>
//         <p>desc: {description}</p>
//         <p>message: {message}</p>
//       </div>
//     );
//   })}
