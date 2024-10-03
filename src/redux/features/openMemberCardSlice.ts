import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const openMemberCardReducer = createSlice({
  name: 'memberModal',
  initialState,
  reducers: {
    active: (state) => {
      state.active = true;
    },
    deactivate: (state) => {
      state.active = false;
    },
  },
});


export const { active, deactivate } = openMemberCardReducer.actions;

export default openMemberCardReducer.reducer;
