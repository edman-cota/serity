/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const selectedTaskIdSlice = createSlice({
  name: "selectedTaskId",
  initialState: {
    value: "",
  },
  reducers: {
    setSelectedTaskId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedTaskId } = selectedTaskIdSlice.actions;

export default selectedTaskIdSlice.reducer;
