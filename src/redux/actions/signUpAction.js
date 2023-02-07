import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const signUp = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch({ type: "SIGN_UP_SUCCESS", payload: user });
      })
      .catch((error) => {
        dispatch({ type: "SIGN_UP_ERROR", payload: error });
      });
  };
};
