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
    desactivate: (state) => {
      state.active = false;
    },
  },
});


export const { active, desactivate } = openProjectCardReducer.actions;

export default openProjectCardReducer.reducer;
