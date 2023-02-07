import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
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
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState();
  const [input, setInput] = useState("");
  const currentUser = useSelector(
    (state) => state.register.currentUser.user.uid
  );
  const currentUserClone = currentUser;
  console.log(currentUser && currentUser);
  const docRef = doc(db, "userInfo", currentUserClone);

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
