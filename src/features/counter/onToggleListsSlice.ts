import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: true,
}

export const onToggleListsSlice = createSlice({
  name: 'isListOpen',
  initialState,
  reducers: {
    setIsListOpen: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setIsListOpen } = onToggleListsSlice.actions
export default onToggleListsSlice.reducer
