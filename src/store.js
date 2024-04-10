import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./feature/authSlice";

const store = configureStore({
  reducer: authReducer,
});

export default store;
