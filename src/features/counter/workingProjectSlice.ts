import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WorkingProject } from '../../models/project.model'

export interface Props {
  value: WorkingProject
}

const initialState: Props = {
  value: {},
}

export const workingProjectSlice = createSlice({
  name: 'workingProject',
  initialState,
  reducers: {
    setWorkingProject: (state, action: PayloadAction<WorkingProject>) => {
      state.value = action.payload
    },
  },
})

export const { setWorkingProject } = workingProjectSlice.actions

export default workingProjectSlice.reducer
