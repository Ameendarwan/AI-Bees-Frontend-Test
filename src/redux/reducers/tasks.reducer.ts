import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks_list: [],
  done_tasks_list: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { newList } = action.payload
      state.tasks_list = newList
    },
    updateTaskList: (state, action) => {
      const { updateTasks } = action.payload
      state.tasks_list = updateTasks
    },
    addDoneTask: (state, action) => {
      const { doneTasksList } = action.payload
      state.done_tasks_list = doneTasksList
    },
    deleteTask: (state, action) => {
      const { newList } = action.payload
      state.tasks_list = newList
    },
  },
})

export const { addTask, updateTaskList, addDoneTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
