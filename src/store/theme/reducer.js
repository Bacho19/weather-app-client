import { createSlice } from "@reduxjs/toolkit";

export const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const initialState = {
  theme: themes.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.theme === themes.LIGHT) {
        state.theme = themes.DARK;
      } else {
        state.theme = themes.LIGHT;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
