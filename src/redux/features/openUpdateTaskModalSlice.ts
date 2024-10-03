import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UpdateTaskModalState {
  active: boolean;
  id: string | null;
  name: string | null;
  status: string | null;
}

const initialState: UpdateTaskModalState = {
  active: false,
  id: null,
  name: null,
  status: null,
};

const openUpdateTaskModalReducer = createSlice({
  name: 'updateTaskModal',
  initialState,
  reducers: {
    active: (state, action: PayloadAction<{ id: string; name: string; status: string; }>) => {
      state.active = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.status = action.payload.status;
    },
    deactivate: (state) => {
      state.active = false;
      state.id = null;
      state.name = null;
      state.status = null;
    },
  },
});

export const { active, deactivate } = openUpdateTaskModalReducer.actions;

export default openUpdateTaskModalReducer.reducer;
