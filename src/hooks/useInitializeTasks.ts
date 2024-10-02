import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addMultipleTasks, removeAllTasks } from '@/redux/features/taskListSlice';
import { taskService } from "@/services/taskService";

const useInitializeTasks = (projectId: string) => {
    const tasksFromStore = useAppSelector((state) => state.taskListReducer.tasks);
    const dispatch = useAppDispatch();
    const hasInitialized = useRef(false);

    useEffect(() => {
        const initializeTasks = async () => {
            if (!hasInitialized.current) { 
                try {
                    hasInitialized.current = true;
                    dispatch(removeAllTasks());
                    const fetchedTasks = await taskService.getTasks(projectId);
                    dispatch(addMultipleTasks(fetchedTasks));
                } catch (error) {
                    console.error('Error fetching tasks:', error);
                }
            }
        };

        initializeTasks();
    }, [projectId]);

    return tasksFromStore;
};

export default useInitializeTasks;
