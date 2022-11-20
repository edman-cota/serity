import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CardState {
  value: string
}

const initialState: CardState = {
  value: 'radio',
}

export const cardStyleSlice = createSlice({
  name: 'cardStyle',
  initialState,
  reducers: {
    setCardStyle: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setCardStyle } = cardStyleSlice.actions

export default cardStyleSlice.reducer
