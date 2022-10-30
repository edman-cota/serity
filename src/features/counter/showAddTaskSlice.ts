import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AddTaskState {
  value: boolean
}

const initialState: AddTaskState = {
  value: false,
}

export const showAddTaskSlice = createSlice({
  name: 'showAddTask',
  initialState,
  reducers: {
    setShowAddTask: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setShowAddTask } = showAddTaskSlice.actions

export default showAddTaskSlice.reducer
