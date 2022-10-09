/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const SidebarVisibilitySlice = createSlice({
  name: "isSidebarOpen",
  initialState: {
    value: true,
  },
  reducers: {
    setSidebarVisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSidebarVisibility } = SidebarVisibilitySlice.actions;

export default SidebarVisibilitySlice.reducer;
