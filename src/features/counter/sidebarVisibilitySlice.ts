import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VisibilityState {
  value: boolean;
}

const initialState: VisibilityState = {
  value: false,
};

export const sidebarVisibilitySlice = createSlice({
  name: "isSidebarOpen",
  initialState,
  reducers: {
    setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebarVisibility } = sidebarVisibilitySlice.actions;

export default sidebarVisibilitySlice.reducer;
