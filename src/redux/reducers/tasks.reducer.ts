import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks_list: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
    updateTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
    deleteTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
