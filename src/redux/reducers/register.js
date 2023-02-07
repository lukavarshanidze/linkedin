import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialStore = {
  firstName: "",
  lastName: "",
  countryName: "",
  universityName: "",
  jobName: "",
  currentUser: null,
  error: null,
};

const persistConfig = {
  key: "auth",
  storage,
};

const registerReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "AUTH_STATE_CHANGED":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "SET_COUNTRY_NAME":
      return {
        ...state,
        countryName: action.payload,
      };
    case "SET_UNI_NAME":
      return {
        ...state,
        universityName: action.payload,
      };
    case "SET_JOB_NAME":
      return {
        ...state,
        jobName: action.payload,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case "SIGN_UP_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload.uid,
        error: null,
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, registerReducer);
