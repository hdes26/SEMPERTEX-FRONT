import { configureStore } from '@reduxjs/toolkit';
import openTaskCardReducer from './features/openTaskCardSlice';
import taskListReducer from './features/taskListSlice';
import projectListReducer from './features/projectListSlice';
import openProjectCardReducer from './features/openProjectCardSlice';





export const store = configureStore({
  reducer: {
    openTaskCardReducer,
    taskListReducer,
    projectListReducer,
    openProjectCardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch