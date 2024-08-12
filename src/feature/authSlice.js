import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  user: null,
  error: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setEmailVerified: (state, action) => {
      state.user.emailVerified = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = "";
    },

    clearUser: (state) => {
      state.authStatus = false,
      state.user = null,
      state.error = ""
    },
  },
});

// Helper function to save user data to browser storage
const saveUserToStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const {setAuthStatus, setUser, setError, clearError, clearUser, setEmailVerified, setUsername, setDisplayName} = authSlice.actions; //these methods will be used by components to set data and state in store

export default authSlice.reducer;
