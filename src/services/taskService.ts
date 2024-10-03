import apiClient from './apiService';

export const taskService = {
    createTask: async (taskData: { name: string, deadline: Date, status: string, projectId: string }) => {
        const response = await apiClient.post('/task', taskData);
        return response.data;
    },
    getTasks: async (projectId: string) => {
        const response = await apiClient.get('/task', {
            params: { projectId },
        });
        return response.data;

    },
    updateTask: async (taskId: string, taskData: { name: string, status: string }) => {
        const response = await apiClient.patch(`/task/${taskId}`, taskData);
        return response.data;
    },
    deleteTask: async (taskId: string) => {
        const response = await apiClient.delete(`/task/${taskId}`);
        return response.data;
    },
    assignTask: async (taskId: string, memberId: string) => {
        const response = await apiClient.get(`/task/${taskId}/assign/${memberId}`);
        return response.data;
    },
    unassignTask: async (taskId: string, memberId: string) => {
        const response = await apiClient.delete(`/task/${taskId}/unassign/${memberId}`);
        return response.data;
    },

    membersAssigned: async (taskId: string) => {
        const response = await apiClient.get(`/task/${taskId}/assigned-members`);
        return response.data;
    },
};