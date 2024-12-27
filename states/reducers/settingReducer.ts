import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  isLoading: boolean;
  lang: "en";
}

const initialState: SettingsState = {
  isLoading: true,
  lang: "en",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setIsLoading } = settingsSlice.actions;

export default settingsSlice.reducer;
