import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IndexState {
  value: string;
}

const initialState = {
  value: "",
};

export const activeIndexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveIndex } = activeIndexSlice.actions;

export default activeIndexSlice.reducer;
