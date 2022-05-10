/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const EmojiSlice = createSlice({
  name: "emoji",
  initialState: {
    value: "📁",
  },
  reducers: {
    setEmoji: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmoji } = EmojiSlice.actions;

export default EmojiSlice.reducer;
