import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./client.slice";

const store = configureStore({
  reducer: clientsReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
