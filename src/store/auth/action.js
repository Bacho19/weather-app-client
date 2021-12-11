import { createAsyncThunk } from "@reduxjs/toolkit";
import md5 from "md5";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users"));
      if (existingUsers) {
        const newUsers = JSON.stringify([...existingUsers, newUser]);
        localStorage.setItem("users", newUsers);
      } else {
        localStorage.setItem("users", JSON.stringify([newUser]));
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users"));
      const user = existingUsers.find((x) => x.email === email);
      if (user) {
        if (md5(password) === user.password) {
          return user;
        }
      }
      return rejectWithValue("Invalid email or password");
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
