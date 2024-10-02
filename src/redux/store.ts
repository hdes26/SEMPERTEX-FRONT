import { configureStore } from '@reduxjs/toolkit';
import openTaskCardReducer from './features/openTaskCardSlice';
import taskListReducer from './features/taskListSlice';



export const store = configureStore({
  reducer: {
    openTaskCardReducer,
    taskListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch