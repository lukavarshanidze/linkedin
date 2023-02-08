import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../firebase/AuthContext";
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
    <div>
      {/* <input
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Name..."
      /> */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>post</button>

      {/* <input
        onChange={(e) => setNewAge(e.target.value)}
        type="number"
        placeholder="Age..."
      /> */}
      {/* <button onClick={createUser}>Create User</button> */}

      <h2>{users && users.firstNameAction}</h2>
      <h2>{users && users.lastNameAction}</h2>
      <h2>{users && users.universityName}</h2>
      <h2>{users && users.countryNameAction}</h2>
      <h2>{users && users.jobNameAction}</h2>
      <button onClick={signOutHandler}>Sign Out</button>
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
