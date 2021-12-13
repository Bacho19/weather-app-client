import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./action";

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
    checkUser(state, action) {
      state.isAuth = true;
      state.currentUser = {
        username: action.payload.username,
        email: action.payload.email,
      };
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
    [logoutUser.pending.type]: (state) => {
      state.loading = true;
    },
    [logoutUser.fulfilled.type]: (state) => {
      state.loading = false;
      state.currentUser = {};
      state.isAuth = false;
    },
    [logoutUser.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.loginError = payload;
    },
  },
});

export const { checkUser } = authSlice.actions;

export default authSlice.reducer;
