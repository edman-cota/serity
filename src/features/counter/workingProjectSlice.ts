/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  value: any[];
}

const initialState: Props = {
  value: [],
};

export const workingProjectSlice = createSlice({
  name: "workingProject",
  initialState,
  reducers: {
    setWorkingProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWorkingProject } = workingProjectSlice.actions;

export default workingProjectSlice.reducer;
