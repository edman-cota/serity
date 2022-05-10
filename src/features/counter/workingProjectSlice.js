/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const workingProjectSlice = createSlice({
  name: "workingProject",
  initialState: {
    value: [],
  },
  reducers: {
    setWorkingProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWorkingProject } = workingProjectSlice.actions;

export default workingProjectSlice.reducer;
