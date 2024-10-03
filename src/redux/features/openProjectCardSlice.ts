import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const openProjectCardReducer = createSlice({
  name: 'projectModal',
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


export const { active, deactivate } = openProjectCardReducer.actions;

export default openProjectCardReducer.reducer;
