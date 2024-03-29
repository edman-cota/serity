import { configureStore } from '@reduxjs/toolkit'

import activeIndexReducer from './features/counter/activeIndexSlice'
import emojiVisibilityReducer from './features/counter/emojiVisibilitySlice'
import sidebarVisibilityReducer from './features/counter/sidebarVisibilitySlice'
import selectedTaskIdReducer from './features/counter/selectedTaskIdSlice'
import showAddTaskReducer from './features/counter/showAddTaskSlice'
import taskReducer from './features/counter/taskSlice'
import showCompletedReducer from './features/counter/showCompletedSlice'
import orderByReducer from './features/counter/orderBySlice'
import emojiReducer from './features/counter/emojiSlice'
import workingProjectReducer from './features/counter/workingProjectSlice'
import taskActivityReducer from './features/counter/taskActivitySlice'
import expandedSliceReducer from './features/counter/expandedSlice'
import onToggleSliceReducer from '@features/counter/onToggleSlice'
import onToggleListsReducer from '@features/counter/onToggleListsSlice'
import onToggleTagsReducer from '@features/counter/onToggleTagsSlice'
import saveNavHistoryReducer from '@features/counter/saveNavHistorySlice'
import cardStyleReducer from '@features/counter/cardStyleSlice'

export const store = configureStore({
  reducer: {
    activeIndex: activeIndexReducer,
    isEmojiVisible: emojiVisibilityReducer,
    isSidebarOpen: sidebarVisibilityReducer,
    showAddTask: showAddTaskReducer,
    showCompleted: showCompletedReducer,
    selectedTaskId: selectedTaskIdReducer,
    task: taskReducer,
    orderBy: orderByReducer,
    emoji: emojiReducer,
    workingProject: workingProjectReducer,
    isTaskActivityVisible: taskActivityReducer,
    isExpanded: expandedSliceReducer,
    isOpen: onToggleSliceReducer,
    isListOpen: onToggleListsReducer,
    isTagOpen: onToggleTagsReducer,
    saveNavHistory: saveNavHistoryReducer,
    cardStyle: cardStyleReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
