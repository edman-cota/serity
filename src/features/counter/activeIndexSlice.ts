import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface IndexState {
  value: number
}

const initialState = {
  value: -1,
}

export const activeIndexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setActiveIndex } = activeIndexSlice.actions

export default activeIndexSlice.reducer
