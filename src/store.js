import { configureStore } from "@reduxjs/toolkit";

import activeIndexReducer from "./features/counter/ActiveIndexSlice";
import IsSidebarReducer from "./features/counter/SidebarVisibilitySlice";
import SelectedTaskIdReducer from "./features/counter/SelectedTaskIdSlice";
import showAddTaskReducer from "./features/counter/ShowAddTaskSlice";
import TaskReducer from "./features/counter/TaskSlice";
import showCompletedReducer from "./features/counter/ShowCompletedSlice";
import OrderByReducer from "./features/counter/OrderBySlice";
import EmojiReducer from "./features/counter/EmojiSlice";
import workingProjectReducer from "./features/counter/workingProjectSlice";
import taskActivityReducer from "./features/counter/taskActivitySlice";

export default configureStore({
  reducer: {
    activeIndex: activeIndexReducer,
    isSidebarOpen: IsSidebarReducer,
    showAddTask: showAddTaskReducer,
    showCompleted: showCompletedReducer,
    selectedTaskId: SelectedTaskIdReducer,
    task: TaskReducer,
    orderBy: OrderByReducer,
    emoji: EmojiReducer,
    workingProject: workingProjectReducer,
    isTaskActivityVisible: taskActivityReducer,
  },
});
