import React, { useEffect, useState } from "react";
import "./dashboard.styles.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
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

const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.register.currentUser.user.uid
  );

  console.log(currentUser && currentUser.user);
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

  return (
    <div className="dashboard__header__navbar">
      <h1>this is the header</h1>
      <div>
        {/* <img src="https://www.flaticon.com/free-icon/linkedin_3536505?term=linkedin&page=1&position=1&origin=search&related_id=3536505" /> */}
      </div>
      <p>firstName: {users.firstNameAction}</p>
      <p>lastName: {users.lastNameAction}</p>
      <p>country: {users.countryNameAction}</p>
      <p>university: {users.universityName}</p>
      <p>jobName: {users.jobName && users.jobName}</p>
      <button onClick={signOutHandler}>sign out</button>
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
