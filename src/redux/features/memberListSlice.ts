import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MemberType } from '@/types/Member';


interface MembersState {
    members: MemberType[];
}

const initialState: MembersState = {
    members: [],
};

const membersSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addMember: (state, action: PayloadAction<MemberType>) => {
            state.members.push(action.payload);
        },
        addMultipleMembers: (state, action: PayloadAction<MemberType[]>) => {
            state.members.push(...action.payload);
        },
        removeMember: (state, action: PayloadAction<number>) => {
            state.members = state.members.filter(member => member.id !== action.payload);
        },
    },
});

export const { addMember, addMultipleMembers, removeMember } = membersSlice.actions;

export default membersSlice.reducer;
