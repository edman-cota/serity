import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { ProjectBTO } from "../../types/project.model"

export interface Props {
  value: ProjectBTO
}

const initialState: Props = {
  value: {},
}

export const workingProjectSlice = createSlice({
  name: "workingProject",
  initialState,
  reducers: {
    setWorkingProject: (state, action: PayloadAction<ProjectBTO>) => {
      state.value = action.payload
    },
  },
})

export const { setWorkingProject } = workingProjectSlice.actions

export default workingProjectSlice.reducer
