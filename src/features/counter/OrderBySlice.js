/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const OrderBySlice = createSlice({
  name: "orderBy",
  initialState: {
    value: localStorage.getItem("order-by") || "custom",
  },
  reducers: {
    setOrderBy: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrderBy } = OrderBySlice.actions;

export default OrderBySlice.reducer;
