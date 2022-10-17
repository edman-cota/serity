import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExpandedState {
  value: boolean;
}

const initialState: ExpandedState = {
  value: false,
};

export const expandedSlice = createSlice({
  name: "isExpanded",
  initialState,
  reducers: {
    setIsExpanded: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsExpanded } = expandedSlice.actions;
export default expandedSlice.reducer;
