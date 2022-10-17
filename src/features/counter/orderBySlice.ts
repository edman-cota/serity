import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderByState {
  value: string;
}

const initialState: OrderByState = {
  value: "custom",
};

export const orderBySlice = createSlice({
  name: "orderBy",
  initialState,
  reducers: {
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setOrderBy } = orderBySlice.actions;

export default orderBySlice.reducer;
