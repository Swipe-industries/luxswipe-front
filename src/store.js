import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./feature/authSlice";
import formReducer from "./feature/formSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});