import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
// useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(true);
//     });

//     return unsubscribe;
//   }, []);

export const authStateChanged = () => (dispatch) => {
  onAuthStateChanged((user) => {
    dispatch({ type: "AUTH_STATE_CHANGED", payload: user });
  });
};
