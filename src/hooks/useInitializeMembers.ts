import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { memberService } from '@/services/memberService';
import { addMultipleMembers } from '@/redux/features/memberListSlice';

const useInitializeMembers = () => {
    const dispatch = useAppDispatch();
    const hasInitialized = useRef(false);

    const membersFromStore = useAppSelector((state) => state.memberListReducer.members);
    

    useEffect(() => {
        const initializeMembers = async () => {
            try {
                hasInitialized.current = true;
                const fetchedMembers = await memberService.getMembers();
                
                dispatch(addMultipleMembers(fetchedMembers));
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        if (membersFromStore.length === 0 && !hasInitialized.current) {
            initializeMembers();
        }
    }, [dispatch, membersFromStore.length]);
};

export default useInitializeMembers;
