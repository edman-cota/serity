import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../models/task.model'

export interface Props {
  value: Partial<Task>
}

const initialState: Props = {
  value: {},
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task>) => {
      state.value = action.payload
    },
  },
})

export const { setTask } = taskSlice.actions

export default taskSlice.reducer
