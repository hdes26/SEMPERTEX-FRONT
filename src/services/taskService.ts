import apiClient from './apiService';

export const taskService = {
    createTask: async (taskData: { name: string, deadline: Date, status: string, projectId: string }) => {        
        const response = await apiClient.post('/task', taskData);
        return response.data;
    },
    getTasks: async (projectId: string) => {
        try {
            const response = await apiClient.get('/task', {
                params: { projectId },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    },
    deleteTask: async (taskId: string) => {
        const response = await apiClient.delete(`/task/${taskId}`);
        return response.data;
    },
};