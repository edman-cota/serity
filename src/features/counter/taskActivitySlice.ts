import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ActivityState {
  value: boolean;
}

const initialState: ActivityState = {
  value: false,
};

export const taskActivitySlice = createSlice({
  name: "taskActivityVisibility",
  initialState,
  reducers: {
    setTaskActivityVisibility: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setTaskActivityVisibility } = taskActivitySlice.actions;

export default taskActivitySlice.reducer;
