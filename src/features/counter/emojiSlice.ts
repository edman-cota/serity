import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface EmojiState {
  value: string
}

const initialState: EmojiState = {
  value: "📁",
}

export const emojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    setEmoji: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setEmoji } = emojiSlice.actions

export default emojiSlice.reducer
