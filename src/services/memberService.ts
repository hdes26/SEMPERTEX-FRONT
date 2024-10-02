import apiClient from './apiService';

export const memberService = {
    createMember: async (memberData: { name: string, email: string }) => {
        const response = await apiClient.post('/member', memberData);
        return response.data;
    },
    getMembers: async () => {
        const response = await apiClient.get('/member');
        return response.data;
    },
    deleteMember: async (memberId: string) => {
        const response = await apiClient.delete(`/member/${memberId}`);
        return response.data;
    },
};
