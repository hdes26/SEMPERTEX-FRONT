import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const showMemberToAssignReducer = createSlice({
  name: 'sowMembersCard',
  initialState,
  reducers: {
    active: (state) => {
      state.active = !state.active;
    },
    deactivate: (state) => {
      state.active = false;
    },
  },
});


export const { active, deactivate } = showMemberToAssignReducer.actions;

export default showMemberToAssignReducer.reducer;
