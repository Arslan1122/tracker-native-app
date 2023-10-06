import { combineReducers, createStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LocationReducer from "./reducers/LocationReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "location"],
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  location: LocationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistedStore = persistStore(store);

export { store, persistedStore };
