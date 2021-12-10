import { createAsyncThunk } from "@reduxjs/toolkit";

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
