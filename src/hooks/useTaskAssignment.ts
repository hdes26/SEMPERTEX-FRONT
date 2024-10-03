import { useEffect, useState } from 'react';
import { taskService } from '@/services/taskService';

const useTaskAssignment = (taskId: string | null) => {
    const [assignedMembers, setAssignedMembers] = useState<string[]>([]);

    useEffect(() => {
        const fetchAssignedMembers = async () => {
            if (taskId) {
                try {
                    const assigned = await taskService.membersAssigned(taskId);
                    setAssignedMembers(assigned.map((member: { member: { id: string } }) => member.member.id));
                } catch (error) {
                    console.error('Error fetching assigned members:', error);
                }
            }
        };

        fetchAssignedMembers();
    }, [taskId]);

    const assignMember = async (memberId: string) => {
        if (taskId) {
            try {
                await taskService.assignTask(taskId, memberId);
                setAssignedMembers((prev) => [...prev, memberId]);
            } catch (error) {
                console.error('Error assigning member:', error);
            }
        }
    };

    const unassignMember = async (memberId: string) => {
        if (taskId) {
            try {
                await taskService.unassignTask(taskId, memberId);
                setAssignedMembers((prev) => prev.filter((id) => id !== memberId));
            } catch (error) {
                console.error('Error unassigning member:', error);
            }
        }
    };

    return {
        assignedMembers,
        assignMember,
        unassignMember,
    };
};

export default useTaskAssignment;
