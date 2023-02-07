// import React, { useContext, useEffect, useState } from "react";
// import { auth, db } from "./firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { setDoc, doc } from "@firebase/firestore";
// import { async } from "@firebase/util";
// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState();
//   const [countryName, setCountryName] = useState();
//   const [uniName, setUniName] = useState();
//   const [password, setPassword] = useState();
//   const [lastName, setLastName] = useState();

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   //   function login(email, password) {
//   //     return auth.signInWithEmailAndPassword(email, password);
//   //   }

//   //   function logout() {
//   //     return signOut();
//   //   }

//   function firstNameEvent(name) {
//     setFirstName(name);
//   }

//   const countryNameEvent = (name) => {
//     setCountryName(name);
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(true);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     countryNameEvent,
//     countryName,
//     firstNameEvent,
//     firstName,
//     currentUser,
//     signup,
//   };
//   return (
//     <AuthContext.Provider value={value}>
//       {loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
