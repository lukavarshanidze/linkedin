import { combineReducers, createStore, applyMiddleware } from "redux";
import loggedReducer from "./isLogged";
import registerReducer from "./register";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  register: registerReducer,
  isLogged: loggedReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
