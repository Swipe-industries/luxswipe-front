import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isPasswordVisible: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    togglePasswordVisibility: (state) => {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
    clearForm: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmail, setPassword, togglePasswordVisibility, clearForm } = formSlice.actions;

export default formSlice.reducer;