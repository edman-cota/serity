import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskProps } from '../../types/task.model'

export interface Props {
  value: Partial<TaskProps>
}

const initialState: Props = {
  value: {},
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskProps>) => {
      state.value = action.payload
    },
  },
})

export const { setTask } = taskSlice.actions

export default taskSlice.reducer
