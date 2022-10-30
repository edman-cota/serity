import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TaskIdState {
  value: string
}

const initialState: TaskIdState = {
  value: '',
}

export const selectedTaskIdSlice = createSlice({
  name: 'selectedTaskId',
  initialState,
  reducers: {
    setSelectedTaskId: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedTaskId } = selectedTaskIdSlice.actions

export default selectedTaskIdSlice.reducer
