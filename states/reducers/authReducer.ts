import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  isLoagin: boolean;
  email: "string" | null;
  username: "string" | null;
}

const initialState: SettingsState = {
  isLoagin: true,
  email: null,
  username: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoagin = action.payload;
    },
    setLang: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setIsLogin } = settingsSlice.actions;

export default settingsSlice.reducer;
