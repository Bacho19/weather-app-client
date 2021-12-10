import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./action";

const initialState = {
  isAuth: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
  },
});

export default authSlice.reducer;
