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
    desactivate: (state) => {
      state.active = false;
    },
  },
});


export const { active, desactivate } = openMemberCardReducer.actions;

export default openMemberCardReducer.reducer;
