import { TaskType } from '@/types/Task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
    tasks: TaskType[];
}

const initialState: TasksState = {
    tasks: [],
};

const openTaskCardReducer = createSlice({
    name: 'taskModal',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);
        },
        addMultipleTasks: (state, action: PayloadAction<TaskType[]>) => {            
            state.tasks.push(...action.payload)
        },
        removeAllTasks: (state) => {
            state.tasks = [];
        },
    },
});

export const { addTask, addMultipleTasks, removeAllTasks } = openTaskCardReducer.actions;

export default openTaskCardReducer.reducer;
