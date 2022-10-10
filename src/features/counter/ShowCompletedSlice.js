/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const showCompletedSlice = createSlice({
  name: "showCompleted",
  initialState: {
    value: false,
  },
  reducers: {
    setShowCompleted: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShowCompleted } = showCompletedSlice.actions;

export default showCompletedSlice.reducer;
