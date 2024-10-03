import { TaskType } from '@/types/Task';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  listType: '',
};

const openTaskCardReducer = createSlice({
  name: 'taskModal',
  initialState,
  reducers: {
    active: (state, action) => {
      state.active = true;
      state.listType = action.payload;
    },
    deactivate: (state) => {
      state.active = false;
      state.listType = '';
    },
  },
});


export const { active, deactivate } = openTaskCardReducer.actions;

export default openTaskCardReducer.reducer;
