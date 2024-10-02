import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addMultipleTasks } from '@/redux/features/taskListSlice';
import { TaskType } from '@/types/Task';

const useInitializeTasks = (initialTasks: TaskType[]) => {
    const tasksFromStore = useAppSelector((state) => state.taskListReducer.tasks);
    const dispatch = useAppDispatch();
    const hasDispatched = useRef(false);

    useEffect(() => {
        if (tasksFromStore.length === 0 && !hasDispatched.current) {
            dispatch(addMultipleTasks(initialTasks));
            hasDispatched.current = true;
        }
    }, [dispatch, tasksFromStore.length, initialTasks]);

    return tasksFromStore;
};

export default useInitializeTasks;
