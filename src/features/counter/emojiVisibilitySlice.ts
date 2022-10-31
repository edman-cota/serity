import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VisibilityState {
  value: boolean
}

const initialState: VisibilityState = {
  value: false,
}

export const emojiVisibilitySlice = createSlice({
  name: 'isEmojiVisible',
  initialState,
  reducers: {
    setEmojiVisibility: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmojiVisibility } = emojiVisibilitySlice.actions

export default emojiVisibilitySlice.reducer
