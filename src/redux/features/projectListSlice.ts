import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectType } from '@/types/Project';


interface ProjectsState {
    projects: ProjectType[];
}

const initialState: ProjectsState = {
    projects: [],
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<ProjectType>) => {
            state.projects.push(action.payload);
        },
        addMultipleProjects: (state, action: PayloadAction<ProjectType[]>) => {
            state.projects.push(...action.payload);
        },
        removeProject: (state, action: PayloadAction<number>) => {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        },
    },
});

export const { addProject, addMultipleProjects, removeProject } = projectSlice.actions;

export default projectSlice.reducer;
