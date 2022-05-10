/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const showAddTaskSlice = createSlice({
  name: "showAddTask",
  initialState: {
    value: false,
  },
  reducers: {
    setShowAddTask: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShowAddTask } = showAddTaskSlice.actions;

export default showAddTaskSlice.reducer;
