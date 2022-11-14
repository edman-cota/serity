import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: true,
}

export const onToggleTagsSlice = createSlice({
  name: 'isTagOpen',
  initialState,
  reducers: {
    setIsTagOpen: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setIsTagOpen } = onToggleTagsSlice.actions
export default onToggleTagsSlice.reducer
