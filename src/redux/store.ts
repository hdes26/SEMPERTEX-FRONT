import { configureStore } from '@reduxjs/toolkit';
import openTaskCardReducer from './features/openTaskCardSlice';
import taskListReducer from './features/taskListSlice';
import projectListReducer from './features/projectListSlice';
import openProjectCardReducer from './features/openProjectCardSlice';
import memberListReducer from './features/memberListSlice';
import openMemberCardReducer from './features/openMemberCardSlice';
import openUpdateCardModalReducer from './features/openUpdateTaskModalSlice';
import showMembersToAssignReducer from './features/showMembersToAssignSlice';








export const store = configureStore({
  reducer: {
    openTaskCardReducer,
    taskListReducer,
    projectListReducer,
    openProjectCardReducer,
    memberListReducer,
    openMemberCardReducer,
    openUpdateCardModalReducer,
    showMembersToAssignReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch