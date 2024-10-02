import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addMultipleProjects } from '@/redux/features/projectListSlice';
import { projectService } from '@/services/projectService';

const useInitializeProjects = () => {
    const dispatch = useAppDispatch();
    const hasInitialized = useRef(false);

    const projectsFromStore = useAppSelector((state) => state.projectListReducer.projects);

    useEffect(() => {
        const initializeProjects = async () => {
            try {
                hasInitialized.current = true;

                const fetchedProjects = await projectService.getProjects();
                dispatch(addMultipleProjects(fetchedProjects));
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        if (projectsFromStore.length === 0 && !hasInitialized.current) {
            initializeProjects();
        }
    }, [dispatch, projectsFromStore.length]);
};

export default useInitializeProjects;
