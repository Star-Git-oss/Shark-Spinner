import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import profileReducer from "../features/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  },
});

export default store;
