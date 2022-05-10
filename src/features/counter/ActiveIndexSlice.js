/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const activeIndexSlice = createSlice({
  name: "index",
  initialState: {
    value: "",
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveIndex } = activeIndexSlice.actions;

export default activeIndexSlice.reducer;
