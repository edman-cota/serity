/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const taskActivitySlice = createSlice({
  name: "taskActivityVisibility",
  initialState: {
    value: false,
  },
  reducers: {
    setTaskActivityVisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTaskActivityVisibility } = taskActivitySlice.actions;

export default taskActivitySlice.reducer;
