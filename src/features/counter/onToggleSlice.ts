import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: false,
}

export const onToggleSlice = createSlice({
  name: 'isOpen',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setIsOpen } = onToggleSlice.actions
export default onToggleSlice.reducer
