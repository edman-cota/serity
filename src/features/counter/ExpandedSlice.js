/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const ExpandedSlice = createSlice({
  name: "isExpanded",
  initialState: {
    value: false,
  },
  reducers: {
    setIsExpanded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsExpanded } = ExpandedSlice.actions;
export default ExpandedSlice.reducer;
