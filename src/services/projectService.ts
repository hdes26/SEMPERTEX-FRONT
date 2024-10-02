import apiClient from './apiService';

export const projectService = {
    createProject: async (projectData: { name: string }) => {
        const response = await apiClient.post('/project', projectData);
        return response.data;
    },
    getProjects: async () => {
        const response = await apiClient.get('/project');
        return response.data;
    },
    deleteProject: async (projectId: string) => {
        const response = await apiClient.delete(`/project/${projectId}`);
        return response.data;
    },
};
