import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HistoryState {
  value: string
}

const initialState: HistoryState = {
  value: '',
}

export const saveNavHistorySlice = createSlice({
  name: 'saveNavHistory',
  initialState,
  reducers: {
    setNavHistory: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setNavHistory } = saveNavHistorySlice.actions

export default saveNavHistorySlice.reducer
