import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./action";

const initialState = {
  isAuth: false,
  loading: false,
  currentUser: {},
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.isAuth = false;
      state.currentUser = {};
    },
  },
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled.type]: (state) => {
      state.loading = false;
    },
    [registerUser.rejected.type]: (state) => {
      state.loading = false;
    },
    [loginUser.pending.type]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled.type]: (state, { payload }) => {
      state.loginError = "";
      state.loading = false;
      state.currentUser = { username: payload.username, email: payload.email };
      state.isAuth = true;
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.loginError = payload;
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
