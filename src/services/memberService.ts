import apiClient from './apiService';

export const memberService = {
    createMember: async (memberData: { name: string, email: string }) => {
        const response = await apiClient.post('/members', memberData);
        return response.data;
    },
    getMembers: async () => {
        const response = await apiClient.get('/members');
        return response.data;
    },
    deleteMember: async (memberId: string) => {
        const response = await apiClient.delete(`/members/${memberId}`);
        return response.data;
    },
};
