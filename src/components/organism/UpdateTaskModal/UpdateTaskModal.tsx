import React, { useState } from 'react';
import './style.css';
import AssignMemberButton from '@/components/molecules/AssignMemberButton/AssignMemberButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { deactivate as deactivateUpdateTaskModal } from '@/redux/features/openUpdateTaskModalSlice';
import { deactivate as deactivateShowMembersToAssign } from '@/redux/features/showMembersToAssignSlice';
import useClickOutside from '@/hooks/useClickOutside';
import useFetchMembers from '@/hooks/useFetchMembers';
import useTaskAssignment from '@/hooks/useTaskAssignment';
import Textarea from '@/components/atoms/Textarea/Textarea';
import Label from '@/components/atoms/Label/Label';
import Button from '@/components/atoms/Button/Button';
import { taskService } from '@/services/taskService';

interface CreateTaskModalProps {
    taskId: string | null;
    name: string | null;
    status: string | null;
}

export const UpdateTaskModal = ({ taskId, name ,status }: CreateTaskModalProps) => {
    const [newName, setNewName] = useState(name || '');
    const [taskStatus, setTaskStatus] = useState(status || ''); 
    const taskStatuses = ['pendiente', 'en_progreso', 'completada'];
    const { members } = useFetchMembers();
    const showMemberToAssign = useAppSelector(state => state.showMembersToAssignReducer);
    const dispatch = useAppDispatch();
    const modalContentRef = useClickOutside(() => {
        dispatch(deactivateUpdateTaskModal());
        dispatch(deactivateShowMembersToAssign());
    });

    const { assignedMembers, assignMember, unassignMember } = useTaskAssignment(taskId);

    const updateTask = async (updatedTask: { name: string; status: string }) => {
        if (taskId) {
            try {
                await taskService.updateTask(taskId, updatedTask);
                window.location.reload();
            } catch (error) {
                console.error('Error al actualizar la tarea:', error);
            }
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewName(e.target.value);
        updateTask({ name: e.target.value, status: taskStatus });
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setTaskStatus(newStatus);
        updateTask({ name: newName, status: newStatus });
    };

    return (
        <div className="update-task-modal">
            <div className='update-task-modal-content' ref={modalContentRef}>
                <AssignMemberButton text='Asignar miembro' />

                {showMemberToAssign.active && (
                    <div className='member-list'>
                        <ul className='members'>
                            {members.map(member => {
                                const isAssigned = assignedMembers.includes(member.id);
                                return (
                                    <li key={member.id} className='member-item'>
                                        <span className='member-name'>{member.name}</span>
                                        <button
                                            className='assign-button'
                                            onClick={() => isAssigned ? unassignMember(member.id) : assignMember(member.id)}
                                        >
                                            {isAssigned ? 'Desasignar' : 'Asignar'}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                <div className='update-text'>
                    <Label text='Actualizar texto' />
                    <div className='update-text-content'>
                        <Textarea
                            placeholder='Nombre de la tarea'
                            text={newName}
                            onChange={handleNameChange}
                        />
                    </div>

                    <Button text='Aceptar' onClick={() => updateTask({ name: newName, status: taskStatus })} />
                </div>

                <div className='task-status'>
                    <select value={taskStatus} onChange={handleStatusChange}>
                        {taskStatuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default UpdateTaskModal;
