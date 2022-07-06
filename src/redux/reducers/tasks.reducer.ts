import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks_list: [],
  done_tasks_list: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
    editTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
    addDoneTask: (state, action) => {
      const { newList } = action.payload;
      state.done_tasks_list = newList;
    },
    deleteTask: (state, action) => {
      const { newList } = action.payload;
      state.tasks_list = newList;
    },
  },
});

export const { addTask, editTask, addDoneTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
