import { createAsyncThunk } from "@reduxjs/toolkit";
import md5 from "md5";
import { v4 as uuidv4 } from "uuid";
import { setCookie } from "../../utils/cookies";

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
  async ({ email, password, checkedRemember }, { rejectWithValue }) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users"));
      const user = existingUsers.find((x) => x.email === email);
      if (user) {
        if (md5(password) === user.password) {
          const token = uuidv4();
          if (checkedRemember) {
            setCookie("authToken", `${user.username}?${token}`, 240);
            return user;
          }
          setCookie("authToken", `${user.username}?${token}`, 2);
          return user;
        }
      }
      return rejectWithValue("Invalid email or password");
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      document.cookie =
        "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
