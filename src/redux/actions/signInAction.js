import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const signIn = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: "SIGNIN_SUCCESS",
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNIN_ERROR",
          payload: error,
        });
      });
  };
};
