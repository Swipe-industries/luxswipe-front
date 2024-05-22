import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
  error: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = "";
    },
  },
});

export const {setStatus, setUser, setError, clearError} = authSlice.actions; //these methods will be used by components to set data and state in store

export default authSlice.reducer;
