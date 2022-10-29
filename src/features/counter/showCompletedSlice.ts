import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ShowState {
  value: boolean
}

const initialState: ShowState = {
  value: false,
}

export const showCompletedSlice = createSlice({
  name: "showCompleted",
  initialState,
  reducers: {
    setShowCompleted: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setShowCompleted } = showCompletedSlice.actions

export default showCompletedSlice.reducer
