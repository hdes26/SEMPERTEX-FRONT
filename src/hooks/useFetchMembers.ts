import { useEffect, useState } from 'react';
import { memberService } from '@/services/memberService';
import { MemberType } from '@/types/Member';

const useFetchMembers = () => {
    const [members, setMembers] = useState<MemberType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const fetchedMembers = await memberService.getMembers(); 
                setMembers(fetchedMembers);
            } catch (error) {
                console.error('Error al obtener los miembros:', error);
                setError('Error al obtener los miembros');
            }
        };

        fetchMembers();
    }, []);

    return { members, error };
};

export default useFetchMembers;
