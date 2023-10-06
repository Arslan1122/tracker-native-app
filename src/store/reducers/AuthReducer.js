import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },

    addError: (state, action) => {
      state.errorMessage = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.errorMessage = "";
    },

    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
});

export const { setUser, logout, addError, clearErrorMessage } =
  authSlice.actions;
export default authSlice.reducer;
